const manifest = require('./manifest');
const {
  environment: { env },
} = manifest;

const server = require('fastify')({
  logger: { prettyPrint: env === 'development' ? true : false },
});
const { cldSqlConnection } = require('./db/index');
const apiPlugin = require('./api');

// Create a server instance
async function createServer() {
  // Register Development-only plugins
  if (env === 'development') {
    server.ready(() => {
      console.log(server.printRoutes());
    });
  }

  // Register Swagger for API documentation
  server.register(require('fastify-swagger'), {
    routePrefix: '/documentation',
    exposeRoute: true,
  });

  // Health Check Route
  server.get('/healthcheckz', (req, reply) => {
    reply.send({ status: 'OK' });
  });

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
