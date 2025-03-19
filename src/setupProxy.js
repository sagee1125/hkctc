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


  app.use(
    '/hkbedc-proxy',
    createProxyMiddleware({
      target: 'https://www.hkbedc.icac.hk',
      changeOrigin: true,
      secure: false,
      timeout: 10000,  
      proxyTimeout: 10000, 
      pathRewrite: {
        '^/hkbedc-proxy': '',
      },
    })
  );

  app.use(
    '/takungpao-proxy',
    createProxyMiddleware({
      target: 'https://paper.takungpao.com',
      changeOrigin: true,
      secure: false,
      timeout: 10000,  
      proxyTimeout: 10000, 
      pathRewrite: {
        '^/takungpao-proxy': '',
      },
    })
  );

  app.use(
    '/hkcd-proxy',
    createProxyMiddleware({
      target: 'https://www.hkcd.com.hk',
      changeOrigin: true,
      secure: false,
      timeout: 10000,  
      proxyTimeout: 10000, 
      pathRewrite: {
        '^/hkcd-proxy': '',
      },
    })
  );

};
