import React, { useContext, useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import {db,auth} from '../components/firebase'; // Import Firebase Firestore instance
import BackgroundContext from '../components/BackgroundContext';
import "./Profile.css";

const Profile = () => {
  const { background, setBackground } = useContext(BackgroundContext);
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      // Check if user is logged in
      const user = auth.currentUser;
      if (user) {
        setEmail(user.email);

        // Fetch user data from Firestore
        const userDoc = doc(db, 'profiles', user.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setFullName(userData.fullName || '');
          setUsername(userData.username || '');
          setBio(userData.bio || '');
          setProfilePictureUrl(userData.profilePictureUrl || '');
          setBackground(userData.profilePictureUrl || '');
        }
      }
    };

    fetchUserData();
  }, [setBackground]);

  // Save user data to Firestore
  const saveUserData = async (userData) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const userDoc = doc(db, 'profiles', user.uid);
        await setDoc(userDoc, userData);
      }
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  // Convert file to base64 and update state and Firestore
  const convertToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Url = reader.result;
      setProfilePictureUrl(base64Url);
      setBackground(base64Url);
      saveUserData({
        fullName,
        username,
        email,
        bio,
        profilePictureUrl: base64Url
      });
    };
    reader.onerror = (error) => console.error('Error: ', error);
  };

  return (
    <div className="userProfileContainer">
      <label htmlFor="fileInput" className="fileInputLabel">
        <img src={background || profilePictureUrl} alt="Profile" />
        <input
          id="fileInput"
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            convertToBase64(file);
          }}
          className="fileInput"
        />
      </label>

      <h2>Thông tin tài khoản</h2>
      <div>
        <label>Họ và tên:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            saveUserData({ fullName: e.target.value, username, email, bio, profilePictureUrl });
          }}
        />
      </div>
      <div>
        <label>Tên người dùng:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            saveUserData({ fullName, username: e.target.value, email, bio, profilePictureUrl });
          }}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          readOnly
        />
      </div>
      <div>
        <label>Giới thiệu:</label>
        <textarea
          value={bio}
          onChange={(e) => {
            setBio(e.target.value);
            saveUserData({ fullName, username, email, bio: e.target.value, profilePictureUrl });
          }}
        />
      </div>
    </div>
  );
};

export default Profile;