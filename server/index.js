import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMidleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

// define the app server
const app = express();

// Webapck setup
app.use(webpackMidleware(webpack(webpackConfig)))

// Define catch all route
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

// Listen in port 3000
app.listen(3000,() => console.log('Running in localhost:3000'));
