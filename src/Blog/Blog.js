import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Blog.css';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../components/firebase';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const postsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const snapshot = await getDocs(postsCollection);
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
      // Kiểm tra nếu người dùng đã đăng nhập
      if (isLoggedIn) {
        // Sắp xếp các bài viết dựa trên số lượt thích
        const sortedPosts = postsData.sort((a, b) => b.likes - a.likes);
        
        // Lấy top 4 bài viết
        const topPosts = sortedPosts.slice(0, 4);
        
        // Đặt thuộc tính featured cho 4 bài viết top
        const batchUpdates = topPosts.map(async (post, index) => {
          const postRef = doc(db, 'posts', post.id);
          await updateDoc(postRef, {
            featured: true
          });
        });
  
        // Đặt thuộc tính featured cho các bài viết còn lại thành false
        const nonTopPosts = sortedPosts.slice(4);
        const resetNonTopPosts = nonTopPosts.map(async (post, index) => {
          const postRef = doc(db, 'posts', post.id);
          await updateDoc(postRef, {
            featured: false
          });
        });
  
        await Promise.all([...batchUpdates, ...resetNonTopPosts]);
      }
  
      setPosts(postsData);
    };
  
    fetchPosts();
  }, [isLoggedIn]); // Kích hoạt lại useEffect khi trạng thái đăng nhập thay đổi

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    prevArrow: <FaArrowLeft />,
    nextArrow: <FaArrowRight />,
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const generatePagination = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push('...');
      }
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="blog-container">
      <div className="blog-carousel">
        <Slider {...settings}>
          {posts
            .filter(post => post.featured)
            .map(post => (
              <Link className='card-link' to={`/post/${post.id}`} key={post.id}>
                <div className="post-preview">
                  <img src={post.imageUrl} alt={`Cover for ${post.title}`} />
                  <h2>{post.title}</h2>
                  <p>{post.summary}</p>
                </div>
              </Link>
            ))}
        </Slider>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      
      {isLoggedIn && (
        <div className="Newpost">
          <button onClick={() => navigate('/new-post')}>Thêm bài viết</button>
          <button onClick={() => navigate('/my-post')}>Bài viết của tôi</button>
        </div>
      )}
      <div className="card-grid">
        {currentPosts.map(post => (
          <Link to={`/post/${post.id}`} className="card-link" key={post.id}>
            <div className="card">
              <img src={post.imageUrl} alt={`Cover for ${post.title}`} />
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        {generatePagination().map((page, index) => (
          <button
            key={index}
            onClick={() => page !== '...' && paginate(page)}
            className={`page-number ${currentPage === page ? 'active' : ''}`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;