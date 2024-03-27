"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/app/components/ui/background";


interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}



export default function Login(){


    return(
       
         <AuroraBackground >
           <form className="w-[520px] shadow-xl ring-white/15 ring-1 isolate rounded-xl bg-white/5  p-[40px] flex flex-col items-center justify-center ">
            <div className="flex flex-col items-center gap-6 w-full ">
                <div className="text-[28px] text-center leading-5 font-semibold text-slate-100 tracking-[-0.12px] mb-4 ">Sign in</div>
                <GoogleLoginButton/>
                <div className="flex items-center gap-4 ">
                    <div className="w-[140px] h-[0.5px] bg-gray-400/30"></div>
                    <div className="text-[16px] leading-5  font-normal text-slate-50  ">Or</div>
                    <div className="w-[140px] h-[0.5px] bg-gray-400/30"></div>
                </div>
                <div className="w-full flex flex-col gap-4 items-start mt-[-8px]">
                  <label className="text-[16px] leading-5 tracking-[-0.12px] font-normal text-slate-100" htmlFor="password">Email</label>
                   <input
                    className="bg-transparent w-full rounded-md border border-gray-200/10 p-[14px] text-sm outline-none placeholder:text-gray-400/30 text-slate-50"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                    minLength={6}
                    /> 
                </div>
                <div className="w-full flex flex-col gap-4 items-start">
                  <label className="text-[16px] leading-5 tracking-[-0.12px] font-normal text-slate-100" htmlFor="password">Password</label>
                   <input
                    className="bg-transparent w-full rounded-md border border-gray-200/10 p-[14px] text-sm outline-none placeholder:text-gray-400/30 text-slate-50"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
                    /> 
                </div>
                <div className="text-[14px] leading-3 tracking-[-0.13px] underline text-start w-full text-slate-50/30">Forgot password ?</div>
                <LoginButton/>
            </div>
           </form>
         </AuroraBackground>
          
    
        
    )
}

function LoginButton() {
    
    return (
      <button className="w-full h-12 flex items-center justify-center self-stretch gap-3 p-[14px] bg-gradient-to-br rounded-3xl from-white/5  to-gray-100/0 text-gray-100 text-[18px] font-normal leading-5 tracking-[-0.13px] ring-white/15 ring-1" >
        Login
        <Image src={"arrowright.svg"} alt={"arrow right icon svg "} width={20} height={20}  className="pt-[2px]"/>
      </button>
    );
  }

function GoogleLoginButton(){

    return(
        <button className="w-full h-12 flex items-center justify-center self-stretch gap-3 p-[14px] bg-gradient-to-br rounded-3xl from-white/5  to-gray-100/0 text-gray-100 text-[18px] font-normal leading-5 tracking-[-0.13px] ring-white/15 ring-1">Continue With Google  <Image src={"Gicon.svg"} alt={"arrow right icon svg "} width={20} height={20}  /> </button> 
    )
}