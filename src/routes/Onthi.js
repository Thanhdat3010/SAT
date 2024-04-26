import React, { useState } from 'react';
import { Layout, Menu, Progress } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Chapter1cauhoi from '../Chaper/Chapter1cauhoi';
import Chapter2cauhoi from '../Chapter2/Chapter2cauhoi';
import './Onthi.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const { Sider, Content } = Layout;
const Onthi = () => {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [chapterCompletion, setChapterCompletion] = useState({
    1: false,
    3: false,
    // Add more chapters as needed
  });

  const handleMenuClick = (chapterNumber) => {
    setSelectedChapter(chapterNumber);
  };

  const handleChapterCompletion = (chapterNumber) => {
    const updatedCompletion = { ...chapterCompletion, [chapterNumber]: true };
    setChapterCompletion(updatedCompletion);
  };

  const calculateProgress = () => {
    const completedChapters = Object.values(chapterCompletion).filter((completed) => completed).length;
    const totalChapters = Object.keys(chapterCompletion).length;
    return (completedChapters / totalChapters) * 100;
  };

  return (
    <Layout>
      <Navbar />
      <Layout className='layout'>
        <Sider width={200} style={{ background: 'lightgray' }}>
          <Menu mode="inline" defaultSelectedKeys={['1']} selectedKeys={[String(selectedChapter)]} style={{ height: '100%', borderRight: 0 }}>
            <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Chapter 1">
              <Menu.Item key="1" onClick={() => handleMenuClick(1)}>
                Câu hỏi
              </Menu.Item>
              <Menu.Item key="2" onClick={() => handleMenuClick(2)}>
                Luyện đề
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="Chapter 2">
            <Menu.Item key="3" onClick={() => handleMenuClick(3)}>
                Câu hỏi
              </Menu.Item>
              <Menu.Item key="4" onClick={() => handleMenuClick(4)}>
              Luyện đề
            </Menu.Item>
            </Menu.SubMenu>
          
            <Menu.SubMenu key="sub3" icon={<NotificationOutlined />} title="Chapter 3">
              <Menu.Item key="5" onClick={() => handleMenuClick(5)}>
                Câu hỏi
              </Menu.Item>
              <Menu.Item key="6" onClick={() => handleMenuClick(6)}>
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
              {selectedChapter === 1 && <Chapter1cauhoi onCompletion={() => handleChapterCompletion(1)} />}
              {selectedChapter === 3 && <Chapter2cauhoi onCompletion={() => handleChapterCompletion(3)} />}

            </div>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default Onthi;