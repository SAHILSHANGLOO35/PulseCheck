"use client";
import { MainLayout } from "@/components/dashboard/MainLayout";
import Sidebar from "@/components/dashboard/Sidebar";
import { Menu } from "lucide-react";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
    <div className="flex h-screen w-screen overflow-y-scroll bg-neutral-900">
      {/* Hamburger Menu Button - Only visible on mobile */}
      <div className="fixed top-4 left-4 z-50 sm:hidden">
        <button
          onClick={toggleSidebar}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800 text-neutral-300 transition-colors duration-200 hover:bg-neutral-700"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`h-full overflow-y-auto transition-all duration-300 ${
          isSidebarOpen ? "sm:ml-[240px]" : "sm:ml-[75px]"
        } flex-1`}
      >
        <MainLayout />
      </div>
    </div>
  );
};

export default Page;
