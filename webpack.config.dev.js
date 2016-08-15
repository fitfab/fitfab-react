// the output path now is pointing to the root
// it does not matter since the bundle is going to
// serve from memory via webpack-dev-middleware




import path from 'path';

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel' ]
      }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  }
}
