module.exports = async function (server, opts, next) {
    // This server uses a Full Route Declaration
    server.route({
      method: 'GET',
      url: '/',
      schema: {
        query: {
          name: { type: 'string' },
        },
      },
      // This is necessary to override the default validation response
      attachValidation: true,
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' },
          },
        },
      },
      handler: (request, reply) => {
        request.log.info(`Request has been received.`);
        const { name } = request.query;
        try {
          if (request.validationError) {
            reply.code(400).send({
              id: request.id,
              message: 'Bad Request.',
            });
          } else {
            reply.code(200).send({ hello: `${!name ? 'world' : name}` });
          }
        } catch (err) {
          console.log(err.message);
        }
      },
    });
  
    next();
  };
  