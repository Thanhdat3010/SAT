import React, { useState, useEffect } from 'react';
import './Chapter1cauhoi.css';

const Chapter1cauhoi = ({ onCompletion,onReset }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user.email : 'defaultUser'; // Dùng email làm khóa
  const questions = [
    {
      question: "Chất nào có thể bị phân hủy về mặt hóa học?",
      options: ["Ammonia", "Iron", "Neon", "Hydrogen", "Fluorine"],
      correctAnswer: "Ammonia",
      explain: "Hợp chất có thể bị phân hủy về mặt hóa học, còn các nguyên tố thì không. Ammonia là hợp chất duy nhất trong khi các lựa chọn khác đều là nguyên tố.",
    },
    {
      question: "Những đơn vị nào có thể được sử dụng để biểu thị lượng năng lượng hấp thụ hoặc giải phóng trong phản ứng hóa học?",
      options: ["Độ và gam", "Torr và mmHg", "Gam và lít", "Calo và joule", "Mét và cm3"],
      correctAnswer: "Calo và joule",
      explain: "Nhiệt lượng trong phản ứng hóa học thường được đo bằng calo và joule.",
    },
    {
      question: "Chất nào đại diện cho một hỗn hợp đồng nhất?",
      options: ["CH3OH(l)", "CH3OH(aq)", "CH3OH(g)", "CH3OH(s)", "Không chất nào ở trên"],
      correctAnswer: "Không chất nào ở trên",
      explain: "Hỗn hợp đồng nhất chỉ chứa một loại chất. Các lựa chọn khác đều là dạng khác nhau của CH3OH (methanol).",
    },
    {
      question: "Một cuốn sách được nhấc lên khỏi sàn và đặt trên một cái bàn cao hơn sàn nhà một mét. Cuốn sách có",
      options: ["Thu được năng lượng âm thanh", "Mất năng lượng hóa học", "Thu được thế năng", "Thu được động năng", "Mất năng lượng hạt nhân"],
      correctAnswer: "Thu được thế năng",
      explain: "Việc nâng một vật gì đó lên cao hơn sẽ tăng thế năng của nó.",
    },
    {
      question: "Tuyên bố nào không chính xác về năng lượng?",
      options: [
        "Năng lượng có thể tỏa ra trong một phản ứng.",
        "Phản ứng có thể thu được năng lượng.",
        "Năng lượng không thể tự sinh ra hay mất đi.",
        "Năng lượng có thể có nhiều dạng khác nhau.",
        "Năng lượng có khối lượng và chiếm không gian."
      ],
      correctAnswer: "Năng lượng có khối lượng và chiếm không gian.",
      explain: "Năng lượng là một khái niệm vật lý và không có khối lượng. Nó có thể tồn tại dưới nhiều dạng khác nhau và có thể chuyển đổi từ dạng này sang dạng khác."
    },
    {
      question: "Khối lượng của một vật thể có mật độ 13 g/mL và thể tích 10 mL là bao nhiêu?",
      options: ["1.3 g/mL", "0.77 g/mL", "1.3 g/L", "130 g", "130 g/L"],
      correctAnswer: "130 g",
      explain: "Khối lượng của một vật thể có thể được tính bằng công thức: khối lượng = thể tích × mật độ. Trong trường hợp này, khối lượng = 10 mL × 13 g/mL = 130 g.",
    },
    {
      question: "Câu nào dưới đây không đúng?",
      options: [
        "Salad là hỗn hợp không đồng nhất.",
        "NaCl(aq) là một hỗn hợp đồng nhất.",
        "Sữa là một hỗn hợp đồng nhất.",
        "Cát và nước tạo thành một hỗn hợp không đồng nhất.",
        "Sắt nguyên chất là một hỗn hợp không đồng nhất."
      ],
      correctAnswer: "Sắt nguyên chất là một hỗn hợp không đồng nhất.",
      explain: "Sắt nguyên chất là một chất tinh khiết, không phải một hỗn hợp."
    },
    {
      question: "Loại thay đổi nào khác với bốn loại còn lại?",
      options: [
        "Nướng khoai tây",
        "Đinh sắt bị rỉ sét",
        "Đốt một mảnh giấy",
        "Làm tan chảy một viên đá",
        "Đốt cháy propane"
      ],
      correctAnswer: "Làm tan chảy một viên đá",
      explain: "Làm tan chảy một viên đá là một sự thay đổi vật lý, trong khi các lựa chọn khác là các sự thay đổi hóa học."
    },
    {
      question: "Điều nào sau đây không phải là tài sản vật chất?",
      options: [
        "Màu sắc",
        "Trạng thái",
        "Mùi",
        "Điểm sôi",
        "Phản ứng với oxygen"
      ],
      correctAnswer: "Phản ứng với oxygen",
      explain: "Phản ứng với oxygen là một hiện tượng hóa học, không phải là một đặc điểm vật chất."
    },
    {
      question: "Sự khác biệt giữa năng lượng tiềm năng của sản phẩm và năng lượng tiềm năng của các chất phản ứng trong phản ứng được gọi là",
      options: [
        "Nhiệt độ phản ứng",
        "Sức nóng của phản ứng",
        "Sự thay đổi phản ứng",
        "Phản ứng tỏa nhiệt",
        "Phản ứng thu nhiệt"
      ],
      correctAnswer: "Sự thay đổi phản ứng",
      explain: "Sự khác biệt giữa năng lượng tiềm năng của sản phẩm và các chất phản ứng trong phản ứng được gọi là sự thay đổi phản ứng."
    },
    {
      question: "Nghiên cứu về vật chất được gọi là",
      options: [
        "Hóa học",
        "Sinh học",
        "Địa chất",
        "Vật lý",
        "Tâm lý học"
      ],
      correctAnswer: "Hóa học",
      explain: "Hóa học là nghiên cứu về cấu trúc, tính chất và biến đổi của vật chất."
    },
    {
      question: "Tham khảo các lựa chọn sau:\nI. Rắn sang lỏng\nII. Lỏng sang khí\nIII. Rắn sang khí\nSự thay đổi trạng thái nào ở trên là thu nhiệt?",
      options: [
        "Chỉ có I",
        "Chỉ có II",
        "Chỉ có III",
        "Chỉ có II và III",
        "I, II và III"
      ],
      correctAnswer: "I, II và III",
      explain: "Cần thêm năng lượng nhiệt vào một chất để làm tan chảy, bay hơi hoặc thăng hoa nó. Tất cả các thay đổi pha được liệt kê được mô tả bằng cách làm nóng chảy, bay hơi hoặc thăng hoa của nó tương ứng."
    },
    {
      question: "Năng lượng cần thiết để bắt đầu một phản ứng được gọi là",
        options: [
        "Thế năng của chất phản ứng",
        "Năng lượng tiềm năng của sản phẩm",
        "Năng lượng kích hoạt",
        "Nhiệt phản ứng",
        "Năng lượng âm thanh"
      ],
      correctAnswer: "Năng lượng kích hoạt",
      explain: "Năng lượng kích hoạt là năng lượng cần thiết để đạt tới phức hợp được kích hoạt, điểm mà chất phản ứng trở thành sản phẩm."
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const saved = localStorage.getItem(userId + '_currentQuestion');
    return saved ? JSON.parse(saved) : 0;
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerState, setAnswerState] = useState(() => {
    const saved = localStorage.getItem(userId + '_answerState');
    return saved ? JSON.parse(saved) : Array(questions.length).fill(null);
  });
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem(userId + '_score');
    return saved ? JSON.parse(saved) : 0;
  });
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(userId + '_progress');
    return saved ? JSON.parse(saved) : 0;
  });
  const [quizCompleted, setQuizCompleted] = useState(() => {
    const saved = localStorage.getItem(userId + '_quizCompleted');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(userId + '_currentQuestion', JSON.stringify(currentQuestion));
    localStorage.setItem(userId + '_answerState', JSON.stringify(answerState));
    localStorage.setItem(userId + '_score', JSON.stringify(score));
    localStorage.setItem(userId + '_progress', JSON.stringify(progress));
    localStorage.setItem(userId + '_quizCompleted', JSON.stringify(quizCompleted));
  }, [currentQuestion, answerState, score, progress, quizCompleted, userId]);

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
    setSelectedOption(null);
    const nextQ = currentQuestion + 1;
    if (nextQ < questions.length) {
      setCurrentQuestion(nextQ);
      const newProgress = (nextQ / questions.length) * 100;
      setProgress(newProgress);
    } else {
      setQuizCompleted(true);
      onCompletion();
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnswerState(Array(questions.length).fill(null));
    setScore(0);
    setProgress(0);
    setQuizCompleted(false);
    onReset();
  };

  if (quizCompleted) {
    return (
      <div className="questions-page">
        <h1>Chapter 1</h1>
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
    <div className="questions-page">
      <h1>Chapter 1</h1>
      <div className="questions-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        {currentQuestion < questions.length && (
          <div className="question">
            <p>{currentQuestion + 1}. {questions[currentQuestion].question}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)} className={answerState[currentQuestion] !== null && option === questions[currentQuestion].correctAnswer ? 'correct' : answerState[currentQuestion] !== null && selectedOption === option ? 'incorrect' : ''}>
                  ({String.fromCharCode(65 + index)}) {option}
                  {selectedOption === option && answerState[currentQuestion] !== null && option === questions[currentQuestion].correctAnswer ? <span className="correct-mark">&#10003;</span> : ''}
                  {selectedOption === option && answerState[currentQuestion] !== null && option !== questions[currentQuestion].correctAnswer ? <span className="incorrect-mark">&#10007;</span> : ''}
                </li>
              ))}
            </ul>
            {selectedOption && (
              <div>
                {answerState[currentQuestion] !== null && selectedOption !== questions[currentQuestion].correctAnswer && (
                  <div>
                    <p>Đáp án đúng: {questions[currentQuestion].correctAnswer}</p>
                    <p>Giải thích: {questions[currentQuestion].explain}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        {currentQuestion < questions.length && (
          <button onClick={nextQuestion} className="next-button">Câu hỏi tiếp theo</button>
        )}
      </div>
    </div>
  );
};

export default Chapter1cauhoi;
