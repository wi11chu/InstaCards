// REQUIRE IN MODULES WE NEED
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


// CONNECT TO THE MONGOOSE DATABASE
const mongoURI = 'mongodb+srv://wi11chu:mdb1705425@cluster0.wpts4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoURI);


// SET UP EXPRESS APPLICATION 
const app = express();
const port = 3000;


// PARSING REQ BODY WHEN RECEIVED
app.use(express.json());


// REQUIRING IN THE ROUTERS MODULES
const deleteRouter = require('./routers/delete');
const startResetRouter = require('./routers/startReset');
const submitRouter = require('./routers/submit');


// ROUTE HANDLERS
// clicking the delete button will send request to
app.use('/delete', deleteRouter);
// clicking the startReset button will send request to
app.use('/startReset', startResetRouter);
// clicking the submit button will send request to
app.use('/submit', submitRouter);


// INITIAL CLIENT AGE RELOAD
// app.get('/', (req, res) => {
//   // what to send to the client when they access the web app URL
//   // send them the main index.html file
//   res.status(200);
//   return res.sendFile(path.resolve(__dirname, '../src/index.html'))
// });
app.use(express.static(path.resolve(__dirname, '../dist')));

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
