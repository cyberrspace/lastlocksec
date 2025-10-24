"use client";

export default function SignForm() {
  return (
    <main
      className="
        w-[475px] h-[410px] 
        sm:w-[420px] sm:h-[380px] 
        xs:w-[90%] xs:h-auto 
        border border-[#3D3D3D]
        p-[18px] sm:p-[22px] md:p-[48px]
        bg-[#2C2C2C] 
        rounded-[12px]
        flex flex-col items-center"
    >
      <div className="flex flex-col items-center justify-center text-center text-[#F5F5F5] -space-y-[25px]">
        <div
          className="
            flex flex-col items-center justify-center 
            text-[40px] sm:text-[36px] md:text-[40px] 
            font-bold font-['SF Pro']
            leading-[48px]
             -space-y-[25px]"
        >
          <p>Sign in</p>
          <p>to your estate account</p>
        </div>

        <h3
          className="
            text-[20px] sm:text-[16px] 
           font-normal mt-[6px] text-[#BDBDBD]"
        >
          Enter your details to proceed further
        </h3>
      </div>

    </main>
  );
}
