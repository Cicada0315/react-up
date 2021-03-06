import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import posts_routes from './routes/posts_routes.js';
import user_routes from './routes/users_routes.js';

const app = express();
dotenv.config();

//setting up the body parser to it can send request properly
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

//add prefix for the posts routes as http://localhost:5000/posts
app.use('/posts', posts_routes);
app.use('/user', user_routes);

//connect our server with database 
//In here I used mongoDB https://www.mongodb.com/cloud/atlas
//Our database is hosted by mongoDB cloud.

const CONNECTION_URL='mongodb+srv://'+process.env.USER+':'+process.env.PASSWORD+'@cluster0.filmn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);