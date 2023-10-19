const express = require('mongoose');
const server = express();
const port = 2023;

server.get('/', (req,res) => {
    res.render('dashboard');
});

server.listen(port, () => {
    console.log('Server is running on port $(port)');
});