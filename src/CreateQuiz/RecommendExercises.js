import React, { useState, useEffect } from 'react';
import { db } from '../components/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './RecommendExercises.css';
import Notification from '../components/Notification';

const RecommendExercises = () => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
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
  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    fetchAnalysis();
  }, []);

  const fetchAnalysis = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem('user'))?.email || 'defaultUser';
      const userDocRef = doc(db, 'users', userId);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setAnalysis(userData.analysis || 'Chưa có phân tích nào.');
      }
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ Firestore:', error);
    }
  };

  const generateExercises = async () => {
    setLoading(true);
    
    const prompt = `
      Bạn là một hệ thống đề xuất bài tập hóa học và bạn đã nhận được kết quả đánh giá năng lực của học sinh như sau: ${analysis}. Dựa trên đánh giá này, bạn cần tạo ra các bài tập giúp học sinh cải thiện năng lực của mình
      Dưới đây là các bước bạn cần thực hiện
      1. Phân tích đánh giá:
      - Xác định các kỹ năng và chủ đề mà học sinh cần cải thiện dựa trên kết quả đánh giá (ví dụ: cân bằng phương trình hóa học, hiểu biết về bảng tuần hoàn, phản ứng hóa học, tính toán hóa học, v.v.).
      2. Chọn bài tập phù hợp:
      - Tìm các bài tập liên quan đến các chủ đề và kỹ năng mà học sinh cần cải thiện.
      - Đảm bảo rằng các bài tập có độ khó phù hợp với mức năng lực hiện tại của học sinh và có tính thử thách để giúp họ tiến bộ.
      3. Đề xuất bài tập:
      - Tạo danh sách các bài tập cụ thể cho học sinh, bao gồm mô tả ngắn gọn về mỗi bài tập và hướng dẫn làm bài.
      .Vui lòng trả về dưới dạng JSON với cấu trúc sau và không thêm những cái khác ngoài cấu trúc:
      
      [
        {
          type: "multiple-choice",
          "question": "Câu hỏi 1",
          "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
          "correctAnswer": "Đáp án đúng",
          "explain": "Giải thích cho đáp án đúng"
        },
        {
          type: "multiple-choice",
          "question": "Câu hỏi 2",
          "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"],
          "correctAnswer": "Đáp án đúng",
          "explain": "Giải thích cho đáp án đúng"
        }
      ]
    `;

    try {
      const genAI = new GoogleGenerativeAI("AIzaSyB3QUai2Ebio9MRYYtkR5H21hRlYFuHXKQ");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const cleanText = text.replace(/`/g, ''); // Thay thế tất cả các backtick
      const cleanText1 = cleanText.replace(/json/g, ''); // Thay thế tất cả các backtick
      
      console.log(cleanText1);
      const exercises = JSON.parse(cleanText1);
      const formattedExercises = exercises.map((ex, index) => ({
        type: ex.type,
        question: ex.question,
        options: ex.options,
        correctAnswer: ex.correctAnswer,
        explain: ex.explain,
        id: index
      }));

      setQuestions(formattedExercises);
      
      checkScore();
    } catch (error) {
      console.error('Lỗi khi tạo bài tập:', error);
    }

    setLoading(false);
  };

  const checkScore = () => {
    const score = (answerState.filter(Boolean).length / questions.length) * 100;
    setShowCongrats(score >= 80);
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
      checkScore();
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
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  if (quizCompleted) {
    return (
      <div className="recommend-exercises-page">
        <h2>Hoàn thành</h2>
        <div className="score-container">
          <p className="score-label">Điểm số của bạn:</p>
          <p className="score">{score}</p>
          <button onClick={resetQuiz} className="next-button">Làm lại</button>
        </div>
        {showCongrats ? (
          <p className="congrats">Chúc mừng! Bạn đã đạt trên 80%!</p>
        ) : (
          <p className="try-again">Bạn chưa đạt trên 80%. Hãy tiếp tục cố gắng!</p>
        )}
      </div>
    );
  }

  return (
    <div className="recommend-exercises-page">
      {questions.length === 0 ? (
        <>
          <h1 className="title">AI Đề Xuất Bài Tập Theo Năng Lực</h1>
          <button className="generate-btn" onClick={generateExercises} disabled={loading}>
            {loading ? 'Đang tạo bài tập...' : 'Tạo bài tập mới'}
          </button>
          {showCongrats && <p className="congrats">Chúc mừng! Bạn đã đạt trên 80%!</p>}
        </>
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
              {selectedOption !== null && (
                <>
                  <button onClick={toggleExplanation} className="explanation-button">Giải thích</button>
                  {showExplanation && (
                    <div className="explanation">
                      <p>Đáp án đúng: {questions[currentQuestion].correctAnswer.toString()}</p>
                      <p>Giải thích: {questions[currentQuestion].explain}</p>
                    </div>
                  )}
                </>
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

export default RecommendExercises;