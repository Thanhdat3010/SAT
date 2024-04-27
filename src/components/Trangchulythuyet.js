import React from 'react';
import './Trangchulythuyet.css';
import image1 from '../assets/MatterandEnergy.png';
import image2 from '../assets/PhasesofMatter.png';
import image3 from '../assets/AtomicStructure.png';
import image4 from '../assets/ThePeriodicTableandPeriodicTrends.png';
import image5 from '../assets/Bonding.png';
import image6 from '../assets/StoichiometryandSolutionChemistry.png';
import image7 from '../assets/StoichiometryandSolutionChemistry.png';
import image8 from '../assets/ReactionRatesandChemicalEquilibrium.png';
import image9 from '../assets/AcidandBase.png';
import image10 from '../assets/StoichiometryandSolutionChemistry.png';
import image11 from '../assets/OrganicChemistry.png';
import image12 from '../assets/NuclearChemistry.png';
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
              <Meta title="Chapter 1: Vật chất và Năng lượng" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/Chapter2")} >
            <Card
              hoverable
              cover={<img alt="Phases of Matter" src={image2} />}
            >
              <Meta title="Chapter 2: Các pha của vật chất" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Atomic Structure" src={image3} />}
            >
              <Meta title="Chapter 3: Cấu trúc nguyên tử" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="The Periodic Table and Periodic Trends" src={image4} />}
            >
              <Meta title="Chapter 4: Bảng tuần hoàn và xu hướng tuần hoàn" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Bonding" src={image5} />}
            >
              <Meta title="Chapter 5: Liên Kết" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Stoichiometry and Solution Chemistry" src={image6} />}
            >
              <Meta title="Chapter 6: Phép cân bằng hóa học và giải pháp hóa học" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Test" src={image7} />}
            >
              <Meta title="Chapter 7" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Reaction Rates and Chemical Equilibrium" src={image8} />}
            >
              <Meta title="Chapter 8: Tốc độ phản ứng và cân bằng hóa học" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Acid and Base" src={image9} />}
            >
              <Meta title="Chapter 9: Acid và Base" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Test" src={image10} />}
            >
              <Meta title="Chapter 10" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Organic Chemistry" src={image11} />}
            >
              <Meta title="Chapter 11: Hóa học hữu cơ" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} onClick={() => navigate("/")}>
            <Card
              hoverable
              cover={<img alt="Nuclear Chemistry" src={image12} />}
            >
              <Meta title="Chapter 12: Hóa học hạt nhân" />
            </Card>
          </Col>
          
        </Row>
      </div>
    </div>
  );
}

export default Trangchulythuyet;
