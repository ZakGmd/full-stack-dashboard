import { auth } from "@/auth";


export default async function idk() {
    const session = await auth() ;
    const srrc = session?.user.image as string ;
    return(
        <>
            <div>{JSON.stringify(session)}</div>
            <div className="text-5xl font-bold ">{session?.user.name}</div>
        </>
        
    )

} 