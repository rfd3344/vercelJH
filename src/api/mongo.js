'use server';

import { MongoClient } from 'mongodb';

const setupMongo = async (dbName) => {
  const url =
    'mongodb+srv://admin:admin@cluster0.lph5oow.mongodb.net/next?retryWrites=true&w=majority';
  const client = new MongoClient(url);
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('documents');

  return collection;
};

export const getCats = async () => {
  const db = await setupMongo('cat');

  return db.find().toArray();
};

export const createCat = async ({ name = '', age = 0, color = '' }) => {
  const db = await setupMongo('cat');

  return db.insertOne({
    name,
    age,
    color,
  });
};

export const deleteCat = async (doc) => {
  const db = await setupMongo('cat');

  return db.deleteOne(doc);
};
