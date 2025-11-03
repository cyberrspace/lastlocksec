"use client";

import BackButton from "../common/BackButton";

export default function ForgotPassword() {
  return (
    <main className="w-full h-auto sm:h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8">
      {/* Back Button */}
      <div className="w-full max-w-[512px] mb-3 sm:mb-4">
        <BackButton />
      </div>

      {/* Form Card */}
      <section className="w-full max-w-[512px] bg-[#2C2C2C] rounded-[12px] py-6 sm:py-15 md:py-12 px-6 sm:px-8 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#F5F5F5] leading-tight">
          Forgot Password
        </h1>

        {/* Subtitle */}
        <p className="mt-2 sm:mt-3 md:mt-4 text-[13px] sm:text-[14px] md:text-[15px] text-[#D1D1D1] leading-[22px]">
          Enter your email address to reset your <br className="sm:block"/>
          password
        </p>
      </section>
    </main>
  );
}
