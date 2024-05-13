import "./Messages.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo2.webp";
import avatar from "../../assets/avatar.webp";
import { logout } from "../../redux/slices/authSlice";
import { useEffect, useRef, useState } from "react";
import MessageSidebar from "../../components/MessageSidebar/MessageSidebar";
import MessageBody from "../../components/MessageBody/MessageBody";
import axios from "axios";
import { io } from "socket.io-client";

const Messages = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const socket = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.auth?.user?.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //  get the chats
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // Get the chat in chat section

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/chat/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setChats(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [user._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data);
      setReceivedMessage(data);
    });
  }, []);

  return (
    <>
      <nav className="navbar navbar-messages">
        <ul>
          <div style={{ marginLeft: "30px" }}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>{" "}
          </div>
          <div style={{ marginRight: "30px" }}>
            <Link to="/messages">
              <AiFillMessage className="inbox-icon" />
            </Link>
            <p id="username">{user?.username}</p>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                src={user?.image ? user?.image : avatar}
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
            >
              {user?.role == "serviceProvider" ? (
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
                  </MenuItem>{" "}
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={() => {
                      handleClose;
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    Logout
                  </MenuItem>
                </>
              )}
            </Menu>
          </div>
        </ul>
      </nav>
      <hr />
      <div className="messages">
        <div className="messagelist">
          <h1>Chat</h1>
          <hr />
          {chats.map((chat, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentChat(chat);
              }}
            >
              <MessageSidebar data={chat} currentUser={user._id} />
            </div>
          ))}
        </div>
        <hr />
        <MessageBody
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </>
  );
};

export default Messages;
