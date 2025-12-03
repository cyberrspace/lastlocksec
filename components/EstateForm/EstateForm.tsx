"use client";

import { Mail, Lock, User, Phone, Home, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { registerEstate } from "@/services/estate";
import { useRouter } from "next/navigation";

export default function EstateForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    estateName: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await registerEstate(formData);

      console.log("REGISTER RESPONSE:", res);

      // SAVE EMAIL + TOKEN FOR VERIFY PAGE
      localStorage.setItem("pendingEmail", res.data.email);
      localStorage.setItem("pendingToken", res.data.verificationToken);

      setSuccessMsg("Estate registered successfully!");

      // REDIRECT TO VERIFY PAGE
      router.push("/Verify");
   
    } catch (err: unknown) {
      let message = "Registration failed";

      if (err && typeof err === "object" && "response" in err) {
        const axiosErr = err as { response?: { data?: { message?: string } } };
        message = axiosErr.response?.data?.message || message;
      } else if (err instanceof Error) {
        message = err.message;
      }

      setErrorMsg(message);
    }
  };

  return (
    <section className="min-h-[512px] max-w-[512px] bg-[#2C2C2C] flex justify-center items-center w-full pl-[16px] pr-[16px] rounded-[10px]">
      <main className="bg-white pl-[16px] pr-[16px] xs:p-[20px] sm:p-[32px] md:p-[50px] rounded-[12px] flex flex-col justify-start items-center w-full max-w-full xs:max-w-[400px] sm:max-w-[450px] md:max-w-[520px]">
        <h2 className="text-[28px] xs:text-[32px] sm:text-[34px] md:text-[36px] font-bold text-center text-[#F5F5F5]">
          Create Estate Account
        </h2>

        {errorMsg && (
          <p className="text-red-500 text-center mt-2">{errorMsg}</p>
        )}

        {successMsg && (
          <p className="text-green-600 text-center mt-2">{successMsg}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-[3px] xs:space-y-[10px] mt-[12px] xs:mt-[10px] w-full">

          {/* Estate Name */}
          <div>
            <label className="text-[#F5F5F5] text-[13px] xs:text-sm font-medium">Estate Name</label>
            <div className="relative mt-[4px] xs:mt-[6px]">
              <Home className="absolute left-[8px] xs:left-[6px] top-1/2 -translate-y-1/2 size-[16px] xs:size-[20px] text-[#BDBDBD]" />
              <input
                type="text"
                name="estateName"
                value={formData.estateName}
                onChange={handleChange}
                placeholder="Enter estate name"
                className="xs:pl-[38px] border text-[#BDBDBD] border-gray-300 rounded-[8px] focus:border-blue-500 h-[38px] xs:h-[40px] w-full bg-transparent indent-[38px] xs:indent-[10px] text-[13px] xs:text-sm"
                required
              />
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="text-[#F5F5F5] text-[13px] xs:text-sm font-medium">Full Name</label>
            <div className="relative mt-[4px] xs:mt-[6px]">
              <User className="absolute left-[8px] xs:left-[6px] top-1/2 -translate-y-1/2 size-[16px] xs:size-[20px] text-[#BDBDBD]" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="xs:pl-[38px] border text-[#BDBDBD] border-gray-300 rounded-[8px] focus:border-blue-500 h-[38px] xs:h-[40px] w-full bg-transparent indent-[38px] xs:indent-[10px] text-[13px] xs:text-sm"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-[#F5F5F5] text-[13px] xs:text-sm font-medium">Phone Number</label>
            <div className="relative mt-[4px] xs:mt-[6px]">
              <Phone className="absolute left-[8px] xs:left-[6px] top-1/2 -translate-y-1/2 size-[16px] xs:size-[20px] text-[#BDBDBD]" />
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="xs:pl-[38px] border border-gray-300 rounded-[8px] focus:border-blue-500 h-[38px] xs:h-[40px] w-full text-[#BDBDBD] bg-transparent indent-[38px] xs:indent-[10px] text-[13px] xs:text-sm"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[#F5F5F5] text-[13px] xs:text-sm font-medium">Email Address</label>
            <div className="relative mt-[4px] xs:mt-[6px]">
              <Mail className="absolute left-[8px] xs:left-[6px] top-1/2 -translate-y-1/2 size-[20px] text-[#BDBDBD]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="xs:pl-[38px] border border-gray-300 rounded-[8px] h-[38px] xs:h-[40px] w-full text-[#BDBDBD] bg-transparent indent-[38px] xs:indent-[10px] text-[13px] xs:text-sm"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-[#F5F5F5] text-[13px] xs:text-sm font-medium">Password</label>
            <div className="relative mt-[4px] xs:mt-[6px]">
              <Lock className="absolute left-[8px] xs:left-[6px] top-1/2 -translate-y-1/2 size-[16px] xs:size-[20px] text-[#BDBDBD]" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="xs:pl-[38px] border border-gray-300 rounded-[8px] focus:border-blue-500 h-[38px] xs:h-[40px] w-full text-[#BDBDBD] bg-transparent indent-[38px] xs:indent-[10px] text-[13px] xs:text-sm"
                required
              />
              <a
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[12px] xs:right-[12px] top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="size-[16px] xs:size-[20px]" />
                ) : (
                  <Eye className="size-[20px] xs:size-[20px]" />
                )}
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#102DC8] hover:bg-blue-700 text-[#FFFFFF] h-[38px] xs:h-[40px] rounded-[8px] font-medium w-full mt-[20px] xs:mt-[30px] text-[13px] xs:text-sm"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Create Account"}
          </button>

          <p className="text-center text-[12px] xs:text-sm text-gray-600">
            <a href="#" className="text-[#FFFFFF] font-semibold ml-1">Sign In</a>
          </p>
        </form>
      </main>
    </section>
  );
}
