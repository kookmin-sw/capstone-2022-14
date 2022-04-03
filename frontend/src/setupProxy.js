const { createProxyMiddleware } = require('http-proxy-middleware');

const env = process.env.API_SERVER;

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: env,
      changeOrigin: true,
    }),
  );
};
