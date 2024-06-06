import React, { useState, useEffect } from 'react';
import { Layout, Menu, Progress } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import Chapter1cauhoi from '../Chaper/Chapter1cauhoi';
import Chapter2cauhoi from '../Chapter2/Chapter2cauhoi';
import './Onthi.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { db } from '../components/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const { Sider, Content } = Layout;

const Onthi = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userEmail = user.email || 'defaultUser';

  const [selectedChapter, setSelectedChapter] = useState(1);
  const [chapterCompletion, setChapterCompletion] = useState(null);
  const chapterCompletionDocRef = doc(db, 'users', userEmail, 'chapterCompletion', 'data');

  useEffect(() => {
    const fetchChapterCompletion = async () => {
      const docSnap = await getDoc(chapterCompletionDocRef);
      if (docSnap.exists()) {
        setChapterCompletion(docSnap.data());
      } else {
        // Nếu dữ liệu không tồn tại trong Firebase, bạn có thể sử dụng dữ liệu từ Local Storage hoặc giá trị mặc định khác
        const defaultCompletion = { 1: false, 4: false }; // Hoặc bạn có thể lấy từ Local Storage
        setChapterCompletion(defaultCompletion);
      }
    };
  
    fetchChapterCompletion();
  }, [chapterCompletionDocRef]);

  const saveChapterCompletion = async (completion) => {
    await setDoc(chapterCompletionDocRef, completion);
  };

  useEffect(() => {
    if (chapterCompletion) {
      saveChapterCompletion(chapterCompletion);
    }
  }, [chapterCompletion]);

  const handleMenuClick = (chapterNumber) => {
    setSelectedChapter(chapterNumber);
  };

  const handleChapterCompletion = (chapterNumber) => {
    const updatedCompletion = { ...chapterCompletion, [chapterNumber]: true };
    setChapterCompletion(updatedCompletion);
  };

  const handleChapterReset = (chapterNumber) => {
    const updatedCompletion = { ...chapterCompletion, [chapterNumber]: false };
    setChapterCompletion(updatedCompletion);
  };

  const calculateProgress = () => {
    if (!chapterCompletion) {
      return 0;
    }
    const completedChapters = Object.values(chapterCompletion).filter(completed => completed).length;
    const totalChapters = Object.keys(chapterCompletion).length;
    return (completedChapters / totalChapters) * 100;
  };

  return (
    <Layout>
      <Navbar />
      <Layout className='layout'>
        <Sider
          width={200}
          style={{ background: 'lightgray' }}
          breakpoint="lg"
          collapsedWidth="0"
        >
          <Menu mode="inline" defaultSelectedKeys={['1']} selectedKeys={[String(selectedChapter)]} style={{ height: '100%', borderRight: 0 }}>
            <Menu.SubMenu key="sub1" icon={<BookOutlined />} title="Chapter 1">
              <Menu.Item key="1" onClick={() => handleMenuClick(1)}>
                Ôn tập
              </Menu.Item>
              <Menu.Item key="2" onClick={() => handleMenuClick(2)}>
                Questions
              </Menu.Item>
              <Menu.Item key="3" onClick={() => handleMenuClick(3)}>
                Luyện đề
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<BookOutlined />} title="Chapter 2">
              <Menu.Item key="4" onClick={() => handleMenuClick(4)}>
                Ôn tập
              </Menu.Item>
              <Menu.Item key="5" onClick={() => handleMenuClick(5)}>
                Questions
              </Menu.Item>
              <Menu.Item key="6" onClick={() => handleMenuClick(6)}>
                Luyện đề
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub3" icon={<BookOutlined />} title="Chapter 3">
              <Menu.Item key="7" onClick={() => handleMenuClick(7)}>
                Ôn tập
              </Menu.Item>
              <Menu.Item key="8" onClick={() => handleMenuClick(8)}>
                Questions
              </Menu.Item>
              <Menu.Item key="9" onClick={() => handleMenuClick(9)}>
                Luyện đề
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '24px 0', minHeight: 280 }}>
            <div className='progress-bar'>
              <Progress percent={calculateProgress()} status="active" />
            </div>
            <div className='content-wrapper'>
              {selectedChapter === 1 && <Chapter1cauhoi onCompletion={() => handleChapterCompletion(1)} onReset={() => handleChapterReset(1)} />}
              {selectedChapter === 4 && <Chapter2cauhoi onCompletion={() => handleChapterCompletion(4)} onReset={() => handleChapterReset(4)} />}
              {/* Add more chapters here */}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default Onthi;