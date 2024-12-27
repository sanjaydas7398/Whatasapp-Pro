import React, { createContext, useContext, useReducer } from 'react';


const initialState = {
  contacts: [
    { id: "contact1", name: "John Doe" },
    { id: "contact2", name: "Jane Smith" },
  ],
  selectedContact: null,
  messages: {}, 
};

const chatReducer = (state, action) => {
    
  switch (action.type) {
    case 'SET_CONTACTS':
      return { ...state, contacts: action.contacts };
    case 'SET_SELECTED_CONTACT':
      return { ...state, selectedContact: action.contact };
    
      case 'ADD_MESSAGE':
        return {
          ...state,
          messages: {
            ...state.messages,
            [action.message.contactId]: [
              ...(state.messages[action.message.contactId] || []),  
              {
                id: action.message.id,
                text: action.message.text,
                sender: action.message.sender,
                createdAt: action.message.createdAt,
              },
            ],
          },
        };
    default:
      return state;
  }
};

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};
