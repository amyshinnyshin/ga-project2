const express = require('express');
const server = express();
const port = 2023;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('travelplan');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

