import { openDB } from 'idb';

export const useIndexedDB = () => {
  const saveToIndexedDB = async (key, value) => {
    const db = await openDB('chatDB', 1, {
      upgrade(db) {
        db.createObjectStore('messages', { keyPath: 'id' });
      },
    });
    await db.put('messages', value, key);
  };

  const getFromIndexedDB = async (key) => {
    const db = await openDB('chatDB', 1);
    return db.get('messages', key);
  };

  return { saveToIndexedDB, getFromIndexedDB };
};
