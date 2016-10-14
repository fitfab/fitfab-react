import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMidleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import usersRouter from './router/users.js';

// define the app server
const app = express();

// setup body parser middleware to handle json
app.use(bodyParser.json())

// setup route for the api
app.use('/api/users', usersRouter)

// Create compiler to be use by webpackMidleware and
// webpackHotMiddleware
const compiler = webpack(webpackConfig)

// Setup webpack to compile ES6
app.use(webpackMidleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

// Setup webpack hot reload
app.use(webpackHotMiddleware(compiler));

// Define catch all route
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});

// Listen in port 3000
app.listen(3000,() => console.log('Running in localhost:3000'));
