"use client";
import MainLayout from "@/components/dashboard/MainLayout";
import Sidebar from "@/components/dashboard/Sidebar";
import React, { useState } from "react";

const page = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const closeSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen w-full flex bg-neutral-900">
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
      <div className="flex flex-1">
        <MainLayout />
      </div>
    </div>
  );
};

export default page;
