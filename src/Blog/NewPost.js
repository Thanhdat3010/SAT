import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from '../components/firebase';
import { useNavigate } from 'react-router-dom';
import './NewPost.css';

const NewPost = ({ fullName }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          title,
          summary,
          content,
          imageUrl,
          email: user.email,
          fullName: user.displayName || 'Người dùng ẩn danh',
          createdAt: new Date(),
          featured: false,
        });

        console.log("Document written with ID: ", docRef.id);
        navigate('/Tainguyen');
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div className="newpost-container">
      <h2>New Post</h2>
      <form className="newpost-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default NewPost;