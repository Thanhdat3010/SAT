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
    // Khôi phục thông tin người dùng từ localStorage khi component được tải
    const user = JSON.parse(localStorage.getItem('user'));
    const userEmail = user ? user.email : null;

    if (userEmail) {
      const userData = JSON.parse(localStorage.getItem(userEmail + '_profileData'));
      if (userData) {
        setFullName(userData.fullName || '');
        setUsername(userData.username || '');
        setEmail(userEmail); // Email là khóa và chỉ đọc
        setBio(userData.bio || '');
        setProfilePictureUrl(userData.profilePictureUrl || '');
        setBackground(userData.profilePictureUrl || '');
      }
    }
  }, [setBackground]);

  // Lưu thông tin người dùng vào localStorage
  const saveUserData = (userData) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email) {
      localStorage.setItem(user.email + '_profileData', JSON.stringify(userData));
    }
  };

  // Chuyển đổi file thành base64 và cập nhật trạng thái và localStorage
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
            saveUserData({fullName: e.target.value, username, email, bio, profilePictureUrl});
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
            saveUserData({fullName, username: e.target.value, email, bio, profilePictureUrl});
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
            saveUserData({fullName, username, email, bio: e.target.value, profilePictureUrl});
          }}
        />
      </div>
    </div>
  );
};

export default Profile;