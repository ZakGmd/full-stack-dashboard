import SideNav from "../components/ui/dashboard/sidenav";


export default function Layout({children}:{children : React.ReactNode}){

    return(
        <>
       <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-[#141414]">
         <div className="w-full flex-none md:w-64">
             <SideNav />
         </div>
          <div className="flex-grow ">
            {children}
          </div>
        </div>
        </>
    )
}