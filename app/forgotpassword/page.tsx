"use client";


import ContentWrapper from "@/components/common/ContentWrapper";
import ForgotPassword from "@/components/ForgotPassword/ForgotPassword";
import SignNav from "@/components/NavOne/SignNav";

export default function ForgotPasswordPage() {
  return (
    <ContentWrapper>
      <section
        className="
          flex flex-col 
          w-full 
          relative"
      >
        {/* Navbar */}
        <div className="w-full max-w-[100vw] overflow-x-hidden">
          <SignNav/>
        </div>

        {/* Forgot Password Form Section */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full ">
          
          <ForgotPassword />
          </div>
        
      </section>
    </ContentWrapper>
  );
}
