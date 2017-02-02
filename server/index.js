/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import webpack from 'webpack';
import webpackMidleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';


import users from './routes/users';

/*
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for
 * plenty of time in most operating environments.
 */
const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

const mongodbUri = 'mongodb://fitfab:mlabPassm3@ds019491.mlab.com:19491/tennis-pool';

mongoose.connect(mongodbUri, options);
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));


// define the app server
const app = express();

// using body parser for the API
app.use(bodyParser.json());

// defines api routes for users
app.use('/api/users', users);

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



// Wait for the database connection to establish, then start the app.
conn.once('open', () => {
    console.log('Connect to the mLab');
    // Listen in port 3000
    app.listen(3000,() => console.log('Running in localhost:3000'));
})
