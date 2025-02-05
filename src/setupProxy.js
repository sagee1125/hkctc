const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/pdf-proxy', // proxy path
    createProxyMiddleware({
      target: 'https://www.hkctc.gov.hk', // target server
      changeOrigin: true,
      pathRewrite: {
        '^/pdf-proxy': '',  // remove '/pdf' , query directly
      },
    })
  );
};
