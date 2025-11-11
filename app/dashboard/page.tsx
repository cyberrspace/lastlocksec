"use client";

import DashboardWrapper from "@/components/common/DashboardWrapper";
import DashboardNav from "@/components/Dashboard/DashboardNav";
import DashboardSide from "@/components/Dashboard/DashboardSide";
import DashboardBody from "@/components/Dashboard/DashboardBody";

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <main className="flex overflow-hidden ">
        {/* Sidebar - Fixed */}
        <aside className="fixed top-[0px] left-[0px] w-[250px] bg-white shadow-md z-50">
          <DashboardSide />
        </aside>

        {/* Main Content Area */}
        <div className="ml-[250px] flex flex-col flex-1 h-full overflow-y-auto">
          {/* Navbar (sticky) */}
          <header className="fixed  w-[1220px] z-40 bg-white shadow-sm">
            <DashboardNav />
          </header>

          {/* Body (scrollable) */}
          <section className="flex-[4px] p-[16px] lg:p-[24px] mt-[8rem]">
            <DashboardBody />
          </section>
        </div>
      </main>
    </DashboardWrapper>
  );
}
