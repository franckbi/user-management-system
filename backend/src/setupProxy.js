const { createProxyMiddleware } = require("http-proxy-middleware");

// By default, talk to localhost:8080 (for local dev).
// When running in Docker, set REACT_APP_API_URL to http://backend:8080
const target = process.env.REACT_APP_API_URL || "http://localhost:8080";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target,
      changeOrigin: true,
      logLevel: "debug",
    })
  );
};
