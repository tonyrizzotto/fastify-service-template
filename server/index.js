const manifest = require('./manifest');
const {
  environment: { env },
} = manifest;
const { v4: uuidv4 } = require('uuid');
const server = require('fastify')({
  logger: { prettyPrint: env === 'development' ? true : false },
  genReqId: (request) => {
    return uuidv4();
  },
});
const { cldSqlConnection } = require('./db/index');
const { apiPlugin } = require('./api');

// Create a server instance
async function createServer() {
  // Register Swagger for API documentation
  server.register(require('fastify-swagger'), {
    routePrefix: '/documentation',
    exposeRoute: true,
  });

  // Health Check Route
  server.get('/healthcheckz', (request, reply) => {
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

  // Print Routes if development. NOTE: instance.ready() should only be called after all plugins are registered.
  if (env === 'development') {
    server.ready(() => {
      console.log(server.printRoutes());
    });
  }
  return server;
}

module.exports = createServer;
