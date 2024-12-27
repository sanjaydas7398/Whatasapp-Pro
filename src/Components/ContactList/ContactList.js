import React, { useState } from "react";
import { useChatContext } from "../../context/ChatContext";
import "./ContactList.css";
import {auth} from "../../Login/firebase";

const ContactList = ({ user }) => {
  const { state, dispatch } = useChatContext();
  const [showPopup, setShowPopup] = useState(false);

  const handleContactSelect = (contact) => {
    dispatch({ type: "SET_SELECTED_CONTACT", contact });
  };

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  return (
    <>
     <div className="contact-list-container">
        <div className="chat-header-lefts">
        <h3>Chats</h3>
        <div className="user-info-lefts">
          <img
            src={user.photoURL}
            alt={`${user.name}'s avatar`}
            className="avatar-lefts"
            onClick={togglePopup} 
          />
          <p className="user-name-lefts">{user.name}</p>
          {showPopup && ( 
            <div className="popup">
              <button onClick={() => auth.signOut()} className="logout-button">
                Logout
              </button>
            </div>
          )}
        </div>
        </div>

        <div className="contact-list">
        {state.contacts.map((contact) => (
          <div
            key={contact.id}
            className="contact"
            onClick={() => handleContactSelect(contact)}
          >
            {contact.name}
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default ContactList;
