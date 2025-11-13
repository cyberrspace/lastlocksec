"use client";

import { useState } from "react";
import { MoreVertical, Plus } from "lucide-react";
import Image from "next/image";

export default function ResidentManagementBody() {
  const [filter, setFilter] = useState("Overdues");

  const residents = [
    {
      id: "9082",
      name: "Adeola Bello",
      address: "8 Road M",
      phone: "08011211212",
      email: "Adebello@gmail.com",
      totalDues: "₦420,500",
      overdues: "₦420,500",
    },
    {
      id: "0883",
      name: "Chike Obi",
      address: "12 Avenue A",
      phone: "08011211212",
      email: "obione@gmail.com",
      totalDues: "₦340,000",
      overdues: "₦340,000",
    },
    {
      id: "1642",
      name: "Fatima Yusuf",
      address: "13A Close 5",
      phone: "08011211212",
      email: "yusuffatima@gmail.com",
      totalDues: "₦70,000",
      overdues: "₦70,000",
    },
    {
      id: "9813",
      name: "Emeka Okoro",
      address: "80 Emerald Road",
      phone: "08011211212",
      email: "emekaokoro@gmail.com",
      totalDues: "₦124,600",
      overdues: "₦124,600",
    },
  ];

  return (
    <div className="max-w-[1200px] rounded-[10px] p-[24px] overflow-auto mx-[16px]">
      {/* Top Controls */}
      <div className="flex flex-wrap justify-between items-center mb-[24px]">
        <div className="flex items-center space-x-[8px]">
          {/* Filter Dropdown */}
          <div className="flex items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-[40px] px-[12px] py-[6px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] bg-[#FFFFFF] w-[173px] h-[54px] gap-[10px]">
            <label className="text-[13px] text-[#475569] font-medium mr-[3px]">
              Filter:
            </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-[#F4F7FE] text-[#2C2C2C] text-[11px] focus:outline-none border-none w-[120px] h-[35px]  px-[5px] rounded-[20px]"
            >
              <option className="text-[11px] w-[138px] h-[32px] bg-[#F4F7FE]">Overdues</option>
            </select>
          </div>

          {/* Add New Resident Button */}
          <button className="flex items-center justify-center bg-[#2164E7] text-[#FFFFFF] text-[13px] font-medium rounded-[20px] px-[12px] py-[15px] hover:bg-[#1E4FDB] transition w-[180px] h-[38px] border-none">
            <Plus size={16} className="mr-[4px]" />
            Add New Resident
          </button>
        </div>

        {/* Search and Export */}
        <div className="flex items-center space-x-[12px] bg-[#FFFFFF] p-[8px] h-[54px] rounded-[30px]">
          <div className="flex items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-[20px] px-[15px] py-[6px] shadow-sm w-[220px]">
            <input
              type="text"
              placeholder="Search Residents"
              className="bg-transparent outline-none text-[13px] text-[#475569] w-full border-none h-[26px] rounded-[30px]"
            />
          </div>
          <button className="flex gap-[5px] text-[#A3AED0] text-[11px] border-none  rounded-[20px] px-[12px] py-[6px] hover:bg-[#2563EB] hover:text-white transition">
            <Image
            src="/icon/export.png"
            alt="export icon"
            width={13}
            height={13}
            className="flex flex-col"
            />
            Export
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-[8px]">
          <thead>
            <tr className="text-left text-[13px] font-semibold text-[#475569] bg-[#F9F9F9] border-[#E4E4E4] p-[12px] h-[48px] rounded-[10px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] border-[10px] ">
              <th className="pb-[8px] pl-[12px]">Resident ID</th>
              <th className="pb-[8px]">Name</th>
              <th className="pb-[8px]">Address</th>
              <th className="pb-[8px]">Phone</th>
              <th className="pb-[8px]">Email</th>
              <th className="pb-[8px]">Total Dues</th>
              <th className="pb-[8px]">Overdues</th>
              <th className="pb-[8px]"></th>
            </tr>
          </thead>

          <tbody>
            {residents.map((r, i) => (
              <tr
                key={i}
                className="bg-[#FFFFFF] rounded-[10px] shadow-sm border border-[#E4E4E4] hover:shadow-[0px_4px_10px_rgba(0,0,0,0.08)]"
              >
                <td className=" py-[10px] pl-[12px] text-[13px] text-[#1E293B] font-medium">
                  {r.id}
                </td>
                <td className="py-[10px] text-[13px] text-[#1E293B]">{r.name}</td>
                <td className="py-[10px] text-[13px] text-[#1E293B]">{r.address}</td>
                <td className="py-[10px] text-[13px] text-[#1E293B]">{r.phone}</td>
                <td className="py-[10px] text-[13px] text-[#1E293B]">{r.email}</td>
                <td className="py-[10px] text-[13px] text-[#1E293B]">{r.totalDues}</td>
                <td className="py-[10px] text-[13px] text-[#1E293B]">{r.overdues}</td>
                <td className="py-[10px] pr-[16px] text-right">
                  <MoreVertical className="text-[#475569] cursor-pointer" size={18} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
