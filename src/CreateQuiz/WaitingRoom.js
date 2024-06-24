import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db, auth } from '../components/firebase';
import { doc, updateDoc, arrayUnion, getDoc, query , collection , where, getDocs } from 'firebase/firestore';
import './WaitingRoom.css';

const WaitingRoom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { roomId, quizId } = location.state;
  const [roomDetails, setRoomDetails] = useState(null);
  const [friendEmail, setFriendEmail] = useState('');
  const [invitedFriends, setInvitedFriends] = useState([]);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      const roomRef = doc(db, 'rooms', roomId);
      const roomSnap = await getDoc(roomRef);
      if (roomSnap.exists()) {
        setRoomDetails(roomSnap.data());
      }
    };
    fetchRoomDetails();
  }, [roomId]);

  const inviteFriend = async () => {
    const user = auth.currentUser;
    if (user && friendEmail) {
      const friendsQuery = query(collection(db, 'profiles'), where('email', '==', friendEmail));
      const friendSnapshot = await getDocs(friendsQuery);
      if (!friendSnapshot.empty) {
        const friendDoc = friendSnapshot.docs[0];
        await updateDoc(doc(db, 'rooms', roomId), {
          invitedFriends: arrayUnion(friendDoc.id)
        });
        setInvitedFriends([...invitedFriends, friendDoc.data().username]);
      }
    }
  };

  const handleStartQuiz = () => {
    navigate(`/quiz-room/${roomId}`, { state: { quizId, roomId } });
  };

  return (
    <div className="waiting-room-page">
      <h2>Phòng chờ</h2>
      <p>Tên phòng: {roomDetails?.name}</p>
      <p>ID phòng: {roomId}</p>
      <p>ID quiz: {quizId}</p>
      <div className="invite-friend">
        <input
          type="email"
          placeholder="Nhập email bạn bè"
          value={friendEmail}
          onChange={(e) => setFriendEmail(e.target.value)}
        />
        <button onClick={inviteFriend}>Mời bạn</button>
      </div>
      <div className="invited-friends">
        <h3>Bạn bè đã mời:</h3>
        {invitedFriends.map((friend, index) => (
          <p key={index}>{friend}</p>
        ))}
      </div>
      <button onClick={handleStartQuiz}>Bắt đầu quiz</button>
    </div>
  );
};

export default WaitingRoom;