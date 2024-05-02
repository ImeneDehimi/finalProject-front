import { Button, Menu, MenuItem } from "@mui/material";
import SideBar from "../../components/SideBar/SideBar";
import "./Profile.css";
import { useState } from "react";
import user from "../../assets/avatar.webp";
import logo from "../../assets/logo2.webp";
import { Link, useNavigate } from "react-router-dom";
import painter from "./../../assets/painter.webp";
import plumber from "./../../assets/plumber.webp";
import electrician from "./../../assets/electrician.webp";
import builder from "./../../assets/builder.webp";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import pic from "../../assets/home-slider1.webp"

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const images = [
    //First image url
    {
      url: electrician,
    },
    {
      url: plumber,
    },
    //Second image url
    {
      url: builder,
    },
    //Third image url
    {
      url: painter,
    },
    {
      url: painter,
    },
    {
      url: painter,
    },
    {
      url: painter,
    },
  ];
  return (
    <>
      <nav className="navbar">
        <ul>
          <div style={{ marginLeft: "30px" }}>
            <img src={logo} alt="" />
          </div>
          <div style={{ marginRight: "30px" }}>
            <p>username</p>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img src={user} alt="" id="nav-user" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link
                  to="/profile"
                  style={{ color: "#00203A", textDecoration: "none" }}
                >
                  Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={()=>{handleClose;dispatch(logout());navigate("/")}} >Logout</MenuItem>
            </Menu>
          </div>
        </ul>
      </nav>
      <hr />
      <div className="profile">
        <SideBar></SideBar>
        <div className="profile-body">
          <h1>Personal information</h1>
          <div className="profile-infos">
            <div>
            <div className="profile-info-box">
            <p><span>Name:</span> Michael Morgan</p>
            </div>
            <div className="profile-info-box">
            <p><span>Email:</span> otcize@nur.bd</p>
            </div>
            </div>
            <div>
            <div className="profile-info-box">
            <p><span>Profession:</span> Electrician</p>
            </div>
            <div className="profile-info-box">
            <p><span>Wilaya:</span> Alger</p>
            </div>
            </div>
            <div className="bottom-infos">
            <div className="profile-info-box">
            <p><span>Description: </span>
               Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sequi iure quibusdam, exercitationem praesentium alias odio
              soluta amet, nam quisquam a, natus id? Fugiat iure nostrum rem, a
              quae vel voluptatem!
            </p>
            </div>
            <div className="profile-info-box">
            <p><span>Images: </span></p>
            <div className="info-images">
            {images.map((imageUrl, index) => {
                return (
                  <div className="image" key={index}>
                    <img src={imageUrl.url} alt="movie" />
                  </div>
                );
              })}
              </div>
            </div>
            </div>
          </div>
          <button className="info-btn">Modify infos</button>
        </div>
      </div>
    </>
  );
};

export default Profile;
