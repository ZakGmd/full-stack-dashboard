"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { 
      name: 'Dashboard', 
      href: '/dashboard',
      icon: '../homeIcon.svg' ,
      activeIcon: '/homeIconActive.svg' ,
     },
     {
      name: 'Tickets',
      href: '/dashboard/tickets',
      icon: '../transferIcon.svg' ,
      activeIcon: '/transferIconActive.svg' ,
      
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
            <Link key={link.name} href={link.href} className={clsx('w-full flex items-center  gap-6 text-[18px] font-medium leading-normal pl-11  ',
            {
              'text-[#0070f3]': pathname === link.href ,
              'text-[#B1B1B1]' : pathname !== link.href ,
            },
            )}
            >
              {pathname == link.href ? <Image src={activeIcon} alt={''} width={25} height={25}  />  : <Image src={icon} alt={''} width={25} height={25} className="opacity-100 hover:opacity-85 transition duration-200 ease-in-out"/> }
              <div >{link.name}</div>
            </Link>
          )
        })}
        </>
    )
}