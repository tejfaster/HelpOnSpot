import React,{useState} from 'react'
import {Text,View} from 'react-native'
import {GiftedChat} from 'react-native-gifted-chat'
// import Fire from '../Component/Fire'

const Chatbox = () =>{
    const [message,setmessage] = useState([])
    return(
     <GiftedChat messages={message}/>   
    )
}

export default Chatbox 

  