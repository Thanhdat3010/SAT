import React, { useState } from 'react';
import './Chapter2cauhoi.css';

const Chapter2cauhoi = ({ onCompletion }) => {
  const questions = [
    {
        question: "Loại khí nào dưới nhiệt độ cao và áp suất thấp hành xử giống nhất như một khí lý tưởng?",
        options: ["He", "O2", "NH3", "CO2", "Ne"],
        correctAnswer: "He",
        explain: "Càng nhỏ khí, nó sẽ càng hành xử giống như khí lý tưởng hơn. Hơn nữa, khí hành xử giống như khí lý tưởng nhất khi cách xa nhau. Điều này xảy ra ở áp suất thấp và nhiệt độ cao."
      },
      {
        question: "Mẫu nào thể hiện hạt được sắp xếp theo một mẫu hình hình học đều?",
        options: ["CO2 (g)", "CO2 (s)", "CO2 (l)", "CO2 (aq)", "Không có cái nào phù hợp"],
        correctAnswer: "CO2 (s)",
        explain: "Một mô hình hình học đều mô tả tốt nhất một chất rắn."
      },
      {
        question: "Ở nhiệt độ nào, mẫu nước có năng lượng kinet trung bình cao nhất?",
        options: ["0 độ Celsius", "100 độ Celsius", "0 K", "100 K", "273 K"],
        correctAnswer: "100 độ Celsius",
        explain: "Năng lượng Kinet Trung bình là thuật ngữ mô tả nhiệt độ. Nhiệt độ cao nhất có mặt trong các mẫu này là 100 độ Celsius, tương ứng với 373 Kelvin."
      },
      {
        question: "Một chất lỏng sẽ sôi khi",
        options: ["Điểm đóng băng bằng với điểm nóng chảy của nó", "Một lượng muối đã được thêm vào chất lỏng", "Áp suất hơi của nó bằng với điểm nóng chảy", "Nó được đun nóng ở một nhiệt độ thấp hơn nhiệt độ sôi", "Áp suất hơi của nó bằng với áp suất xung quanh"],
        correctAnswer: "Áp suất hơi của nó bằng với áp suất xung quanh",
        explain: "Một chất lỏng sẽ sôi khi áp suất hơi của nó bằng với áp suất khí quyển xung quanh. Bởi vì áp suất khí quyển có thể thay đổi, nhiệt độ sôi của một chất lỏng cũng có thể thay đổi."
      },
      {
        question: "Khí nào được dự kiến sẽ có tỷ lệ tràn ra cao nhất?",
        options: ["O2", "F2", "H2O", "He", "CH4"],
        correctAnswer: "He",
        explain: "Khí nhẹ nhất sẽ có mật độ thấp nhất và tỷ lệ tràn ra cao nhất. Trong số các lựa chọn, helium là khí nhẹ nhất."
      },
      {
        question: "Quá trình chuyển pha nào được mô tả đúng?",
        options: ["Chuyển từ rắn sang khí được gọi là sự đặt (deposition)", "Chuyển từ khí sang rắn được gọi là quá trình hoán vị (sublimation)", "Chuyển từ lỏng sang rắn được gọi là đóng băng", "Chuyển từ rắn sang lỏng được gọi là hơi hóa", "Chuyển từ lỏng sang khí được gọi là ngưng tụ"],
        correctAnswer: "Chuyển từ lỏng sang khí được gọi là ngưng tụ",
        explain: "Quá trình đóng băng của một chất lỏng sẽ tạo ra một chất rắn."
      },
      {
        question: "Một chất rắn, chất lỏng và khí có thể tồn tại cùng một lúc ở",
        options: ["Điểm bay hơi", "Điểm tam giác", "Điểm sôi", "Điểm đóng băng", "Điểm nóng chảy"],
        correctAnswer: "Điểm tam giác",
        explain: "Điểm tam giác kết hợp các điều kiện phù hợp về áp suất và nhiệt độ để một chất có thể tồn tại ở cùng một lúc ở cả ba pha rắn, lỏng và khí."
      },
      {
        question: "Một hỗn hợp khí tồn tại trong một container kín với các phần trăm sau đây: helium 40%, neon 50%, và argon 10% Nếu áp suất tổng của các khí là 1100 torr, thì điều nào sau đây đúng về các khí này?",
        options: ["Thể tích và nhiệt độ có một mối quan hệ nghịch thìch", "Thể tích và áp suất có một mối quan hệ thuận", "Áp suất riêng của khí neon là 550 torr", "Áp suất riêng của khí argon là 100 torr", "Các áp suất riêng của các khí không thể được tính toán với thông tin đã cho"],
        correctAnswer: "Áp suất riêng của khí neon là 550 torr",
        explain: "Neon chiếm 50% số phân tử khí hiện có. Neon cũng sẽ đóng góp 50% tổng áp suất. (1100 torr)(0.50) = 550 torr."
      },
      {
        question: "Khí nào được dự kiến sẽ có mật độ thấp nhất ở STP?",
        options: ["SO2", "CO2", "Cl2", "Xe", "Ar"],
        correctAnswer: "Ar",
        explain: "Mật độ của một khí là khối lượng mol của khí chia cho 22.4L. Đối với argon, điều này sẽ là 39.95g/22.4L = 1.78 g/L. Hãy nhớ rằng không cần máy tính. Vì argon là khí nhẹ nhất, nó sẽ có mật độ thấp nhất."
      },
      {
        question: "Một khí lý tưởng ở STP chiếm 22.4 lít. Nếu áp suất lên khí được tăng lên 1000 torr và nhiệt độ của khí giảm xuống 250 K, điều gì có thể được nói về khí?",
        options: ["Số mol của khí đã thay đổi", "Thể tích của khí đã tăng", "Thể tích của khí đã giảm", "Áp suất và nhiệt độ có một mối quan hệ nghịch thìch", "Không có điều gì ở trên"],
        correctAnswer: "Thể tích của khí đã giảm",
        explain: "Trong vấn đề này, áp suất thay đổi từ 760 torr lên 1000 torr. Nhiệt độ thay đổi từ 273 K xuống 250 K. Cả hai thay đổi trong điều kiện đều chỉ ra một giảm thể tích. Khi Luật Khí Kết hợp được sử dụng, thể tích sẽ giảm từ 22.4 L xuống 15.6 L."
      },
      {
        question: "Điều nào không nhất quán với Lý thuyết phân tử động?",
        options: ["Các phân tử khí có lực hấp dẫn với nhau", "Các phân tử khí di chuyển theo hướng ngẫu nhiên, thẳng", "Các phân tử khí có một khối lượng có thể bỏ qua so với khối lượng chúng chiếm", "Các va chạm giữa các phân tử khí dẫn đến sự truyền năng lượng được bảo toàn", "Tất cả các câu trên đều đúng"],
        correctAnswer: "Các phân tử khí có lực hấp dẫn với nhau",
        explain: "Lí tưởng, các phân tử khí cần phải xa cách nhau và không có sức hấp dẫn cho nhau. Hơn nữa, các khí nhỏ như hydro và helium là lý tưởng."
      },
      {
        question: "Tham khảo các lựa chọn sau: I. Định luật Boyle II. Định luật Charles III. Định luật Khí kết hợp Cái nào trong số trên có thể được sử dụng để tính toán sự thay đổi về thể tích khi có sự thay đổi về áp suất ở nhiệt độ không đổi?",
        options: ["Chỉ I", "Chỉ II", "II và III", "I và III", "I và II"],
        correctAnswer: "I và III",
        explain: "Cả Luật Boyle và Luật Khí Kết hợp đều có biến số cho áp suất và thể tích. Luật Charles chỉ xem xét sự thay đổi về thể tích khi có sự thay đổi về nhiệt độ."
      },
      {
        question: "Tham chiếu đến đồ thị nhiệt độ trong Hình 2.7, điều nào sau đây không liên quan đến đồ thị nhiệt độ của nước?",
        options: ["Cung cấp năng lượng nhiệt", "Nóng chảy", "Sôi", "Tăng năng lượng động", "Ngưng tụ"],
        correctAnswer: "Ngưng tụ",
        explain: "Đồ thị nhiệt độ cho một chất sẽ không cho thấy khi một chất trực tiếp. Tuy nhiên, quá trình trực tiếp này có thể được chỉ ra trong đồ thị bao gồm điểm tam giác."
      }
      // Các câu hỏi khác ở đây...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answerState, setAnswerState] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleOptionClick = (selectedAnswer, index) => {
    if (selectedOption === null) {
      setSelectedOption(selectedAnswer);
      const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
      const newAnswerState = [...answerState];
      newAnswerState[currentQuestion] = isCorrect;
      setAnswerState(newAnswerState);

      if (isCorrect) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
    const newProgress = ((currentQuestion + 1) / questions.length) * 100;
    setProgress(newProgress);

    if (currentQuestion === questions.length - 1) {
      onCompletion();
    }
  };

  return (
    <div className="questions-page">
      <h1>Chapter 2</h1>
      <div className="questions-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        {currentQuestion < questions.length && (
          <div className="question">
            <p>{currentQuestion + 1}. {questions[currentQuestion].question}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option, index)} className={answerState[currentQuestion] !== null && option === questions[currentQuestion].correctAnswer ? 'correct' : answerState[currentQuestion] !== null && selectedOption === option ? 'incorrect' : ''}>
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
      {currentQuestion === questions.length && (
        <div>
          <h2>Hoàn thành</h2>
          <div className="score-container">
          <p className="score-label">Điểm số của bạn:</p>
          <p className="score">{score}</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default Chapter2cauhoi;
