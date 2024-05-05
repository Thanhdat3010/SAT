import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Post.css';

const Post = () => {
  let { id } = useParams();

  const posts = {
    '1': {
      title: "Tính chất hóa học của nước",
      content: "Nước, một hợp chất không thể thiếu trong cuộc sống, có nhiều tính chất hóa học đặc biệt mà bạn có thể chưa biết. Nó là một dung môi tuyệt vời và có khả năng phản ứng với rất nhiều chất khác.",
      published: "Ngày 24 tháng 4 năm 2023",
      author: "Hóa học Mỗi Ngày"
    },
    '2': {
      title: "Phản ứng oxi hóa - khử",
      content: "Phản ứng oxi hóa - khử là một trong những phản ứng hóa học cơ bản, đóng vai trò quan trọng trong nhiều quá trình sinh học và công nghiệp, giúp chuyển đổi năng lượng trong các tế bào.",
      published: "Ngày 25 tháng 4 năm 2023",
      author: "Phòng Thí Nghiệm 101"
    },
    '3': {
      title: "Cấu trúc phân tử của Benzene",
      content: "Benzene là một trong những hợp chất hữu cơ cơ bản và là nền tảng cho nhiều hợp chất khác trong hóa học tổng hợp, được sử dụng rộng rãi trong công nghiệp và sản xuất.",
      published: "Ngày 26 tháng 4 năm 2023",
      author: "Hóa học Thực Tiễn"
    }
  };

  const post = posts[id]; // Lấy bài viết dựa trên ID từ URL

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        Đăng bởi <strong>{post.author}</strong> vào <time>{post.published}</time>
      </div>
      <p className="post-content">{post.content}</p>
      <Link to="/Tainguyen" className="back-link">Quay về</Link>
    </div>
  );
};

export default Post;