const server = require('fastify')({ logger: true });
const { cldSqlConnection } = require('./db/index');
const apiPlugin = require('./api');

// Create a server instance
async function createServer() {
  // Register DB connection
  server.register(require('fastify-postgres'), {
    connectionString: cldSqlConnection,
  });

  // Register API routes
  server.register(apiPlugin, {
    prefix: '/api/v1',
  });

  return server;
}

module.exports = createServer;
