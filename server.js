const express = require('express');
const mongoose = require('mongoose');
// const path = require('path');
const router = express.Router();
const { DATABASE_URL, PORT } = require('./config.js');
const ejs = require('ejs');
const fs = require('fs');

//------creating an express server instance-----⭐
const app = express();

//--------------  Import Models  ----------------//

//--------------  Import CSS &/or JSON ----------------//
app.use(express.static('public'));

console.log('dirname', __dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--------------  Start Server  ----------------//
const startServer = async () => {
  // connect to DB
  await mongoose.connect(DATABASE_URL);

  mongoose.connection.on('connected', () => {
    console.log('Connected to ' + DATABASE_URL);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  app.on('connected', () => {
    console.log('MongoDB connected on:', DATABASE_URL);
  });
};

//--------------  Routes Middleware  ----------------//

const travelPlansRouter = require('./routers/travelPlansRouter.js');
const usersRouter = require('./routers/usersRouter.js');
const homepageRouter = require('./routers/homepageRouter.js');


app.use('/', homepageRouter)
app.use('/plans', travelPlansRouter);
app.use('/users', usersRouter);

startServer();
