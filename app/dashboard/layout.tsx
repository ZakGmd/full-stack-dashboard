import SideNav from "../components/ui/dashboard/sidenav";


export default function Layout({children}:{children : React.ReactNode}){

    return(
        <>
       <div className="flex h-screen px-[14px] flex-col md:flex-row md:overflow-hidden bg-[#000000] ">
         <div className="w-full flex-none max-w-[180px] ">
             <SideNav />
         </div>
          <div className="flex-grow border-l border-white/15 ">
            {children}
          </div>
        </div>
        </>
    )
}