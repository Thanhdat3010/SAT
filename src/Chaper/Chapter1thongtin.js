import React from 'react';
import './Chapter1.css';
import { Collapse} from 'antd';
import Hinhchapter1  from "../Hinhchapter/Chapter1.1.png"

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
            <p>Hóa học là nghiên cứu về <i>vật chất</i>, nghĩa là bất cứ thứ gì chiếm không gian và có khối lượng. <i>Khối lượng</i> (thước đo số lượng hạt trong một vật thể) không nên được hợp nhất với trọng lượng, đó là ảnh hưởng của trọng lực đến khối lượng. Bởi vì lực hấp dẫn có thể khác nhau, một vật thể có cùng khối lượng trên Trái đất như trên mặt trăng sẽ có trọng lượng thấp hơn trên mặt trăng vì có ít lực hấp dẫn hơn trên mặt trăng. Bởi vì vật chất có khối lượng và chiếm một <i>thể tích</i> (không gian) nhất định, <i>mật độ</i> cho bất kỳ loại vật chất nào cũng có thể được tính bằng phương trình: D = m / V. Các đơn vị thường được sử dụng để tính mật độ là gam (đối với khối lượng) và mililit (mL cho thể tích). Đôi khi đơn vị centimet khối (cm<sup>3</sup>) được sử dụng thay vì mili lít. Các khối lượng này là tương đương. Bạn sẽ thấy một ngoại lệ đối với quy tắc chung khi tính mật độ khí ở phần sau của cuốn sách này.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Đặt vấn đề:</b>&nbsp; <br/>
            Khối lượng riêng của một khối lập phương có chiều dài mỗi cạnh là 2,0 cm và nặng 6,0 gam là bao nhiêu?
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Giải pháp: </b>Vì chiều dài mỗi cạnh của hình lập phương này là 2,0 cm nên thể tích sẽ là chiều dài × chiều rộng × chiều cao. Đây là (2,0 cm)(2,0 cm)(2,0 cm), hoặc 8 cm<sup>3</sup>.Khối lượng là 6,0 gam. Thay thế vào phương trình D = m / V và bạn nhận được D = 6,0 gam / 8,0 cm<sup>3</sup>. Mật độ của chất rắn này là 0,75 gam / cm<sup>3</sup>.
            </p>
          </Panel>
          <Panel header="II. Hóa chất" key="2" className='Panel'>
            <p>Một chất có thể được định nghĩa là bất kỳ loại vật chất nào có tính chất và thành phần giống hệt nhau. Các chất được phân loại là nguyên tố hoặc hợp chất. Các nguyên tố không thể bị phân hủy về mặt hóa học, trong khi các hợp chất có thể bị phân hủy về mặt hóa học. Một nguyên tố được tạo thành từ một nguyên tử cụ thể, khối xây dựng cơ bản của vật chất. Các hợp chất được hình thành từ liên kết của hai hoặc nhiều nguyên tố. Xét phản ứng:
            <br/>
            CH<sub>4</sub> + 2O<sub>2</sub> → 2H<sub>2</sub>O + CO<sub>2</sub>. Phản ứng cho thấy các nguyên tố cacbon, hydro và oxy trong các hợp chất khác nhau. Phương trình hóa học cũng cho thấy các hợp chất thay đổi như thế nào trong quá trình phản ứng. Mặc dù các hợp chất ở bên trái mũi tên không giống với các hợp chất ở bên phải mũi tên nhưng các nguyên tố trong phản ứng vẫn là carbon, hydrogen và oxygen.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hỗn hợp là kết quả của sự kết hợp của các nguyên tố và/hoặc hợp chất. Trong một hỗn hợp:
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Các chất không kết hợp về mặt hóa học (mỗi chất giữ nguyên tính chất của nó).
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Tỷ lệ các chất có thể khác nhau.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Các chất có thể được tách thành các nguyên tố và/hoặc hợp chất ban đầu.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Hỗn hợp có thể được phân loại là đồng nhất (giống nhau) hoặc không đồng nhất (không giống nhau). Một ví dụ về hỗn hợp đồng nhất là sữa đồng nhất. Bạn không cần phải lắc sữa trước khi sử dụng vì tất cả các mẫu sữa đồng nhất sẽ giống nhau. Dung dịch là hỗn hợp đồng nhất của chất tan hòa tan trong dung môi và có thể được biểu diễn bằng một chất theo sau là ký hiệu (aq) để chứng tỏ chất đó đã tạo thành hỗn hợp đồng nhất với nước (dung dịch nước). Một ví dụ về hỗn hợp không đồng nhất là hỗn hợp cát trong nước. Cát chắc chắn sẽ lắng xuống đáy thùng cho dù bạn có khuấy hỗn hợp đến mức nào.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Đặt vấn đề:</b>&nbsp; <br/>
            Phân loại các chất sau thành nguyên tố, hợp chất hoặc hỗn hợp: nước muối, nước, argon, methane và iron.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Giải pháp: </b> Nước muối là hỗn hợp đồng nhất của nước và NaCl. Nước là hợp chất được tạo thành từ hydrogen và oxygen. Argon là một nguyên tố. Methane là hợp chất được tạo thành từ hydrogen và carbon. Iron là một nguyên tố.
            </p>
          </Panel>
          <Panel header="III. Tính chất hóa học và vật lý" key="3" className='Panel'>
            <p>Tất cả các chất đều có tính chất vật lý và hóa học. Tính chất vật lý là những tính chất có thể quan sát và đo lường được của các chất. Chúng bao gồm pha (rắn, lỏng hoặc khí), màu sắc, mùi, mật độ, điểm sôi hoặc điểm nóng chảy. Tính chất hóa học là tính chất được quan sát thấy khi một chất này phản ứng với các chất khác. Những thay đổi hóa học dẫn đến các chất có tính chất vật lý khác nhau. Ví dụ, khi iron (kim loại rắn, màu xám) phản ứng với khí oxygen (một loại khí không mùi, không màu) tạo ra Iron oxide hoặc rỉ sét (chất rắn có màu đỏ cam). Bạn cũng có thể lưu ý những thay đổi về mật độ, điểm nóng chảy và điểm sôi của iron, oxygen và Iron oxide.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Đặt vấn đề:</b>&nbsp; <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Phân loại những thay đổi sau đây thành những thay đổi vật lý hoặc hóa học: đốt một mảnh giấy, đập vỡ một viên phấn, làm tan chảy một khối nước đá và sự rỉ sét của một chiếc đinh sắt.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Giải pháp: </b>
            Đốt giấy làm thay đổi thành phần hóa học của giấy. Đập phấn là một sự thay đổi về thể chất; viên phấn vẫn là viên phấn đó, chỉ có những mảnh nhỏ hơn mà thôi. Làm tan chảy một khối nước đá không làm thay đổi thành phần của nước; đó là một sự thay đổi về thể chất. Rỉ đinh sắt là hiện tượng biến đổi hóa học; sắt bây giờ là một Iron oxide.
            </p>
          </Panel>
          <Panel header="IV. Năng lượng" key="4" className='Panel'>
            <p>Hóa học được định nghĩa là nghiên cứu về vật chất, nhưng năng lượng đóng một vai trò quan trọng trong hóa học. Năng lượng được định nghĩa là khả năng thực hiện công. Năng lượng được bảo toàn, tức là nó không được tạo ra hay bị phá hủy. Điều này có nghĩa là lượng năng lượng bị mất bởi một hệ thống luôn bằng lượng năng lượng thu được bởi hệ thống khác. Năng lượng cũng có thể được chuyển đổi từ dạng này sang dạng khác. Ví dụ, máy nướng bánh mì hoặc máy sấy tóc chuyển đổi năng lượng điện thành năng lượng nhiệt.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Đơn vị dùng để đo lượng năng lượng là jun hoặc calo. Hầu hết mọi người quen thuộc hơn với thuật ngữ calo. Đây không phải là vấn đề vì mối quan hệ đơn giản giữa hai đơn vị là một calo bằng 4,18 jun. Tỷ lệ này rất hữu ích trong việc thiết lập các vấn đề yêu cầu chuyển đổi đơn vị này sang đơn vị khác.
            </p>
          </Panel>
          <Panel header="V. Các loại năng lượng" key="5" className='Panel'>
            <p>Năng lượng được tìm thấy dưới nhiều hình thức. Như đã đề cập ở trên, năng lượng có thể tồn tại dưới dạng nhiệt hoặc điện. Các dạng năng lượng khác là âm thanh, ánh sáng, năng lượng hóa học và năng lượng hạt nhân. Có lẽ hai dạng năng lượng quan trọng nhất trong hóa học là thế năng và động năng. Năng lượng tiềm năng là năng lượng được lưu trữ. Một ví dụ điển hình là một người giơ búa lên, sẵn sàng đóng đinh.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Cái búa có khả năng rơi vào đầu móng tay. Khi chiếc búa được vung xuống và di chuyển trong không khí, thế năng được chuyển thành động năng hoặc năng lượng chuyển động. Vì toàn bộ năng lượng được bảo toàn nên thế năng tích trữ trong búa chuyển thành động năng. Khi nhấc búa lên để đập vào chiếc đinh lần nữa, chuyển động của búa hướng lên trên sẽ trở thành thế năng dự trữ cho cú đập tiếp theo vào đầu đinh. Một điều cần nhớ trong hóa học là thiên nhiên thích trạng thái năng lượng thấp hơn. Quy tắc này sẽ được ghi chú nhiều lần trong bài đánh giá hóa học này.
            </p>
          </Panel>
          <Panel header="VI. Phản ứng thu nhiệt và tỏa nhiệt" key="6" className='Panel'>
            <p>Năng lượng cũng có thể được hấp thụ hoặc giải phóng trong một phản ứng. Khi năng lượng giải phóng nhiều hơn năng lượng hấp thụ thì phản ứng được gọi là phản ứng tỏa nhiệt. Khi năng lượng được hấp thụ nhiều hơn năng lượng giải phóng, phản ứng được gọi là phản ứng thu nhiệt. Có thể sử dụng biểu đồ thế năng để vẽ đồ thị những thay đổi này như trong Hình 1.1.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Tỏa nhiệt—năng lượng được giải phóng nhiều hơn năng lượng được hấp thụ.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            A + B → C + D + Nhiệt
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Thu nhiệt—năng lượng được hấp thụ nhiều hơn năng lượng giải phóng.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            A + B +  Nhiệt → C + D
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Lưu ý rằng năng lượng luôn được hấp thụ và giải phóng trong một phản ứng. Lượng tương đối là nguyên nhân gây ra phản ứng thu nhiệt hoặc tỏa nhiệt. Ngoài ra, cần có năng lượng để bắt đầu phản ứng. Đây được gọi là năng lượng kích hoạt (Ea).
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Cuối cùng, hãy chú ý đến sự khác biệt về năng lượng của chất phản ứng và sản phẩm.
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Sự thay đổi năng lượng của chất phản ứng hoặc sản phẩm được gọi là nhiệt của phản ứng. Điều này được ký hiệu bằng ký hiệu ΔH. Biểu tượng này tượng trưng cho sự thay đổi năng lượng nhiệt, hoặc entanpy. Cách đơn giản để ghi nhớ cách tính sự thay đổi entanpy là sử dụng công cụ ghi nhớ này:
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            ΔH = thế năng của sản phẩm trừ đi thế năng của chất phản ứng
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            hoặc
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            ΔH = PEP − PER (delta H bằng “hạt tiêu”)
            <br/>
            <img alt="img" src={Hinhchapter1} className="Hinhchapter1"></img>
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <b>Hình 1.1 Hai sơ đồ thế năng</b>
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            Khi ΔH có giá trị dương, phản ứng được gọi là phản ứng thu nhiệt (nhập nhiệt). Khi ΔH có giá trị âm, phản ứng được cho là tỏa nhiệt (tỏa nhiệt).
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Đặt vấn đề:</b>&nbsp; <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Trong một phản ứng, thế năng của các chất phản ứng là 150 jun/mol và thế năng của các sản phẩm là 400 jun/mol. Nhiệt của phản ứng cho phản ứng này là gì? Điều này chứng tỏ một quá trình thu nhiệt hay tỏa nhiệt?
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Giải pháp: </b>
            <br/>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            Sử dụng PEP − PER! ΔH = 400 jun/mol − 150 jun/mol = +250 jun/mol. Vì dấu dương nên phản ứng là thu nhiệt.

            </p>
          </Panel>
        </Collapse>
       
      </div>
    </div>  
  );
}

export default Chapter1thongtin;