import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export default function SignForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-[#2C2C2C] rounded-[12px] px-4 sm:px-6 md:px-0">
      <main className="w-full max-w-[500px] border-[#3D3D3D] sm:px-6 md:px-10 py-[40px] flex flex-col items-center justify-center space-y-[20px]">

        {/* Title */}
        <div className="flex flex-col items-center text-center text-[#F5F5F5] space-y-[14px] sm:space-y-[18px] md:space-y-[20px] w-full max-w-[426px]">
          <span className="text-[22px] xs:text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-bold leading-tight">
            Sign in
          </span>
          <span className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-tight">
            to your estate account
          </span>
          <span className="text-[12px] sm:text-[14px] md:text-[15px] text-[#D1D1D1]">
            Enter your details to proceed
          </span>
        </div>

        {/* Form */}
        <form className="space-y-[16px] sm:space-y-[20px] w-full  flex flex-col">
          {/* Email */}
          <div className="w-full max-w-[426px]">
            <div className="pb-[8px] sm:pb-[10px] text-[#FFFFFF] text-[13px] sm:text-[14px]">
              Email Address
            </div>
            <div className="relative mt-1 sm:mt-2">
              <Mail
                className="absolute left-[10px] sm:left-[12px] top-1/2 -translate-y-1/2 pointer-events-none z-10"
                width={16}
                height={16}
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full h-[42px] sm:h-[44px] pl-[38px] sm:pl-[41px] pr-3 bg-transparent text-white border border-gray-600 rounded-[8px] text-[13px] sm:text-[14px] focus:border-[#1D61E7] outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full max-w-[426px] ">
            <div className="pb-[8px] sm:pb-[10px] text-[#FFFFFF] text-[13px] sm:text-[14px]">
              Your Password
            </div>
            <div className="relative mt-1 sm:mt-2">
              <Lock
                className="absolute left-[10px] sm:left-[12px] top-1/2 -translate-y-1/2 pointer-events-none z-10"
                width={18}
                height={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full h-[42px] sm:h-[44px] pl-[38px] sm:pl-[41px] pr-10 bg-[#3D3D3D] text-white border border-gray-600 rounded-[8px] text-[13px] sm:text-[14px] focus:border-[#1D61E7] outline-none"
              />
              <a
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute -right-[22px] sm:right-[12px] top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff width={18} height={18} />
                ) : (
                  <Eye width={18} height={18} />
                )}
              </a>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="w-full flex flex-row sm:flex-col justify-between sm:items-center space-x-[8px] sm:justify-between text-[12px] sm:text-[13px] mt-[-6px] sm:mt-[-10px] gap-2 sm:gap-0 text-center sm:text-left relative">
            <label className="flex items-center justify-center sm:justify-start text-[#D1D1D1]">
              <input type="checkbox" className="accent-[#1D61E7]" />
              <span className="ml-2">Remember me</span>
            </label>

            <a
              type="button"
              onClick={() => router.push("/forgot-password")}
              className="text-[#1D61E7] mr-[35px] "
            >
              Forgot password?
            </a>
          </div>

          <div className="w-full space-y-[15px] mx-auto">
           
            <Button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="
              max-w-[465px] 
              w-full
              h-[44px] sm:h-[46px]
              bg-[#1D61E7]
              text-[#FFFFFF]
              text-[14px] sm:text-[15px]
              rounded-[10px]
              hover:bg-[#1548b5]
             
            "
            >
              Sign In
            </Button>

            {/* Create Account */}
            <Button
              type="button"
              onClick={() => router.push("/signup")}
              className="text-[13px] sm:text-[14px] flex flex-col justify-center items-center text-[#FFFFFF] hover:underline bg-transparent border-none p-0 mx-auto"
            >
              Create Account
            </Button>
          </div>
          

         
        </form>
      </main>
    </section>
  );
}
