"use client";

export default function SignForm() {
  return (
    <main
      className="
        w-full max-w-[475px] h-auto
    sm:max-w-[420px] sm:h-auto
    border border-[#3D3D3D]
    p-[18px] sm:p-[22px] md:p-[48px]
    bg-[#2C2C2C] 
    rounded-[12px]
    flex flex-col items-center
    box-border
  "
    >
      <div className="flex flex-col items-center justify-center text-center text-[#F5F5F5] -space-y-[25px]">
        <div
          className="
            flex flex-col items-center justify-center 
            text-[32px] sm:text-[36px] md:text-[40px] 
            font-bold font-['SF Pro']
            leading-[48px]
             -space-y-[25px]"
        >
          <p>Sign in</p>
          <p>to your estate account</p>
        </div>

        <h3
          className="
            text-[14px] sm:text-[16px] 
           font-normal mt-[6px] text-[#D1D1D1]"
        >
          Enter your details to proceed further
        </h3>
      </div>

    </main>
  );
}
