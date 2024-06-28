

import Image from "next/image";
import Login from "@/app/components/ui/login";
import { AuroraBackground } from "@/app/components/ui/background";
export default function Home() {
  return (
   <>
    <AuroraBackground >
      <div className="flex items-start justify-between">
        
        <Login/> 
      </div>
        
    </AuroraBackground>
      
  
   </>
  );
}
