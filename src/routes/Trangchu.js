import Footer from "../components/Footer";
import Gioithieu from "../components/Gioithieu";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
const { Sider, Content } = Layout;

function Trangchu(props){
    
    return(
        <Layout>
        <Navbar/>
        <Hero
         cName="hero"
         title="SAT CHEMISTRY TRONG VIỆC GIÚP ĐỠ CÁC NHÀ GIÁO DỤC"
         text="PHÁT TRIỂN NĂNG LỰC HỌC SINH"
         buttonText="Tìm hiểu thêm"
         url="/"
         btnClass="show"
        />
        <Gioithieu/>
        <Footer/>
        </Layout>
    )
}
export default Trangchu;