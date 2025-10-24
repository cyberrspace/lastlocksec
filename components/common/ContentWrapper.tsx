"use client";

import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full 
        min-h-screen 
        bg-cover 
        bg-center 
        bg-no-repeat
        flex flex-col
        px-4 sm:px-6 md:px-8
      "
      style={{
        backgroundImage: "url('/icon/lastframe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto">{children}</div>
    </div>
  );
}
