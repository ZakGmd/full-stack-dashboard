"use client"
import { useEffect, useState } from "react";
import Login from "../components/ui/login";
import { AuroraBackground } from "../components/ui/background";
import Registre from "../components/ui/registre";

interface MouseEventProps extends MouseEvent {
  clientX: number;
  clientY: number;
  target: Element;
}

export default function page() {
   return (
    <AuroraBackground >
       <Registre/>
    </AuroraBackground>
      
   )
}
