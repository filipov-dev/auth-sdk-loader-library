// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
  entry: {
    index: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    library: '',
    libraryExport: '',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [],
  optimization: {}
};
