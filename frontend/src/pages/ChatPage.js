import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

const ChatPage = () => {
// to render the data in our front end
  const [chats, setChats] = useState([])




// we are using axios package to fetch the data 
  const fetchChats =async() => {
   // {} this adding around data destructures it 
    const {data} = await axios.get("/api/data");
    // console.log(data);
    setChats(data);
  }

  useEffect(()=>{
    fetchChats();
  },[]);

  return (
    <div>
       {/* we use curly braces to write html in react  */}
      
        {chats.map(chat => <div key = {chat._id} >{chat.chatName}</div>)}
     
    </div>
  )
}

export default ChatPage
