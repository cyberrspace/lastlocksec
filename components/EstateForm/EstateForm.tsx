"use client";

import { Mail, Lock, User, Phone, Home, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EstateForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-[692px] max-w-[512px] rounded-[10px] flex justify-center items-center bg-[#2C2C2C] px-4 py-10 mx-auto flex flex-col justify-start pt-[20px]">
      <main className="bg-white p-[20px] rounded-xl flex flex-col justify-start ">
        <h2 className="text-[36px] font-bold text-center  text-[#F5F5F5]">
          Create Estate Account
        </h2>

        <form className="space-y-[10px]">

          {/* Estate Name */}
          <div className="">
            <label className="text-[#F5F5F5] text-sm font-medium ">Estate Name</label>
            <div className="relative">
              <Home className="size-5 absolute left-[6px] top-[14px] text-[#BDBDBD]" />
              <input
                type="text"
                placeholder="Enter estate name"
                className="pl-[38px] text-[#BDBDBD] border border-gray-300 rounded-[8px] outline-none focus:border-blue-500 w-full max-w-[427px] h-[40px] mt-[6px] bg-transparent"
                required
              />
            </div>
          </div>


          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-[#F5F5F5] text-sm font-medium">Full Name</label>
            <div className="relative">
              <User className="size-5 absolute left-[6px] top-[14px] text-[#BDBDBD]" />
              <input
                type="text"
                placeholder="Enter full name"
                className="pl-[38px] py-2 border  text-[#BDBDBD]  border-gray-300 rounded-[8px] outline-none focus:border-blue-500 w-full max-w-[427px] h-[40px] mt-[6px]  bg-transparent"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="text-[#F5F5F5] text-sm font-medium">Phone Number</label>
            <div className="relative">
              <Phone className="size-5 absolute left-[6px] top-[14px]  text-[#BDBDBD]" />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="pl-[38px] pr-3 py-2 border border-gray-300 rounded-[8px] outline-none focus:border-blue-500 w-full max-w-[427px] h-[40px] mt-[6px]  text-[#BDBDBD]  bg-transparent"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1">
            <label className="text-[#F5F5F5] text-sm font-medium">Email Address</label>
            <div className="relative">
              <Mail className="size-5 absolute left-[6px] top-[14px]  text-[#BDBDBD]" />
              <input
                type="email"
                placeholder="Enter email address"
                className="pl-[38px] pr-3 py-2 border border-gray-300 rounded-[8px] w-full max-w-[427px] h-[40px] mt-[6px]  text-[#BDBDBD]  bg-transparent"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-[#F5F5F5] text-sm font-medium">Password</label>
            <div className="relative">
              <Lock className="size-5 absolute left-[6px] top-[14px] text-[#BDBDBD]" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="pl-[38px] pr-10 py-2 border border-gray-300 rounded-[8px] outline-none focus:border-blue-500 w-full max-w-[427px] h-[40px] mt-[6px] text-[#BDBDBD]  bg-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[12px] top-[14px]"
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>

          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 text-[#F5F5F5] rounded-[18px]">
              <input type="checkbox" className="text-[#F5F5F5] checked:bg-transparent  rounded-[4px]  border border-[#F5F5F5]  bg-transparent  checked:bg-[#F5F5F5]  checked:border-[#F5F5F5] cursor-pointer " /> Remember me
            </label>
            <button
              type="button"
              onClick={() => router.push("/verify-email")}
              className="text-[#F5F5F5] font-medium"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-[8px] font-medium flex flex-col justify-center items-center w-full w-[427px] h-[40px] mt-[6px] mt-[30px]"
          >
            Create Account
          </button>

          {/* Switch to Login */}
          <p className="text-center text-sm pt-2 text-gray-600">

            <a href="#" className="text-blue-600 font-semibold ml-1">Sign In</a>
          </p>

        </form>
      </main>
    </section>
  );
}
