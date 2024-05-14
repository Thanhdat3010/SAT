import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Layout } from "antd";
import AI from "../components/AI";
import PeriodicTable from "../components/PeriodicTable";
const { Sider, Content } = Layout;

function FLashcard(){
    
    return(
        <Layout>
        <Navbar/>
        <PeriodicTable/>
        <AI/>
        </Layout>
    )
}
export default FLashcard;