const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const url = process.env.MONGODB_URI;
const client = new MongoClient(url);

const dbName = 'passmanager';
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

client.connect();

app.get('/', async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passmanager');
  const findResult = await collection.find({}).toArray();
  res.send(findResult);
});

app.post('/', async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('passmanager');
  const insertResult = await collection.insertOne(password);
  res.send({ success: true, result: insertResult });
});

app.delete('/', async (req, res) => {
  const { id } = req.body;
  const db = client.db(dbName);
  const collection = db.collection('passmanager');
  const deleteResult = await collection.deleteOne({ id });
  res.send({ success: true, result: deleteResult });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
