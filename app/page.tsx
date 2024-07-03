

import Image from "next/image";
import Login from "@/app/components/ui/login";
import { AuroraBackground } from "@/app/components/ui/background";
import Link from "next/link";
export default function Home() {
  return (
   <>
    <AuroraBackground >
      
        <Link href="/login" className="text-5xl text-white cursor-pointer z-20">Click Here to Login</Link>
     
        
    </AuroraBackground>
      
  
   </>
  );
}
