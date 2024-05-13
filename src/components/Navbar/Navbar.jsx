import "./Navbar.css";
import logo from "../../assets/logo2.webp";
import { Link, NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { AiFillMessage } from "react-icons/ai";
import avatar from "../../assets/avatar.webp";

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const user = useSelector((state) => state?.auth?.user?.user);
  
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
          <div>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <AnchorLink href="#about">About</AnchorLink>
            </li>
            <li className="has-dropdown">
              <AnchorLink href="#services">services</AnchorLink>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link to="/electricians">electrician</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/plumbers">plumber</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/painters">painter</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/builders">builder</Link>
                </li>
              </ul>
            </li>
            <li>
              <AnchorLink href="#contact">Contact Us</AnchorLink>
            </li>
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div>
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <button>Login</button>
                </Link>
                <Link to="/register">
                  <button>create an account</button>
                </Link>
              </>
            ) : (
              <>
                <Link to={user ? "/messages" : "*"}>
                  <AiFillMessage className="inbox-icon" />
                </Link>
               
                    <Button
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <img
                        src={avatar}
                        alt=""
                        id="nav-user"
                      />
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >{user?.role == 'serviceProvider' ? 
                    <>
                    <MenuItem onClick={handleClose}>
                    <Link
                      to={`/profile/${user?.profile?._id}`}
                      style={{ color: "#00203A", textDecoration: "none" }}
                    >
                      Profile
                    </Link>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose;
                      dispatch(logout());
                    }}
                  >
                    Logout
                  </MenuItem> </>: <>
                <MenuItem
                  onClick={() => {
                    handleClose;
                    dispatch(logout());
                  }}
                >
                  Logout
                </MenuItem></>}
                      
                    </Menu>
              </>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
