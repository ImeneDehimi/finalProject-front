import "./Info.css";
import "boxicons";

const Info = () => {
  return (
    <div className="infos">
      <div className="info">
        <div className="info-logo">
          <box-icon name="wrench" color="#ff9e2a" size="lg"></box-icon>
        </div>
        <div>
          <h3>Professional Handyman</h3>
          <span className="info-line"></span>
          <p>Our goal is to provide you the best handyman services.</p>
        </div>
      </div>
      <div className="info">
        <div className="info-logo">
          <box-icon name="time" color="#ff9e2a" size="lg"></box-icon>
        </div>
        <div>
          <h3>24/7 Services</h3>
          <span className="info-line"></span>
          <p>Our website offers a variety of services, available 24/7. </p>
        </div>
      </div>
      <div className="info">
        <div className="info-logo">
          <box-icon name="money" color="#ff9e2a" size="lg"></box-icon>
        </div>
        <div>
          <h3>Affordable Price</h3>
          <span className="info-line"></span>
          <p>We offer a wide range of services at affordable prices.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
