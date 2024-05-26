import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, deleteDoc, updateDoc, serverTimestamp, doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../components/firebase';
import './Comments.css';
import Notification from '../components/Notification';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingCommentContent, setEditingCommentContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [authors, setAuthors] = useState({});
  
  useEffect(() => {
    const fetchComments = async () => {
      const q = query(collection(db, 'comments'), where('postId', '==', postId));
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
      setLoading(false);
    };

    fetchComments();
  }, [postId]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const authorIds = [...new Set(comments.map(comment => comment.userId))];
      const authors = {};

      for (const authorId of authorIds) {
        const userRef = doc(db, 'profiles', authorId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          authors[authorId] = userSnap.data();
        } else {
          console.log('No such user profile for userId:', authorId);
        }
      }

      setAuthors(authors);
    };

    fetchAuthors();
  }, [comments]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (user) {
      try {
        await addDoc(collection(db, 'comments'), {
          postId,
          content: newComment,
          userId: user.uid,
          fullName: user.displayName || 'Người dùng ẩn danh',
          createdAt: serverTimestamp(),
        });
        setNewComment('');
        setShowNotification(true);
        setNotificationMessage('Bình luận đã được thêm thành công.');

        // Reload comments
        const q = query(collection(db, 'comments'), where('postId', '==', postId));
        const querySnapshot = await getDocs(q);
        const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setComments(commentsData);
      } catch (error) {
        console.error('Error adding comment:', error);
      }
    }
  };

  useEffect(() => {
    let timer;
    if (showNotification) {
      timer = setTimeout(() => {
        setShowNotification(false);
        setNotificationMessage('');
      }, 3000); // Thời gian hiển thị thông báo (3000ms = 3 giây)
    }
    return () => clearTimeout(timer);
  }, [showNotification]);

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteDoc(doc(db, 'comments', commentId));
      // Reload comments
      const q = query(collection(db, 'comments'), where('postId', '==', postId));
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotificationMessage('Bình luận đã được xóa thành công.');
      setShowNotification(true);
      setComments(commentsData);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleEditComment = (commentId, content) => {
    setEditingCommentId(commentId);
    setEditingCommentContent(content);
  };

  const handleSaveEdit = async (commentId) => {
    try {
      const commentRef = doc(db, 'comments', commentId);
      await updateDoc(commentRef, {
        content: editingCommentContent,
      });
      setEditingCommentId(null);
      setEditingCommentContent('');
      // Reload comments
      const q = query(collection(db, 'comments'), where('postId', '==', postId));
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
      setNotificationMessage('Bình luận đã được chỉnh sửa thành công.');
      setShowNotification(true);
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditingCommentContent('');
  };

  return (
    <div className="comments-container">
      <h3>Bình luận</h3>
      {loading ? <div>Loading...</div> : (
        <>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>
                <div className="comment-header">
                  {authors[comment.userId] && authors[comment.userId].profilePictureUrl && (
                    <img src={authors[comment.userId].profilePictureUrl} alt="Avatar" className="author-avatar" />
                  )}
                  <div className="comment-details">
                    <p className='comment-user'><strong>{comment.fullName}</strong> ({new Date(comment.createdAt.seconds * 1000).toLocaleString()}):</p>
                    {editingCommentId === comment.id ? (
                      <div>
                        <textarea
                          value={editingCommentContent}
                          onChange={(e) => setEditingCommentContent(e.target.value)}
                          required
                        />
                        <button className="edit-button" onClick={() => handleSaveEdit(comment.id)}>Lưu</button>
                        <button className="cancel-button" onClick={handleCancelEdit}>Hủy</button>
                      </div>
                    ) : (
                      <p className='comment-content'>{comment.content}</p>
                    )}
                    <div className='comment-icons'>
                  <button className="icon-button"><i className="fas fa-thumbs-up"></i></button>
                  <button className="icon-button"><i className="fas fa-thumbs-down"></i></button>
                  <button className="icon-button"><i className="fas fa-reply"></i></button>
                </div>
                    <div className="actions">
                      {auth.currentUser && auth.currentUser.uid === comment.userId && (
                        <div className="dropdown">
                          <button className="dropdown-toggle">⋮</button>
                          <div className="dropdown-content">
                            <button onClick={() => handleEditComment(comment.id, comment.content)} className="edit-comment-button">Chỉnh sửa</button>
                            <button onClick={() => handleDeleteComment(comment.id)} className="delete-comment-button">Xóa</button>
                          </div>
                        </div>
                      )}
                    </div>
                    
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <form onSubmit={handleAddComment} className="new-comment-form">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Viết bình luận của bạn..."
              required
            />
            <button type="submit">Gửi</button>
          </form>
        </>
      )}
      {showNotification && <Notification message={notificationMessage} />}
    </div>
  );
};

export default Comments;