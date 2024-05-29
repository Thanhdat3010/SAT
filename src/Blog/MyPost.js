import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db, storage, auth } from '../components/firebase';
import { ref, deleteObject } from 'firebase/storage';
import './MyPost.css';
import EditPost from './EditPost'; // Import thành phần EditPost

const MyPost = () => {
  const [userPosts, setUserPosts] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState(null); // State cho bài viết đang chỉnh sửa

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
      if (!confirmDelete) {
        setConfirmDelete(true);
        setPostIdToDelete(postId);
      } else {
        // Xóa tất cả các comments và replies liên quan đến bài viết
        const commentsQuery = query(collection(db, 'comments'), where('postId', '==', postId));
        const commentsSnapshot = await getDocs(commentsQuery);

        const deletePromises = commentsSnapshot.docs.map(async (commentDoc) => {
          const commentId = commentDoc.id;

          // Xóa tất cả các phản hồi của bình luận
          const repliesQuery = query(collection(db, 'comments', commentId, 'replies'));
          const repliesSnapshot = await getDocs(repliesQuery);

          const deleteReplyPromises = repliesSnapshot.docs.map((replyDoc) =>
            deleteDoc(doc(db, 'comments', commentId, 'replies', replyDoc.id))
          );
          await Promise.all(deleteReplyPromises);

          // Xóa bình luận
          await deleteDoc(doc(db, 'comments', commentId));
        });

        await Promise.all(deletePromises);

        // Xóa bài viết
        await deleteDoc(doc(db, 'posts', postId));

        if (imageUrl) {
          const imageRef = ref(storage, imageUrl);
          await deleteObject(imageRef);
        }

        setUserPosts(userPosts.filter(post => post.id !== postId));
        setConfirmDelete(false);
        setPostIdToDelete(null);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleUpdatePost = async (updatedPost) => {
    try {
      const postDoc = doc(db, 'posts', updatedPost.id);
      await updateDoc(postDoc, updatedPost);
      setUserPosts(userPosts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
      setEditingPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
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
                <button onClick={() => handleEditPost(post)} className="edit-button">Sửa</button>
                <button onClick={() => handleDeletePost(post.id, post.imageUrl)} className="delete-button">Xóa</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {confirmDelete && (
        <div className="confirm-delete">
          <p>Bạn có chắc chắn muốn xóa bài viết này?</p>
          <div className="confirm-buttons">
            <button onClick={() => handleDeletePost(postIdToDelete)} className="confirm-delete-button">Xác nhận</button>
            <button onClick={() => setConfirmDelete(false)} className="cancel-delete-button">Hủy</button>
          </div>
        </div>
      )}
      {editingPost && (
        <EditPost post={editingPost} onUpdatePost={handleUpdatePost} onCancel={() => setEditingPost(null)} />
      )}
    </div>
  );
};

export default MyPost;