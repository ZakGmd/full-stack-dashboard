import NextAuth ,  {User, type DefaultSession} from "next-auth";


export type ExtndUser = DefaultSession['user'] & {
    role: "ADMIN" | "USER";
}

declare module "next-auth"{
    interface Session {
        user: User & {role: ExtndUser};
    } ;
}