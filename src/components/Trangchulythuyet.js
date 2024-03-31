import React from 'react';
import './Trangchulythuyet.css';
import image1 from '../assets/MatterandEnergy.png';
import image2 from '../assets/MatterandEnergy.png';
import image3 from '../assets/AtomicStructure.png';
import image4 from '../assets/MatterandEnergy.png';
import image5 from '../assets/MatterandEnergy.png';
import image6 from '../assets/MatterandEnergy.png';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function Trangchulythuyet() {
    const navigate = useNavigate()
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Chủ đề</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/Chapter1")}>
            <Card
              hoverable
              cover={<img alt="Matter and Energy" src={image1} />}
            >
              <Meta title="Vật chất và Năng lượng" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")} >
            <Card
              hoverable
              cover={<img alt="Phases of Matter" src={image2} />}
            >
              <Meta title="Các pha của vật chất" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Atomic Structure" src={image3} />}
            >
              <Meta title="Cấu trúc nguyên tử" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="The Periodic Table and Periodic Trends" src={image4} />}
            >
              <Meta title="Bảng tuần hoàn và xu hướng tuần hoàn" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Bonding" src={image5} />}
            >
              <Meta title="Liên Kết" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Stoichiometry and Solution Chemistry" src={image6} />}
            >
              <Meta title="Phép cân bằng hóa học và giải pháp hóa học" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Test" src={image6} />}
            >
              <Meta title="Chapter 7" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Reaction Rates and Chemical Equilibrium" src={image6} />}
            >
              <Meta title="Tốc độ phản ứng và cân bằng hóa học" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Acid and Base" src={image6} />}
            >
              <Meta title="Acid và Base" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Test" src={image6} />}
            >
              <Meta title="Chapter 10" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Organic Chemistry" src={image6} />}
            >
              <Meta title="Hóa học hữu cơ" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Nuclear Chemistry" src={image6} />}
            >
              <Meta title="Hóa học hạt nhân" />
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
}

export default Trangchulythuyet;