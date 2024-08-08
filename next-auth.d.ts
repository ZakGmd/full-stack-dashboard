import NextAuth ,  {User, type DefaultSession} from "next-auth";


export type ExtndUser = DefaultSession['user'] & {
    role: "ADMIN" | "USER";
}

declare module "next-auth"{
    interface Session {
        user: User & {
            id: string | number | any,
            role: ExtndUser ,
            accessToken: number | any ,
            error?: "RefreshAccessTokenError"
        }& DefaultSession["user"]
    } ;
}

   
  declare module "next-auth/jwt" {
    interface JWT {
      access_token: string
      expires_at: number
      refresh_token: string
      error?: "RefreshAccessTokenError"
    }
  }