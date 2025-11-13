"use client";

import DashboardWrapper from "@/components/common/DashboardWrapper";

import ResidentSide from "@/components/ResidentManage/ResidentSide";
import ResidentNav from "@/components/ResidentManage/ResidentNav";

import ResidentBody from "@/components/ResidentManage/ResidentBody";



export default function resident() {
 

 
  return (
    <DashboardWrapper>
      <main className="flex overflow-hidden ">
        {/* Sidebar - Fixed */}
        <aside className="fixed top-[0px] left-[0px] w-[250px] bg-white shadow-md z-30">
          <ResidentSide />
        </aside>
      
    
          
         
       


        {/* Main Content Area */}
        <div className="ml-[250px] flex flex-col flex-1 h-full overflow-y-auto">
          {/* Navbar (sticky) */}
          <header className="fixed  w-[1220px] z-30 bg-white shadow-sm">
            <ResidentNav />
          </header>

          {/* Body (scrollable) */}
          <section className="flex-[4px] p-[16px] lg:p-[24px] mt-[8rem]">
           
               <ResidentBody />
          </section>
        </div>
      </main>
    </DashboardWrapper>
  );
}
