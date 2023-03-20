const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: "http://test.realblocks.com:80",
      changeOrigin: true,
      secure: false,
    })
  );
};
