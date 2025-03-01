const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/hkctc-proxy', // proxy path
    createProxyMiddleware({
      target: 'https://www.hkctc.gov.hk', // target server
      changeOrigin: true,
      pathRewrite: {
        '^/hkctc-proxy': '',  // remove '/pdf' , query directly
      },
    })
  );


  app.use(
    '/cpas-icac-proxy',
    createProxyMiddleware({
      target: 'https://cpas.icac.hk',
      changeOrigin: true,
      pathRewrite: {
        '^/cpas-icac-proxy': '',
      },
    })
  );
  
};
