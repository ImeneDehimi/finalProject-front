import "./Service.css";
import avatar from "../../assets/avatar.webp";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Service = () => {
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
          <h3>Jhon Doe</h3>
          <p>Electrician</p>
          <p>Alger</p>
          <button>View profile</button>
        </div>
      </div>
    </>
  );
};

export default Service;
