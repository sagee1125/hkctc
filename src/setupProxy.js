const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/hkctc-proxy', // proxy path
    createProxyMiddleware({
      target: 'https://www.hkctc.gov.hk', // target server
      changeOrigin: true,
      timeout: 10000,  
      proxyTimeout: 10000, 
      secure: false,
      pathRewrite: {
        '^/hkctc-proxy': '',  
      },

    })
  );


  app.use(
    '/cpas-icac-proxy',
    createProxyMiddleware({
      target: 'https://cpas.icac.hk',
      changeOrigin: true,
      secure: false,
      timeout: 10000,  
      proxyTimeout: 10000, 
      pathRewrite: {
        '^/cpas-icac-proxy': '',
      },
    })
  );
  
};
