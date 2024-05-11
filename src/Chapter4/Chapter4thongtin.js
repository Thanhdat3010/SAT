import React from 'react';
import { Collapse} from 'antd';
import "./Chapter4thongtin.css"
import Hinhchapter32 from "../Hinhchapter/Chapter3.2.png";
import Congthuc4Chapter3  from "../Hinhchapter/Congthuc4Chapter3.png"
import Bang1Chapter4  from "../Hinhchapter/Bang1Chapter4.png"
import Bang2Chapter4  from "../Hinhchapter/Bang2Chapter4.png"
import Bang3Chapter4  from "../Hinhchapter/Bang3Chapter4.png"


const { Panel } = Collapse;
function Chapter4thongtin() {
    return (
      <div id="faq" className="block faqBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Bảng tuần hoàn và xu hướng tuần hoàn</h2>
          </div>
          <Collapse defaultActiveKey={['1']} size="large">
            <Panel header="I. Lịch sử của bảng tuần hoàn" key="1" className='Panel'>
            <p>Bảng tuần hoàn đã được phát triển và hoàn thiện trong nhiều năm. Mặc dù có rất nhiều nhà khoa học có đóng góp cho bảng tuần hoàn nhưng hai nhà khoa học được công nhận nhiều nhất là Dmitry Mendeleyev và Henry Moseley. Mendeleyev, mặc dù bảng tuần hoàn của ông thiếu các thành phần, nhưng lại được ghi nhận nhiều nhất về bảng tuần hoàn và các xu hướng tuần hoàn. Sau đó, Moseley sử dụng một kỹ thuật gọi là tinh thể học tia X và phát hiện ra ý tưởng về số nguyên tử. Khám phá này là cơ sở cho việc sắp xếp bảng tuần hoàn hiện đại. Đã có những bảng tuần hoàn được đề xuất dựa trên khối lượng nguyên tử, nhưng những cách sắp xếp này không đủ vì các đồng vị có thể tồn tại đối với một nguyên tố.</p>
            <img alt="Hình 3.2" src={Hinhchapter32} className="Hinhchapter"></img>

            </Panel>
            <Panel header="II. Sự sắp xếp của bảng tuần hoàn" key="2" className='Panel'>
            <p>Bảng tuần hoàn chứa một số chu kỳ và nhóm. Các khoảng thời gian là các hàng ngang. Chúng được đánh số từ 1 đến 7. Các nhóm (hoặc họ) là các cột dọc. Chúng được đánh số từ 1 đến 18. Khi chúng ta di chuyển qua các họ hoặc các thời kỳ, chúng ta có thể khám phá ra nhiều xu hướng xảy ra trong bảng tuần hoàn. Điều này được gọi là Luật định kỳ. Bạn sẽ được cung cấp bảng tuần hoàn khi làm bài kiểm tra SAT II: Hóa học. LƯU Ý: Bảng tuần hoàn hoàn chỉnh được cung cấp trong Phụ lục 3 ở cuối cuốn sách này.</p>
            </Panel>
            <Panel header="III. Cân bằng" key="3" className='Panel'>
            <p>Hai loại nguyên tố trong bảng tuần hoàn là kim loại và phi kim.</p>
            <p>Thuộc tính của chúng được tóm tắt trong biểu đồ dưới đây:</p>
            <img alt="Bảng 1" src={Bang1Chapter4} className="Bangchapter"></img>
            <p>Các bán kim loại, hay á kim, được biết là có một số tính chất của kim loại và một số tính chất của phi kim. Các bán kim loại là B, Si, Ge, As, Sb, Te và At . Chúng được tô đậm trong bảng tuần hoàn từng phần ở Hình 4.1.</p>
            <img alt="Bảng 2" src={Bang2Chapter4} className="Bangchapter"></img>
            <p>Các nguyên tố nằm ở bên trái của bán kim loại là kim loại; những thứ ở bên phải của bán kim loại là phi kim loại. Việc xác định một nguyên tố là kim loại, phi kim hoặc bán kim là rất quan trọng trong việc xác định các xu hướng định kỳ và xác định các loại liên kết mà các nguyên tử sẽ hình thành với nhau.</p>
            <p><b>Vấn đề:</b></p>
            <p>Xác định các nguyên tố sau là kim loại, phi kim hoặc bán kim loại: potassium, calcium, bromine, hydrogen và neon.</p>
            <p><b>Lời giải:</b> K và Ca nằm ở bên trái bảng tuần hoàn và là kim loại. Br và Ne nằm ở phía bên phải của bán kim loại và là phi kim. Hydrogen, mặc dù nằm ở phía bên trái của bảng tuần hoàn, nhưng lại là một phi kim. Nếu bạn vẫn chưa bị thuyết phục về hydrogen, hãy tự hỏi bản thân về các tính chất của khí hydrogen và xem những đặc tính đó phù hợp ở đâu trong biểu đồ so sánh ở trang 1.77.</p>
            </Panel>
            <Panel header="IV. Gia đình" key="4" className='Panel'> 
            <p>Một số nhóm hoặc họ được đặt những cái tên đặc biệt và có những đặc tính nhất định cần được giải quyết. Nhưng trước tiên bạn phải hiểu tại sao các phần tử lại được xếp vào cùng một nhóm. Hãy nghĩ về một gia đình mà bạn biết, không phải gia đình hóa học mà là gia đình nhân loại. Trẻ em trông giống cha mẹ của chúng. Chúng học cách làm mọi việc từ cha mẹ và làm theo cách tương tự. Điều tương tự cũng đúng với các nguyên tố trong các họ của bảng tuần hoàn; họ phản ứng theo cùng một cách (phần lớn). Như bạn đã học ở chương trước, mỗi nguyên tố có một số electron hóa trị nhất định. Như bạn sẽ học trong chương tiếp theo, chính số electron hóa trị của một nguyên tử quyết định khả năng phản ứng hóa học của nó. Bởi vì các nguyên tố trong một họ có cùng số electron hóa trị nên chúng sẽ có khả năng phản ứng hóa học tương tự nhau. Ví dụ, Na và K có thể được so sánh về cấu hình electron và các ion được hình thành: Na - 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup><b>3s<sup>1</sup></b> và K - 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup><b>4s<sup>1</sup></b>.</p>
            <p>Cả hai nguyên tử đều có 1 electron hóa trị và sẽ mất đi một electron này để tạo thành các ion có điện tích 1+. Điện tích tương tự này có nghĩa là cả hai nguyên tố đều có khả năng phản ứng hóa học tương tự nhau.</p>
            <p>Các gia đình và nhóm quan trọng được liệt kê dưới đây kèm theo các đặc điểm quan trọng của chúng. Những đặc điểm này sẽ trở nên quen thuộc hơn với bạn khi bạn nghiên cứu chương về sự gắn kết.</p>
            <img alt="Bảng 3" src={Bang3Chapter4} className="Bangchapter"></img>
            <p>Có những xu hướng định kỳ quan trọng xảy ra xuyên suốt các thời kỳ và lên xuống của các nhóm. Tốt nhất bạn nên nhớ xu hướng của một vài yếu tố. Điều này sẽ đơn giản hóa các xu hướng rất nhiều và làm cho các câu hỏi về xu hướng định kỳ trở nên dễ trả lời nhất trong bài kiểm tra.</p>
            </Panel>
            <Panel header="V. Độ âm điện" key="5" className='Panel'>
            <p>Độ âm điện là thước đo khả năng thu hút electron của nguyên tử. Độ âm điện của các nguyên tố được cho giá trị từ 0,0 đến 4,0. Giá trị độ âm điện lớn nhất thuộc về fluorine, 4,0. Vậy nguyên tố có độ âm điện thấp nhất ở đâu? Nhìn xa nhất từ fluorine và nhìn về phía dưới bên trái của bảng tuần hoàn. Francium, Fr, có độ âm điện là 0,7. Điều này sẽ có ý nghĩa vì phi kim có xu hướng nhận electron và có giá trị độ âm điện cao hơn, trong khi kim loại có xu hướng mất electron và có giá trị độ âm điện thấp hơn. Vì chúng không phản ứng nên các khí hiếm không có giá trị về độ âm điện.</p>
            <p><b>Đặt vấn đề:</b></p>
            <p>Chất nào được cho là có độ âm điện thấp hơn, Na hay S?</p>
            <p><b>Lời giải:</b> Na có độ âm điện thấp hơn vì nó khác xa fluorine trong bảng tuần hoàn.</p>
            </Panel>
            <Panel header="VI. Năng lượng ion hóa" key="6" className='Panel'>
            <p>Năng lượng ion hóa, như tên gọi của nó, là năng lượng cần thiết để loại bỏ một electron khỏi nguyên tử và tạo thành ion. Khái niệm này sẽ dễ dàng nhận ra trong bảng tuần hoàn một khi bạn đã nắm được ý tưởng về độ âm điện. Phải mất rất nhiều năng lượng để loại bỏ các electron khỏi các octet rất ổn định của khí hiếm. Ví dụ, đối với helium, năng lượng ion hóa thứ nhất là 2372 kJ/mol, trong khi neon có năng lượng ion hóa thứ nhất là 2081 kJ/mol. Fluorine, có độ âm điện cao nhất và khả năng “giữ” electron, có năng lượng ion hóa thứ nhất là 1681 kJ/mol.</p>
            <p>Bây giờ bạn có thể đoán rằng điều ngược lại cũng đúng với kim loại khi bạn tránh xa flo và các khí hiếm. Bằng chứng nằm ở năng lượng ion hóa đầu tiên của sắt (762 kJ/mol) và kali (419 kJ/mol). Những giá trị này chỉ là một phần năng lượng ion hóa đầu tiên đối với một số phi kim nhất định.</p>
            <p><b>Đặt vấn đề:</b></p>
            <p>Chất nào được cho là có năng lượng ion hóa lớn hơn, Ca hay Br?</p>
            <p><b>Lời giải:</b> Br nằm gần F hơn và sẽ có năng lượng ion hóa cao hơn.</p>

            </Panel>
            <Panel header={(<div><span>VIII. Điện tích hạt nhân hiệu quả —Z</span><sub>eff</sub></div>)} key="8" className='Panel'>
            <p>Tất cả các electron trong nguyên tử đều chịu lực hút của hạt nhân tích điện dương. Tuy nhiên, đồng thời, có một lực đẩy giữa các electron do chúng mang điện tích âm. Điện tích hạt nhân hiệu dụng tác dụng lên một electron hoặc tập hợp electron có thể được tính bằng công thức sau:
            <p className='math-image'>Z<sub>eff</sub> = Z − S</p>
            Trong đó Z là số proton trong hạt nhân và S là số electron giữa các electron hóa trị và hạt nhân. Nếu chúng ta tính điện tích hạt nhân hiệu dụng của electron hóa trị trong nguyên tử sodium, chúng ta sẽ thấy giá trị đó sẽ là 1+. Nhìn vào cấu hình electron của sodium, chúng ta thấy rằng có 10 electron nằm giữa hạt nhân và electron hóa trị: 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>.
            </p>
            <p>Z trong trường hợp này là 11 và S là 10, cho Z<sub>eff</sub> = 1+.</p>
            <p><b>Vấn đề:</b></p>
            <p>Điện tích hạt nhân hiệu dụng trên tám electron ở mức năng lượng chính thứ hai của sodium là bao nhiêu?</p>
            <p><b>Giải pháp:</b> Tám electron ở mức năng lượng chính hai sẽ cảm thấy điện tích hạt nhân hiệu dụng +9 vì hạt nhân có điện tích +11 và có hai electron ở mức năng lượng chính một.</p>
            </Panel>
            <Panel header="IX. Số lượng tử" key="9" className='Panel'>
            <p>Để giúp theo dõi từng electron có mặt trong một nguyên tử, bốn số lượng lượng tử được gán cho mỗi electron. Các quy tắc để gán số lượng lượng tử như sau:
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Số đầu tiên được gọi là số lượng tử chính, n, và nó có thể là số nguyên bất kỳ. Số lượng tử đầu tiên, n, biểu thị mức năng lượng chính mà electron đang xét. Ví dụ, một electron trong H là 1s<sup>1</sup> và n sẽ bằng 1. Electron hóa trị của Li, 1s<sup>2</sup>2s<sup>1</sup>, sẽ có n bằng 2.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Số thứ hai được gọi là số lượng tử động lượng góc, l, và nó có thể là số nguyên từ 0 đến n – 1. Số lượng tử thứ hai biểu thị cấp con mà electron ở trong đó. Nếu electron ở quỹ đạo s, thì l = 0. Một electron trong quỹ đạo p sẽ có l = 1, v.v.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Số thứ ba được gọi là số lượng tử từ, ml, và nó có thể là số nguyên nằm trong khoảng từ –l đến + l. Số lượng tử thứ ba giúp chúng ta xác định vị trí của electron được đề cập ở vùng nào của mỗi cấp độ con.Những vùng này là quỹ đạo cụ thể.
            <br/>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; •&nbsp;Số lượng tử thứ tư là ms và nó chỉ có thể có giá trị +1/2 hoặc –1/2.
            </p>
            <p>Số lượng tử thứ tư biểu thị hướng quay của electron. Các dấu ngược nhau biểu thị các spin ngược nhau.</p>
            <p>Việc gán số lượng tử cho các electron của một vài nguyên tử đơn giản sẽ giúp chúng ta biết cách gán các số này.</p>
            <p><b>Vấn đề:</b></p>
            <p>Một nguyên tử hydro có một electron và được ký hiệu là 1s<sup>1</sup>. Số lượng tử sẽ là bao nhiêu?</p>
            <p><b>Giải pháp:</b> Trong trường hợp này n sẽ bằng 1 vì electron ở mức năng lượng chính là 1. l phải bằng 0 vì l là số từ 0 đến n – 1.</p>
            <p>ml bằng 0 vì giá trị của l là 0.</p>
            <p>ms bằng +1/2.</p>
            <p>Các số lượng tử là 1, 0, 0, +1/2.</p>
            <p><b>Vấn đề:</b></p>
            <p>Gán số lượng tử cho electron hóa trị của nguyên tử lithium.</p>
            <p><b>Giải pháp:</b> Electron hóa trị duy nhất của lithium có cấu hình electron là [He]2s1. Từ đó chúng ta có thể thấy rằng:</p>
            <p>n = 2 vì electron hóa trị ở mức năng lượng chính thứ hai.</p>
            <p>l có thể là 0 hoặc 1 (2 – 1 = 1). Chúng tôi gán số 0 đầu tiên là l = 1 vì nó sẽ không được sử dụng cho đến khi chúng ta bắt đầu điền vào quỹ đạo p.</p>
            <p>ml bằng 0 vì giá trị của l là 0.</p>
            <p>ms bằng +1/2.</p>
            <p>Các số lượng tử là 2, 0, 0, +1/2.</p>
            <p><b>Vấn đề:</b></p>
            <p>Gán số lượng tử cho electron thứ mười lấp đầy nguyên tử neon.</p>
            <p><b>Giải pháp:</b> n = 2, l = 1, ml = 1 và ms = –1/2.</p>

           </Panel>
            <Panel header="X. Lai tạo" key="10" className='Panel'>
            <p>Carbon là một ngoại lệ đối với các quy tắc viết biểu đồ chấm hóa trị như mô tả ở trên. Việc kiểm tra chặt chẽ carbon và các electron hóa trị của nó cho thấy một câu chuyện khác, bằng chứng là carbon có thể tạo ra bốn liên kết. Carbon có 6 electron và cấu hình electron của nó là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>2</sup>. Sơ đồ dấu chấm hóa trị theo cách sắp xếp này sẽ trông giống như:</p>
            <p>Theo sơ đồ chấm này, carbon chỉ tạo ra hai liên kết. Tuy nhiên, đây không phải là trường hợp tất cả. Thay vào đó, carbon có sự sắp xếp 1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup> hoặc</p>
            <p>Đây được gọi là sự lai hóa sp<sup>3</sup> của nguyên tử cacbon. Một trong các electron đã chuyển từ quỹ đạo 2s sang quỹ đạo 2p. Điều này hiện mang lại cho carbon bốn electron đơn lẻ thay vì hai electron ghép đôi và hai electron chưa ghép cặp. Đó là các electron đơn lẻ liên kết với nhau để cố gắng trở thành cặp đôi. Bởi vì có bốn electron đơn trong nguyên tử carbon lai sp3 nên carbon có thể liên kết bốn nguyên tử khác nhau với bốn electron đơn của nó. Để có bốn electron là electron chưa ghép cặp, quá trình lai hóa sp3 cũng làm thay đổi hình dạng của các quỹ đạo s và p có liên quan đến liên kết. Sự thay đổi này được thể hiện trong Hình 3.8.</p>
            <p>Sự sắp xếp mới được gọi là hình tứ diện vì các nguyên tử tạo với nhau một góc 109,5 độ. Điều này có thể được nhìn thấy trong hình dạng ba chiều của metan, một phân tử có dạng hình học phân tử tứ diện. Nếu chỉ có ba nguyên tử liên kết với nguyên tử lai hóa sp3 thì hình học phân tử được gọi là hình chóp tam giác. Amoniac là một ví dụ về điều này. Cuối cùng, trong nước oxy bị lai hóa sp3 nhưng vì chỉ có hai nguyên tử liên kết với oxy nên hình dạng phân tử được cho là bị uốn cong (xem Hình 3.9).</p>
            <p>Trong lai hóa sp<sup>2</sup>, một obitan 2s và hai obitan 2p kết hợp để tạo thành hình dạng mới như trên Hình 3.10.</p>
            <p>Ở trạng thái lai hóa này, carbon sẽ tạo ra hai liên kết đơn và một liên kết đôi. Điều này sẽ cho phép nguyên tử carbon liên kết với ba nguyên tử khác nhau. Sự định hướng của các nguyên tử này xung quanh nguyên tử carbon sẽ là hình học phân tử phẳng lượng giác. Góc của các nguyên tử này với nhau là 120 độ. Điều này được thể hiện qua sơ đồ ethene trên Hình 3.11.</p>
            <p>Khi một nguyên tử được lai hóa sp, quỹ đạo của một s kết hợp với một quỹ đạo p. Điều này cho phép một nguyên tử như carbon tạo ra hai liên kết đôi hoặc một liên kết đơn và một liên kết ba. Hai nguyên tử liên kết với nguyên tử carbon trong trường hợp này sẽ tự định hướng cách nhau 180 độ. Đây được gọi là hình học phân tử tuyến tính (xem Hình 3.12).</p>
            <p>Trên đây là so sánh song song giữa ba trạng thái lai:</p>
            <p><b>Vấn đề:</b></p>
            <p>Sự lai hóa của cacbon trong CCl<sub>4</sub>, trong HCN và trong CH<sub>2</sub>O là gì??</p>
            <p><b>Giải pháp:</b> Trong CCl<sub>4</sub>, nguyên tử carbon tạo thành tất cả các liên kết đơn. Carbon được lai hóa sp3 và các nguyên tử chlorine sẽ cách nhau 109.5 độ. Carbon trong HCN có liên kết đơn với nguyên tử hydrogen và liên kết ba với nguyên tử nitrogen. Nguyên tử carbon này được lai hóa sp. Nguyên tử carbon trong CH<sub>2</sub>O có liên kết đôi với nguyên tử oxy và liên kết đơn với nguyên tử hydrogen. Nguyên tử carbon này ở trạng thái lai hóa sp<sup>2</sup>.</p>
            </Panel>
            <Panel header="XI. Ion và Quy tắc Octet" key="11" className='Panel'>
            <p>Số lượng electron trong một nguyên tử có thể được tìm thấy bằng cách nhìn vào số hiệu nguyên tử, với điều kiện nguyên tử đó là trung tính. Trong một nguyên tử trung hòa, số proton bằng số electron. Sự cân bằng giữa điện tích dương và âm là nguyên nhân làm cho nguyên tử trung hòa. Nhưng điều gì xảy ra nếu một nguyên tử nhận thêm hoặc mất bớt electron? Khi nguyên tử mất đi hoặc nhận thêm electron thì nó trở thành ion. Nguyên tử lúc này có số proton và số electron không bằng nhau (số proton không thay đổi). Khi một nguyên tử mất electron, nó sẽ mất điện tích âm. Trong trường hợp này, số proton nhiều hơn số electron và ion mang điện tích dương. Một ion mang điện tích dương được gọi là cation. Khi một nguyên tử nhận thêm electron, nó sẽ mang điện tích âm. Trong trường hợp này, số electron nhiều hơn số proton và ion mang điện tích âm. Một ion có điện tích âm được gọi là anion.</p>
            <p>Một nguyên tử sẽ tăng hay giảm bao nhiêu electron? Một ion sẽ phải chịu bao nhiêu điện tích? Có một mô hình đơn giản để làm theo nhưng cuối cùng bạn sẽ thấy rằng tất cả phụ thuộc vào số lượng electron hóa trị mà một nguyên tử có. Có một điểm chung mà tất cả các ion đều có: Chúng hình thành sao cho có 8 electron hóa trị ở mức năng lượng chính ngoài cùng. Đây được gọi là quy tắc Octet. Có tám electron trong vỏ hóa trị giúp nguyên tử có cấu hình electron ổn định. Khi đã đạt được tám electron hóa trị, rất khó để sửa đổi cấu hình ổn định này.</p>
            <p>Để xác định điện tích mà một nguyên tử sẽ đảm nhận dưới dạng ion, trước tiên hãy xem cấu hình electron của nguyên tử. Ví dụ, natri có 11 electron và cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>1</sup>. Để đạt được một octet, sodium có hai lựa chọn – nhận thêm bảy electron hoặc chỉ mất một electron. Mất một electron là nhiệm vụ dễ dàng hơn nhiều so với việc thu được bảy electron. Khi nguyên tử sodium mất đi một electron (mất điện tích âm), ion sodium có điện tích 1+ và nguyên tử được viết là Na<sup>1+</sup>. Sau khi mất đi một electron, cấu hình electron mới của sodium là 1s<sup>2</sup><b>2s<sup>2</sup>2p<sup>6</sup></b>. Tám electron hóa trị được in đậm để nhấn mạnh quy tắc Octet.</p>
            <p>Một ví dụ khác là ion tạo thành lưu huỳnh. Lưu huỳnh có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup><b>3s<sup>2</sup>3p<sup>4</sup></b>. Lưu huỳnh có sáu electron hóa trị như được in đậm. Để lưu huỳnh đạt được octet ổn định, nó có thể mất sáu electron hoặc thu thêm hai electron. Việc thu được hai electron là một nhiệm vụ khả thi hơn và việc thu được hai electron sẽ mang lại cho ion lưu huỳnh điện tích 2−. Cấu hình electron mới của lưu huỳnh là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup><b>3s<sup>2</sup>3p<sup>6</sup></b>. Một lần nữa, tám electron hóa trị đã được nhấn mạnh.</p>
            <p><b>Vấn đề:</b></p>
            <p>Điện tích của các nguyên tố sau khi tạo thành ion: Ca, Al, F, N, Ne sẽ như thế nào?</p>
            <p>Ca—1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>.</p>
            <p>Al—1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup></p>
            <p>F—1s<sup>2</sup>2s<sup>2</sup>2p<sup>5</sup></p>
            <p>N—1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup></p>
            <p>Ne—1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup></p>
            <p>Bây giờ hãy xem cấu hình và quyết định đâu là cách dễ nhất để có được octet ổn định. Calcium sẽ mất hai electron và trở thành Ca<sup>2+</sup>. Aluminium sẽ mất ba electron và trở thành Al<sup>3+</sup>. Fluorine sẽ nhận thêm một electron và trở thành F<sup>1−</sup>. Nitrogen sẽ nhận thêm ba electron và trở thành N<sup>3−</sup>. Neon sẽ không mất hoặc thu thêm bất kỳ electron nào vì octet ổn định của nó.</p>
            </Panel> 
            <Panel header="XIII. Các ngoại lệ đối với Quy tắc Octet" key="13" className='Panel'>
            <p>Có những ngoại lệ đối với quy tắc bát tử. Ví dụ, helium cực kỳ ổn định chỉ với hai electron hóa trị ở mức năng lượng chính ngoài cùng của nó. Điều tương tự cũng đúng với các ion lithium và beryllium. Điều này chỉ ra rằng
            việc có một octet để ổn định nguyên tử không phải là vấn đề lớn mà vấn đề là phải có mức năng lượng chính đầy đủ ngoài cùng.
            </p>
            <p>Một ngoại lệ cuối cùng đối với quy tắc bát tử nằm ở liên kết của nguyên tử boron. Boron thích sáu electron ở mức năng lượng chính ngoài cùng của nó. Điều này cho phép các hợp chất chứa boron tạo ra ba liên kết theo cách sắp xếp phẳng lượng giác. Hai ví dụ là BH<sub>3</sub> và BF<sub>3</sub> như hình 3.13.</p>
            </Panel>
            <Panel header="XIV. Dòng Isoelectronic" key="14" className='Panel'>
            <p>Các nguyên tử sẽ thu được, mất đi hoặc chia sẻ các electron hóa trị để đạt được cấu hình octet (trong hầu hết các trường hợp) hoặc cấu hình electron tương tự như cấu hình của khí hiếm. Ví dụ, tất cả các nguyên tử và ion sau đây đều có 18 electron và cấu hình electron tương tự cấu hình của khí hiếm, argon: S<sup>2-</sup>, Cl<sup>1-</sup>, Ar, K<sup>1+</sup>, and Ca<sup>2+</sup>. Tất cả các nguyên tử/ion này đều có cấu hình electron là 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>.</p>
            <p>Biết được thông tin vừa trình bày, bây giờ chúng ta có thể dự đoán kích thước tương đối của các nguyên tử và ion được trình bày. Bởi vì tất cả chúng đều có 18 electron nên chúng ta có thể xem xét số lượng proton có mặt. Ion có số proton lớn nhất, Ca, sẽ có bán kính nhỏ nhất vì nó có “lực hút” hạt nhân lớn nhất lên 18 electron. Lưu huỳnh, chỉ với 16 proton, sẽ có lực hút hạt nhân ít nhất đối với 18 electron mà nó có. Điều này giúp giải thích tại sao các nguyên tử phi kim lại nhỏ hơn các ion tương ứng của chúng. Tương tự, nó cũng giải thích tại sao các nguyên tử kim loại lại lớn hơn các ion tương ứng của chúng.</p>
            </Panel>
          </Collapse>
        </div>
      </div>  
    );
  }

export default Chapter4thongtin;