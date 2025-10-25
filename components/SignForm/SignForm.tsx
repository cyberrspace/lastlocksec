"use client";

import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full h-screen flex justify-center items-center bg-black px-[10px]">
      <main
        className="
          w-full max-w-[500px]
          border border-[#3D3D3D]
          sm:px-6 md:px-10 py-[40px]
          bg-[#2C2C2C]
          rounded-[12px]
          flex flex-col items-center justify-center space-y-[20px]
        "
      >
        {/* Title */}
        <div className="flex flex-col items-center text-center text-[#F5F5F5] space-y-[20px] pt-[12px]">
          <span className="text-[30px] sm:text-[34px] md:text-[38px] font-bold leading-tight pt-[12px]">
            Sign in
          </span>
          <span className="text-[28px] sm:text-[32px] md:text-[36px] font-bold leading-tight">
            to your estate account
          </span>
          <span className="text-[13px] sm:text-[15px] text-[#D1D1D1]">
            Enter your details to proceed
          </span>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 w-full items-center space-y-[20px]">
          {/* Email */}
          <div className="w-full max-w-[350px]">
            <label className="text-[14px] text-[#D1D1D1]"></label>
            <div className="pb-[10px] text-[#FFFFFF]">Email Address</div>
            <div className="relative mt-2">
              {/* Left icon (non-interactive) */}
              <Mail
                className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none z-10"
                width={16}
                height={16}
                aria-hidden
              />

              {/* Input with left+right padding to accommodate icons */}
              <input
                type="email"
                placeholder="Enter Email Address"
                className="
                  w-full h-[44px]
                  pl-[41px] pr-3
                  bg-transparent
                  text-white
                  border border-gray-600
                  rounded-[8px]
                  text-[14px]
                  focus:border-[#1D61E7]
                  outline-none
                "
                aria-label="Email address"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full max-w-[350px]">
            <label className="text-[14px] text-[#D1D1D1]"></label>
            <div className="pb-[10px] text-[#FFFFFF]">Your Password</div>
            <div className="relative mt-2">
              {/* Left lock icon (non-interactive) */}
              <Lock
                className="absolute left-[12px] top-1/2 -translate-y-1/2 pointer-events-none z-10"
                width={18}
                height={18}
                aria-hidden
              />

              {/* Password input — give enough right padding for the eye button */}
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="
                  w-full h-[44px]
                  pl-[41px] pr-12
                  bg-[#3D3D3D]
                  text-white
                  border border-gray-600
                  rounded-[8px]
                  text-[14px]
                  focus:border-[#1D61E7]
                  outline-none
                "
                aria-label="Password"
              />

              {/* Eye toggle — positioned inside the input at the right */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute -right-[30px] top-1/2 -translate-y-1/2   mr-[4px]"
              >
                {showPassword ? <EyeOff width={18} height={18} /> : <Eye width={18} height={18} />}
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="w-full max-w-[350px] flex items-center justify-between text-[13px] mt-[-10px]">
            <label className="flex items-center text-[#D1D1D1]">
              <input type="checkbox" className="accent-[#1D61E7]" />
              Remember me
            </label>
            <button
              type="button"
              onClick={() => router.push("/forgot-password")}
              className="text-[#1D61E7] hover:underline border-none bg-transparent p-0 mr-[-45px]"
            >
              Forgot password?
            </button>
          </div>

          {/* Sign In */}
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            className="
              w-[450px] max-w-[350px]
              h-[46px]
              bg-[#1D61E7]
              text-[#FFFFFF]
              text-[15px]
              rounded-[10px]
              hover:bg-[#1548b5]
              transition-all
            "
          >
            Sign In
          </button>

          {/* Create Account */}
          <button
            type="button"
            onClick={() => router.push("/signup")}
            className="text-[14px] text-[#FFFFFF] hover:underline bg-transparent border-none p-0"
          >
            Create Account
          </button>
        </form>
      </main>
    </section>
  );
}
