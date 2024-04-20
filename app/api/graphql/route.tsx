import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';

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

 tickets: [Ticket]
}
type Ticket{
 ticket_id: ID! 
 status: String!
 description: String!
}

`;

const server = new ApolloServer({typeDefs});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req }),
});

console.log(handler)
  
export { handler as GET ,handler as POST } ;