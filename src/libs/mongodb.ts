import { MongoClient, ObjectId } from 'mongodb';

import { publicEnv } from 'src/core/envConfig';


const MONGO_URL = `mongodb+srv://${publicEnv().MONGO_USERNAME}:${publicEnv().MONGO_PASSWORD}@cluster0.lph5oow.mongodb.net/`;
const MONGO_DB = publicEnv().MONGO_DATABASE;


const initDatabase = async () => {
  const client = new MongoClient(MONGO_URL);
  await client.connect().catch(err => {
    console.warn('err', err.errorResponse);
  });

  return client.db(MONGO_DB);
};

export const getSampleUsers = async () => {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  const collection = client.db('sample_mflix').collection('users');

  return collection.find({}).toArray();

};

export const getDocList = async (collectionName = '', filter = {}) => {
  const db = await initDatabase();
  const collection = db.collection(collectionName);

  return collection.find(filter).toArray();

};

export const postDoc = async (collectionName = '', doc = {}) => {
  const db = await initDatabase();
  const collection = db.collection(collectionName);
  return collection.insertOne(doc);

};

export const getDocById = async (collectionName = '', id = '') => {
  const db = await initDatabase();
  const collection = db.collection(collectionName);

  return collection.findOne({ '_id': new ObjectId(id) });
};


export const patchDoc = async (collectionName = '', doc: any = {}) => {
  const db = await initDatabase();
  const collection = db.collection(collectionName);
  const { _id, ...rest } = doc;
  if (!ObjectId.isValid(_id)) {
    throw new Error('Invalid ObjectId');
  }
  return collection.updateOne({ '_id': new ObjectId(_id as string) }, { $set: rest });
};



export const deleteDocById = async (collectionName = '', id = '') => {
  const db = await initDatabase();
  const collection = db.collection(collectionName);
  return collection.deleteOne({ '_id': new ObjectId(id) });

};
