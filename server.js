const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const path = require('path');
const port = 2023;
const router = express.Router();
const { DATABASE_URL, PORT } = require('./config.js');
 const {} = require('./controllers/dashboardController');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

//--------------  Import Models  ----------------//

//--------------  Import CSS &/or JSON ----------------//

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--------------  Start Server  ----------------//

const startServer = async () => {
  // connect to to DB
  await mongoose.connect(DATABASE_URL);

  mongoose.connection.on('connected', () => {
    console.log('Connected to ' + DATABASE_URL);
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${port}`);
  });
  app.on('connected', () => {
    console.log('MongoDB connected on:', DATABASE_URL);
  });
};

//--------------  Routes Middleware  ----------------//

const dashboardRouter = require('./routes/dashboardRouter');

app.use('/', dashboardRouter);

startServer();
