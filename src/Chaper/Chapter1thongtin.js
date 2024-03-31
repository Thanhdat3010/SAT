import React from 'react';
import './Chapter1.css';
import { Collapse} from 'antd';
const { Panel } = Collapse;


function Chapter1thongtin() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>VẬT CHẤT VÀ NĂNG LƯỢNG</h2>
        </div>
        <Collapse defaultActiveKey={['1']} size="large" >
          <Panel header="I. Vật chất" key="1" className='Panel'>
            <p>Hóa học là nghiên cứu về vật chất, nghĩa là bất cứ thứ gì chiếm không gian và có khối lượng. Khối lượng (thước đo số lượng hạt trong một vật thể) không nên được hợp nhất với trọng lượng, đó là ảnh hưởng của trọng lực đến khối lượng. Bởi vì lực hấp dẫn có thể khác nhau, một vật thể có cùng khối lượng trên Trái đất như trên mặt trăng sẽ có trọng lượng thấp hơn trên mặt trăng vì có ít lực hấp dẫn hơn trên mặt trăng. Bởi vì vật chất có khối lượng và chiếm một thể tích (không gian) nhất định, mật độ cho bất kỳ loại vật chất nào cũng có thể được tính bằng phương trình: D = m / V. Các đơn vị thường được sử dụng để tính mật độ là gam (đối với khối lượng) và mililit (mL cho thể tích). Đôi khi đơn vị centimet khối (cm3) được sử dụng thay vì mili lít. Các khối lượng này là tương đương. Bạn sẽ thấy một ngoại lệ đối với quy tắc chung khi tính mật độ khí ở phần sau của cuốn sách này.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>Đặt vấn đề:</b>&nbsp; <br/>
            Khối lượng riêng của một khối lập phương có chiều dài mỗi cạnh là 2,0 cm và nặng 6,0 gam là bao nhiêu?
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>Giải pháp: </b>Vì chiều dài mỗi cạnh của hình lập phương này là 2,0 cm nên thể tích sẽ là chiều dài × chiều rộng × chiều cao. Đây là (2,0 cm)(2,0 cm)(2,0 cm), hoặc 8 cm3.Khối lượng là 6,0 gam. Thay thế vào phương trình D = m / V và bạn nhận được D = 6,0 gam / 8,0 cm3. Mật độ của chất rắn này là 0,75 gam / cm3.
            </p>
          </Panel>
          <Panel header="II. Hóa chất" key="2" className='Panel'>
            <p>Một chất có thể được định nghĩa là bất kỳ loại vật chất nào có tính chất và thành phần giống hệt nhau. Các chất được phân loại là nguyên tố hoặc hợp chất. Các nguyên tố không thể bị phân hủy về mặt hóa học, trong khi các hợp chất có thể bị phân hủy về mặt hóa học. Một nguyên tố được tạo thành từ một nguyên tử cụ thể, khối xây dựng cơ bản của vật chất. Các hợp chất được hình thành từ liên kết của hai hoặc nhiều nguyên tố. Xét phản ứng:
            <br/>
            CH4 + 2O2 → 2H2O + CO2. Phản ứng cho thấy các nguyên tố cacbon, hydro và oxy trong các hợp chất khác nhau. Phương trình hóa học cũng cho thấy các hợp chất thay đổi như thế nào trong quá trình phản ứng. Mặc dù các hợp chất ở bên trái mũi tên không giống với các hợp chất ở bên phải mũi tên nhưng các nguyên tố trong phản ứng vẫn là carbon, hydrogen và oxygen.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hỗn hợp là kết quả của sự kết hợp của các nguyên tố và/hoặc hợp chất. Trong một hỗn hợp:
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;•&nbsp;Các chất không kết hợp về mặt hóa học (mỗi chất giữ nguyên tính chất của nó).
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;•&nbsp;Tỷ lệ các chất có thể khác nhau.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;•&nbsp;Các chất có thể được tách thành các nguyên tố và/hoặc hợp chất ban đầu.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Hỗn hợp có thể được phân loại là đồng nhất (giống nhau) hoặc không đồng nhất (không giống nhau). Một ví dụ về hỗn hợp đồng nhất là sữa đồng nhất. Bạn không cần phải lắc sữa trước khi sử dụng vì tất cả các mẫu sữa đồng nhất sẽ giống nhau. Dung dịch là hỗn hợp đồng nhất của chất tan hòa tan trong dung môi và có thể được biểu diễn bằng một chất theo sau là ký hiệu (aq) để chứng tỏ chất đó đã tạo thành hỗn hợp đồng nhất với nước (dung dịch nước). Một ví dụ về hỗn hợp không đồng nhất là hỗn hợp cát trong nước. Cát chắc chắn sẽ lắng xuống đáy thùng cho dù bạn có khuấy hỗn hợp đến mức nào.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>Đặt vấn đề:</b>&nbsp; <br/>
            Phân loại các chất sau thành nguyên tố, hợp chất hoặc hỗn hợp: nước muối, nước, argon, methane và iron.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<b>Giải pháp: </b> Nước muối là hỗn hợp đồng nhất của nước và NaCl. Nước là hợp chất được tạo thành từ hydrogen và oxygen. Argon là một nguyên tố. Methane là hợp chất được tạo thành từ hydrogen và carbon. Iron là một nguyên tố.
            </p>
          </Panel>
          <Panel header="III. Tính chất hóa học và vật lý" key="3" className='Panel'>
            <p>Access your data anytime, anywhere with our cloud-based solution. No more limitations, enjoy seamless access to your information from any device with internet connection. Say goodbye to traditional setup, embrace the future of tech with us.</p>
          </Panel>
          <Panel header="IV. Năng lượng" key="4" className='Panel'>
            <p>Maximize your productivity and efficiency with our app's ability to handle multiple tasks seamlessly. Say goodbye to juggling between multiple windows and programs and hello to effortless multitasking.</p>
          </Panel>
          <Panel header="V. Các loại năng lượng" key="5" className='Panel'>
            <p>Simplify your life with our easy-to-use password change feature. Securely update your password in just a few clicks, ensuring maximum protection for your data and peace of mind for you. Try it now!</p>
          </Panel>
          <Panel header="VI. Phản ứng thu nhiệt và tỏa nhiệt" key="6" className='Panel'>
            <p>Manage all your accounts in one place with our streamlined and secure account management system. Easily update personal information, change passwords, and track account activity. Simplify your life and stay in control with our user-friendly platform.</p>
          </Panel>
        </Collapse>
       
      </div>
    </div>  
  );
}

export default Chapter1thongtin;