module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 5000,
    allowedHosts: 'all',
  },
  devtool: 'cheap-module-source-map',
};
