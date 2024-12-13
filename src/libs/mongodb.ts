


import { MongoClient } from 'mongodb';
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL

const url = 'mongodb+srv://admin:admin@cluster0.lph5oow.mongodb.net/';
const client = new MongoClient(url);

// Database Name
const dbName = 'cat';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...

  return collection;
}


export default main