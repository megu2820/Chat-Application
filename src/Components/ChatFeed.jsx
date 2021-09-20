import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

const ChatFeed = (props) => {
    const {Chats, activeChat, userName, messages} = props;

    const chat = Chats && Chats[activeChat];

  /* Gotta get this functionality working in future commits
  
  const renderReadReceipts = (message, isMyMessage) => {
    return props?.chats?.people?.map((person, index) => person.last_read === message.id && (
        <div 
            key={`read_${index}`}
            className="read-receipt"
            style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        />
    ))
}
Corresponding HTML
<div className="read-receipts"  style = {{marginRight : isMyMessage? "18px" : '0px', marginLeft : isMyMessage? '0px' : "68px"}}>
                        {renderReadReceipts(message,isMyMessage)}
                    </div>*/

   
    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map ((key,index)=>{
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys [index-1]; // to check what is the last message
            const isMyMessage = userName === message.sender.username;
          //  console.log(message);
            return(
                <div key = {`msg_${index}`} style = {{ width : "100%"}} >
                    <div className = "message-block">
                        {isMyMessage ? <MyMessage message={ message}/> : <TheirMessage message={message} lastMessage= {messages[lastMessageKey]}/>}
                    </div>
                    
                </div>
              
            );
        })
    }
    
   // if (!chat) return "Loading....";
    return( 
       <div className="chat-feed" >
         <div className = "chat-title-container">
             <div className = "chat-title">{chat?.title}</div>
             < div className = 'chat-subtitle'>
                 {chat?.people.map((person)=> 
                     ` ${person.person.username}`)}
                     {renderMessages()}
                     <div style = {{height:'100px'}}/>
                     <div className= "message-form-container">
                         <MessageForm {...props} chatID= {activeChat} />
                     </div>
             </div>
         </div>
        </div>
    )
}
export default ChatFeed;