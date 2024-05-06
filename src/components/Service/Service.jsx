import "./Service.css";
import avatar from "../../assets/avatar.webp";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Service = ({profile}) => {
 // eslint-disable-next-line react/prop-types
 const {user, category, wilaya, _id} = profile
 // eslint-disable-next-line react/prop-types
 const {image, username} = user
 
console.log(profile);
  return (
    <>
      <div className="service-profile">
        <div>
          <img src={image ? image : avatar} alt="" />
        </div>
        <div className="service-profile-text">
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
          <h3>{username}</h3>
          <p>{category}</p>
          <p>{wilaya}</p>
        </div>
        <div>
        <Link to={`/serviceprovider/${_id}`}><button>View profile</button></Link>
          </div>
      </div>
    </>
  );
};

export default Service;
