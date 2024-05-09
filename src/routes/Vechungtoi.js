import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Layout } from "antd";
const { Sider, Content } = Layout;
function Vechungtoi(){
    return(
        <Layout>
        <Navbar/>
        <AboutUs/>
        <Contact/>
        <Footer/>
        </Layout>
    )
}
export default Vechungtoi;