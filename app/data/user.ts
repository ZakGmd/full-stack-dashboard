import { userAgent } from "next/server";
import { db } from "../libs/db";


export const getUserByEmail = async (email: string )=> {

    try{
        const user = await db.user.findUnique({
            where: {email} 
        }) ;
        return user 
    }catch(err){
        console.log(err) ;
    }
}