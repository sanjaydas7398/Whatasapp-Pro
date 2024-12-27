import React, { useState } from 'react';
import { useChatContext } from '../../context/ChatContext';
import { useInstantDB } from '../../hooks/useInstantDB';
import "./MessageInput.css";

const MessageInput = ({user}) => {
  const [text, setText] = useState('');
  const { state, dispatch } = useChatContext();
  const { sendMessage } = useInstantDB();

  const handleSend = () => {
    if (!state.selectedContact || !state.selectedContact.id) {
      alert('Please select a contact to send a message');
      return;
    }

    if (text.trim()) {
      const message = {
        id: `${user.id}-${state.selectedContact.id}-${Date.now()}`,
        contactId: state.selectedContact.id,
        text:text,
        sender: user.name,
        createdAt: new Date(),
      };

      dispatch({
        type: 'ADD_MESSAGE',
        message,
      });
      sendMessage(state.selectedContact.id, message); 
      setText('');
  }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
