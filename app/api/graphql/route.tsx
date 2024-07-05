import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import gql from 'graphql-tag';

const typeDefs = gql`
  type Query {
      fetchedUser: [User]
  }

type User {
 id: ID!
 name: String!
 prename: String! 
 age: Int
 email: String! 
 password: String!
 tickets: [Ticket]
}
type Ticket{
 ticket_id: ID! 
 status: String!
 description: String!
}

`;


interface MyContext {
  token?: string;
}

async function startApolloServer(){
  const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer<MyContext>({
  typeDefs,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();
app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  }),
);

await new Promise<void>((resolve) => 
  httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);
}

startApolloServer().catch((err)=> console.log(err))