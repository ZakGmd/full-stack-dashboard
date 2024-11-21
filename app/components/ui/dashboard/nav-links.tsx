"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { signOut } from "next-auth/react"



const links = [
    { 
      name: 'Home', 
      href: '/dashboard',
      icon: '../homeIcon.svg' ,
      activeIcon: '/homeIconActive.svg' ,
     },
     {
      name: 'List',
      href: '/dashboard/tickets',
      icon: '../listIcon.svg' ,
      activeIcon: '/listIconActive.svg' ,
      
    },
    { name: 'Accounts',
      href: '/dashboard/accounts',
      icon: '../userIcon.svg' ,
      activeIcon: '/userIconActive.svg',
      
    },
    
  ];


export default function NavLinks(){
  const pathname = usePathname() ;
    return(
        <>
        {links.map((link)=>{
          
          const icon = link.icon ; 
          const activeIcon = link.activeIcon ;
          return(
            <Link key={link.name} href={link.href} className={clsx('w-full flex items-center  gap-3 text-[13px] font-medium leading-normal px-2 py-2 hover:opacity-85 hover:bg-white/10 rounded-md transition duration-200 ease-in-out"  ',
            {
              'text-white bg-white/10': pathname === link.href ,
              'text-[#6f6f6f]' : pathname !== link.href ,
            },
            )}
            >
              {pathname == link.href ? <Image src={activeIcon} alt={''} width={16} height={16}  />  : <Image src={icon} alt={''} width={16} height={16} className="opacity-100 hover:opacity-85 transition duration-200 ease-in-out"/> }
              <div >{link.name}</div>
            </Link>
          )
        })}
        
        </>
    )
}