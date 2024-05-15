import { useEffect, useRef, useState } from 'react';
import './MessageBody.css';
import axios from 'axios';


const MessageBody = ({ chat, currentUser, setSendMessage,  receivedMessage }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  console.log(token);

  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");


  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };
 // fetch messages
 useEffect(() => {
  if (chat !== null) {
  axios.get(`${import.meta.env.VITE_URL}/message/${chat?._id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then((res)=>{
  setMessages(res.data)})
  .catch((err)=>console.log(err))
}
}, [chat]);


// Always scroll to last Message
useEffect(()=> {
  scroll.current?.scrollIntoView({ behavior: "smooth" });
},[messages])

  // Send Message
  const handleSend = async(e)=> {
    e.preventDefault()
    const message = {
      chatId: chat._id,
      senderId : currentUser,
      text: newMessage,
      
  }
  const receiverId = chat?.members?.find((id)=>id!==currentUser);
  // send message to socket server
  setSendMessage({...{
    chatId: chat._id,
    senderId : currentUser,
    text: newMessage,
    
}, receiverId})
  // send message to database
  axios.post(`${import.meta.env.VITE_URL}/message`,{
    chatId: chat._id,
    senderId : currentUser,
    text: newMessage,
    
}, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
  .then((res)=>{
    setMessages([...messages, res.data]);
    setNewMessage("");
  }).catch((err)=>console.log(err))

}

// Receive Message from parent component
useEffect(()=> {
  console.log("Message Arrived: ", receivedMessage)
  if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
    setMessages([...messages, receivedMessage]);
  }

},[receivedMessage])

  const scroll = useRef();

    return (
        <div className="chat">
          {chat ? (<>
        <div className="chatbody">
        {messages.map((message) => (
                <>
                  <div ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                  </div>
                </>
              ))}
        </div>

     
          <form className="chat-input" onSubmit={handleSend}>
        <input type="text" placeholder="Message" 
                value={newMessage} 
      onChange={handleChange} />
                <button onClick={handleSend}>send</button>
                </form>
  
        </>):(
          <span className="chatbox-empty-message">
          Tap on a chat to start conversation...
        </span>
        )}
      </div>
    );
};

export default MessageBody;