"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function DuesUpdate() {
  const [accessCode, setAccessCode] = useState(false);
  const [paymentCollection, setPaymentCollection] = useState(false);

  return (

    <div className="w-full h-[506px] bg-[#FFFFFF] px-[15px] space-y-[10px] pl-[20px] ">
      <div className="pt-[20px]">
        <h2 className="text-[16px] text-[#2A224F] font-bold ">Access Code</h2>
        <div className="flex items-center justify-between">
         
          <p className="text-[#2A224F] font-normal text-[9px] w-[169px]">Your residents can now use the access control</p>

          <Switch className="data-[state=checked]:bg-[#86EFAC] data-[state=unchecked]:bg-[#EF4444]" checked={accessCode} onCheckedChange={setAccessCode} />
        </div>
       
        <div className="w-[388px] text-[#E6E6E6] border-[1px]"></div>
        <h2 className="text-[16px] text-[#2A224F] font-bold ">Payment collection</h2>
        <div className="flex items-center justify-between">
          
          <p className="text-[#2A224F] font-normal text-[9px] w-[169px]">Your residents can now pay for all dues and projects fee</p>
          <Switch className="data-[state=checked]:bg-[#86EFAC] data-[state=unchecked]:bg-[#EF4444]"
            checked={paymentCollection}
            onCheckedChange={setPaymentCollection}
          />

        </div>
      </div>
     
     


    </div>

  )

}