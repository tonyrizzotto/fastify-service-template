const createServer = require('./server');
const {
  environment: { env, port },
} = require('./server/manifest');

// This function starts the server and launches it to the desired connection port.
const start = async () => {
  try {
    server = await createServer();

    // If in development, show route declaration
    if (env === 'development') {
    }

    // Only if an environment is listed should we expose our server to a port.
    if (env) {
      server.listen(port, () => {
        console.log(
          `Server listening on Port:${server.server.address().port}...`
        );
      });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// start the server
start();
