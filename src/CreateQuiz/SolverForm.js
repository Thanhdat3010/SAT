import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './SolverForm.css';

const SolverForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [equation, setEquation] = useState('');
  const [explanation, setExplanation] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const genAI = new GoogleGenerativeAI('AIzaSyB3QUai2Ebio9MRYYtkR5H21hRlYFuHXKQ');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Vui lòng chọn một file hình ảnh.');
      return;
    }

    const fileToGenerativePart = async (file) => {
      const base64EncodedDataPromise = new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]);
        reader.readAsDataURL(file);
      });
      return {
        inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
      };
    };

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const prompt = 'Đưa ra đáp án bài trong ảnh này và lời giải chi tiết. Kết quả trả ra dạng JSON answer';
      const imageParts = [await fileToGenerativePart(selectedFile)];
      const result = await model.generateContent([prompt, ...imageParts]);
      const response = await result.response;
      const text = await response.text();
      // Xử lý chuỗi JSON trả về
      const cleanText = text.replace(/`/g, ''); // Thay thế tất cả các backtick
      const cleanText1 = cleanText.replace(/json/g, ''); // Thay thế tất cả các backtick
      console.log(cleanText1);
      const parsedResponse = JSON.parse(cleanText1);
      // Giả sử JSON trả về có dạng { "answer": "..." }
      const extractedEquation = parsedResponse.answer || parsedResponse.equation || 'Không tìm thấy câu trả lời phù hợp.';
      const explanations = parsedResponse.explanation || 'Không tìm thấy câu trả lời phù hợp.';
      setExplanation(explanations);
      setEquation(extractedEquation);
    } catch (error) {
      console.error('Error generating answer from AI:', error);
      alert('Đã xảy ra lỗi khi giải bài từ AI.');
    }
  };

  return (
    <div className="solver-form">
      <h2>Giải hóa tự động bằng AI</h2>
      <form onSubmit={handleSubmit}>
        <div
          className="drop-zone"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}
        >
          {imagePreviewUrl ? (
            <img src={imagePreviewUrl} alt="Ảnh tải lên" className="preview-image" />
          ) : (
            <p>Kéo và thả ảnh vào đây hoặc nhấn để chọn tệp</p>
          )}
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>
        <button type="submit">Giải</button>
      </form>
      {equation && (
        <div className="answer">
          <h3>Bài giải:</h3>
          <p><strong>Đáp án:</strong> {equation}</p>
          <p><strong>Giải thích:</strong> {explanation}</p>
        </div>
      )}
    </div>
  );
};

export default SolverForm;