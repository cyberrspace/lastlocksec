"use client";


import { useState } from "react";

export default function AddNew(){
  const [role, setRole] = useState("Business Owner");

 return(
   <main className="fixed inset-[0px] flex items-center justify-center bg-[#000000]/40 z-[9999]">

 
   <section className="relative bg-[#FFFFFF] h-[650px] w-[604px] rounded-[10px] px-[15px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] ">
       
       <button
         className="absolute top-[16px] right-[16px] text-[#C0C0C0] hover:text-gray-800 text-2xl font-bold border-none bg-transparent text-[32px] mb-[10px]"
         onClick={() => window.dispatchEvent(new Event("closeOverlay"))}
       >
         ×
       </button>

  <div>
         <h2 className="text-[#282A2F] text-[14px] font-semibold">
      Add New Resident
    </h2>
  </div>

       <form className="flex flex-col gap-[15px]">
         {/* Move-In Date */}
         <div>
           <label className="block text-[#2A224F] text-[12px] mb-[5px]">
             Move-In Date?
           </label>
         <div className="relative">
             <input
               type="date"
               className="w-[562px] h-[39px] border border-[#D8DAE5] rounded-[10px] px-[12px] text-[14px] focus:outline-none"
             />
            </div>
         </div>

         {/* First and Last Name */}
         <div className="flex gap-[10px]">
           <input
             type="text"
             placeholder="Enter First Name"
             className="w-[263px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#B0B0B0] focus:outline-none"
           />
           <input
             type="text"
             placeholder="Enter Last Name"
             className="w-[263px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#B0B0B0] focus:outline-none"
           />
         </div>

         {/* Phone */}
         <input
           type="tel"
           placeholder="0000 000 0000"
           className="w-[562px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#B0B0B0] focus:outline-none"
         />

         {/* Email */}
         <input
           type="email"
           placeholder="Enter your email address"
           className="w-[562px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#B0B0B0] focus:outline-none"
         />

         {/* Home Address */}
         <input
           type="text"
           placeholder="Enter your Home address"
           className="w-[562px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#B0B0B0] focus:outline-none"
         />

         {/* Role Selection */}
         <div>
           <p className="text-[#000000] text-[14px] mb-[5px]">I Am A</p>
           <div className="flex items-center gap-[20px]">
             <label className="flex items-center gap-[6px]">
               <input
                 type="radio"
                 name="role"
                 checked={role === "Resident"}
                 onChange={() => setRole("Resident")}
               />
               <span className="text-[14px]">Resident</span>
             </label>

             <label className="flex items-center gap-[6px]">
               <input
                 type="radio"
                 name="role"
                 checked={role === "Business Owner"}
                 onChange={() => setRole("Business Owner")}
               />
               <span className="text-[14px]">Business Owner</span>
             </label>
           </div>
         </div>

         {/* Business Name */}
         <label>
          <span className="mb-[5px]">Business name</span>
           <input
             type="text"
             placeholder="What is the registered name"
             className="w-[562px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#B0B0B0] focus:outline-none"
           />
         </label>
         

         {/* Industry */}
         <label htmlFor="">
           <span className="mb-[5px]">Business name</span>
         <select className="w-[585px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] text-[#555555] focus:outline-none">
           
           <option value="">Select the industry the business belong</option>
           <option value="tech">Technology</option>
           <option value="fashion">Fashion</option>
           <option value="food">Food & Hospitality</option>
           <option value="education">Education</option>
         </select>
         </label>
         {/* Password */}
         <label htmlFor="">
           <span className="mb-[5px]">Business name</span>

         <input
           type="password"
           placeholder="Create Password for the resident"
           className="w-[562px] h-[39px] border border-[#D8DAE5] bg-[#FFFFFF] rounded-[10px] px-[12px] text-[14px] placeholder:text-[#B0B0B0] focus:outline-none"
         />
         </label>
         {/* Submit Button */}
         <button
           type="submit"
           className="w-[562px] h-[39px] bg-[#1D61E7] text-[#FFFFFF] text-[14px] font-medium rounded-[10px] hover:bg-[#1548b5] mt-[10px]"
         >
           Create Account
         </button>
       </form>
      
 </section>
   </main>
 )

}