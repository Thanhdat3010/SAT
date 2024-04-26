import React, { useContext, useState, useEffect } from 'react';
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
    const savedFullName = localStorage.getItem('fullName');
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    const savedBio = localStorage.getItem('bio');
    const savedProfilePictureUrl = localStorage.getItem('profilePictureUrl');

    if (savedFullName) {
      setFullName(savedFullName);
    }
    if (savedUsername) {
      setUsername(savedUsername);
    }
    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedBio) {
      setBio(savedBio);
    }
    if (savedProfilePictureUrl) {
      setProfilePictureUrl(savedProfilePictureUrl);
      setBackground(savedProfilePictureUrl); // Đặt background ngay sau khi lấy từ localStorage
    }
  }, []);

  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    const newBackgroundUrl = URL.createObjectURL(file);
    setBackground(newBackgroundUrl);
    localStorage.setItem('profilePictureUrl', newBackgroundUrl);
  };

  const handleFullNameChange = (e) => {
    const newFullName = e.target.value;
    setFullName(newFullName);
    localStorage.setItem('fullName', newFullName);
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem('email', newEmail);
  };

  const handleBioChange = (e) => {
    const newBio = e.target.value;
    setBio(newBio);
    localStorage.setItem('bio', newBio);
  };

  return (
    <div className="userProfileContainer">
      <label htmlFor="fileInput" className="fileInputLabel">
        <img src={background || profilePictureUrl} alt="background" />
        <input id="fileInput" type="file" onChange={handleBackgroundChange} className="fileInput" />
      </label>

      <h2>Thông tin tài khoản</h2>
      <div>
        <label>
          Họ và tên
          <input type="text" value={fullName} onChange={handleFullNameChange} />
        </label>
      </div>
      <div>
        <label>
          Tên người dùng
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <label>
          Giới thiệu
          <textarea value={bio} onChange={handleBioChange} />
        </label>
      </div>
    </div>
  );
};

export default Profile;