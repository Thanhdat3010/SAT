import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Tính chất hóa học của nước",
      summary: "Khám phá những tính chất hóa học thú vị của nước, một hợp chất không thể thiếu trong cuộc sống.",
      imageUrl: "https://picsum.photos/800/400?image=1050" // Sử dụng hình ảnh mẫu, thay thế bằng hình ảnh phù hợp nếu có
    },
    {
      id: 2,
      title: "Phản ứng oxi hóa - khử",
      summary: "Phản ứng oxi hóa - khử đóng vai trò chính trong nhiều quá trình hóa học cơ bản và ứng dụng công nghiệp.",
      imageUrl: "https://picsum.photos/800/400?image=1060" 
    },
    {
      id: 3,
      title: "Cấu trúc phân tử của Benzene",
      summary: "Benzene là một hợp chất hữu cơ với cấu trúc và tính chất đặc biệt, là nền tảng cho nhiều hợp chất hóa học khác.",
      imageUrl: "https://picsum.photos/800/400?image=1070"
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

  return (
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
  );
};

export default Blog;