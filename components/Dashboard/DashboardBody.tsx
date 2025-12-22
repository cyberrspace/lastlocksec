"use client";

import DashboardChart from "./DashboardChart";
import DashboardTrans from "./DashboardTrans";

import { useEffect, useState } from "react";
import { getAllEstates } from "@/services/estate";
import { Estate } from "@/types/estate";

export default function DashboardBody() {
  const [estates, setEstates] = useState<Estate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEstates() {
      try {
        const data = await getAllEstates();
        setEstates(data);
      } catch (error) {
        console.error("Failed to fetch estates", error);
      } finally {
        setLoading(false);
      }
    }

    loadEstates();
  }, []);

  // Use first estate as current estate (common dashboard pattern)
  const estate = estates?.[0];

  if (loading) {
    return (
      <main className="px-[16px]">
        <p>Loading dashboard...</p>
      </main>
    );
  }

  if (!loading && estates.length === 0) {
    return (
      <main className="px-[16px]">
        <p>No estate data available</p>
      </main>
    );
  }


  return (
    <main className=" px-[16px] space-y-[15px] max-w-full ">
      <section className="flex items-center space-x-[2rem] bg-[#F8F8F8]  h-[204px] px-[24px] py-[20px] rounded-[10px] max-w-full">
        <div>
          <h2 className="font-bold text-[18px]">
            Estate info.
          </h2>
          <p className="w-[180px] leading-[20px] text-[12px] font-normal text-[#2C2C2C]">
            {estate?.estateName ?? "—"}
          </p>
          <p className="leading-[5px] text-[12px] font-normal text-[#2C2C2C]">
            {estate?.phoneNumber ?? "—"}
          </p>
        </div>

        <div className="h-[117px] w-[250px] bg-[#FFFFFF] flex flex-col items-center rounded-[6px] px-[5px] py-[5px]">
          <h2 className="font-bold text-[28px] text-[#2C2C2C]">₦ 92,500,000</h2>
          <p className="text-[12px] font-normal text-[#2C2C2C]">
            Amount Collected This Month
          </p>
        </div>

        <div className="h-[117px] w-[250px] bg-[#FFFFFF] flex flex-col items-center rounded-[6px] px-[5px] py-[5px]">
          <h2 className="font-bold text-[28px] text-[#2C2C2C]">
            {estates.length}
          </h2>
          <p className="text-[12px] font-normal text-[#2C2C2C]">
            No of users
          </p>
        </div>

        <div className="h-[117px] w-[250px] bg-[#FFFFFF] flex flex-col items-center rounded-[6px] px-[5px] py-[5px]">
          <h2 className="font-bold text-[28px] text-[#2C2C2C]">82%</h2>
          <p className="text-[12px] font-normal text-[#2C2C2C]">
            Due collected
          </p>
        </div>
      </section>

      <section className="w-full">
        <DashboardChart />
      </section>

      <section>
        <DashboardTrans />
      </section>
    </main>
  );
}
