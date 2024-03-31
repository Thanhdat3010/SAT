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
         text="cải thiện kỹ năng."
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