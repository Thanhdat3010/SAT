import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Trangchulythuyet from "../components/Trangchulythuyet";
import { Layout } from "antd";
const { Sider, Content } = Layout;
function Lythuyet(){
    return(
        <Layout>
        <Navbar/>
        <Trangchulythuyet/>
        <Footer/>
        </Layout>
    )
}
export default Lythuyet;