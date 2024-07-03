import NextAuth, { User } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import  prisma from "./app/libs/db";
import authConfig from "./auth.config"
import { ExtndUser } from "./next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  
 /* callbacks: {  
    async session({ token, session, user }) {
      
      await Promise.all([token, user]);

      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as ExtndUser;
      }
      return session;
    },
    async jwt({ token, user, session }) {
      console.log({ token, user, session }); 
      return token;
    },
  },*/
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  ...authConfig,
});
