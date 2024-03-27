"use client" ;
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/background";
import Image from "next/image";
import Login from "@/components/ui/login";

export default function Home() {
  return (
   <>
   <AuroraBackground >
      <Login/> 
   </AuroraBackground>
   </>
  );
}
