"use client";
import { FolderGit2, PanelLeftClose, Settings } from "lucide-react";
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

  return (
    <div
      className={`min-h-screen text-neutral-400 bg-neutral-950 p-4 transition-all duration-300 ${
        isOpen ? "w-[240px]" : "w-[75px]"
      }`}
    >
      <div>
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
        <div className="flex flex-col items-start justify-center py-4 gap-y-2 font-normal text-neutral-200">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isSelected = selectedItem.itemName === item.itemName;

            return (
              <button
                key={item.itemName}
                onClick={() => setSelectedItem(item)}
                className={`flex items-center w-full gap-4 px-2 h-9 rounded-sm cursor-pointer transition-all duration-300 ${
                  isSelected ? "" : "bg-transparent hover:bg-neutral-800"
                }`}
                style={{
                  backgroundColor: isSelected
                    ? "rgb(194, 30, 86)"
                    : undefined,
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
                    ${
                      isSelected ? 'text-rose-200' : ''
                    }
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
      </div>
    </div>
  );
}
