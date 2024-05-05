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
         title="SAT Chemistry trong việc giúp đỡ các nhà giáo dục"
         text="phát triển năng lực học sinh"
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