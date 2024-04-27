import React from 'react';
import './Chapter2thongtin.css';
import { Collapse} from 'antd';
import Hinhchapter1  from "../Hinhchapter/Chapter1.1.png"

const { Panel } = Collapse;

function Chapter2thongtin() {
    return (
      <div id="faq" className="block faqBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>CÁC PHA CỦA VẬT CHẤT</h2>
          </div>
          <Collapse defaultActiveKey={['1']} size="large">
            <Panel header="I. Khí" key="1" className='Panel'>
            <p>Các đặc tính cơ bản của khí bao gồm:
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Khí không có thể tích xác định và có thể bị nén.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Khí không có hình dạng xác định và lấy hình dạng của bình chứa chúng.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Các phân tử khí được phân tán rộng rãi.
            </p>
            <p>Ngoài các đặc tính cơ bản này, có nhiều lý thuyết và định luật khác mô tả cách khí thể hiện hành vi. Đây là trọng tâm chính của chương này.</p>

            </Panel>
            <Panel header="II. Lý thuyết về phân tử động học" key="2" className='Panel'>
            <p>Hành vi của khí còn có thể được giải thích thêm bằng Lý thuyết phân tử động học, hay KMT. KMT mô tả những điều sau:
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Các phân tử khí là các hạt riêng lẻ di chuyển theo đường thẳng và ngẫu nhiên. Điều này sẽ tiếp tục cho đến khi chúng va chạm hoặc bị tác động bởi một lực khác.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Các phân tử khí liên tục va chạm và truyền năng lượng trong suốt những va chạm này. Trong một mẫu khí cô lập, năng lượng tổng là bảo toàn.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Thể tích của từng phân tử khí là không đáng kể so với thể tích mà chúng chiếm.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Không xem xét sự tồn tại của lực hấp dẫn giữa các phân tử khí.
            </p>
            <p>Những nguyên lý này giúp chúng ta hiểu và dự đoán hành vi quang học của khí bằng cách xem xét những chuyển động và tương tác vi mô của các hạt riêng lẻ.</p>
            </Panel>
            <Panel header="III. Áp lực" key="3" className='Panel'>
            <p>Các khí tạo ra áp lực khi va chạm vào các vật khác. Áp lực được tạo ra bởi khí có thể được định nghĩa là lượng lực tác động lên một diện tích. Bất kỳ người nào đã xem hoặc nghe một bản tin thời tiết có thể nhớ đến việc nghe về áp suất khí quyển hoặc áp suất không khí. Những áp suất này có thể khác nhau khi hệ thống áp suất cao và áp suất thấp di chuyển qua một khu vực cụ thể. Có hai thiết bị được sử dụng để đo áp suất tạo ra bởi khí, đó là cột thủy ngân và bồn đo áp suất. Cả hai thiết bị đều có thể hữu ích tùy thuộc vào tình huống.</p>
            <p>
            Cột thủy ngân (xem Hình 2.1) sử dụng một cột thủy ngân trong suốt được đổ thủy ngân vào một bình chứa chất thủy ngân. Khi bạn di chuyển lên độ cao, mức thủy ngân trong cột thủy ngân giảm vì có ít không khí ở độ cao cao hơn. Trung bình, chiều cao của thủy ngân trong cột là 760 milimét so với mức thủy ngân trong bình chứa. Áp suất trung bình này được gọi là áp suất tiêu chuẩn hoặc áp suất khí quyển bình thường.
            Có nhiều đơn vị có thể được sử dụng để đo áp suất không khí. Ví dụ, milimét có thể được chuyển đổi thành inch; do đó, áp suất tiêu chuẩn 760 mm Hg cũng có thể được ghi nhận là 30.0 inch thủy ngân. Inch thủy ngân là đơn vị được sử dụng cho các bản tin thời tiết ở Hoa Kỳ. Ba đơn vị phổ biến khác tương ứng với 760 mm Hg là:
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Khí không có thể tích xác định và có thể bị nén.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Khí không có hình dạng xác định và lấy hình dạng của bình chứa chúng.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Các phân tử khí được phân tán rộng rãi.
            </p>
            <p>Một đơn vị cuối cùng được gặp khi đo áp suất là pound trên mỗi inch vuông (psi). Đơn vị này thường được dành cho việc đo áp suất không khí trong lốp xe tại các trạm xăng ở Hoa Kỳ. Bồn đo áp suất được sử dụng để xác định áp suất của một khí bị chận trong một bình chứa. Hình dáng và mở đầu ở phía trên của bồn đo áp suất cho phép một lượng thủy ngân nhất định được chuyển động tùy thuộc vào áp suất khí quyển và áp suất của khí trong bình chứa. Có ba tình huống cần xem xét khi sử dụng bồn đo áp suất: áp suất khí bằng với áp suất khí quyển, áp suất khí lớn hơn áp suất khí quyển, và áp suất khí nhỏ hơn áp suất khí quyển. Các tình huống này có thể thấy trong Hình 2.2.</p>
            </Panel>
            <Panel header="IV. Định luật Boyle" key="4" className='Panel'>
            <p>Robert Boyle đã thực hiện các thí nghiệm để xem làm thế nào việc thay đổi áp suất lên một khí sẽ ảnh hưởng đến thể tích của nó. Thí nghiệm của ông cho thấy rằng khi áp suất lên khí tăng, thể tích mà khí chiếm giảm đi. Trong Hình 2.3, biểu đồ bên trái thể hiện một piston không tạo ra áp lực lớn lên một mẫu khí. Biểu đồ ở giữa cho thấy piston đã được nhấn xuống, làm tăng áp suất lên khí. Đáp ứng với sự tăng áp suất, thể tích của khí đã giảm.</p>
            <p>Boyle đã xác định được rằng, ở nhiệt độ không đổi, có một mối quan hệ nghịch đảo giữa áp suất và thể tích. Nghĩa là, khi giá trị của một yếu tố tăng, giá trị của yếu tố kia giảm. Đồ thị trong Hình 2.3 cho thấy mối quan hệ toán học giữa áp suất và thể tích. Phương trình P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub> có thể được sử dụng để thực hiện các tính toán bằng Định luật Boyle để xác định thể tích cuối cùng của một khí sau khi nó đã trải qua sự thay đổi áp suất.</p>
            <p><b>Bài toán:</b></p>
            <p>Một khí chiếm thể tích 24.79 lít và áp suất lên nó tăng từ 760 torr lên 1520 torr. Thể tích mới là bao nhiêu? Tại sao câu trả lời của bạn hợp lý?</p>
            <p><b>Giải pháp:</b> Thể tích ban đầu của khí là 24.79 lít (V<sub>1</sub>) ở áp suất ban đầu là 760 torr (P<sub>1</sub>). Áp suất mới là 1520 torr (P<sub>2</sub>).
            <br/>
            Sử dụng phương trình P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>, chúng ta sắp xếp lại để giải cho thể tích mới sao cho phương trình trông như P<sub>1</sub>V<sub>1</sub>/P<sub>2</sub> = V<sub>2</sub>.
            
            </p>
            </Panel>
            <Panel header="V. Định luật Charles" key="5" className='Panel'>
              {/* Nội dung cho đề mục "Định luật Charles" */}
            </Panel>
            <Panel header="VI. Nhiệt độ" key="6" className='Panel'>
              {/* Nội dung cho đề mục "Nhiệt độ" */}
            </Panel>
            <Panel header="VII. Nhiệt độ và áp suất tiêu chuẩn" key="7" className='Panel'>
              {/* Nội dung cho đề mục "Nhiệt độ và áp suất tiêu chuẩn" */}
            </Panel>
            <Panel header="VIII. Động năng trung bình của khí" key="8" className='Panel'>
              {/* Nội dung cho đề mục "Động năng trung bình của khí" */}
            </Panel>
            <Panel header="IX. Định luật khí hỗn hợp" key="9" className='Panel'>
              {/* Nội dung cho đề mục "Định luật khí hỗn hợp" */}
            </Panel>
            <Panel header="X. Định luật áp suất riêng của Dalton" key="10" className='Panel'>
              {/* Nội dung cho đề mục "Định luật áp suất riêng của Dalton" */}
            </Panel>
            <Panel header="XI. Định luật Avogadro" key="11" className='Panel'>
              {/* Nội dung cho đề mục "Định luật Avogadro" */}
            </Panel>
            <Panel header="XII. Định luật Diffusion/Effusion của Graham và Mật độ của Khí" key="12" className='Panel'>
              {/* Nội dung cho đề mục "Định luật Diffusion/Effusion của Graham" */}
            </Panel>
            
            <Panel header="XIII. Định luật Khí lý tưởng - Liên quan đến Áp suất, Thể tích, Nhiệt độ và Mol" key="13" className='Panel'>
              {/* Nội dung cho đề mục "Định luật Khí lý tưởng" */}
            </Panel>
            <Panel header="XIV. Chất lỏng" key="14" className='Panel'>
              {/* Nội dung cho đề mục "Chất lỏng" */}
            </Panel>
            <Panel header="XV. Điểm sôi" key="15" className='Panel'>
              {/* Nội dung cho đề mục "Điểm sôi" */}
            </Panel>
            <Panel header="XVI. Chất rắn" key="16" className='Panel'>
              {/* Nội dung cho đề mục "Chất rắn" */}
            </Panel>
            <Panel header="XVII. Sự thăng hoa và sự lắng đọng" key="17" className='Panel'>
              {/* Nội dung cho đề mục "Sự thăng hoa và sự lắng đọng" */}
            </Panel>
            <Panel header="XVIII. Các sự thay đổi của pha" key="18" className='Panel'>
              {/* Nội dung cho đề mục "Các sự thay đổi của pha" */}
            </Panel>
          </Collapse>
        </div>
      </div>  
    );
  }

export default Chapter2thongtin;