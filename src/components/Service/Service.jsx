import "./Service.css";
import avatar from "../../assets/avatar.webp";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Service = ({profile}) => {
 // eslint-disable-next-line react/prop-types
 const {user, category, wilaya, _id, rating} = profile

  return (
    <>
      <div className="service-profile">
        <div>
          <img src={user?.image ? user?.image : avatar} alt="" />
        </div>
        <div className="service-profile-text">
          <Stack spacing={1}>
          <Rating name="read-only" readOnly  value={rating} precision={0.5} />
          </Stack>
          <h3>{user?.username}</h3>
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
