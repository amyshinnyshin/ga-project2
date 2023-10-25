const express = require('express');
const app = express();
const ejsLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const path = require('path');
const port = 2023;
const router = express.Router();
const { DATABASE_URL, PORT } = require('./config.js');

const {} = require('./controllers/dashboardController');
const { travelplan } = require('./controllers/travelplanController');
travelplan

const {} = require('./controllers/dashboardController.js');

const {} = require('./controllers/dashboardController.js');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

//--------------  Import Models  ----------------//

//--------------  Import CSS &/or JSON ----------------//

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/bootstrap-icons', express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font/')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

//--------------  Start Server  ----------------//

const startServer = async () => {
  // connect to DB
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


router.get('/travelplan', (req, res) => {
    res.render('partials/travelplan', { title: 'My Plans / Newe' });
  });  
  

//--------------  Routes Middleware  ----------------//

const dashboardRouter = require('./routes/dashboardRouter');
const travelplanRouter = require('./routes/travelplanRouter');


app.use('/', dashboardRouter);
app.use('/travelplan', travelplanRouter);

const travelRouter = require('./routes/travelRouter');

app.use('/', travelRouter);

startServer();