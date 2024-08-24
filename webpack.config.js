const path = require("path");

module.exports = {
  entry: "./src/app/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        },
      },
      {
        test: /\.css$/, 
        use: [
          'style-loader',   
          'css-loader',     
        ],
      },
      {
        test: /\.svg$/, 
        use: ['file-loader'], 
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: {
        directory: path.join(__dirname, "public"), // Serve static files from this directory
    },
    port: 3000, // Port for the development server
    open: true, // Open the default web browser when the server starts
  },
};