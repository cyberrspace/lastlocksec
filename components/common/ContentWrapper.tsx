"use client";

import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full min-h-screen 
        bg-cover bg-center bg-no-repeat 
        flex flex-col 
        overflow-x-hidden 
        box-border
      "
      style={{
        backgroundImage: "url('/icon/lastframe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Remove side padding here and handle padding within each section instead */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-6 lg:px-10">{children}</div>
    </div>
  );
}
