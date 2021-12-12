import { join, resolve } from 'node:path';
import { URL } from 'node:url';

const __dirname = new URL('.', import.meta.url).pathname;

const config = {
  entry: {
    main: './src/',
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.m?jsx?/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules', resolve(__dirname, 'src')],
    alias: {
      '@': resolve(__dirname, 'src/components'),
      '#': resolve(__dirname, 'src/containers'),
    },
    extensions: ['.js', '.jsx', '.less'],
  },
  mode: 'development',
  devServer: {
    port: 1234,
  },
  context: __dirname,
};

export default config;
