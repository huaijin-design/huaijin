const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    filename: 'huaijin.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Huaijin',
    libraryTarget: 'umd',
  },
  mode: 'production',
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
