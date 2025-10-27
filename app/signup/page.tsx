"use client";

import ContentWrapper from "@/components/common/ContentWrapper";
import EstateForm from "@/components/EstateForm/EstateForm";
import NavTwo from "@/components/NavTwo/NavTwo";

export default  function signupPage(){
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
           <div className="mt-[50px]">
            <EstateForm/>
           </div>
         
        </main>


</ContentWrapper>


 )

}