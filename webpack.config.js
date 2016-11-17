var webpack = require('webpack'),
    path = require('path');
module.exports = {
  context: __dirname + '/app',
  entry: {
  app: './app.js',
  vendor: ['angular']
  },
  output: {
  path: __dirname + '/public/scripts',
  filename: 'workout.bundle.js'
  },
  module: {
loaders: [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel', // 'babel-loader' is also a valid name to reference
    query: {
      presets: ['es2015']
    }
  }
]
},
  plugins: [
  new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};
