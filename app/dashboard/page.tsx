"use client";

import DashboardWrapper from "@/components/common/DashboardWrapper";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import DashboardSide from "@/components/Dashboard/DashboardSide";
import DashboardBody from "@/components/Dashboard/DashboardBody";


export default function dashboard(){
  return(
  <DashboardWrapper>
   <main className="w-full">
    <div className="flex gap-[10px] w-full">
     <DashboardSide/>
          <div className="w-full flex flex-col items-start space-y-[30px]">
            <section className="w-full ">
               <DashboardNav />
            </section>

            <section>
              <DashboardBody />
            </section>
     
   
     </div>
         
    </div>
      
   
   </main>

    </DashboardWrapper>

  )
}