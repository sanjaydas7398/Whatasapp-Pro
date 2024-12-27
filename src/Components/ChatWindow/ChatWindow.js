import React from 'react';
import { useChatContext } from '../../context/ChatContext';
import "./ChatWindow.css"

const ChatWindow = ({user}) => {
  const { state } = useChatContext();


const currentMessages = state.selectedContact
  ? state.messages[state.selectedContact.id] || []  
  : [];
const filteredMessages = currentMessages.filter((msg) => msg.sender === user.name);

  return (
    <div >
      {state.selectedContact ? (
        <>
        <div className="chat-header">
           <h2 className="contact-name">{state.selectedContact.name}</h2>
        </div>

        
        <div className="messages-container">
        {filteredMessages.length > 0 ? (
            filteredMessages.map((msg) => (
              <p key={msg.id}>
                <strong>{msg.sender}: </strong>{msg.text}
              </p>
            ))
          ) : (
            <p>No messages from you yet</p>
          )}
       </div>
        </>
      ) : (
        <h2>No contact selected</h2>
      )}
    </div>
  );
};

export default ChatWindow;
