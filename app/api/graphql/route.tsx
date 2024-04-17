import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import pkg from 'body-parser' ;
import { gql } from "graphql-tag";

interface MyContext {
    token?: String;
  }
const { json } = pkg;
const app = express() ;
const httpServer = http.createServer(app) ;

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer<MyContext>({
    resolvers , 
    typeDefs ,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]

});

const handler = startServerAndCreateNextHandler<NextRequest>(server , {
    context: async req => ({req}) ,
});

app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);
new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`Yo ZAK Server ready at http://localhost:4000/graphql`);
  
export { handler as GET ,handler as POST } ;