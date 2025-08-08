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
  const modalRef = useRef<HTMLDivElement>(null); // Explicitly type modalRef

  const { fetchWebsites } = useWebsiteContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, closeModal]); // Add closeModal to dependency array

  // No need for `if (!isModalOpen) return null;` here since AnimatePresence handles rendering

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
        },
      );
      fetchWebsites();
      setWebsiteName("");
      setWebsiteURL("");
      closeModal();
    } catch (error) {
      console.error(error);
      // You might want to add some user feedback here, like a toast notification
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6" // Added padding for smaller screens
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { ease: "easeOut", duration: 0.3 } }}
        >
          <motion.div
            className="relative mx-auto max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl border border-neutral-800/60 bg-neutral-900/95 shadow-2xl backdrop-blur-md" // Added max-h and overflow-y-auto
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="relative px-6 pt-6 pb-4">
              <button
                className="absolute top-4 right-4 rounded-lg p-2 text-neutral-400 transition-all duration-300 hover:rotate-90 hover:bg-neutral-800 hover:text-neutral-200"
                onClick={closeModal}
              >
                <X size={20} />
              </button>

              <div className="flex flex-wrap items-center gap-4">
                {" "}
                {/* Added flex-wrap for smaller screens */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-red-600 text-3xl font-semibold text-white shadow-lg text-shadow-xs">
                  {user?.username[0].toUpperCase()}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-neutral-100">
                    Add New Website
                  </h2>
                  <p className="mt-1 text-sm text-neutral-400">
                    Welcome back, {user?.username}
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-neutral-800/50" />

            {/* Form Section */}
            <div className="space-y-6 px-6 py-6">
              {/* Website Name Input */}
              <div className="space-y-2">
                <label
                  htmlFor="website-name"
                  className="block text-sm font-medium text-neutral-200"
                >
                  Website Name
                </label>
                <input
                  id="website-name"
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                  className="w-full rounded-lg border border-neutral-700/50 bg-neutral-800/50 px-4 py-3 text-neutral-100 placeholder-neutral-500 transition-all duration-200 focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/50 focus:outline-none"
                  placeholder="e.g., My Portfolio Website"
                />
              </div>

              {/* Website URL Input */}
              <div className="space-y-2">
                <label
                  htmlFor="website-url"
                  className="block text-sm font-medium text-neutral-200"
                >
                  Website URL
                </label>
                <input
                  id="website-url"
                  value={websiteURL}
                  onChange={(e) => setWebsiteURL(e.target.value)}
                  className="w-full rounded-lg border border-neutral-700/50 bg-neutral-800/50 px-4 py-3 text-neutral-100 placeholder-neutral-500 transition-all duration-200 focus:border-rose-500/50 focus:ring-2 focus:ring-rose-500/50 focus:outline-none"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              {/* Submit Button */}
              <button
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-rose-600 to-red-600 px-4 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-rose-700 hover:to-red-700 hover:shadow-sm hover:shadow-rose-500/25 disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleAddWebsite}
                disabled={!websiteName.trim() || !websiteURL.trim()}
              >
                Add Website
                <FaArrowRightLong className="text-sm" />
              </button>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <div className="border-t border-neutral-800/50 pt-4">
                <p className="text-center text-sm text-neutral-400">
                  You're just moments away from being a more organized developer
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
