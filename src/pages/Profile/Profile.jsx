import { Button, Menu, MenuItem } from "@mui/material";
import "./Profile.css";
import { useEffect, useState } from "react";
import logo from "../../assets/logo2.webp";
import avatar from "../../assets/avatar.webp";
import { Link, useNavigate, useParams } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import UpdateProfile from "../../components/UpdateProfile/UpdateProfile";
import { AiFillMessage } from "react-icons/ai";
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ID } = useParams();
  const [profile, setProfile] = useState({})

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [edit , setEdit] = useState(false)
 
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/profile/${ID}`)
      .then((res) => {
        console.log(res.data);
        setProfile(res?.data)
      })
      .catch((err) => console.log(err));
  }, []);
 
  return (
    <>
      <nav className="navbar">
        <ul>
          <div style={{ marginLeft: "30px" }}>
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div style={{ marginRight: "30px" }}>
          <Link to="/messages"><AiFillMessage className="inbox-icon"/></Link>
            <p id="username">{profile?.user?.username}</p>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img src={profile?.user?.image ? profile?.user?.image : avatar} alt="" id="nav-user" />
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
              <MenuItem
                onClick={() => {
                  handleClose;
                  dispatch(logout());
                  navigate("/");
                }}
              >
                Logout
              </MenuItem>
            </Menu>
            
          </div>
        </ul>
      </nav>
      <hr />
      <div className="profile">
      <div className='sidebar'>
            <h1>Profile</h1>
            <hr />
                <button onClick={()=>setEdit(!edit)}>Personal info</button>
                <hr />
                <button onClick={()=>setEdit(!edit)}>Edit Profile</button>
        </div>
        {edit ? <UpdateProfile profile={profile}/> : <ProfileInfo profile={profile}></ProfileInfo>}
      </div>
    </>
  );
};

export default Profile;
