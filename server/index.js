import express from 'express';
import path from 'path';

// define the app server
const app = express();

// define catch all route
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

// listen
app.listen(3000,() => console.log('Running in localhost:3000'));
