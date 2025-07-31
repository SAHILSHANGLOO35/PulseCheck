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
    {
      icon: FolderGit2,
      itemName: "Websites",
      href: "/websites",
    },
    {
      icon: Settings,
      itemName: "Settings",
      href: "/settings",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(sidebarItems[0]);
  const user = useAuth();

  return (
    <div
      className={`min-h-screen text-neutral-400 bg-neutral-950 p-4 transition-all duration-300 font-poppins ${
        isOpen ? "w-[240px]" : "w-[75px]"
      }`}
    >
      <div className="flex flex-col justify-center h-full">

        {/* Pulse Check Title */}
        <div className="flex items-center justify-between">
          {/* Logo section */}
          {isOpen && (
            <div className="flex items-center overflow-hidden transition-all duration-300">
              <Image
                src="/PulseIcon.png"
                alt="Pulse Check Icon"
                width={30}
                height={30}
              />
              <span
                className={`bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-red-300 text-transparent font-medium text-[20px] transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 ml-2 max-w-[150px]"
                    : "opacity-0 ml-0 max-w-0"
                } overflow-hidden whitespace-nowrap`}
              >
                Pulse Check
              </span>
            </div>
          )}

          {/* Close button */}
          <div
            className={`text-neutral-300 bg-transparent hover:bg-neutral-800 rounded-md transition-all duration-200 cursor-pointer ${!isOpen ? "min-w-full flex items-center justify-center" : ""}`}
            onClick={onClose}
          >
            <PanelLeftClose className="m-2" size={22} />
          </div>
        </div>

        {/* Sidebar Items */}
        <div className="flex-1 py-4 font-normal text-neutral-200">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedItem.itemName === item.itemName;

            return (
              <button
                key={item.itemName}
                onClick={() => setSelectedItem(item)}
                className={`flex items-center w-full gap-4 px-2 h-9 rounded-sm cursor-pointer transition-all duration-300 mb-2 ${
                  isSelected ? "" : "bg-transparent hover:bg-neutral-800"
                }`}
                style={{
                  backgroundColor: isSelected ? "rgb(194, 30, 86)" : undefined,
                }}
              >
                {/* Icon Centering */}
                <div
                  className={`flex items-center transition-all duration-300 text-neutral-300 ${
                    !isOpen ? "p-0 justify-center items-center min-w-full" : ""
                  }`}
                >
                  <Icon size={20} />
                </div>

                {/* Label transition */}
                <span
                  className={`tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 text-neutral-100
                      ${isSelected ? "text-rose-200" : ""}
                      ${
                        isOpen
                          ? "opacity-100 ml-0 max-w-[150px]"
                          : "opacity-0 ml-[-12px] max-w-0"
                      }`}
                >
                  {item.itemName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="w-full flex flex-col border-t border-rose-500/40 h-[100px] text-neutral-100 items-start justify-center transition-all duration-300">
          {/* Avatar and username */}
          <div className="flex items-center gap-2 transition-all duration-300 mb-2">
            <div className="bg-transparent border border-rose-500/80 h-10 w-10 rounded-full flex items-center justify-center text-[24px] font-bold text-shadow-xs text-shadow-rose-500/50">
              {user?.username[0].toUpperCase()}
            </div>
            <div
              className={`transition-all duration-200 font-medium whitespace-nowrap overflow-hidden ${
                isOpen ? "opacity-100 ml-1 w-auto scale-100" : "opacity-0"
              }`}
            >
              {user?.username}
            </div>
          </div>

          {/* Logout button */}
          <div
            className={`flex items-center text-red-600 hover:bg-neutral-800 px-2 py-1 w-full rounded-md cursor-pointer transition-all duration-300 whitespace-nowrap ${
              isOpen ? "gap-3 justify-start" : "gap-0 justify-center"
            }`}
          >
            <LogOut size={20} />
            <span
              className={`
              transition-all duration-300 ease-in-out
              ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 transition-opacity duration-300 "}
            `}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
