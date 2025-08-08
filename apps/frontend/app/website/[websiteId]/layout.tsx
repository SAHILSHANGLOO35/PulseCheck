"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen min-w-screen flex bg-neutral-900">
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
      <div className="flex w-full">
        {children}
      </div>
    </div>
  );
}
