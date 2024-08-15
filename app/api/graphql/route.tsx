import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';

import { PrismaClient } from '@prisma/client';

interface createTaskInput {

  description: string
}


const prisma = new PrismaClient() ;
const resolvers = {
  Query: {
    Users: async () => {
      const users = await prisma.user.findMany() ;
      return users ;  
    }
  },
  Mutation: {
    createTask : async (_: any, {description} : createTaskInput) => {
      const newTask = await prisma.task.create({
       data: {
        description
       }
      })
      console.log("new Task has a description ", newTask.description)
      return newTask 
      
    }
  }
  
};

const typeDefs = gql`

type User {
  id: ID!
  name: String
  email: String
  image: String
  task: [Tasks!]!
  
  
}

type Tasks {
  
  description: String! 
 
}
type Team {
  id: ID! 
  name: String! 
  members: [User!]!
}

type Query {
  Users: [User]
}
type Mutation {
  createTask( description: String): Tasks
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