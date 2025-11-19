"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export default function DuesTable() {
  const [bills, setBills] = useState([
    {
      id: 1,
      name: "Estate Dues",
      amount: "₦50,000",
      periodic: "Monthly",
      account: "001122934435",
      bank: "Zenith Bank",
      active: true,
      checked: false,
    },
    {
      id: 2,
      name: "Security Salary",
      amount: "₦50,000",
      periodic: "Monthly",
      account: "001122934435",
      bank: "Zenith Bank",
      active: true,
      checked: false,
    },
    {
      id: 3,
      name: "Road Project",
      amount: "₦50,000",
      periodic: "Monthly",
      account: "001122934435",
      bank: "Zenith Bank",
      active: true,
      checked: false,
    },
  ]);

  const toggleBill = (id: number) => {
    setBills((prev) =>
      prev.map((bill) =>
        bill.id === id ? { ...bill, active: !bill.active } : bill
      )
    );
  };

  const toggleCheck = (id: number) => {
    setBills((prev) =>
      prev.map((bill) =>
        bill.id === id ? { ...bill, checked: !bill.checked } : bill
      )
    );
  };

  const deleteBill = (id: number) => {
    setBills((prev) => prev.filter((bill) => bill.id !== id));
  };

  const addBill = () => {
    const newBill = {
      id: Date.now(),
      name: "New Bill",
      amount: "₦0",
      periodic: "Monthly",
      account: "0000000000",
      bank: "Bank Name",
      active: false,
      checked: false,
    };
    setBills((prev) => [...prev, newBill]);
  };

  return (
    <div className="w-full mt-4">

      {/* TABLE */}
      <table className="w-full text-left text-[13px] text-[#000000]">
        <thead className="border-b border-[#E5E7EB]">
          <tr className="text-[#000000] font-medium">
            <th className="py-2">Edit</th>
            <th className="py-2">Bill Names</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Periodic</th>
            <th className="py-2">Account No.</th>
            <th className="py-2">Bank Name</th>
            <th className="py-2"></th>
          </tr>
        </thead>

        <tbody>
          {bills.map((bill) => (
            <tr key={bill.id} className="border-b border-[#E5E7EB]">

              {/* Checkbox */}
              <td className="py-2">
                <input
                  type="checkbox"
                  checked={bill.checked}
                  onChange={() => toggleCheck(bill.id)}
                  className="w-[16px] h-[16px]"
                />
              </td>

              {/* Bill Name */}
              <td className="py-2">{bill.name}</td>

              {/* Amount */}
              <td className="py-2">{bill.amount}</td>

              {/* Period */}
              <td className="py-2">{bill.periodic}</td>

              {/* Account */}
              <td className="py-2">{bill.account}</td>

              {/* Bank */}
              <td className="py-2">{bill.bank}</td>

              {/* TOGGLE + DELETE */}
              <td className="flex items-center gap-3 py-2">
                <Switch
                  checked={bill.active}
                  onCheckedChange={() => toggleBill(bill.id)}
                />

                <Trash2
                  size={18}
                  className="text-red-500 cursor-pointer"
                  onClick={() => deleteBill(bill.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CREATE NEW BILL */}
      <p
        onClick={addBill}
        className="text-[#2A3AFF] text-[13px] mt-2 cursor-pointer"
      >
        + Create New Bills
      </p>
    </div>
  );
}
