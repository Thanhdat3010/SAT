import React, { useState } from 'react';
import './CreateQuiz.css';
import { db, auth } from '../components/firebase';
import { doc, setDoc } from 'firebase/firestore';

const CreateQuiz = () => {
  const initialQuestionState = {
    type: 'multiple-choice',
    question: '',
    correctAnswer: '',
    explain: '',
    options: ['', '', '', ''],
  };

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({ ...initialQuestionState });
  const [quizTitle, setQuizTitle] = useState('');

  const handleAddQuestion = () => {
    if (currentQuestion.question.trim() === '') {
      alert('Vui lòng nhập câu hỏi.');
      return;
    }

    if (currentQuestion.type === 'multiple-choice' && currentQuestion.options.some(option => option.trim() === '')) {
      alert('Vui lòng điền đầy đủ các lựa chọn cho câu hỏi.');
      return;
    }

    if (currentQuestion.type === 'fill-in-the-blank' && currentQuestion.correctAnswer.trim() === '') {
      alert('Vui lòng nhập đáp án cho câu hỏi điền từ.');
      return;
    }

    const newQuestion = {
      type: currentQuestion.type,
      question: currentQuestion.question.trim(),
      correctAnswer: currentQuestion.correctAnswer.trim(),
      explain: currentQuestion.explain.trim(),
    };

    if (currentQuestion.type === 'multiple-choice') {
      newQuestion.options = currentQuestion.options.map(option => option.trim());
    }

    setQuestions(prevQuestions => [...prevQuestions, newQuestion]);
    setCurrentQuestion({ ...initialQuestionState });
  };

  const handleSaveQuiz = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;

    if (!user) {
      alert('Bạn cần đăng nhập để lưu bộ câu hỏi.');
      return;
    }

    if (quizTitle.trim() === '') {
      alert('Vui lòng nhập tiêu đề cho bộ câu hỏi.');
      return;
    }

    if (questions.length === 0) {
      alert('Bạn phải thêm ít nhất một câu hỏi để lưu.');
      return;
    }

    try {
      const userId = user.uid; // Get the user ID
      const docRef = doc(db, 'createdQuizzes', `${quizTitle}-${userId}`); // Use a unique document name
      await setDoc(docRef, { userId, title: quizTitle, questions });
      alert('Bộ câu hỏi đã được lưu thành công.');
      setQuizTitle('');
      setQuestions([]);
    } catch (error) {
      console.error('Error saving quiz:', error);
      alert('Đã xảy ra lỗi khi lưu bộ câu hỏi.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion(prevQuestion => ({
      ...prevQuestion,
      [name]: value,
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion(prevQuestion => ({
      ...prevQuestion,
      options: newOptions,
    }));
  };

  return (
    <div className="create-quiz-page">
      <h1 className="title">Tạo Bộ Câu Hỏi</h1>
      <div className="quiz-title-form">
        <label htmlFor="quizTitle">Tiêu đề bộ câu hỏi:</label>
        <input
          id="quizTitle"
          name="quizTitle"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          placeholder="Nhập tiêu đề bộ câu hỏi..."
        />
      </div>
      <div className="question-form">
        <label htmlFor="questionType">Loại câu hỏi:</label>
        <select
          id="questionType"
          name="type"
          value={currentQuestion.type}
          onChange={handleInputChange}
        >
          <option value="multiple-choice">Trắc nghiệm</option>
          <option value="true-false">Đúng/Sai</option>
          <option value="fill-in-the-blank">Điền từ</option>
        </select>
        <label htmlFor="question">Câu hỏi:</label>
        <textarea
          id="question"
          name="question"
          value={currentQuestion.question}
          onChange={handleInputChange}
          rows={3}
          placeholder="Nhập câu hỏi của bạn..."
        />
        {currentQuestion.type === 'multiple-choice' && (
          <>
            <label>Các lựa chọn:</label>
            {[0, 1, 2, 3].map(index => (
              <input
                key={index}
                type="text"
                value={currentQuestion.options[index]}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Lựa chọn ${String.fromCharCode(65 + index)}`}
              />
            ))}
            <label>Đáp án đúng:</label>
            <input
              type="text"
              name="correctAnswer"
              value={currentQuestion.correctAnswer}
              onChange={handleInputChange}
              placeholder="Nhập đáp án đúng..."
            />
          </>
        )}
        {currentQuestion.type === 'true-false' && (
          <div>
            <label>Đáp án đúng:</label>
            <select
              name="correctAnswer"
              value={currentQuestion.correctAnswer}
              onChange={handleInputChange}
            >
              <option value="">-- Chọn đáp án --</option>
              <option value="true">Đúng</option>
              <option value="false">Sai</option>
            </select>
          </div>
        )}
        {currentQuestion.type === 'fill-in-the-blank' && (
          <>
            <label>Đáp án đúng:</label>
            <input
              type="text"
              name="correctAnswer"
              value={currentQuestion.correctAnswer}
              onChange={handleInputChange}
              placeholder="Nhập đáp án đúng..."
            />
          </>
        )}
        <label>Giải thích (tùy chọn):</label>
        <textarea
          name="explain"
          value={currentQuestion.explain}
          onChange={handleInputChange}
          rows={3}
          placeholder="Nhập giải thích cho câu trả lời đúng của bạn..."
        />
        <button className="add-question-btn" onClick={handleAddQuestion}>Thêm câu hỏi</button>
      </div>
      <div className="question-list">
        <h2>Danh sách câu hỏi:</h2>
        {questions.length > 0 ? (
          <ul>
            {questions.map((q, index) => (
              <li key={index}>
                <p>{q.question}</p>
                <p>Đáp án đúng: {q.correctAnswer}</p>
                {q.explain && <p>Giải thích: {q.explain}</p>}
              </li>
            ))}
          </ul>
        ) : (
          <p>Chưa có câu hỏi nào được thêm.</p>
        )}
        <button className="save-quiz-btn" onClick={handleSaveQuiz}>Lưu bộ câu hỏi</button>
      </div>
    </div>
  );
};

export default CreateQuiz;