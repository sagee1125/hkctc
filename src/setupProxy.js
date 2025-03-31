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
      headers: {
        "Content-Security-Policy": "default-src 'self'"
      },
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
      headers: {
        "Content-Security-Policy": "default-src 'self'"
      },
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
      timeout: 20000,  
      proxyTimeout: 20000, 
      headers: {
        "Content-Security-Policy": "default-src 'self'"
      },
      pathRewrite: {
        '^/hkbedc-proxy': '',
      },
      onProxyRes: (proxyRes, req, res) => {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
        proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
      },
    })
  );

  app.use(
    '/takungpao-proxy',
    createProxyMiddleware({
      target: 'https://paper.takungpao.com',
      changeOrigin: true,
      secure: false,
      timeout: 20000,  
      proxyTimeout: 20000, 
      pathRewrite: {
        '^/takungpao-proxy': '',
      },
      headers: {
        "Content-Security-Policy": "default-src 'self'"
      },
    })
  );

  app.use(
    '/devb-proxy',
    createProxyMiddleware({
      target: 'https://www.devb.gov.hk',
      changeOrigin: true,
      secure: false,
      timeout: 20000,  
      proxyTimeout: 20000, 
      pathRewrite: {
        '^/devb-proxy': '',
      },
      headers: {
        "Content-Security-Policy": "default-src 'self'"
      },
    })
  );

};
