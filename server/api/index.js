const routes = require('./routes');

async function apiPlugin(server, options, done) {
  server.register(routes, {
    prefix: '/routes'
  });

  done();
};

module.exports = { apiPlugin }