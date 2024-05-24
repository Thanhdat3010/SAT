import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './Blog.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../components/firebase';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const postsPerPage = 3; // Số lượng bài viết mỗi trang
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, 'posts');
      const snapshot = await getDocs(postsCollection);
      const postsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(postsData);
    };

    fetchPosts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear'
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset về trang đầu tiên khi tìm kiếm
  };

  // Lọc và phân trang bài viết
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Lọc bài viết nổi bật
  const featuredPosts = posts.filter(post => post.featured);

  return (
    <div className="blog-container">
      <div className="blog-carousel">
        <Slider {...settings}>
          {featuredPosts.map(post => (
            <div key={post.id} className="post-preview">
              <img src={post.imageUrl} alt={`Cover for ${post.title}`} />
              <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
              <p>{post.summary}</p>
            </div>
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
      <div className="Newpost">
        <button onClick={() => navigate('/new-post')}>Thêm bài viết</button>
      </div>
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
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;