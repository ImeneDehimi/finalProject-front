import "./MessageSidebar.css"
import image from '../../assets/avatar.webp'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { saveUser } from "../../redux/slices/chatSlice";


const MessageSidebar = ({ data, currentUser} )=> {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const [userData, setUserData] = useState({})
  const dispatch = useDispatch()
  console.log({ data, currentUser});

  useEffect(()=> {
    const userId = data?.members?.find((id)=>id!==currentUser)
console.log(userId);
axios.get(`${import.meta.env.VITE_URL}/user/${userId}`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then((res)=>{
  console.log(res.data);
  setUserData(res.data)
  dispatch(saveUser(data))})
  .catch((err)=>console.log(err))
        
  }, [])
  
    return (
      <div className="chat-box">
      <img src={userData?.image ? userData?.image : image} alt="" />
      <h3>{userData?.username}</h3>
    </div>
    );
};

export default MessageSidebar;