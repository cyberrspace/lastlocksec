"use client";

import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full min-h-screen 
        bg-cover bg-center bg-no-repeat 
        flex 
       px-[50px]
        box-border
      "
      style={{
        backgroundImage: "url('/icon/lastframe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Remove side padding here and handle padding within each section instead */}
      <div className="w-full max-w-[1440px]">{children}</div>
    </div>
  );
}
