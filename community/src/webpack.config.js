module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://13.209.252.39:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
