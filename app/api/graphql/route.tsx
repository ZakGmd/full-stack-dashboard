import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient() ;
const resolvers = {
  Query: {
    Users: async () => {
      const users = await prisma.user.findMany({
        include: {
          Task: true ,
        }
      }) ;
      return users ;  
    },
    getTasks: async () => {
      const tasks = await prisma.task.findMany({
        include: {
          owner: true ,
        }
      })
      return tasks 
    }
  },
  Mutation: {
    createTask : async (_: any, args:{description: string , title:string ,priority:string , ownerId: string , position: number }) => {
      const {description , title , priority , ownerId  } = args ;
      var calcPosition = await prisma.task.count() ;
      const newTask = await prisma.task.create({
        data:{
          ...args,
          position: calcPosition + 1
        
        }
      })
       console.log("new Task ", args )
     
       return newTask ;
    } ,
    updateTaskPosition: async (_:any, args:{position: number , id: string}) =>{
      const {position , id} = args ;
       const updatedTaskPositin = await prisma.task.update({
        where: {
          id : id
        } ,
        data: {
          position: position 
        }
       })
    }
  } ,
  
};

const typeDefs = gql`
type User {
  id: ID!
  name: String
  email: String
  image: String
  Task: [Tasks!]!
}
type Tasks {
  id: ID!
  title: String!
  description: String! 
  ownerId: ID!
  owner: User!
  position: Int
  category: String!
  priority: String
}
type Team {
  id: ID! 
  name: String! 
  members: [User!]!
}
type Query {
  Users: [User]
}
type Query {
  getTasks(description: String ,position: Int , title: String , priority: String , ownerId: String ): [Tasks]
}
type Mutation {
  createTask(description: String , title: String , priority: String , ownerId: String , position: Int): Tasks
}
type Mutation {
  updateTaskPosition(position: Int , id: ID): Tasks
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