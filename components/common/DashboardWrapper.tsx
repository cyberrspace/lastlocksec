"use client";

import { ReactNode } from "react";

export default function DashboardWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        w-full min-h-screen
        flex flex-col
        bg-cover bg-center bg-no-repeat
        box-border
        overflow-x-hidden overflow-y-auto
        sm:min-h-screen md:min-h-screen lg:min-h-screen xl:min-h-screen
        px-4 sm:px-6 md:px-8 lg:px-10
      "
        style={{
        backgroundImage: "url('/icon/Screen-b.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="
          w-full h-auto flex flex-col flex-grow
          sm:h-auto md:h-auto lg:h-auto
        ">
        {children}
      </div>
    </div>
  );
}
