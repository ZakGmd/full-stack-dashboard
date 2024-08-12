import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';
import { auth } from '@/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient() ;
const resolvers = {
  Query: {
    Users: async () => {
      const users = await prisma.user.findMany() ;
      return users ;  
    }
  },
};

const typeDefs = gql`
type User {
  id: ID!
  name: String
  email: String
  image: String
  token: String
  freinds: [User]
}

type Query {
  Users: [User]
}
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req }),
});

export { handler as GET, handler as POST };