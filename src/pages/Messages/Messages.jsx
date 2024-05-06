import "./Messages.css";
import image from '../../assets/electrician.webp'
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo2.webp";
import user from "../../assets/avatar.webp";
import { logout } from "../../redux/slices/authSlice";
import { useState } from "react";

const Messages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>        
    <nav className="navbar">
        <ul>
          <div style={{ marginLeft: "30px" }}>
            <img src={logo} alt="" />
          </div>
          <div style={{ marginRight: "30px" }}>
          <Link to="/messages"><AiFillMessage className="inbox-icon"/></Link>
            <p id="username">username</p>
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
    <div className="messages">
      <div className="messagelist">
        <h1>Chat</h1>
        <hr />
        <div className="chat-box">
          <img src={image} alt="" />
          <h3>name</h3>
          
        </div>
      </div>
      <hr />
      <div className="chat">
        <div>
        Lorem ipsum dolor sit amet, consect
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Message"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Messages;
