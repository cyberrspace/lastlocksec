"use client";

import { useState, useRef, useEffect } from "react";
import { MoreVertical, Plus, FileSpreadsheet, FileText } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import Image from "next/image";


interface ResidentSideProps {
  onResidentClick?: () => void;
  onViewPastPayment?: () => void;  
}



export default function SecurityBody({onResidentClick, onViewPastPayment}: ResidentSideProps) {
 
  const [filter, setFilter] = useState("Overdues");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

  const filterRef = useRef<HTMLDivElement | null>(null);
  const exportRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        !filterRef.current?.contains(e.target as Node) &&
        !exportRef.current?.contains(e.target as Node) &&
        !dotsRef.current?.contains(e.target as Node)
      ) {
       
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClick = (e: React.MouseEvent, menuType: string) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    setMenuPosition({ top: rect.bottom + window.scrollY, left: rect.left });
    setActiveMenu(menuType);
  };

  const closeMenu = () => setActiveMenu(null);

  const [personnel] = useState([
    { id: "9082", name: "Adeola Bello", address: "8 Road M", phone: "08011211212", company: "KYOMO", status: "Active" },
    { id: "0883", name: "Chike Obi", address: "12 Avenue A", phone: "08011211212", company: "KYOMO", status: "Active" },
    { id: "1642", name: "Fatima Yusuf", address: "13A Close 5", phone: "08011211212", company: "KYOMO", status: "Active" },
    { id: "9813", name: "Emeka Okoro", address: "80 Emerald Road", phone: "08011211212", company: "KYOMO", status: "Enabled" },
  ]);
  return (
    <>
      <div className="max-w-[1200px] rounded-[10px] p-[24px] overflow-auto mx-[16px]">
        {/* Top Controls */}
        <div className="flex flex-wrap justify-between items-center mb-[24px]">
          <div className="flex items-center space-x-[8px]">
            {/* Filter Dropdown */}
            <div
              onClick={(e) => handleClick(e, "filter")}
              className="flex items-center bg-[#F8FAFC] border border-[#E2E8F0] rounded-[40px] px-[12px] py-[6px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] bg-[#FFFFFF] w-[173px] h-[54px] gap-[10px] cursor-pointer"
            >
              <label className="text-[13px] text-[#475569] font-medium mr-[3px]">
                Filter:
              </label>
              <div className="bg-[#F4F7FE] text-[#2C2C2C] text-[11px] flex items-center justify-center w-[120px] h-[35px] rounded-[20px]">
                {filter}
              </div>
            </div>

            {/* Add New Resident Button */}
            <button
              onClick={onResidentClick}
            className="flex items-center justify-center bg-[#2164E7] text-[#FFFFFF] text-[13px] font-medium rounded-[20px] px-[12px] py-[15px] hover:bg-[#1E4FDB] transition w-[180px] h-[38px] border-none">
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
            <button
              onClick={(e) => handleClick(e, "export")}
              className="flex gap-[5px] text-[#A3AED0] text-[11px] border-none rounded-[20px] px-[12px] py-[6px] hover:bg-[#2563EB] hover:text-white transition relative"
            >
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
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-y-0">
            <thead>
              <tr className="bg-[#F3F4F6] text-[#111827] font-semibold text-[14px]">
                <th className="py-3 px-4 text-left">Personnel ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Address</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Company</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>


            <tbody>
              {personnel.map((p, i) => (
                <tr key={i} className="bg-white border-b border-[#E5E7EB]">
                  <td className="py-4 px-4">{p.id}</td>
                  <td className="py-4 px-4">{p.name}</td>
                  <td className="py-4 px-4">{p.address}</td>
                  <td className="py-4 px-4">{p.phone}</td>
                  <td className="py-4 px-4">{p.company}</td>


                  <td className="py-4 px-4">{p.status}</td>


                  <td className="py-4 px-4 flex items-center justify-between">
                    <span>
                      <button
                        className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 px-1 ${p.status === "Active" ? "bg-green-500" : "bg-red-500"
                          }`}
                      >
                        <span className={`w-4 h-4 bg-white rounded-full transform transition-transform ${p.status === "Active" ? "translate-x-4" : "translate-x-0"}`}></span>
                      </button>
                    </span>


                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-1 text-[#6B7280] hover:text-black">
                          <MoreVertical size={18} />
                        </button>
                      </DropdownMenuTrigger>


                      <DropdownMenuContent className="w-40" align="end">
                        <DropdownMenuItem className="cursor-pointer">View</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">Edit</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-red-600">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Overlay Background */}
      {activeMenu && (
        <div
          className="fixed inset-0 bg-[#000000]/40 z-[9999]"
          onClick={closeMenu}
        ></div>
      )}

      {/* Popups */}
      {activeMenu === "export" && (
        <div
          className="absolute z-[10000] bg-white rounded-[8px] shadow-lg border border-[#E2E8F0] py-[8px] w-[150px]"
          style={{
            top: menuPosition.top + 5,
            left: menuPosition.left - 30,
          }}
        >
          <div className="flex items-center gap-[8px] px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer">
            <FileSpreadsheet size={16} /> Excel
          </div>
          <div className="flex items-center gap-[8px] px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer">
            <FileText size={16} /> PDF
          </div>
        </div>
      )}

      {activeMenu?.startsWith("menu-") && (
        <div
          className="absolute z-[10000] bg-white rounded-[8px] shadow-lg border border-[#E2E8F0] py-[8px] w-[180px]"
          style={{
            top: menuPosition.top + 5,
            left: menuPosition.left - 150,
          }}
          onClick={(e) => e.stopPropagation()} // Prevent clicks on menu from closing it
        >
          <div
            onClick={() => {
              onViewPastPayment?.();
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            View Past Payment
          </div>

          <div className="px-[10px] py-[6px] text-[13px] text-[#DC2626] hover:bg-[#FEE2E2] cursor-pointer">
            Disable Resident
          </div>
        </div>
      )}
    

      {activeMenu === "filter" && (
        <div
          className="absolute z-[10000] bg-white rounded-[8px] shadow-lg border border-[#E2E8F0] py-[8px] w-[150px]"
          style={{
            top: menuPosition.top + 5,
            left: menuPosition.left,
          }}
        >
          <div
            onClick={() => {
              setFilter("All Residents");
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            All Residents
          </div>
          <div
            onClick={() => {
              setFilter("Overdues");
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            Overdues
          </div>
          <div
            onClick={() => {
              setFilter("Active Residents");
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            Active Residents
          </div>
        </div>
      )}
    </>
  );
}
