"use client"

import ContentWrapper from "@/components/common/ContentWrapper"
import SignNav from "@/components/NavOne/SignNav"
import VerificationPage from "@/components/Verification/VerificationPage"

export default function verifypage(){
 return(
  <ContentWrapper>
    <section
            className="
              flex flex-col 
              w-full 
              relative h-screen"
          >
            {/* Navbar */}
            <div className="w-full max-w-[100vw] ">
              <SignNav/>
            </div>
    
            {/* Forgot Password Form Section */}
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full ">
              
              <VerificationPage />
              </div>
            
          </section>
  </ContentWrapper>
  
 )

}