"use client";

import ContentWrapper from "../components/common/ContentWrapper";
import SignNav from "../components/NavOne/SignNav";
import SignForm from "../components/SignForm/SignForm";

export default function Home() {
  return (
    <ContentWrapper>
      <main
        className="  
          flex flex-col 
          min-h-screen 
          w-full 
          relative 
        "
      >
        {/* Navbar */}
        <div
          className="
            pt-[16px] sm:pt-[20px] md:pt-[23px] 
            px-[20px] sm:px-6 md:px-10 xl:px-[78px]
            w-full
          "
        >
          <SignNav />
        </div>

        {/* Centered SignForm */}
        <div
          className="
            flex-grow 
            flex 
            items-center 
            justify-center 
            px-4 sm:px-6 md:px-10
          "
        >
          <SignForm />
        </div>
      </main>
    </ContentWrapper>
  );
}
