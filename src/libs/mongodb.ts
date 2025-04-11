import { MongoClient, ObjectId } from 'mongodb';

import { publicEnv } from 'src/core/envConfig';


const MONGO_URL = `mongodb+srv://${publicEnv().MONGO_USERNAME}:${publicEnv().MONGO_PASSWORD}@cluster0.lph5oow.mongodb.net/`;
const MONGO_DB = publicEnv().MONGO_DATABASE;

// console.warn('client', MONGO_URL);
// console.warn('client', MONGO_DB);

// const initDatabase = async () => {
//   const client = new MongoClient(MONGO_URL);
//   await client.connect().catch(err => {
//     console.warn('err', err.errorResponse);
//   });

//   return client.db(MONGO_DB);
// };

export const getSampleUsers = async () => {
  // const client = new MongoClient(MONGO_URL);
  console.warn('client', MONGO_URL, MONGO_DB);
  // await client.connect();
  // const collection = client.db('sample_mflix').collection('users');

  // return collection.find({}).toArray();

};

// export const getDocs = async (collectionName = '', filter = {}) => {
//   const db = await initDatabase();
//   const collection = db.collection(collectionName);

//   return collection.find(filter).toArray();

// };

// export const getDocById = async (collectionName = '', id = '') => {
//   const db = await initDatabase();
//   const collection = db.collection(collectionName);

//   return collection.findOne({ '_id': new ObjectId(id) });
// };


// export const postDoc = async (collectionName = '', doc = {}) => {
//   const db = await initDatabase();
//   const collection = db.collection(collectionName);
//   return collection.insertOne(doc);

// };

// export const deleteDocById = async (collectionName = '', id = '') => {
//   const db = await initDatabase();
//   const collection = db.collection(collectionName);
//   return collection.deleteOne({ '_id': new ObjectId(id) });

// };
