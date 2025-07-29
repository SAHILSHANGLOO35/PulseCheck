'use client';
import { useAuth } from "@/hooks/useAuth";
import { FaArrowRightLong } from "react-icons/fa6";

interface WebsiteModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddWebsiteModal() {
  const user = useAuth();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black/50 absolute">
      <div className="relative h-[500px] w-[480px] border border-white/15 flex flex-col rounded-lg">
        <div className="flex flex-col text-neutral-400">
          <div className="h-18 flex flex-col bg-neutral-900 rounded-t-lg">
            <div className="relative h-14 w-14 rounded-full border top-[62%] left-4 flex items-center justify-center text-4xl font-semibold bg-neutral-900">
                {user?.username[0].toUpperCase()}
            </div>
          </div>
          <div className="flex pt-12 px-4">
            {user?.username}
          </div>
        </div>
        <div className="flex flex-col text-neutral-400 px-4 pt-4 gap-y-10">
          <div className="flex items-center justify-between">
            <label htmlFor="website-name">Website Name</label>
            <input
              id="website-name"
              className="text-white w-[280px] placeholder-neutral-400 border border-white/10 py-2 px-4 rounded-md outline-none bg-transparent hover:border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-700/50 transition-all duration-300"
              placeholder="Enter your Website's name"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="website-name">Website URL</label>
            <input
              id="website-name"
              className="text-white w-[280px] placeholder-neutral-400 border border-white/10 py-2 px-4 rounded-md outline-none bg-transparent hover:border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-700/50 transition-all duration-300"
              placeholder="Enter your Website's URL"
            />
          </div>
          <div className="mb-4 z-20">
            <div className="flex items-center justify-center">
              <button
                className="text-neutral-50 flex items-center justify-center gap-2 bg-rose-600 w-[400px] py-3 px-4 rounded-md outline-none hover:bg-gradient-to-r hover:from-rose-600 hover:to-red-500 cursor-pointer transition-colors duration-300 font-medium text-shadow-2xs tracking-wide"
              >
                Add Website
                <FaArrowRightLong />
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center text-center">
            You are just few moments away to be a caring developer.
          </div>
        </div>
      </div>
    </div>
  );
}
