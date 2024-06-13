import React, { useState } from 'react';
import './CreateQuiz.css';
import { db } from '../components/firebase';
import { doc, setDoc } from 'firebase/firestore';

const CreateQuiz = () => {
  const initialQuestionState = {
    type: 'multiple-choice',
    question: '',
    correctAnswer: '', // Thêm một trường correctAnswer
    explain: '',
    options: ['', '', '', ''],
  };

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({ ...initialQuestionState });

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

  const handleSaveQuiz = async () => {
    if (questions.length === 0) {
      alert('Bạn phải thêm ít nhất một câu hỏi để lưu.');
      return;
    }

    try {
      const docRef = doc(db, 'createdQuizzes', 'userGeneratedQuiz'); // Đổi 'userGeneratedQuiz' thành tên bạn muốn
      await setDoc(docRef, { questions });
      alert('Bộ câu hỏi đã được lưu thành công.');
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
      <h1>Tạo Bộ Câu Hỏi</h1>
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
        <button onClick={handleAddQuestion}>Thêm câu hỏi</button>
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
        <button onClick={handleSaveQuiz}>Lưu bộ câu hỏi</button>
      </div>
    </div>
  );
};

export default CreateQuiz;