import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const posts = [
    {
      id: 1,
      title: "Tính chất hóa học của nước",
      summary: "Khám phá những tính chất hóa học thú vị của nước, một hợp chất không thể thiếu trong cuộc sống.",
      imageUrl: "https://xcdn-cf.vuihoc.vn/upload/5c209fe6176b0/2022/05/04/0d7b_tinh-chat-hoa-hoc-cua-nuoc.jpg"
    },
    {
      id: 2,
      title: "Phản ứng oxi hóa - khử",
      summary: "Phản ứng oxi hóa - khử đóng vai trò chính trong nhiều quá trình hóa học cơ bản và ứng dụng công nghiệp.",
      imageUrl: "https://thietbibeboi.info/wp-content/uploads/2021/10/chat-khu-la-gi.jpg"
    },
    {
      id: 3,
      title: "Cấu trúc phân tử của Benzene",
      summary: "Benzene là một hợp chất hữu cơ với cấu trúc và tính chất đặc biệt, là nền tảng cho nhiều hợp chất hóa học khác.",
      imageUrl: "https://vimi.com.vn/wp-content/uploads/2022/08/phan-tu-la-gi-vimi.com_.vn-3.jpg.jpg"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-container">
      <div className="blog-carousel">
        <Slider {...settings}>
          {posts.map(post => (
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
      
      <div className="card-grid">
        {filteredPosts.map(post => (
          <Link to={`/post/${post.id}`}>
          <div key={post.id} className="card">
            <img src={post.imageUrl} alt={`Cover for ${post.title}`} />
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;