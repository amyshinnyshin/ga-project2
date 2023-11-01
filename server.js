const express = require('express');
const app = express();
// const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
// const path = require('path');
const router = express.Router();
const { DATABASE_URL, PORT } = require('./config.js');
const ejs = require('ejs')
const fs = require('fs');


//app.set('view engine', 'ejs');
//app.use(ejsLayouts);

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

app.use('/', hompeageRouter)
app.use('/plans', travelPlansRouter);
app.use('/users', usersRouter);

app.use('/', dashboardRouter);

startServer();
