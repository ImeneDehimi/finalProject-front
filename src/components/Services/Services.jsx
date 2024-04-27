import "./Services.css";
import painter from "./../../assets/painter.webp";
import plumber from "./../../assets/plumber.webp";
import electrician from "./../../assets/electrician.webp";
import builder from "./../../assets/builder.webp";
import Info from "../Info/Info";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
    <section className="services" id="services">
      <div className="title">
        <h2>Our services</h2>
        <div className="line"></div>
        <p>
          we strive to be your trusted partner in all your home maintenance{" "}
          <br />
          and improvement needs.
        </p>
      </div>
      <div className="service-cards">
        <div className="service">
          <span>
            <img src={painter} alt="" />
          </span>
          <div className="outside-text">
            <div className="text">
              <h3><Link>Painter</Link></h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="service">
          <span>
            <img src={plumber} alt="" />
          </span>
          <div className="outside-text">
            <div className="text">
              <h3><Link>Plumber</Link></h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="service">
          <span>
            <img src={electrician} alt="" />
          </span>
          <div className="outside-text">
            <div className="text">
              <h3><Link to="/services">Electrician</Link></h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="service">
          <span>
            <img src={builder} alt="" />
          </span>
          <div className="outside-text">
            <div className="text">
              <h3><Link>Builder</Link></h3>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <Info></Info>
    </section>

    </>
  );
};

export default Services;
