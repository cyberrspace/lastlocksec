"use client";

export default function AddNew(){
 return(
   <main className="fixed inset-[0px] flex items-center justify-center bg-[#000000]/40 z-[9999]">

 
   <section className="bg-[#FFFFFF] h-[650px] w-[604px] rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.08)] ">
       <button
         className="absolute top-[16px] right-[16px] text-[#C0C0C0] hover:text-gray-800 text-2xl font-bold border-none bg-transparent text-[32px]"
         onClick={() => window.dispatchEvent(new Event("closeOverlay"))}
       >
         ×
       </button>

  <div>
    <h2 className="text-[#000000]">
      Add New Resident
    </h2>
  </div>

  <form action="">
    
  </form>

 </section>
   </main>
 )

}