import Navbar from "../../components/Navbar/Navbar";
import Service from "../../components/Service/Service";
import HowWorks from "../../components/how-works/HowWorks";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="services-page">
        <div className="outside-services-head">
          <div className="services-page-head">
            <div className="service-text">
              <span className="service-title-line"></span>
              <h1>Electricians</h1>
            </div>
          </div>
        </div>
        <div className="services-body">
          <HowWorks></HowWorks>
          <select className="form-select">
            <option selected>Select a wilaya</option>
            <option value="1">Alger</option>
            <option value="2">Blida</option>
            <option value="3">Oran</option>
            <option value="3">Batna</option>
          </select>
          <Service></Service>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
