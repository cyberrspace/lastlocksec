"use client";

import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { loginEstate } from "@/services/estate";
import { getAxiosErrorMessage } from "@/lib/getAxiosError"; // ✅ added

export default function SignForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // Form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // LOGIN HANDLER
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      const res = await loginEstate({ email, password });


      const token = res.data.data.token;
      const estate = res.data.data.estate;


      if (!token) {
        throw new Error("No token returned from server");
      }

      // Save token + user in LOCALSTORAGE
      localStorage.setItem("authToken", token);

      localStorage.setItem("estateUser", JSON.stringify(estate));

      router.push("/Dashboard"); // redirect

    } catch (err: unknown) {
      setError(getAxiosErrorMessage(err, "Invalid login credentials"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-[544px] max-w-[512px] sm:min-h-[692px] flex justify-center items-center bg-[#2C2C2C] rounded-[12px] px-[54px] sm:px-[64px] md:px-[40px] lg:px-0">
      <main className="w-full max-w-full sm:max-w-[500px] border-[#3D3D3D] sm:px-[24px] md:px-[32px] lg:px-[40px] py-[32px] sm:py-[40px] flex flex-col items-center justify-center space-y-[20px]">

        {/* Title */}
        <div className="flex flex-col items-center text-center text-[#F5F5F5] space-y-[12px] w-full">
          <span className="text-[36px] font-bold">Sign in</span>
          <span className="text-[28px] font-bold">to your estate account</span>
          <span className="text-[14px] text-[#D1D1D1]">
            Enter your details to proceed
          </span>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-[16px] w-full flex flex-col">

          {/* Email */}
          <div className="w-full">
            <div className="pb-[8px] text-[#FFFFFF] text-[14px]">Email Address</div>
            <div className="relative mt-[4px]">
              <Mail className="absolute left-[12px] top-1/2 -translate-y-1/2" width={14} height={14} />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                required
                className="w-full h-[40px] bg-transparent text-white border border-gray-600 rounded-[8px] text-[12px] indent-[38px]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="w-full">
            <div className="pb-[8px] text-[#FFFFFF] text-[14px]">Your Password</div>
            <div className="relative mt-[4px]">
              <Lock className="absolute left-[12px] top-1/2 -translate-y-1/2" width={16} height={16} />

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
                className="w-full h-[40px] bg-[#3D3D3D] text-white border border-gray-600 rounded-[8px] text-[12px] indent-[38px]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[12px] top-1/2 -translate-y-1/2 border-none"
              >
                {showPassword ? <EyeOff width={16} /> : <Eye width={16} />}
              </button>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="w-full flex justify-between items-center text-[11px]">
            <label className="flex items-center text-[#D1D1D1]">
              <input type="checkbox" className="accent-[#1D61E7]" />
              <span className="ml-2">Remember me</span>
            </label>

            <button
              type="button"
              onClick={() => router.push("/Forgotpassword")}
              className="text-[#1D61E7] border-none"
            >
              Forgot password?
            </button>
          </div>

          {/* Buttons */}
          <div className="w-full space-y-[20px] mt-[20px]">
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-[42px] bg-[#1D61E7] text-white rounded-[10px]"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            <Button
              type="button"
              onClick={() => router.push("/Signup")}
              className="text-[14px] text-[#FFFFFF] hover:underline bg-transparent p-0 mx-auto flex border-none"
            >
              Create Account
            </Button>
          </div>
        </form>
      </main>
    </section>
  );
}
