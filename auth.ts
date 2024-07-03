import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import {prisma} from "./app/libs/db"
 

 
export const { handlers , auth, signIn, signOut } = NextAuth({
  callbacks: {
    
    async session({ token , session  }) {
    
      if(token.sub && session.user) {
        session.user.id = token.sub ;
    } 
    if(token.role && session.user) {
        session.user.role = token.role ;
    }
    return session ;
  },
    async jwt({token ,user,session  }) {
      console.log(session) ;
      return token ;
    }
  } ,
  adapter: PrismaAdapter(prisma) ,
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET ,
  ...authConfig,
})

function getUserById() {
  throw new Error("Function not implemented.")
}
