import NextAuth from "next-auth" ;
import { PrismaAdapter } from "@auth/prisma-adapter" ;
import { PrismaClient } from "@prisma/client" ;
import GoogleProvider from "next-auth/providers/google";
import prisma from "./prisma";
 

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) ,
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string ,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string ,
      })
  ],
})  

