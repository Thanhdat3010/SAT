import React, { useState, useEffect } from 'react';
import { db, auth } from '../components/firebase';
import { doc, setDoc, getDoc, collection, addDoc, updateDoc, arrayUnion, getDocs } from 'firebase/firestore';
import Notification from '../components/Notification';
import './RoomManagement.css';

const RoomManagement = () => {
  const [roomId, setRoomId] = useState('');
  const [roomName, setRoomName] = useState('');
  const [roomCreated, setRoomCreated] = useState(false);
  const [room, setRoom] = useState(null);
  const [joinError, setJoinError] = useState('');
  const [quizzes, setQuizzes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerState, setAnswerState] = useState([]);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [currentView, setCurrentView] = useState('roomManagement'); // 'roomManagement' or 'quiz'

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'createdQuizzes'));
        const quizData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setQuizzes(quizData);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  const createRoom = async () => {
    if (roomName.trim() === '') {
      alert('Tên phòng không được để trống');
      return;
    }
    try {
      const currentUser = getCurrentUser();
      const roomRef = await addDoc(collection(db, 'rooms'), {
        roomName,
        ownerId: currentUser.uid,
        createdAt: new Date(),
        players: [currentUser.uid],
        isStarted: false,
        scores: {}
      });
      setRoomId(roomRef.id);
      setRoomCreated(true);
      setRoom({ roomName, ownerId: currentUser.uid, players: [currentUser.uid] });
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  const joinRoom = async () => {
    if (roomId.trim() === '') {
      alert('Mã phòng không được để trống');
      return;
    }
    try {
      const currentUser = getCurrentUser();
      const roomDoc = await getDoc(doc(db, 'rooms', roomId));
      if (!roomDoc.exists()) {
        setJoinError('Phòng không tồn tại');
        return;
      }
      const roomData = roomDoc.data();
      if (roomData.players.includes(currentUser.uid)) {
        setRoom(roomData);
      } else {
        await updateDoc(doc(db, 'rooms', roomId), {
          players: arrayUnion(currentUser.uid)
        });
        setRoom({ ...roomData, players: [...roomData.players, currentUser.uid] });
      }
      setJoinError('');
    } catch (error) {
      console.error('Error joining room:', error);
      setJoinError('Có lỗi xảy ra khi tham gia phòng');
    }
  };

  const startQuiz = (quiz) => {
    setQuestions(quiz.questions);
    setCurrentQuestion(0);
    setAnswerState(Array(quiz.questions.length).fill(null));
    setScore(0);
    setProgress(0);
    setQuizCompleted(false);
    setCurrentView('quiz');
  };

  const handleOptionClick = (selectedAnswer) => {
    if (selectedOption === null) {
      setSelectedOption(selectedAnswer);
      const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
      const newAnswerState = [...answerState];
      newAnswerState[currentQuestion] = isCorrect;
      setAnswerState(newAnswerState);

      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
      }
    }
  };

  const handleTrueFalseClick = (selectedAnswer) => {
    if (selectedOption === null) {
      setSelectedOption(selectedAnswer);
      const isCorrect = selectedAnswer === (questions[currentQuestion].correctAnswer === "true");
      const newAnswerState = [...answerState];
      newAnswerState[currentQuestion] = isCorrect;
      setAnswerState(newAnswerState);

      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
      }
    }
  };

  const handleFillInTheBlankSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === null) {
      const userAnswer = event.target.elements[0].value.trim().toLowerCase();
      setSelectedOption(userAnswer);
      const isCorrect = userAnswer === questions[currentQuestion].correctAnswer.toLowerCase();
      const newAnswerState = [...answerState];
      newAnswerState[currentQuestion] = isCorrect;
      setAnswerState(newAnswerState);

      if (isCorrect) {
        setScore(prevScore => prevScore + 1);
      }
      event.target.elements[0].classList.toggle('correct-answer', isCorrect);
      event.target.elements[0].classList.toggle('incorrect-answer', !isCorrect);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const submitButton = document.getElementById('submit-button');
      submitButton.click();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const nextQuestion = () => {
    if (selectedOption === null) {
      setNotificationMessage("Bạn cần chọn đáp án trước khi tiếp tục.");
      setShowNotification(true);
      return;
    }

    setSelectedOption(null);

    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) {
      setCurrentQuestion(nextQ);
      const newProgress = (nextQ / questions.length) * 100;
      setProgress(newProgress);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswerState([]);
    setScore(0);
    setProgress(0);
    setQuizCompleted(false);
    setCurrentView('roomManagement');
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  const getCurrentUser = () => {
    const user = auth.currentUser;
    if (user) {
      return user;
    } else {
      console.error('No user found');
      return null;
    }
  };

  if (currentView === 'quiz') {
    if (quizCompleted) {
      return (
        <div className="custom-quiz-page">
          <h2>Hoàn thành</h2>
          <div className="score-container">
            <p className="score-label">Điểm số của bạn:</p>
            <p className="score">{score}</p>
            <button onClick={resetQuiz} className="next-button">Làm lại</button>
          </div>
        </div>
      );
    }

    return (
      <div className="questions-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        {currentQuestion < questions.length && (
          <div className="question">
            <p>{currentQuestion + 1}. {questions[currentQuestion].question}</p>
            {questions[currentQuestion].type === "multiple-choice" && (
              <ul>
                {questions[currentQuestion].options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={
                      selectedOption !== null &&
                      answerState[currentQuestion] !== null &&
                      option === questions[currentQuestion].correctAnswer
                        ? "correct"
                        : selectedOption !== null &&
                          answerState[currentQuestion] !== null &&
                          selectedOption === option &&
                          option !== questions[currentQuestion].correctAnswer
                        ? "incorrect"
                        : ""
                    }
                  >
                    ({String.fromCharCode(65 + index)}) {(option)}
                    {selectedOption === option && answerState[currentQuestion] !== null && option === questions[currentQuestion].correctAnswer ? <span className="correct-mark">&#10003;</span> : ''}
                    {selectedOption === option && answerState[currentQuestion] !== null && option !== questions[currentQuestion].correctAnswer ? <span className="incorrect-mark">&#10007;</span> : ''}
                  </li>
                ))}
              </ul>
            )}
            {questions[currentQuestion].type === "true-false" && (
              <ul>
                <li
                  onClick={() => handleTrueFalseClick(true)}
                  className={
                    selectedOption !== null &&
                    answerState[currentQuestion] !== null &&
                    true === (questions[currentQuestion].correctAnswer === "true")
                      ? "correct"
                      : selectedOption !== null &&
                        answerState[currentQuestion] !== null &&
                        selectedOption === true &&
                        true !== (questions[currentQuestion].correctAnswer === "true")
                      ? "incorrect"
                      : ""
                  }
                >
                  (A) True
                  {selectedOption === true && answerState[currentQuestion] !== null && true === (questions[currentQuestion].correctAnswer === "true") ? <span className="correct-mark">&#10003;</span> : ''}
                  {selectedOption === true && answerState[currentQuestion] !== null && true !== (questions[currentQuestion].correctAnswer === "true") ? <span className="incorrect-mark">&#10007;</span> : ''}
                </li>
                <li
                  onClick={() => handleTrueFalseClick(false)}
                  className={
                    selectedOption !== null &&
                    answerState[currentQuestion] !== null &&
                    false === (questions[currentQuestion].correctAnswer === "true")
                      ? "correct"
                      : selectedOption !== null &&
                        answerState[currentQuestion] !== null &&
                        selectedOption === false &&
                        false !== (questions[currentQuestion].correctAnswer === "true")
                      ? "incorrect"
                      : ""
                  }
                >
                  (B) False
                  {selectedOption === false && answerState[currentQuestion] !== null && false === (questions[currentQuestion].correctAnswer === "true") ? <span className="correct-mark">&#10003;</span> : ''}
                  {selectedOption === false && answerState[currentQuestion] !== null && false !== (questions[currentQuestion].correctAnswer === "true") ? <span className="incorrect-mark">&#10007;</span> : ''}
                </li>
              </ul>
            )}
            {questions[currentQuestion].type === "fill-in-the-blank" && (
              <form onSubmit={handleFillInTheBlankSubmit} className="fill-in-the-blank-form">
                <input
                  type="text"
                  className="fill-in-the-blank-input"
                  placeholder="Nhập câu trả lời..."
                />
                <button type="submit" id="submit-button" className="submit-button">Submit</button>
              </form>
            )}
          </div>
        )}
        {currentQuestion < questions.length && (
          <button onClick={nextQuestion} className="next-button">Câu hỏi tiếp theo</button>
        )}
        {showNotification && (
          <Notification
            message={notificationMessage}
            onClose={() => setShowNotification(false)}
          />
        )}
      </div>
    );
  }

  return (
    <div className="room-management-page">
      <h2>Quản lý phòng chơi</h2>
      {!roomCreated ? (
        <div>
          <h3>Tạo phòng mới</h3>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            placeholder="Nhập tên phòng"
          />
          <button onClick={createRoom}>Tạo phòng</button>
        </div>
      ) : (
        <div>
          <p>Phòng của bạn đã được tạo với mã: <strong>{roomId}</strong></p>
          <p>Chia sẻ mã này với bạn bè để mời họ vào phòng</p>
        </div>
      )}
      <div>
        <h3>Tham gia phòng</h3>
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Nhập mã phòng"
        />
        <button onClick={joinRoom}>Tham gia</button>
        {joinError && <p className="error">{joinError}</p>}
      </div>
      {room && (
        <div>
          <h3>Bạn đã tham gia phòng: {room.roomName}</h3>
          <p>Danh sách người chơi:</p>
          <ul>
            {room.players.map((player, index) => (
              <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      )}
      <h2>Bộ câu hỏi của bạn</h2>
      {questions.length === 0 ? (
        <div className="quiz-list">
          {quizzes.map((quiz, index) => (
            <div key={index} className="quiz-item">
              <h3>{quiz.title}</h3>
              <button onClick={() => startQuiz(quiz)} className='start-button'>Bắt đầu</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="questions-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          {currentQuestion < questions.length && (
            <div className="question">
              <p>{currentQuestion + 1}. {questions[currentQuestion].question}</p>
              {questions[currentQuestion].type === "multiple-choice" && (
                <ul>
                  {questions[currentQuestion].options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className={
                        selectedOption !== null &&
                        answerState[currentQuestion] !== null &&
                        option === questions[currentQuestion].correctAnswer
                          ? "correct"
                          : selectedOption !== null &&
                            answerState[currentQuestion] !== null &&
                            selectedOption === option &&
                            option !== questions[currentQuestion].correctAnswer
                          ? "incorrect"
                          : ""
                      }
                    >
                      ({String.fromCharCode(65 + index)}) {(option)}
                      {selectedOption === option && answerState[currentQuestion] !== null && option === questions[currentQuestion].correctAnswer ? <span className="correct-mark">&#10003;</span> : ''}
                      {selectedOption === option && answerState[currentQuestion] !== null && option !== questions[currentQuestion].correctAnswer ? <span className="incorrect-mark">&#10007;</span> : ''}
                    </li>
                  ))}
                </ul>
              )}
              {questions[currentQuestion].type === "true-false" && (
                <ul>
                  <li
                    onClick={() => handleTrueFalseClick(true)}
                    className={
                      selectedOption !== null &&
                      answerState[currentQuestion] !== null &&
                      true === (questions[currentQuestion].correctAnswer === "true")
                        ? "correct"
                        : selectedOption !== null &&
                          answerState[currentQuestion] !== null &&
                          selectedOption === true &&
                          true !== (questions[currentQuestion].correctAnswer === "true")
                        ? "incorrect"
                        : ""
                    }
                  >
                    (A) True
                    {selectedOption === true && answerState[currentQuestion] !== null && true === (questions[currentQuestion].correctAnswer === "true") ? <span className="correct-mark">&#10003;</span> : ''}
                    {selectedOption === true && answerState[currentQuestion] !== null && true !== (questions[currentQuestion].correctAnswer === "true") ? <span className="incorrect-mark">&#10007;</span> : ''}
                  </li>
                  <li
                    onClick={() => handleTrueFalseClick(false)}
                    className={
                      selectedOption !== null &&
                      answerState[currentQuestion] !== null &&
                      false === (questions[currentQuestion].correctAnswer === "true")
                        ? "correct"
                        : selectedOption !== null &&
                          answerState[currentQuestion] !== null &&
                          selectedOption === false &&
                          false !== (questions[currentQuestion].correctAnswer === "true")
                        ? "incorrect"
                        : ""
                    }
                  >
                    (B) False
                    {selectedOption === false && answerState[currentQuestion] !== null && false === (questions[currentQuestion].correctAnswer === "true") ? <span className="correct-mark">&#10003;</span> : ''}
                    {selectedOption === false && answerState[currentQuestion] !== null && false !== (questions[currentQuestion].correctAnswer === "true") ? <span className="incorrect-mark">&#10007;</span> : ''}
                  </li>
                </ul>
              )}
              {questions[currentQuestion].type === "fill-in-the-blank" && (
                <form onSubmit={handleFillInTheBlankSubmit} className="fill-in-the-blank-form">
                  <input
                    type="text"
                    className="fill-in-the-blank-input"
                    placeholder="Nhập câu trả lời..."
                  />
                  <button type="submit" id="submit-button" className="submit-button">Submit</button>
                </form>
              )}
            </div>
          )}
          {currentQuestion < questions.length && (
            <button onClick={nextQuestion} className="next-button">Câu hỏi tiếp theo</button>
          )}
          {showNotification && (
            <Notification
              message={notificationMessage}
              onClose={() => setShowNotification(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default RoomManagement;
