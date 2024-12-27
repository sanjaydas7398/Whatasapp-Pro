
import { init, tx, id } from '@instantdb/react';

const db = init({
   appId: process.env.REACT_APP_INSTANTDB_APP_ID,
});

export const useInstantDB = () => {
  const sendMessage = (contactId, message) => {
    db.transact(tx.messages[id()].update({ ...message, contactId }));
  };

  const fetchMessages = (contactId) => {
    return db.useQuery({ messages: { contactId } });
  };

  return { sendMessage, fetchMessages };
};

