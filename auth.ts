import NextAuth from "next-auth" ;
import { PrismaAdapter } from "@auth/prisma-adapter" ;
import { PrismaClient } from "@prisma/client" ;
import type { Adapter } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
 
const prisma = new PrismaClient()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string ,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string ,
      })
  ],
})  

