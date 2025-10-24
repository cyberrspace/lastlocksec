"use client";

import Image from "next/image";

export default function SignNav() {
  return (
    <nav className="flex items-center justify-between  w-full px-6 sm:px-6 md:px-16 lg:px-20 py-4 sm:py-6 md:py-8 box-border">

      {/* Logo + Text */}
      <div
        className="
          flex items-center gap-2 sm:gap-4
          pl-2 sm:pl-4 md:pl-10
        "
      >
        <Image
          src="/icon/locksec-bg.png"
          alt="locksec logo"
          width={44}
          height={44}
          className="object-contain w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] md:w-[48px] md:h-[48px]"
        />

        <div
          className="
            w-[120px] h-[40px] sm:w-[150px] sm:h-[55px] md:w-[170px] md:h-[60px]
            flex items-center justify-center
          "
        >
          <h1
            className="
              text-[22px] sm:text-[26px] md:text-[32px]
              leading-[130%]
              font-bold
              tracking-[-0.02em]
              text-black
            "
          >
            Loc<span className="text-[#1D61E7]">Sec</span>
          </h1>
        </div>
      </div>

      {/* Nav Links */}
      <div
        className="
          flex items-center gap-[12px] sm:gap-6 md:gap-8 lg:gap-10
          pr-2 sm:pr-4 md:pr-10
        "
      >
        <button
          className="
            text-[14px] sm:text-[16px] md:text-[18px]
            font-semibold text-gray-800
            hover:text-[#1D61E7]
            cursor-pointer
            bg-transparent
            border-none
            focus:outline-none
          "
        >
          Home
        </button>

        <button
          className="
            bg-[#244779] text-[#FFFFFF]
            w-[120px] sm:w-[140px] md:w-[152px]
            h-[34px] sm:h-[36px] md:h-[38px]
            text-[12px] sm:text-[14px]
            rounded-[10px]
            hover:bg-[#1548b5]
            transition-colors
            px-3 sm:px-4 md:px-5
            py-1.5 sm:py-2 md:py-2.5
          "
        >
          Create Account
        </button>
      </div>
    </nav>
  );
}