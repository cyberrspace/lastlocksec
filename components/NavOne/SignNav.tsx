"use client";
import Image from "next/image";


export default function SignNav(){
  return(
  <nav className="flex  items-center justify-between w-full">
    <div className="flex items-center mt-6 ">
      <Image 
       src="/icon/locksec-bg.png"
       alt="locksec logo"
       width={44}
       height={44}
      />

        <div className="w-[131px] h-[49px] sm:w-[150px] sm:h-[55px] md:w-[170px] md:h-[60px] flex items-center justify-center">
          <h1
            className="
            text-[24px] sm:text-[28px] md:text-[32px]
             leading-[130%]
             font-bold
             tracking-[-0.02em]
             text-black-900"
          >
            Loc<span className="text-[#1D61E7]">Sec</span>
          </h1>
        </div>

    </div>

    <div className="flex">
      <h2>Home</h2>
      <button>Create Account</button>
    </div>
  </nav>

  )
}