import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';
import { auth } from '@/auth';

const resolvers = {
  Query: {
    me: async (context: { req: NextRequest }) => {
      const session = await auth();
      if (!session) return null;
      return { id: session.user.id, name: session.user.name, email: session.user.email , token: session.user.accessToken };
    },
  },
};

const typeDefs = gql`
type User {
  id: ID!
  name: String
  email: String
  token: String 
}

type Query {
  me: User
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