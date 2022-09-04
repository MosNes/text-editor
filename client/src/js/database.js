import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

export const getDb = async () => {
  //create db connection
  const jateDb = await openDB('jate', 1);
  
  //create a transaction and specify object store and scope
  const tx = jateDb.transaction('jate', 'readonly');
  
  //open the chosen object store
  const store = tx.objectStore('jate');
  
  //use getAll() method to get all info in the table
  const request = store.getAll();
  
  //get result/confirmation
  const result = await request;
  console.log('result.value',result);

  return result;
}

initdb();
