import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, deleteDoc, serverTimestamp, doc } from 'firebase/firestore';
import { db, auth } from '../components/firebase';
import './Comments.css'; // Import CSS

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

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

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteDoc(doc(db, 'comments', commentId));
      // Reload comments
      const q = query(collection(db, 'comments'), where('postId', '==', postId));
      const querySnapshot = await getDocs(q);
      const commentsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div className="comments-container">
      <h3>Bình luận</h3>
      {loading ? <div>Loading...</div> : (
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <p><strong>{comment.fullName}</strong> ({new Date(comment.createdAt.seconds * 1000).toLocaleString()}):</p>
              <p>{comment.content}</p>
              {auth.currentUser && auth.currentUser.uid === comment.userId && (
                <button onClick={() => handleDeleteComment(comment.id)} className="delete-comment-button">Xóa</button>
              )}
            </li>
          ))}
        </ul>
      )}
      <form onSubmit={handleAddComment} className="new-comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Viết bình luận của bạn..."
          required
        />
        <button type="submit">Gửi</button>
      </form>
    </div>
  );
};

export default Comments;