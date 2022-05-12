// REQUIRE IN MODULES WE NEED
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


// CONNECT TO THE MONGOOSE DATABASE
const mongoURI = 'mongodb+srv://wi11chu:7K0Xjjg6R9gLbPAp@cluster0.wpts4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI);


// SET UP EXPRESS APPLICATION 
const app = express();
const port = 3000;


// PARSING REQ BODY WHEN RECEIVED
app.use(express.json());


// REQUIRING IN THE ROUTERS MODULES
const cardsRouter = require('./routers/cardsRouter');

// ROUTE HANDLERS
app.use('/api', cardsRouter)


// INITIAL CLIENT AGE RELOAD
app.use(express.static('dist'));

app.get('/', (req, res) => {
  console.log('client is visiting the root endpoint');
  res.status(200);
  res.setHeader('Content-Type', 'text/html'); 
  res.sendFile(path.resolve(__dirname, '../dist/main.js'));
});


// CATCH-ALL ROUTE HANDLER FOR UNKNOWN ROUTES
app.use((req, res) => {
  res.status(404);
  return res.send('Error: the page you are requesting not found');
});


// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.log("Global Error: ", err);
  const defaultErr = {
    log: 'Global error handler caught an error in the middleware chain',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


// ACTIVATING SERVER
app.listen(port, () => {
  console.log(`currently listening on port ${port}`);
});
