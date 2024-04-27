import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./CarouselComponent.css"
import img1 from "./../../assets/home-slider1.webp"
import img2 from "./../../assets/image.webp"
import 'animate.css';

const CarouselComponent = () => {
        const images = [
            img1,
            img2
        ];
        const buttonStyle = {
            width: "30px",
            background: 'none',
            border: '0px',
            margin: '10px'
        };
        const properties = {
            prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
            nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
        }

  return (

      <Slide {...properties}>
        <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                <div className="slider-text">
                <h1 className="animate__slideInDown">Best <span>Handyman</span></h1>
                <h1 id="second-line" className="animate__slideInDown">Services Provider</h1> 
                    </div>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <div className="slider-text">
                    <h1 className="animate__slideInDown" id="head-2">The <span>Solution</span> <br /> For All Your Home <br />Repair Needs.</h1>
                    </div>
                </div>
            </div>
            
        </Slide>

  );
};


export default CarouselComponent;
