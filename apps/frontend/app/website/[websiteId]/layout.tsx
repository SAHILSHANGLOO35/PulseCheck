"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setIsSidebarOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen min-w-screen bg-neutral-900">
      {/* Sidebar */}
      {/* Hamburger Menu Button - Only visible on mobile */}
      <div className="fixed top-4 left-4 z-50 sm:hidden">
        <button
          onClick={toggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-neutral-300 transition-colors duration-200 hover:bg-neutral-700"
        >
          <Menu size={20} />
        </button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div
        className={`flex w-full transition-all duration-300 ${
          isSidebarOpen ? "sm:ml-[240px]" : "sm:ml-[75px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
