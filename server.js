import Express from 'express';
import next from 'next';
import bodyParser from 'body-parser';
import {ApolloServer} from 'apollo-server-express';
import {importSchema} from 'graphql-import';
import resolvers from './resolvers';
import {sequelize} from './models';

require('dotenv').config();

const typeDefs = importSchema('./schemas/schema.graphql');
const port = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production'; // true false
const nextApp = next({dev});
const handle = nextApp.getRequestHandler(); // part of next config
const {models} = sequelize;

nextApp.prepare().then(() => {
  // Express =============================================
  const express = new Express;
  express.use(bodyParser.json());
  express.use(bodyParser.urlencoded({extended: true}));

  // Apollo ==============================================
  const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
    context: async () => ({models}),
  });

  // Apollo & Express combination ========================
  express.all('*', (req, res, next) => {
    if (req.url === apolloServer.graphqlPath) {
      return next();
    }

    return handle(req, res); // for all the react stuff
  });

  apolloServer.applyMiddleware({
    app: express,
  });

  // Other things ========================================
  express.listen({port}, () => {
    console.log(
        `🚀 Apollo Server ready at http://localhost:${port}${apolloServer.graphqlPath}`);
    console.log(`🚀 Next JS App ready at http://localhost:${port}`);
  });
});
