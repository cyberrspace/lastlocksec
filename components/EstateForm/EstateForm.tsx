"use client";

import { Mail, Lock, User, Phone, Home, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function EstateForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-[692px] max-w-[512px] w-full rounded-[10px] flex justify-center items-center bg-[#2C2C2C] px-4 py-10 mx-auto flex-col pt-[20px]">
      <main className="bg-white p-[20px] rounded-xl flex flex-col justify-start w-full max-w-full">
        <h2 className="text-[36px] font-bold text-center text-[#F5F5F5]">
          Create Estate Account
        </h2>

        <form className="space-y-[10px] w-full">

          {/* Estate Name */}
          <div>
            <label className="text-[#F5F5F5] text-sm font-medium">Estate Name</label>
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
                className="pl-[38px] py-2 text-[#BDBDBD] border border-gray-300 rounded-[8px] outline-none focus:border-blue-500 w-full max-w-[427px] h-[40px] mt-[6px] bg-transparent"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="text-[#F5F5F5] text-sm font-medium">Phone Number</label>
            <div className="relative">
              <Phone className="size-5 absolute left-[6px] top-[14px] text-[#BDBDBD]" />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="pl-[38px] pr-3 text-[#BDBDBD] border border-gray-300 rounded-[8px] outline-none focus:border-blue-500 w-full max-w-[427px] h-[40px] mt-[6px] bg-transparent"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1">
            <label className="text-[#F5F5F5] text-sm font-medium">Email Address</label>
            <div className="relative">
              <Mail className="size-5 absolute left-[6px] top-[14px] text-[#BDBDBD]" />
              <input
                type="email"
                placeholder="Enter email address"
                className="pl-[38px] pr-3 text-[#BDBDBD] border border-gray-300 rounded-[8px] outline-none focus:border-blue-500 w-full max-w-[427px] h-[40px] mt-[6px] bg-transparent"
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
                className="pl-[38px] pr-10 text-[#BDBDBD] border border-gray-300 rounded-[8px] outline-none focus:border-blue-500 w-full max-w-[427px] h-[40px] mt-[6px] bg-transparent"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[12px] top-[14px]"
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 text-[#F5F5F5]">
              <input
                type="checkbox"
                className="text-[#F5F5F5] rounded-[4px] border border-[#F5F5F5] bg-transparent cursor-pointer"
              />
              Remember me
            </label>
            <a href="#" className="text-[#F5F5F5] font-medium">Forgot password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-[8px] font-medium flex justify-center items-center w-full max-w-[427px] h-[40px] mt-[30px]"
          >
            Create Account
          </button>

          {/* Switch to Login */}
          <p className="text-center text-sm pt-2 text-gray-600">
            <a href="#" className="text-[#3D3D3D] font-semibold ml-1">Sign In</a>
          </p>

        </form>
      </main>
    </section>
  );
}
