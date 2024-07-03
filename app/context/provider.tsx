"use client"
import { Session } from "next-auth";
import { SessionProvider  } from "next-auth/react" ;

type ProviderProps = {
    children: React.ReactNode;
    Session: Session | null;
  };

export default function Provider({ children, Session} : ProviderProps ){
    return (
      <SessionProvider session={Session}>
          {children}
      </SessionProvider>
     
    )
  }

