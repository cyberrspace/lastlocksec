"use client";

import { Mail, Lock, User, Phone, Home, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function EstateForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-[692px] bg-[#2C2C2C] flex justify-center items-center  w-[520px] rounded-[10px]">
      <main className="bg-white p-[20px] rounded-xl flex flex-col justify-start items-center">
        <h2 className="text-[36px] font-bold text-center text-[#F5F5F5]">
          Create Estate Account
        </h2>

        <form className="space-y-[10px] mt-[10px] w-full">

          {/* Estate Name */}
          <div>
            <label className="text-[#F5F5F5] text-sm font-medium">Estate Name</label>
            <div className="relative mt-[6px]">
              <Home className="absolute left-[6px] top-[11px] size-5 text-[#BDBDBD]" />
              <input
                type="text"
                placeholder="Enter estate name"
                className="pl-[38px] border text-[#BDBDBD] border-gray-300 rounded-[8px] focus:border-blue-500 h-[40px] w-[426px] bg-transparent indent-[10px]"
                required
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="text-[#F5F5F5] text-sm font-medium">Full Name</label>
            <div className="relative mt-[6px]">
              <User className="absolute left-[6px] top-[11px] size-5 text-[#BDBDBD]" />
              <input
                type="text"
                placeholder="Enter full name"
                className="pl-[38px] border text-[#BDBDBD] border-gray-300 rounded-[8px] focus:border-blue-500 h-[40px] w-[426px] bg-transparent indent-[10px]"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-[#F5F5F5] text-sm font-medium">Phone Number</label>
            <div className="relative mt-[6px]">
              <Phone className="absolute left-[6px] top-[11px] size-5 text-[#BDBDBD]" />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="pl-[38px] pr-3 border border-gray-300 rounded-[8px] focus:border-blue-500 h-[40px] w-[426px] text-[#BDBDBD] bg-transparent indent-[10px]"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[#F5F5F5] text-sm font-medium">Email Address</label>
            <div className="relative mt-[6px]">
              <Mail className="absolute left-[6px] top-[11px] size-5 text-[#BDBDBD]" />
              <input
                type="email"
                placeholder="Enter email address"
                className="pl-[38px] pr-3 border border-gray-300 rounded-[8px] h-[40px] w-[426px] text-[#BDBDBD] bg-transparent indent-[10px]"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-[#F5F5F5] text-sm font-medium">Password</label>
            <div className="relative mt-[6px]">
              <Lock className="absolute left-[6px] top-[11px] size-5 text-[#BDBDBD]" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="pl-[38px] pr-10 border border-gray-300 rounded-[8px] focus:border-blue-500 h-[40px] w-[426px] text-[#BDBDBD] bg-transparent indent-[10px]"
                required
              />
              <a
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[12px] top-[11px]"
              >
                {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
              </a>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex justify-between text-sm">
            <label className="flex items-center gap-2 text-[#F5F5F5]">
              <input
                type="checkbox"
                className="cursor-pointer accent-[#F5F5F5] bg-transparent border border-[#F5F5F5] "
              />
              Remember me
            </label>
            <a href="#" className="text-[#F5F5F5] font-medium">Forgot password?</a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white h-[40px] rounded-[8px] font-medium w-full mt-[30px]"
          >
            Create Account
          </button>

          {/* Switch */}
          <p className="text-center text-sm pt-2 text-gray-600">
            Already have an account?
            <a href="#" className="text-blue-600 font-semibold ml-1">Sign In</a>
          </p>
        </form>
      </main>
    </section>
  );
}
