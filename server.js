const express = require('express');

const path = require('path');
const app = express();
const addRequestId = require('express-request-id')();


app.use(addRequestId);
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// If we are in prod (Heroku), process.env.PORT is true,
// otherwise default to PORT 3000
const PORT = process.env.PORT || 3000;


const routes = require('./routes');

app.use(routes);

// this gets all files inside public folder
app.use(express.static('public'));

//this gets the server started and logs the server (PORT) defined above
app.listen(PORT, () => console.log(`Sever started on PORT ${PORT}`));
