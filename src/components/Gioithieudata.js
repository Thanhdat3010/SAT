import "./Gioithieu.css";
import { Component } from "react";
import logo  from "../assets/logo (2).png"
class GioithieuData extends Component{
    render(){
        return(
    <div className="first">
            <div className="first-text">
            <h2>Ôn tập tiện lợi ở bất cứ đâu</h2>
            <h3>Nền tảng luyện đề SAT Hóa học dành cho học sinh</h3>
            <p1>Xây dựng năng lực:&ensp;</p1>
            <p2>SAT Chemistry không chỉ giúp bạn dễ dàng luyện đề theo quy chuẩn đề SAT mà còn giúp bạn xây dựng tư duy logic của mình.
            <br/>
            <br/>
            </p2>
            <p3>
            Tiết kiệm thời gian:&ensp;
            </p3>
            <p4>
            SAT Chemistry là nền tảng online giúp bạn luyện đề ở bất cứ đâu mà không cần phải chuẩn bị trước.   
            </p4>
            
            </div>
            <div className="image">
            <img alt="img" src={logo}/>
            <img alt="img" src={logo}/>
            </div>
        </div>
        )
    }
}
export default GioithieuData;
