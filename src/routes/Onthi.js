import React, { useState, useEffect } from 'react';
import { Layout, Menu, Progress } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import Chapter1cauhoi from '../Chaper/Chapter1cauhoi';
import Chapter2cauhoi from '../Chapter2/Chapter2cauhoi';
import './Onthi.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const { Sider, Content } = Layout;
const Onthi = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userEmail = user.email || 'defaultUser';  // Fallback to a default key if no user is logged in

  const [selectedChapter, setSelectedChapter] = useState(1);
  const [chapterCompletion, setChapterCompletion] = useState(() => {
    const saved = localStorage.getItem(userEmail + '_chapterCompletion');
    return saved ? JSON.parse(saved) : { 1: false, 4: false };
  });

  useEffect(() => {
    localStorage.setItem(userEmail + '_chapterCompletion', JSON.stringify(chapterCompletion));
  }, [chapterCompletion, userEmail]);

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
    const completedChapters = Object.values(chapterCompletion).filter(completed => completed).length;
    const totalChapters = Object.keys(chapterCompletion).length;
    return (completedChapters / totalChapters) * 100;
  };

  return (
    <Layout>
      <Navbar />
      <Layout className='layout'>
        <Sider  width={200}
        style={{ background: 'lightgray' }}
        breakpoint="lg"  // Breakpoint tại đây, ví dụ lg là màn hình lớn
        collapsedWidth="0"  // Thiết lập này sẽ ẩn hoàn toàn Sider khi màn hình nhỏ hơn breakpoint
        onBreakpoint={broken => {
         console.log(broken);
          }}>
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
              {selectedChapter === 4 && <Chapter2cauhoi onCompletion={() => handleChapterCompletion(3)} onReset={() => handleChapterReset(3)} />}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default Onthi;