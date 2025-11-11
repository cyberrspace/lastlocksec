"use client";

import DashboardWrapper from "@/components/common/DashboardWrapper";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import DashboardSide from "@/components/Dashboard/DashboardSide";
import DashboardBody from "@/components/Dashboard/DashboardBody";

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <main className="w-full">
        <div className="flex flex-row lg:flex-col gap-2 lg:gap-[10px] ">
          <DashboardSide />
          <div className=" flex flex-col items-start space-y-4 lg:space-y-[30px] px-4 lg:px-0">
            <section className="w-full">
              <DashboardNav />
            </section>
            <section className="">
              <DashboardBody />
            </section>
          </div>
        </div>
      </main>
    </DashboardWrapper>
  )
}