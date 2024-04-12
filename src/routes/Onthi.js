import './Onthi.css';
import Navbar from '../components/Navbar';
import React from 'react';
import { Layout, Menu } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Footer from '../components/Footer';
import { Link, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Chapter1cauhoi from '../Chaper/Chapter1cauhoi';
const { Header, Content, Sider } = Layout;

const Onthi = () => {
  const [selectedChapter, setSelectedChapter] = useState(1);

  const handleMenuClick = (chapterNumber) => {
    setSelectedChapter(chapterNumber);
  };
  return (
    <Layout>
        <Navbar/>
        <div className='block contactBlock'>
      <div className='layout'>
      <Layout>
        <Sider width={200} style={{ background: 'lightgray' }}>
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} selectedKeys={[String(selectedChapter)]} style={{ height: '100%', borderRight: 0 }}>
            <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="Chapter 1">
              <Menu.Item key="1" onClick={() => handleMenuClick(1)}>
             Câu hỏi
              </Menu.Item>
              <Menu.Item key="2" onClick={() => handleMenuClick(2)}> 
              Đáp án và giải thích
              </Menu.Item>
             
            </Menu.SubMenu>
            <Menu.SubMenu key="sub2" icon={<LaptopOutlined />} title="Chapter 2">
            <Menu.Item key="3" onClick={() => handleMenuClick(3)}>
             Câu hỏi
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4" onClick={() => handleMenuClick(4)}> 
              Đáp án và giải thích
              </Menu.Item>
            <Menu.SubMenu key="sub3" icon={<NotificationOutlined />} title="Chapter 3">
            <Menu.Item key="5" onClick={() => handleMenuClick(5)}>
             Câu hỏi
              </Menu.Item>
              <Menu.Item key="6" onClick={() => handleMenuClick(6)}> 
              Đáp án và giải thích
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: '24px 0', minHeight: 280 }}>
          <div className='content-wrapper'>
          {selectedChapter === 1 && <Chapter1cauhoi />}
          </div>
          </Content>
        </Layout>
      </Layout>

      </div>
      </div>
      <Footer/>

    </Layout>
    
  );
};

export default Onthi;