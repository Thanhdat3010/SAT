import React from 'react';
import { Collapse} from 'antd';
import "./Chapter6thongtin.css"
import Hinhchapter61 from "../Hinhchapter/Chapter6.1.png";
import Hinhchapter62 from "../Hinhchapter/Chapter6.2.png";
import Hinhchapter63 from "../Hinhchapter/Chapter6.3.png";
import Hinhchapter64 from "../Hinhchapter/Chapter6.4.png";


import Congthuc1Chapter6  from "../Hinhchapter/Congthuc1Chapter6.png"
import Congthuc2Chapter6  from "../Hinhchapter/Congthuc2Chapter6.png"
import Congthuc3Chapter6  from "../Hinhchapter/Congthuc3Chapter6.png"
import Congthuc4Chapter6  from "../Hinhchapter/Congthuc4Chapter6.png"
import Congthuc5Chapter6  from "../Hinhchapter/Congthuc5Chapter6.png"
import Congthuc6Chapter6  from "../Hinhchapter/Congthuc6Chapter6.png"
import Congthuc7Chapter6  from "../Hinhchapter/Congthuc7Chapter6.png"
import Congthuc8Chapter6  from "../Hinhchapter/Congthuc8Chapter6.png"
import Congthuc9Chapter6  from "../Hinhchapter/Congthuc9Chapter6.png"
import Congthuc10Chapter6  from "../Hinhchapter/Congthuc10Chapter6.png"
import Congthuc11Chapter6  from "../Hinhchapter/Congthuc11Chapter6.png"
import Congthuc12Chapter6  from "../Hinhchapter/Congthuc12Chapter6.png"
import Congthuc13Chapter6  from "../Hinhchapter/Congthuc13Chapter6.png"
import Congthuc14Chapter6  from "../Hinhchapter/Congthuc14Chapter6.png"

import Bang1Chapter5  from "../Hinhchapter/Bang1Chapter5.png"
import Bang2Chapter5  from "../Hinhchapter/Bang2Chapter5.png"
import Bang3Chapter5  from "../Hinhchapter/Bang3Chapter5.png"
import Bang4Chapter5  from "../Hinhchapter/Bang4Chapter5.png"
import Bang5Chapter5  from "../Hinhchapter/Bang5Chapter5.png"


const { Panel } = Collapse;
function Chapter6thongtin() {
    return (
      <div id="faq" className="block faqBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Phép cân bằng hóa học và giải pháp hóa học</h2>
          </div>
          <Collapse defaultActiveKey={['1']} size="large">
            <Panel header="I. Công thức hóa học" key="1" className='Panel'>
            <p></p>
            <img alt="Hình 5." src={Hinhchapter61} className="Hinhchapter"></img>
            <img src={Congthuc1Chapter6} className="math-image" alt="Math Formula"/>
            <img alt="Bảng 5" src={Bang1Chapter5} className="Bangchapter"></img>

            </Panel>
            <Panel header="II. Liên kết ion" key="2" className='Panel'>
           
            </Panel>
            <Panel header="III. Liên kết cộng hóa trị" key="3" className='Panel'>
           
            </Panel>
            <Panel header="IV. Liên kết Sigma và liên kết Pi" key="4" className='Panel'> 
            
            </Panel>
            <Panel header="V. Liên kết trong mạng tinh thể, liên kết cộng giá trị và loại kim liên kết" key="5" className='Panel'>
          
            </Panel>
            <Panel header="VI. Lực lưỡng cực và tính phân cực của phân tử" key="6" className='Panel'>
        
           </Panel>
            <Panel header="VII. Cấu trúc cộng hưởng" key="7" className='Panel'>
            
            </Panel>
            <Panel header="VIII. Lý thuyết VSEPR" key="8" className='Panel'>
        
            </Panel>
            <Panel header="IX. Liên kết Hydrogen" key="9" className='Panel'>
         

            </Panel>
            <Panel header="X. Lực Van der Waals (London Dispersion) " key="10" className='Panel'>
          
            </Panel>
            <Panel header="XI. Lực hút phân tử-ion" key="11" className='Panel'>
           
            </Panel>
            <Panel header="XII. Lực hút phân tử-ion" key="12" className='Panel'>
          
            
            </Panel>
            <Panel header="XIII. Xác định công thức hóa học" key="13" className='Panel'>
         

            </Panel>
            <Panel header="XIV. Phương pháp Stock" key="14" className='Panel'>
         
            </Panel>
          </Collapse>
        </div>
      </div>  
    );
  }

export default Chapter6thongtin;