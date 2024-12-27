import React, { useState, useEffect } from 'react';
import { ChatProvider } from './context/ChatContext';
import ContactList from './Components/ContactList/ContactList';
import ChatWindow from './Components/ChatWindow/ChatWindow';
import MessageInput from './Components/MessageInput/MessageInput'; 
import Login from './Login/Login';  
import {auth} from "./Login/firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app">
    {!user ? (
        <Login onLogin={setUser} />
    ) : (
      <ChatProvider>
        <div className="main-container">
          <div className="contact-list">
            <ContactList user={user} />
          </div>
          <div className="chat-container">
            
            <div className="chat-window">
              <ChatWindow user={user}/>
              <MessageInput user={user} />
            </div>
            
          </div>
        </div>
      </ChatProvider>
    )}
  </div>
  
  );
}

export default App;
