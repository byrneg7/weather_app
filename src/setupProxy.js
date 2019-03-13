const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy("/forecast/:apiKey/:lat/:long/", { target: 'https://api.darksky.net' }))
};

