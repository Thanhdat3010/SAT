import Footer from "../components/Footer";
import Gioithieu from "../components/Gioithieu";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Trangchu(props){
    
    return(
        <>
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
        </>
    )
}
export default Trangchu;