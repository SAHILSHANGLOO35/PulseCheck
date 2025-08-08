"use client";
import { Command, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import AddWebsiteModal from "../AddWebsiteModal";
import WebsitesTable from "../WebsiteTable";

export const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.ctrlKey &&
        event.key.toLowerCase() === "m" &&
        event.target === document.body
      ) {
        event.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen max-w-full flex-1 p-2">
      <div className="font-poppins flex min-h-full w-full flex-col rounded-sm border border-rose-500/40">
        {/* Top Bar - Made responsive */}
        <div className="flex min-h-14 w-full items-center justify-between gap-2 border-b border-rose-500/40 py-2 pr-2 pl-14 text-neutral-100 text-shadow-white/10 text-shadow-xs sm:flex-row sm:items-center sm:px-8">
          <div className="flex-shrink-0 text-[15px]">Your Websites</div>
          <div
            id="website-modal"
            className="group flex w-fit cursor-pointer items-center justify-center gap-1 rounded-full border border-white/25 px-2 py-2 transition-all duration-300 hover:bg-neutral-800 sm:rounded-sm sm:border-none sm:py-1"
            onClick={openModal}
          >
            <PlusIcon
              size={14}
              className="text-neutral-400 transition-all duration-300 group-hover:text-neutral-100"
            />
            <span className="hidden text-[15px] whitespace-nowrap sm:block">
              Add Website
            </span>
            <div className="hidden items-center justify-center gap-1 rounded-xs bg-neutral-700/50 px-2 py-1 text-base text-shadow-xs sm:flex">
              <Command size={12} />
              <span className="text-[12px]">m</span>
            </div>
          </div>
        </div>
        {/* Your AddWebsiteModal component */}
        {isModalOpen && (
          <AddWebsiteModal isModalOpen={isModalOpen} closeModal={closeModal} />
        )}
        <div className="flex flex-1 overflow-hidden">
          <WebsitesTable />
        </div>
      </div>
    </div>
  );
};
