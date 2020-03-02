import express from "express";
import {
  ApolloServer
} from 'apollo-server-express';
// import {
//   // schema,
//   typeDefs, resolvers
// } from './graphql';

import {
  typeDefs, resolvers
} from './graphql/index';


const app = express();
const port = 9000;
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({
  app,
  path: '/api'
});
app.listen(port);


