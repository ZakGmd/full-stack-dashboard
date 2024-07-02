import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import db from "./app/libs/db"
 

 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db) ,
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET ,
  ...authConfig,
})