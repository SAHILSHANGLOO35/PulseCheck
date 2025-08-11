"use client";
import { useAuth } from "@/hooks/useAuth";
import { FolderGit2, LogOut, PanelLeftClose, Settings } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface SidebarOpenClose {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarOpenClose) {
  const sidebarItems = [
    { icon: FolderGit2, itemName: "Websites", href: "/websites" },
    { icon: Settings, itemName: "Settings", href: "/settings" },
  ];

  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);
  const user = useAuth();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 sm:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar container */}
      <div
        className={`font-poppins fixed top-0 left-0 z-50 h-screen bg-neutral-950 text-neutral-400 transition-all duration-300 ease-in-out ${
          isOpen
            ? "w-[240px]"
            : "w-0 overflow-hidden sm:w-[75px] sm:overflow-visible"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-4">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center">
              <Image
                src="/PulseIcon.png"
                alt="Pulse Check Icon"
                width={30}
                height={30}
                className="flex-shrink-0"
              />
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "ml-2 w-[150px] opacity-100" : "ml-0 w-0 opacity-0"
                }`}
              >
                <span className="bg-gradient-to-r from-pink-200 via-rose-300 to-red-300 bg-clip-text text-[20px] font-medium whitespace-nowrap text-transparent">
                  Pulse Check
                </span>
              </div>
            </div>

            {/* Close Button */}
            <div
              className={`flex-shrink-0 cursor-pointer rounded-md text-neutral-300 transition-all duration-200 hover:bg-neutral-800 ${
                !isOpen ? "flex w-full items-center justify-center" : ""
              }`}
              onClick={onClose}
            >
              <PanelLeftClose className="m-2" size={22} />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 py-4 font-normal text-neutral-200">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedItem.itemName === item.itemName;
              return (
                <button
                  key={item.itemName}
                  onClick={() => setSelectedItem(item)}
                  className={`mb-2 flex h-9 w-full cursor-pointer items-center rounded-sm px-2 transition-all duration-300 ease-in-out ${
                    isSelected
                      ? "bg-[rgb(194,30,86)]"
                      : "bg-transparent hover:bg-neutral-800"
                  }`}
                >
                  <div className="flex flex-shrink-0 items-center text-neutral-300">
                    <Icon size={20} />
                  </div>
                  <div
                    className={`ml-6 flex overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "w-[150px] opacity-100" : "ml-0 w-0 opacity-0"
                    }`}
                  >
                    <span
                      className={`whitespace-nowrap transition-colors duration-200 ${
                        isSelected ? "text-rose-200" : "text-neutral-200"
                      }`}
                    >
                      {item.itemName}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex flex-col border-t border-rose-500/40 pt-4 text-neutral-100">
            {/* Profile */}
            <div className="mb-2 flex items-center">
              <div className="flex min-h-10 min-w-10 flex-shrink-0 items-center justify-center rounded-full border border-rose-500/60 text-[24px] font-bold text-rose-500">
                {user?.username[0].toUpperCase()}
              </div>
              <div
                className={`overflow-hidden font-medium transition-all duration-300 ease-in-out ${
                  isOpen ? "ml-2 w-[150px] opacity-100" : "ml-0 w-0 opacity-0"
                }`}
              >
                <span className="whitespace-nowrap">{user?.username}</span>
              </div>
            </div>

            {/* Logout */}
            <div
              className={`flex w-full items-center rounded-md px-2 py-1 text-red-600 transition-all duration-300 ease-in-out hover:bg-neutral-800 ${
                isOpen ? "justify-start" : "justify-center"
              }`}
            >
              <LogOut size={20} className="flex-shrink-0" />
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "ml-3 w-[60px] opacity-100" : "ml-0 w-0 opacity-0"
                }`}
              >
                <span className="whitespace-nowrap">Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
