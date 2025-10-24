"use client";

import Image from "next/image";

export default function SignNav() {
  return (
    <nav
      className="
        flex items-center justify-between
        w-full
        px-4 sm:px-6 md:px-10
        py-4 sm:py-5 md:py-6
        overflow-x-hidden
        box-border
      "
    >
      {/* Logo + Text */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Image
          src="/icon/locksec-bg.png"
          alt="locksec logo"
          width={40}
          height={40}
          className="object-contain w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]"
        />
        <h1
          className="
            text-[20px] sm:text-[26px] md:text-[30px]
            font-bold tracking-tight text-black
          "
        >
          Loc<span className="text-[#1D61E7]">Sec</span>
        </h1>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6 flex-shrink-0">
        <button
          className="
            text-[13px] sm:text-[15px] md:text-[17px]
            font-semibold text-gray-800
            hover:text-[#1D61E7]
            focus:outline-none
            shrink-0
          "
        >
          Home
        </button>

        <button
          className="
            bg-[#244779] text-white
            w-[100px] sm:w-[130px] md:w-[150px]
            h-[32px] sm:h-[36px] md:h-[40px]
            text-[11px] sm:text-[14px]
            rounded-[10px]
            hover:bg-[#1548b5]
            transition-colors
            shrink-0
          "
        >
          Create Account
        </button>
      </div>
    </nav>
  );
}
