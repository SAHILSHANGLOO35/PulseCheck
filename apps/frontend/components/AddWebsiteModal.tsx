"use client";

import { useWebsiteContext } from "@/context/WebsiteContext";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface WebsiteModal {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function AddWebsiteModal({
  isModalOpen,
  closeModal,
}: WebsiteModal) {
  const [websiteName, setWebsiteName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");

  const user = useAuth();
  const modalRef = useRef(null);

  const { fetchWebsites } = useWebsiteContext();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // @ts-ignore
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  const handleAddWebsite = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/websites/add-website`,
        {
          url: websiteURL,
          name: websiteName,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      fetchWebsites();
      setWebsiteName("");
      setWebsiteURL("");
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { ease: "easeOut", duration: 0.3 } }}
        >
          <motion.div
            className="relative w-full max-w-md mx-auto h-[500px] border border-white/15 flex flex-col rounded-lg bg-neutral-900"
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header Section */}
            <div className="flex flex-col text-neutral-400">
              <div className="h-18 flex flex-col bg-neutral-950 rounded-t-lg">
                {/* User Avatar */}
                <div className="relative h-14 w-14 rounded-full border top-[61.5%] left-4 flex items-center justify-center text-4xl font-semibold bg-neutral-900 text-neutral-100">
                  {user?.username[0].toUpperCase()}
                </div>

                {/* Close Button */}
                <div
                  className="absolute right-2 top-2 px-1 py-1 hover:bg-neutral-900 hover:text-neutral-100 hover:rotate-90 transition-all duration-300 rounded-full cursor-pointer"
                  onClick={closeModal}
                >
                  <X size={18} />
                </div>
              </div>

              {/* Username */}
              <div className="flex pt-12 px-4 text-neutral-100">
                {user?.username}
              </div>
            </div>

            {/* Form Section */}
            <div className="flex flex-col text-neutral-400 px-4 pt-4 gap-y-8">
              {/* Website Name Input */}
              <div className="flex items-center justify-between text-neutral-100">
                <label htmlFor="website-name">Website Name</label>
                <input
                  id="website-name"
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                  className="text-white w-[280px] placeholder-neutral-500 border border-white/10 py-2 px-4 rounded-md outline-none bg-transparent hover:border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-700/50 transition-all duration-300"
                  placeholder="e.g., My Portfolio Website"
                />
              </div>

              {/* Website URL Input */}
              <div className="flex items-center justify-between text-neutral-100">
                <label htmlFor="website-url">Website URL</label>
                <input
                  id="website-url"
                  value={websiteURL}
                  onChange={(e) => setWebsiteURL(e.target.value)}
                  className="text-white w-[280px] placeholder-neutral-500 border border-white/10 py-2 px-4 rounded-md outline-none bg-transparent hover:border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-700/50 transition-all duration-300"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  className="text-neutral-50 flex items-center justify-center gap-2 bg-rose-600 w-[400px] py-3 px-4 rounded-md outline-none hover:bg-gradient-to-r hover:from-rose-600 hover:to-red-500 cursor-pointer transition-colors duration-300 font-medium text-shadow-2xs tracking-wide"
                  onClick={handleAddWebsite}
                >
                  Add Website
                  <FaArrowRightLong />
                </button>
              </div>

              <div className="relative border border-neutral-50/10"></div>

              {/* Footer Text */}
              <div className="flex items-center justify-center text-center">
                You are just a few moments away from being a caring developer.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
