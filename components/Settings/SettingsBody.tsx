"use client";

import { useState, useRef, useEffect } from "react";

import { Plus, FileSpreadsheet, FileText } from "lucide-react";




interface ResidentSideProps {
  onResidentClick?: () => void;
  onViewPastPayment?: () => void;  
}

export default function SettingsBody({onResidentClick, onViewPastPayment}: ResidentSideProps) {
 

  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuPosition,] = useState({ top: 0, left: 0 });
  const [ ] = useState<string>("All Residents");

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

  const closeMenu = () => setActiveMenu(null);

  
  return (
    <>
      <div className="max-w-[1200px] rounded-[10px]  overflow-auto mx-[16px]">
      
       

        {/* Table Section */}
        <section className="flex gap-[20px] px-[16px]">
          <div className="w-[290px] h-[506px] bg-[#FFFFFF] p-[5px] ">
            <p className=" border border-[#EDEDED] p-[10px]">Updated Password</p>
            <p className=" border border-[#EDEDED] p-[10px] flex justify-between">Dues <span> <a
              onClick={onResidentClick}
              className="  text-[#000000] text-[13px] font-medium ">
              <Plus size={16} className="mr-[4px]" />

            </a></span></p>
           </div>

          <div className="w-full h-[506px] bg-[#FFFFFF] px-[15px] space-y-[10px] pl-[20px] ">
             <div className="pt-[20px]">
              <p className="font-bold text-[16px] text-[#2A224F]">Update password</p>
              <div className="w-[600px]  border-1"></div>
             </div>
            <div className="w-[574px] border-[#E6E6E6] text-[#E6E6E6]"></div>
            <section className="space-y-[5rem]">
              <div className="space-y-[20px]"> 
                <div className="">
                  <label htmlFor="" className="space-y-[10px]">
                    <div> <span>Old password</span></div>
                    <input type="text"
                      placeholder="Enter your old password"
                      className="w-[372px] h-[39px] rounded-[5px] placeholder:pl-[10px] border-[#D8DAE5]"
                    />
                  </label>
                </div>

                <div className="">
                  <label htmlFor="" className="space-y-[10px]">
                    <div> <span>New password</span></div>
                    <input type="text"
                      placeholder="Enter your new password"
                      className="w-[372px] h-[39px] rounded-[5px] placeholder:pl-[10px] border-[#D8DAE5]"
                    />
                  </label>
                </div>

                <div className="">
                  <label htmlFor="" className="space-y-[10px]">
                    <div> <span>New password</span></div>
                    <input type="text"
                      placeholder=" Re-enter your new password"
                      className="w-[372px] h-[39px] rounded-[5px] placeholder:pl-[10px] border-[#D8DAE5]"
                    />
                  </label>
                </div>
              </div>
             
              <button className="w-[372px] h-[43px] bg-[#102DC8] rounded-[5px]">
                Updated Password
              </button>
             
            </section>
           
          
          </div>
        </section>
        

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
             
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            All Residents
          </div>
          <div
            onClick={() => {
             
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            Overdues
          </div>
          <div
            onClick={() => {
             
              closeMenu();
            }}
            className="px-[10px] py-[6px] text-[13px] text-[#475569] hover:bg-[#F1F5F9] cursor-pointer"
          >
            Active Residents
          </div>
        </div>
      )}
      </div>
    </>
  );
}
