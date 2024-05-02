import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Service from "../../components/Service/Service";
import HowWorks from "../../components/how-works/HowWorks";
import "./ServicesPage.css";
import axios from "axios";

const ServicesPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/v1/user")
      .then((res) =>{ setUsers(res.data)
      console.log(res.data);})
      .catch((err) => console.log(err));
  }, []);

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
          <div className="services-services">
          {users.map((user)=>(
              <Service key={user._id} user={user}></Service>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
