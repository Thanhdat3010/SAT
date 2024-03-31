import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Tainguyen(){
    return(
        <>
        <Navbar/>
        <Hero
         cName="hero-mid"
         title="Tài nguyên và thảo luận"
         btnClass="hide"
        /> 
        </>
    )
}
export default Tainguyen;