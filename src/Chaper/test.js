// import React, { useState, useEffect } from 'react';
// import './Chapter1cauhoi.css';
// import formatChemicalFormula from '../components/formatChemicalFormula';
// import Notification from '../components/Notification';
// import { db } from '../components/firebase';
// const Chapter12cauhoi = ({ onCompletion,onReset }) => {
  
//   const user = JSON.parse(localStorage.getItem('user'));
//   const [questions, setQuestions] = useState([]);
//   const chapterId = 'chapter1'; // Tạo một ID riêng cho mỗi chương
//   const userId = user ? user.email : 'defaultUser'; // Dùng email làm khóa
//   const [showExplanation, setShowExplanation] = useState(false);  // Thêm state mới để quản lý việc hiển thị giải thích
//   const [showNotification, setShowNotification] = useState(false); // Thêm state mới cho thông báo
//   const [notificationMessage, setNotificationMessage] = useState(''); // Thêm state cho thông báo

//   function shuffleArray(array) { //Hàm trộn mảng
//     let currentIndex = array.length, randomIndex;
  
//     // Trong khi vẫn còn phần tử để trộn...
//     while (currentIndex !== 0) {
  
//       // Chọn một phần tử còn lại...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // Và hoán đổi nó với phần tử hiện tại.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }
  
//   useEffect(() => {
//   const questions = [
//     {
//       question: "Chất nào có thể bị phân hủy về mặt hóa học?",
//       options: ["Ammonia", "Iron", "Neon", "Hydrogen", "Fluorine"],
//       correctAnswer: "Ammonia",
//       explain: "Các hợp chất có thể bị phân hủy hóa học, trong khi các nguyên tố không thể. Amoniac là duy nhất hợp chất trong khi các lựa chọn khác đều là các nguyên tố.",
//     },
//     {
//       question: "Những đơn vị nào có thể được sử dụng để biểu thị lượng năng lượng hấp thụ hoặc giải phóng trong phản ứng hóa học?",
//       options: ["Độ và gam", "Torr và mmHg", "Gam và lít", "Calo và joule", "Mét và cm³"],
//       correctAnswer: "Calo và joule",
//       explain: "Nhiệt được đo bằng calo hoặc joule. Một đơn vị khác mà bạn có thể gặp là kilojoule, trong đó 1 kilojoule bằng 1.000 joule.",
//     },
//     {
//       question: "Chất nào đại diện cho một hỗn hợp đồng nhất?",
//       options: ["CH3OH(l)", "CH3OH(aq)", "CH3OH(g)", "CH3OH(s)", "Không chất nào ở trên"],
//       correctAnswer: "CH3OH(aq)",
//       explain: "Tất cả các dung dịch phải đồng nhất. Ký hiệu (aq) được sử dụng để chỉ định điều này.",
//     },
//     {
//       question: "Một cuốn sách được nhấc lên khỏi sàn và đặt trên một cái bàn cao hơn sàn nhà một mét. Cuốn sách có",
//       options: ["Thu được năng lượng âm thanh", "Mất năng lượng hóa học", "Thu được thế năng", "Thu được động năng", "Mất năng lượng hạt nhân"],
//       correctAnswer: "Thu được thế năng",
//       explain: "Việc nâng một cái gì đó lên một mức cao hơn cung cấp cho nó thế năng cao hơn.",
//     },
//     {
//       question: "Tuyên bố nào không chính xác về năng lượng?",
//       options: [
//         "Năng lượng có thể tỏa ra trong một phản ứng.",
//         "Phản ứng có thể thu được năng lượng.",
//         "Năng lượng không thể tự sinh ra hay mất đi.",
//         "Năng lượng có thể có nhiều dạng khác nhau.",
//         "Năng lượng có khối lượng và chiếm không gian."
//       ],
//       correctAnswer: "Năng lượng có khối lượng và chiếm không gian.",
//       explain: "Vật chất, không phải năng lượng, là thuật ngữ được sử dụng cho cái gì đó có khối lượng và chiếm không gian."
//     },
//     {
//       question: "Khối lượng của một vật thể có mật độ 13 g/mL và thể tích 10 mL là bao nhiêu?",
//       options: ["1.3 g/mL", "0.77 g/mL", "1.3 g/L", "130 g", "130 g/L"],
//       correctAnswer: "130 g",
//       explain: "Hãy cẩn thận với các đơn vị! Tích số là khối lượng/thể tích. Vì vậy, khối lượng = thể tích × tích số. 10 mL × 13 g/mL = 130 gam.",
//     },
//     {
//       question: "Câu nào dưới đây không đúng?",
//       options: [
//         "Salad là hỗn hợp không đồng nhất.",
//         "NaCl(aq) là một hỗn hợp đồng nhất.",
//         "Sữa là một hỗn hợp đồng nhất.",
//         "Cát và nước tạo thành một hỗn hợp không đồng nhất.",
//         "Sắt nguyên chất là một hỗn hợp không đồng nhất."
//       ],
//       correctAnswer: "Sắt nguyên chất là một hỗn hợp không đồng nhất.",
//       explain: "Tất cả các nguyên tố và hợp chất đều là chất tinh khiết. Sắt, một nguyên tố, rơi vào loại này."
//     },
//     {
//       question: "Loại thay đổi nào khác với bốn loại còn lại?",
//       options: [
//         "Nướng khoai tây",
//         "Đinh sắt bị rỉ sét",
//         "Đốt một mảnh giấy",
//         "Làm tan chảy một viên đá",
//         "Đốt cháy propane"
//       ],
//       correctAnswer: "Làm tan chảy một viên đá",
//       explain: "Việc tan chảy của một viên đá lạnh là một thay đổi vật lý. Các lựa chọn khác đều là các thay đổi hóa học."
//     },
//     {
//       question: "Đâu không phải là một tính chất vật lý?",
//       options: [
//         "Màu sắc",
//         "Trạng thái",
//         "Mùi",
//         "Điểm sôi",
//         "Phản ứng với oxygen"
//       ],
//       correctAnswer: "Phản ứng với oxygen",
//       explain: "Phản ứng của bất kỳ nguyên tố nào đều dẫn đến sự thay đổi hóa học."
//     },
//     {
//       question: "Sự khác biệt giữa năng lượng tiềm năng của sản phẩm và năng lượng tiềm năng của các chất phản ứng trong phản ứng được gọi là",
//       options: [
//         "Nhiệt độ phản ứng",
//         "Nhiệt của phản ứng",
//         "Sự thay đổi phản ứng",
//         "Phản ứng tỏa nhiệt",
//         "Phản ứng thu nhiệt"
//       ],
//       correctAnswer: "Nhiệt của phản ứng",
//       explain: "Hiệu chênh lệch thế năng của chất phản ứng và sản phẩm của phản ứng được gọi là Nhiệt của phản ứng, ΔH."
//     },
//     {
//       question: "Nghiên cứu về vật chất được gọi là",
//       options: [
//         "Hóa học",
//         "Sinh học",
//         "Địa chất",
//         "Vật lý",
//         "Tâm lý học"
//       ],
//       correctAnswer: "Hóa học",
//       explain: "Hóa học là nghiên cứu về cấu trúc, tính chất và biến đổi của vật chất."
//     },
//     {
//       question: "Tham khảo các lựa chọn sau\nI. Rắn sang lỏng\nII. Lỏng sang khí\nIII. Rắn sang khí\nSự thay đổi trạng thái nào ở trên là thu nhiệt?",
//       options: [
//         "Chỉ có I",
//         "Chỉ có II",
//         "Chỉ có III",
//         "Chỉ có II và III",
//         "I, II và III"
//       ],
//       correctAnswer: "I, II và III",
//       explain: "Cần thêm năng lượng nhiệt vào một chất để làm tan chảy, bay hơi hoặc thăng hoa nó. Tất cả các thay đổi pha được liệt kê được mô tả bằng cách làm nóng chảy, bay hơi hoặc thăng hoa của nó tương ứng."
//     },
//     {
//       question: "Năng lượng cần thiết để bắt đầu một phản ứng được gọi là",
//         options: [
//         "Thế năng của chất phản ứng",
//         "Năng lượng tiềm năng của sản phẩm",
//         "Năng lượng kích hoạt",
//         "Nhiệt phản ứng",
//         "Năng lượng âm thanh"
//       ],
//       correctAnswer: "Năng lượng kích hoạt",
//       explain: "Năng lượng kích hoạt là năng lượng cần thiết để đạt tới phức hợp được kích hoạt, điểm mà chất phản ứng trở thành sản phẩm."
//     },
//   ];
  
//   const savedQuestions = localStorage.getItem(`${userId}_${chapterId}_questions`);
//     if (savedQuestions) {
//       setQuestions(JSON.parse(savedQuestions));
//     } else {
//       const shuffledQuestions = shuffleArray([...questions]);
//       setQuestions(shuffledQuestions);
//       localStorage.setItem(`${userId}_${chapterId}_questions`, JSON.stringify(shuffledQuestions));
//     }
//   }, [chapterId, userId]); //chỉ trộn mảng 1 lần, khi qua component khác rồi quay lại thì không trộn nữa

// const [currentQuestion, setCurrentQuestion] = useState(() => {
//   const saved = localStorage.getItem(`${userId}_${chapterId}_currentQuestion`);
//   return saved ? JSON.parse(saved) : 0;
// });
// const [selectedOption, setSelectedOption] = useState(null);
// const [answerState, setAnswerState] = useState(() => {
//   const saved = localStorage.getItem(`${userId}_${chapterId}_answerState`);
//   return saved ? JSON.parse(saved) : Array(questions.length).fill(null);
// });
// const [score, setScore] = useState(() => {
//   const saved = localStorage.getItem(`${userId}_${chapterId}_score`);
//   return saved ? JSON.parse(saved) : 0;
// });
// const [progress, setProgress] = useState(() => {
//   const saved = localStorage.getItem(`${userId}_${chapterId}_progress`);
//   return saved ? JSON.parse(saved) : 0;
// });
// const [quizCompleted, setQuizCompleted] = useState(() => {
//   const saved = localStorage.getItem(`${userId}_${chapterId}_quizCompleted`);
//   return saved ? JSON.parse(saved) : false;
// });
  
//   useEffect(() => {
//     localStorage.setItem(`${userId}_${chapterId}_currentQuestion`, JSON.stringify(currentQuestion));
//     localStorage.setItem(`${userId}_${chapterId}_answerState`, JSON.stringify(answerState));
//     localStorage.setItem(`${userId}_${chapterId}_score`, JSON.stringify(score));
//     localStorage.setItem(`${userId}_${chapterId}_progress`, JSON.stringify(progress));
//     localStorage.setItem(`${userId}_${chapterId}_quizCompleted`, JSON.stringify(quizCompleted));
//   }, [currentQuestion, answerState, score, progress, quizCompleted, userId]);

//   const handleOptionClick = (selectedAnswer) => {
//     if (selectedOption === null) {
//       setSelectedOption(selectedAnswer);
//       setShowExplanation(false);  // Ẩn giải thích mỗi khi người dùng chọn một tùy chọn mới

//       const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
//       const newAnswerState = [...answerState];
//       newAnswerState[currentQuestion] = isCorrect;
//       setAnswerState(newAnswerState);

//       if (isCorrect) {
//         setScore(prevScore => prevScore + 1);
//       }
//     }
//   };
  
//   const nextQuestion = () => {
//     if (selectedOption === null) {
//       setNotificationMessage("Bạn cần chọn đáp án trước khi tiếp tục.");
//       setShowNotification(true);
//       return;
//     }

//     setSelectedOption(null);
//     setShowExplanation(false);  // Reset trạng thái hiển thị giải thích khi chuyển câu hỏi

//     const nextQ = currentQuestion + 1;
//     if (nextQ < questions.length) {
//       setCurrentQuestion(nextQ);
//       const newProgress = (nextQ / questions.length) * 100;
//       setProgress(newProgress);
//     } else {
//       setQuizCompleted(true);
//       onCompletion();
//     }
//   };

//   const resetQuiz = () => {
//     setCurrentQuestion(0);
//     setSelectedOption(null);
//     setAnswerState(Array(questions.length).fill(null));
//     setScore(0);
//     setProgress(0);
//     setQuizCompleted(false);
//     onReset();
//   };
//   const toggleExplanation = () => {
//     setShowExplanation(!showExplanation);  // Chuyển đổi trạng thái hiển thị giải thích
//   };
//   if (quizCompleted) {
//     return (
//       <div className="questions-page">
//         <h1>Chapter 1</h1>
//         <h2>Hoàn thành</h2>
//         <div className="score-container">
//           <p className="score-label">Điểm số của bạn:</p>
//           <p className="score">{score}</p>
//           {/* <p className="score">{score} / {questions.length}</p> */}
//           <button onClick={resetQuiz} className="next-button">Làm lại</button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="questions-page">
//       <h1>Chapter 1</h1>
//       <div className="questions-container">
//         <div className="progress-bar" style={{ width: `${progress}%` }}></div>
//         {currentQuestion < questions.length && (
//           <div className="question">
//             <p>{currentQuestion + 1}. {questions[currentQuestion].question}</p>
//             <ul>
//               {questions[currentQuestion].options.map((option, index) => (
//                 <li key={index} onClick={() => handleOptionClick(option)}
//                 className={
//                 selectedOption !== null && // Thêm điều kiện này để chỉ tô màu khi đã có lựa chọn
//                 answerState[currentQuestion] !== null &&
//                 option === questions[currentQuestion].correctAnswer ? 'correct' : 
//                 selectedOption !== null &&
//                 answerState[currentQuestion] !== null &&
//                 selectedOption === option && option !== questions[currentQuestion].correctAnswer ? 'incorrect' : ''
//                    }>
//             ({String.fromCharCode(65 + index)}) {formatChemicalFormula(option)}
//             {selectedOption === option && answerState[currentQuestion] !== null && option === questions[currentQuestion].correctAnswer ? <span className="correct-mark">&#10003;</span> : ''}
//             {selectedOption === option && answerState[currentQuestion] !== null && option !== questions[currentQuestion].correctAnswer ? <span className="incorrect-mark">&#10007;</span> : ''}
//               </li>
//               ))}
//             </ul>
//             {selectedOption !== null && (
//             <>
//               <button onClick={toggleExplanation} className="explanation-button">Giải thích</button>
//               {showExplanation && (
//                 <div className="explanation">
//                   <p>Đáp án đúng: {questions[currentQuestion].correctAnswer}</p>
//                   <p>Giải thích: {questions[currentQuestion].explain}</p>
//                 </div>
//               )}
//             </>
//           )}
//           </div>
//         )}
//         {currentQuestion < questions.length && (
//           <button onClick={nextQuestion} className="next-button">Câu hỏi tiếp theo</button>
//         )}
//       </div>
//       {showNotification && (
//         <Notification
//           message={notificationMessage}
//           onClose={() => setShowNotification(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Chapter12cauhoi;