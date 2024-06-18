import React, { useContext, useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db, auth } from '../components/firebase';
import BackgroundContext from '../components/BackgroundContext';
import "./Profile.css";

const UserProfile = ({ userId, onBack }) => {
  const { background, setBackground } = useContext(BackgroundContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [profilePictureUrl, setProfilePictureUrl] = useState('');
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [friendData, setFriendData] = useState({});
  const [requestData, setRequestData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const userDoc = doc(db, 'profiles', userId);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        setUsername(userData.username || '');
        setBio(userData.bio || '');
        setProfilePictureUrl(userData.profilePictureUrl || '');
        setBackground(userData.profilePictureUrl || '');
        setFriends(userData.friends || []);
        setFriendRequests(userData.friendRequestsReceived || []);
        await fetchFriendsData(userData.friends || []);
        await fetchRequestsData(userData.friendRequestsReceived || []);
      }
    };

    fetchUserData();
  }, [userId, setBackground]);

  const fetchFriendsData = async (friends) => {
    const friendsData = {};
    for (let friendId of friends) {
      const friendDoc = await getDoc(doc(db, 'profiles', friendId));
      if (friendDoc.exists()) {
        friendsData[friendId] = friendDoc.data();
      }
    }
    setFriendData(friendsData);
  };

  const fetchRequestsData = async (requests) => {
    const requestsData = {};
    for (let requestId of requests) {
      const requestDoc = await getDoc(doc(db, 'profiles', requestId));
      if (requestDoc.exists()) {
        requestsData[requestId] = requestDoc.data();
      }
    }
    setRequestData(requestsData);
  };

  const sendFriendRequest = async (userId) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const currentUserDoc = doc(db, 'profiles', currentUser.uid);
      const userDoc = doc(db, 'profiles', userId);
      await updateDoc(currentUserDoc, {
        friendRequestsSent: arrayUnion(userId),
      });
      await updateDoc(userDoc, {
        friendRequestsReceived: arrayUnion(currentUser.uid),
      });
    }
  };

  const acceptFriendRequest = async (userId) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      const currentUserDoc = doc(db, 'profiles', currentUser.uid);
      const userDoc = doc(db, 'profiles', userId);
      await updateDoc(currentUserDoc, {
        friends: arrayUnion(userId),
        friendRequestsReceived: arrayRemove(userId),
      });
      await updateDoc(userDoc, {
        friends: arrayUnion(currentUser.uid),
        friendRequestsSent: arrayRemove(currentUser.uid),
      });
      setFriends([...friends, userId]);
      setFriendRequests(friendRequests.filter(id => id !== userId));
      await fetchFriendsData([...friends, userId]);
      await fetchRequestsData(friendRequests.filter(id => id !== userId));
    }
  };

  return (
    <div className="profilePage">
      <div className="userProfileContainer">
      <label htmlFor="fileInput" className="fileInputLabel">
          <img src={background || profilePictureUrl} alt="Profile" />
        </label>
        <h2>Thông tin tài khoản</h2>
        <div>
          <label>Tên người dùng:</label>
          <input type="text" value={username} readOnly />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} readOnly />
        </div>
        <div>
          <label>Giới thiệu:</label>
          <textarea value={bio} readOnly />
        </div>
        <button onClick={onBack} className='backButton'>Quay lại</button>

      </div>

      <div className="sidebar">
        <h2>Danh sách bạn bè</h2>
        <div className="friendsList">
          {friends.map(friendId => (
            <div key={friendId} className="friendItem">
              <img src={friendData[friendId]?.profilePictureUrl} alt="Profile" />
              <p>{friendData[friendId]?.username}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;