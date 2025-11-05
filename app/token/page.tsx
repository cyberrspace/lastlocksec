"use client";

import ContentWrapper from "@/components/common/ContentWrapper";
import NavTwo from "@/components/NavTwo/NavTwo";
import TokenForm from "@/components/Tokenpage/TokenForm";

export default  function TokenPage(){
 return(
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
             w-full max-w-[100vw] overflow-x-hidden mx-auto
            "
          >
            <NavTwo/>
          </div>
           <div className="mt-[50px] flex items-center justify-center">
           <TokenForm/>
           </div>
         
        </main>


</ContentWrapper>


 )

}