const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: 'https://www.youtube.com' });
});

server.listen(process.env.PORT || 8080, () => {
  console.log('Proxy server running');
});
