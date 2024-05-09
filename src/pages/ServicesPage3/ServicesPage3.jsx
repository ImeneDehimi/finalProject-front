import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Service from "../../components/Service/Service";
import HowWorks from "../../components/how-works/HowWorks";
import "./../ServicesPage/ServicesPage.css";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const ServicesPage3 = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const category = "painter"

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/profile/category/${category}`)
      .then((res) =>{ setProfiles(res.data)
        setFilteredProfiles(res.data)
      console.log(res.data)})
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event)=>{
    if(event.target.value == "default" ){
      setFilteredProfiles(profiles);
    }else{
      let filtered= profiles.filter(profile=> profile.wilaya === event.target.value )
      setFilteredProfiles(filtered);
    }
    
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="services-page">
        <div className="outside-services-head">
          <div className="services-page-head">
            <div className="service-text">
              <span className="service-title-line"></span>
              <h1>Painters</h1>
            </div>
          </div>
        </div>
        <div className="services-body">
          <HowWorks></HowWorks>
          <select className="form-select" defaultValue={"default"} onChange={(e)=>handleChange(e)}>
            <option value={"default"} >Select a wilaya</option>
            <option value="Alger">Alger</option>
            <option value="Blida">Blida</option>
            <option value="Oran">Oran</option>
            <option value="Batna">Batna</option>
          </select>
          <div className="services-services">
          {filteredProfiles.map((profile)=>(
              <Service key={profile._id} profile={profile}></Service>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ServicesPage3;
