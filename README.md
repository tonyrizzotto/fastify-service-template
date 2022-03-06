# Fastify Service Template

This template is used to spin up a microservice backend with ease. Built using fastify to have both a customizable and performante service.

## How to Use

After you have cloned the project with:

```bash
git clone git@github.com:tonyrizzotto/fastify-service-template.git
```

You should next update the `title`, `description` and `version` in your `package.json` file. Then install your package dependencies with:

```bash
npm install
```

### Configuration

In the root of the project you must create a `.env` file to house your local environment variables:

```bash
touch .env
```

The minimum environment variable should be `CONNECTIONPORT`, which you can name whatever you'd like, but whatever you do list or rename, needs to be added to your `server/manifest.js` file to allow for proper environment/secret management in a local project.

DO NOT hardcode secrets into your project.

#### Development Plugins

This template uses a variety of development-only plugins and packages:

-- `nodemon` - For quickly restarting the development server after changes are saved.<br>
-- `pino-pretty` - Used as a plugin for Fastify logging to improve readability of request logs.<br>
-- `instance.printRoutes()` - When a server instance is started, prints a radix tree used by the router.<br>

#### Configuration for Cloud-SQL

Out of the box, this project will contain the setup necessary to work with a GCP Cloud-SQL Postgres database, which can be accessed through the Google [Cloud-SQL-Proxy](https://cloud.google.com/sql/docs/mysql/sql-proxy).

Once you have your CloudSQLProxy running, you should include the `DBUSER`, `DBNAME`, `DBPORT`, `DBHOST` and `DBPASS` into your `.env` file.
