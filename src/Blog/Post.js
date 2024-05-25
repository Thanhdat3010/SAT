import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Post.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../components/firebase';
import BackgroundContext from '../components/BackgroundContext';
import Comments from './Comments';
const Post = ({ fullName }) => {
  let { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docRef = doc(db, 'posts', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // Convert createdAt to a readable date string
  const createdAt = post.createdAt?.toDate().toLocaleString();

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-meta">
        Đăng bởi <strong>{post.fullName || fullName || 'Người dùng ẩn danh'}</strong> vào <time>{createdAt}</time>
      </div>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Comments postId={id} /> {/* Sử dụng component Comments */}
    </div>
  );
};

export default Post;