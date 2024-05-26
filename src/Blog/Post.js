import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../components/firebase';
import Comments from './Comments';

const Post = ({ fullName }) => {
  let { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
        fetchAuthor(docSnap.data().userId); // Fetch author details
      } else {
        console.log('No such document!');
      }
    };

    const fetchAuthor = async (userId) => {
      const userRef = doc(db, 'profiles', userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setAuthor(userSnap.data());
      } else {
        console.log('No such user profile!');
      }
    };

    fetchPost();
  }, [id]);

  if (!post || !author) {
    return <div>Loading...</div>;
  }

  // Convert createdAt to a readable date string
  const createdAt = post.createdAt?.toDate().toLocaleString();

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        {author.profilePictureUrl && (
          <img src={author.profilePictureUrl} alt="Avatar" className="author-avatar" />
        )}
        Đăng bởi <strong>{post.fullName || fullName || 'Người dùng ẩn danh'}</strong> vào <time>{createdAt}</time>
      </div>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Comments postId={id} />
    </div>
  );
};

export default Post;