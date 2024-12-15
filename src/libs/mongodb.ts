


import { MongoClient } from 'mongodb';

import { serverEnv } from 'src/core/envConfig';

const initDatabase = async () => {
  const url = `mongodb+srv://${serverEnv().MONGO_USERNAME}:${serverEnv().MONGO_PASSWORD}@cluster0.lph5oow.mongodb.net/`;
  const client = new MongoClient(url);

  const resp = await client.connect().catch(err => {
    console.warn('err', err.errorResponse);
  });

  const dbName = serverEnv().MONGO_DATABASE;

  return client.db(dbName);
};

export const getSampleUsers = async () => {
  const url = `mongodb+srv://${serverEnv().MONGO_USERNAME}:${serverEnv().MONGO_PASSWORD}@cluster0.lph5oow.mongodb.net/`;
  const client = new MongoClient(url);
  await client.connect();
  const collection = client.db('sample_mflix').collection('users');

  return collection.find({}).toArray();

};

export const getDocs = async (collectionName = '', filter = {}) => {
  const db = await initDatabase();
  const collection = db.collection(collectionName);

  return collection.find({}).toArray();

};
