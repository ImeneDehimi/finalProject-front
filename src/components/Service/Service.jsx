import "./Service.css";
import avatar from "../../assets/avatar.webp";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Service = ({user}) => {

  return (
    <>
      <div className="service-profile">
        <div>
          <img src={avatar} alt="" />
        </div>
        <div className="service-profile-text">
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
          <h3>{user.username}</h3>
          <p>Electrician</p>
          <p>Alger</p>
        </div>
        <div>
        <Link to="/serviceprovider"><button>View profile</button></Link>
          </div>
      </div>
    </>
  );
};

export default Service;
