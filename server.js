const express = require('express');
const server = express();
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const path = require('path');
const port = 2023;
const router = express.Router();
const { DATABASE_URL, PORT } = require('./config.js');

server.set('view engine', 'ejs');
server.use(ejsLayouts);

//--------------  Import Models  ----------------//

//--------------  Import CSS &/or JSON ----------------//

server.use(express.static(path.join(__dirname, '/public')));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//--------------  Start Server  ----------------//

const startServer = async () => {
  // connect to to DB
  await mongoose.connect(DATABASE_URL);

  mongoose.connection.on('connected', () => {
    console.log('Connected to ' + DATABASE_URL);
  });
};
server.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});

//--------------  Routes Middleware  ----------------//

server.get('/', (req, res) => {
  res.render('travelplan');
});
