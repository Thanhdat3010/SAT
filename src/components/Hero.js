
import './Hero.css';
function Hero(props){
    return(
        <>
         <div className={props.cName}>
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href='/Tainguyen' className={props.btnClass}>
            {props.buttonText}
            </a>
        </div>
         </div>
        </>
    )
}
export default Hero;