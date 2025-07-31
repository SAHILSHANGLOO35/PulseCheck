"use client";
import { Command, PlusIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddWebsiteModal from "../AddWebsiteModal";
import WebsitesTable from "../WebsiteTable";

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key.toLowerCase() === "m" && event.target === document.body) {
        event.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="h-screen flex flex-1 w-full p-2 ">
      <div className="min-w-full min-h-full flex flex-col border border-rose-500/40 rounded-sm font-poppins">
        {/* Top Bar */}
        <div className="w-full min-h-14 border-b border-rose-500/40 flex items-center justify-between px-4 text-neutral-100 text-shadow-xs text-shadow-white/10">
          <div className="text-[15px]">Your Websites</div>
          <div
            id="website-modal"
            className="flex items-center justify-center gap-1 hover:bg-neutral-800 transition-all duration-300 px-2 py-1 rounded-sm cursor-pointer group"
            onClick={openModal}
          >
            <PlusIcon
              size={14}
              className="text-neutral-400 group-hover:text-neutral-100 transition-all duration-300"
            />
            <span className="text-[15px]">Add Website</span>
            <div className="flex items-center justify-centers gap-1 bg-neutral-700/50 px-2 py-1 rounded-xs text-shadow-xs text-base">
              <Command size={12} />
              <span className="text-[12px]">m</span>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <AddWebsiteModal isModalOpen={isModalOpen} closeModal={closeModal} />
        )}
        <div className="">
          <WebsitesTable />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
