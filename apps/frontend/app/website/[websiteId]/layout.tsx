"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen min-w-screen bg-neutral-900">
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
      <div
        className={`flex w-full ${
          isSidebarOpen ? "sm:ml-[240px]" : "sm:ml-[75px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
