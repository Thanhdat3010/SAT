import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, deleteDoc, doc } from 'firebase/firestore';
import { db, storage, auth } from '../components/firebase'; // Giả sử bạn đã thiết lập auth trong firebase.js
import { ref, deleteObject } from 'firebase/storage';
import './MyPost.css'; // Import CSS cho MyPost

const MyPost = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false); // State cho xác nhận xóa
  const [postIdToDelete, setPostIdToDelete] = useState(null); // State lưu ID bài viết cần xóa
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const user = auth.currentUser;

      if (user) {
        const userPostsCollection = collection(db, 'posts');
        const q = query(userPostsCollection, where('userId', '==', user.uid));
        const snapshot = await getDocs(q);
        const userPostsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUserPosts(userPostsData);
        setLoading(false);
      } else {
        console.log('No user is logged in.');
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  const handleDeletePost = async (postId, imageUrl) => {
    try {
      // Xác nhận trước khi xóa bài viết
      if (!confirmDelete) {
        // Nếu chưa xác nhận, hiển thị cửa sổ xác nhận
        setConfirmDelete(true);
        setPostIdToDelete(postId);
      } else {
        // Nếu đã xác nhận, thực hiện xóa bài viết
        await deleteDoc(doc(db, 'posts', postId));

        // Xóa hình ảnh từ kho lưu trữ Firebase nếu có
        if (imageUrl) {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        }

        // Cập nhật danh sách bài viết của người dùng sau khi xóa
        setUserPosts(userPosts.filter(post => post.id !== postId));

        // Đặt lại trạng thái của xác nhận
        setConfirmDelete(false);
        setPostIdToDelete(null);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="blog-container">
      <h1>Bài viết của tôi</h1>
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div className="card-grid">
          {userPosts.map(post => (
            <div className="card" key={post.id}>
              <img src={post.imageUrl} alt={`Cover for ${post.title}`} />
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
              <div className="card-buttons">
                {/* Thêm hàm xóa bài viết khi nhấn nút */}
                <button onClick={() => handleDeletePost(post.id, post.imageUrl)} className="delete-button">Xóa</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Hiển thị cửa sổ xác nhận xóa bài viết */}
      {confirmDelete && (
        <div className="confirm-delete">
          <p>Bạn có chắc chắn muốn xóa bài viết này?</p>
          <div className="confirm-buttons">
            {/* Nút xác nhận */}
            <button onClick={() => handleDeletePost(postIdToDelete)} className="confirm-delete-button">Xác nhận</button>
            {/* Nút hủy */}
            <button onClick={() => setConfirmDelete(false)} className="cancel-delete-button">Hủy</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPost;