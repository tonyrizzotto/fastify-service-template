module.exports = async function (server, opts, next) {
  // A simple Health Check
  server.get('/healthcheckz', async (req, reply) => {
    reply.send({ status: 'OK' });
  });

  next();
};
