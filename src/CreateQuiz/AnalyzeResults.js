import React, { useState, useEffect } from 'react';
import { db } from '../components/firebase';
import { doc, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './AnalyzeResults.css';

const AnalyzeResults = () => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState('');
  const genAI = new GoogleGenerativeAI("AIzaSyB3QUai2Ebio9MRYYtkR5H21hRlYFuHXKQ");

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem('user'))?.email || 'defaultUser';
        const chaptersColRef = collection(db, 'users', userId, 'chapters');
        const chapterSnapshot = await getDocs(chaptersColRef);
        const chapterList = chapterSnapshot.docs.map(doc => doc.id);
        setChapters(chapterList);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách chapters:', error);
      }
    };

    fetchChapters();
  }, []);
  

  const fetchQuizData = async (chapterId) => {
    try {
      const userId = JSON.parse(localStorage.getItem('user'))?.email || 'defaultUser';
      const chapterDocRef = doc(db, 'users', userId, 'chapters', chapterId);
      const chapterDoc = await getDoc(chapterDocRef);
      let questions = [];
      let answerState = [];
      
      if (chapterDoc.exists()) {
        const chapterData = chapterDoc.data();
        questions = chapterData.questions || [];
        answerState = chapterData.answerState || [];
      }

      return { answerState, questions };
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ Firestore:', error);
      return { answerState: [], questions: [] };
    }
  };

  const handleAnalyzeResults = async () => {
    setLoading(true);

    const { answerState, questions } = await fetchQuizData(selectedChapter);

    if (answerState.length === 0 || questions.length === 0) {
      setAnalysis('Không có dữ liệu để phân tích.');
      setLoading(false);
      return;
    }

    const prompt = `
      Dưới đây là dữ liệu đầu vào cho hệ thống đánh giá:
      Kết quả bài kiểm tra:
      ${questions.map((question, index) => `
        Câu ${index + 1}: ${question.question}
        Kết quả: ${answerState[index] ? 'Đúng' : 'Sai'}
      `).join('\n\n')}
      
      Dựa trên các thông tin này, hãy:
      1. Phân tích kết quả:
      - Xác định số câu trả lời đúng và sai.
      - Xác định các câu hỏi học sinh trả lời đúng và sai.
      - Tính toán điểm tổng cộng và tỷ lệ phần trăm đúng.
      2. Đánh giá kỹ năng:
      - Đánh giá các kỹ năng cụ thể dựa trên các câu hỏi đúng và sai (ví dụ: hiểu biết về phản ứng hóa học, khả năng cân bằng phương trình, hiểu biết về bảng tuần hoàn, v.v.).
      - Nhận diện các chủ đề mà học sinh có vẻ yếu kém hoặc mạnh mẽ.
      3. Phân loại năng lực:
      - Phân loại học sinh vào các mức năng lực khác nhau dựa trên kết quả (ví dụ: xuất sắc, giỏi, khá, trung bình, yếu).
      - Đưa ra lời khuyên cho học sinh về các chủ đề cần cải thiện và các tài liệu học tập có liên quan.
      4. Đưa ra nhận xét:
      - Viết một đoạn nhận xét chi tiết cho học sinh, bao gồm các điểm mạnh, điểm yếu, và đề xuất cách cải thiện.
    `;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const analysisText = await response.text();
      setAnalysis(analysisText);
      const userId = JSON.parse(localStorage.getItem('user'))?.email || 'defaultUser';
      const userDocRef = doc(db, 'users', userId);

      await setDoc(userDocRef, { analysis: analysisText }, { merge: true });
    } catch (error) {
      console.error('Lỗi khi phân tích kết quả:', error);
      setAnalysis('Đã xảy ra lỗi khi phân tích kết quả.');
    }
    
    setLoading(false);
  };

  const formatTextWithLineBreaks = (text) => {
    return text.split('\n').map((line, index) => {
      if (!line.trim()) return null;

      // Loại bỏ các ký hiệu đặc biệt
      const cleanedLine = line.replace(/^[\*\#\-\s]+/, '').replace(/\*\*/g, '');

      if (
          cleanedLine.startsWith('1.') || cleanedLine.startsWith('2.') ||
          cleanedLine.startsWith('3.') || cleanedLine.startsWith('4.') || cleanedLine.startsWith('5.') ||
          cleanedLine.startsWith('Phân tích kết quả') || cleanedLine.startsWith('Đánh giá kỹ năng:') ||
          cleanedLine.startsWith('Phân loại năng lực') || cleanedLine.startsWith('Đưa ra nhận xét') ||
          cleanedLine.startsWith('Nhận xét')
        ) {
        return <p key={index}><strong>{cleanedLine}</strong></p>;
      }
      return <p key={index}>{cleanedLine}</p>;
    });
  };

  return (
    <div className="analyze-results-page">
      <h1 className="title">Phân Tích Kết Quả</h1>
      <div className="chapter-select">
        <label htmlFor="chapter">Chọn Chương:</label>
        <select 
          id="chapter" 
          value={selectedChapter} 
          onChange={(e) => setSelectedChapter(e.target.value)}
        >
          <option value="">Chọn chương</option>
          {chapters.map((chapter) => (
            <option key={chapter} value={chapter}>{chapter}</option>
          ))}
        </select>
      </div>
      <button className="analyze-btn" onClick={handleAnalyzeResults} disabled={loading || !selectedChapter}>
        {loading ? 'Đang phân tích...' : 'Phân tích kết quả'}
      </button>
      {analysis && (
        <div className="analysis-content">
          <p>{formatTextWithLineBreaks(analysis)}</p>
        </div>
      )}
    </div>
  );
};

export default AnalyzeResults;