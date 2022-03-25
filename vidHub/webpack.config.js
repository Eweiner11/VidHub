var path = require('path');

const config = {
    entry: './client/src/index.js',
    output: {
      path: path.resolve(__dirname, './client/dist'),
      filename: 'bundle.js'
    },
  
    module: {
      rules: [
        
        {
          test: /\.png$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                mimetype: 'image/png'
              }
            }
          ]
        },
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
       
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        
       
      ]
    }
  };
  
  module.exports = config;