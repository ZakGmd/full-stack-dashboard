import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate'

declare global {
    var prisma : PrismaClient | undefined ;
}

const prisma = globalThis.prisma || new PrismaClient().$extends(withAccelerate()) ;



export default prisma 