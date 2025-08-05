"use client";

import { useEffect, useState } from "react";
import { EllipsisVertical, ExternalLink, Globe, Search } from "lucide-react";
import { useWebsiteContext } from "@/context/WebsiteContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ROWS_PER_PAGE = 5;

const Badge = ({
  children,
  className = "",
  variant = "Checking",
}: {
  children: React.ReactNode;
  className?: string;
  variant: "Up" | "Down" | "Checking";
}) => {
  const baseClasses =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold text-shadow-xs transition-colors text-neutral-50";

  const variantClasses = {
    up: "bg-green-500 border-green-500/30",
    down: "bg-red-700/20 text-red-400 border-red-400/30",
    checking: "bg-yellow-700/20 text-yellow-400 border-yellow-400/30",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant.toLowerCase() as keyof typeof variantClasses]} ${className}`}
    >
      {children}
    </span>
  );
};

// Skeleton component for individual elements
const Skeleton = ({ className = "", width = "w-full" }) => (
  <div
    className={`bg-neutral-800 animate-pulse rounded ${width} h-4 ${className}`}
  />
);

// Generate skeleton rows
const SkeletonRow = () => (
  <tr className="border-b border-neutral-700 hover:bg-neutral-950/50 transition-colors duration-200">
    <td className="px-4 py-4">
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-neutral-600 animate-pulse" />
        <Skeleton width="w-24" />
      </div>
    </td>
    <td className="px-4 py-4">
      <div className="flex items-center gap-2">
        <Skeleton width="w-32" />
        <ExternalLink className="h-3 w-3 text-neutral-600 animate-pulse flex-shrink-0" />
      </div>
    </td>
    <td className="px-4 py-4">
      <Skeleton width="w-16" className="h-6 rounded-full" />
    </td>
    <td className="px-4 py-4">
      <Skeleton width="w-20" />
    </td>
    <td className="px-4 py-4">
      <Skeleton width="w-32" />
    </td>
  </tr>
);

// Loading Skeleton Component
const LoadingSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 }, (_, index) => (
    <SkeletonRow key={index} />
  ));

  return (
    <div className="max-h-screen bg-neutral-900 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="mb-6 flex flex-col">
            <h1 className="text-4xl font-semibold tracking-wide text-white">
              Website Monitor
            </h1>
            <p className="text-neutral-400">Track and monitor your websites</p>
          </div>

          {/* Search bar skeleton */}
          <div className="relative flex items-start text-neutral-100">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 animate-pulse"
              size={20}
            />
            <div className="text-neutral-100 text-sm min-w-[280px] min-h-10 pl-10 border border-white/20 py-2 px-4 rounded-md bg-transparent">
              <Skeleton width="w-32" className="mt-1" />
            </div>
            <div className="absolute bg-neutral-800 rounded-sm h-8 w-8 right-1.5 top-1/2 -translate-y-1/2 flex items-center justify-center">
              <span className="rotate-12 text-neutral-600 font-semibold animate-pulse">
                /
              </span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-sm border border-neutral-700/50 overflow-hidden">
          <div className="overflow-auto">
            <table className="min-w-[800px] w-full">
              <thead className="border-b border-neutral-700 bg-neutral-950">
                <tr>
                  <th className="text-white text-sm py-4 pl-4 text-left font-medium">
                    Website Name
                  </th>
                  <th className="text-white text-sm py-4 px-4 text-left font-medium">
                    URL
                  </th>
                  <th className="text-white text-sm py-4 px-4 text-left font-medium">
                    Status
                  </th>
                  <th className="text-white text-sm py-4 px-4 text-left font-medium">
                    Response Time
                  </th>
                  <th className="text-white text-sm py-4 px-4 text-left font-medium">
                    Last Checked
                  </th>
                </tr>
              </thead>
              <tbody>{skeletonRows}</tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls Skeleton */}
        <div className="mt-4 flex justify-between items-center text-sm text-neutral-500">
          <span className="flex items-center gap-1">
            Showing <Skeleton width="w-4" className="inline-block" /> of{" "}
            <Skeleton width="w-4" className="inline-block" /> websites
          </span>
          <div className="space-x-2">
            <button
              disabled
              className="px-3 py-1 bg-neutral-800 text-neutral-600 rounded opacity-40 animate-pulse"
            >
              Prev
            </button>
            <button
              disabled
              className="px-3 py-1 bg-neutral-800 text-neutral-600 rounded opacity-40 animate-pulse"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function WebsitesTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const { websites, loading } = useWebsiteContext();

  const totalPages = Math.ceil(websites.length / ROWS_PER_PAGE);

  const paginatedData = websites.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/" && event.target === document.body) {
        event.preventDefault();
        document.getElementById("search-bar")?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Show loading skeleton while data is being fetched
  if (loading) {
    return <LoadingSkeleton />;
  }

  // Show empty state if no websites found
  if (websites.length === 0) {
    return (
      <div className="max-h-screen bg-neutral-900 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No websites found. Add your 1st Website now.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-screen bg-neutral-900 py-8">
      <div className="min-w-xl max-w-full px-8">
        <div className="flex items-center justify-between">
          <div className="mb-6 flex flex-col">
            <h1 className="text-4xl font-semibold tracking-wide text-white">
              Monitor your Websites
            </h1>
            <p className="text-neutral-400">Track and monitor your websites</p>
          </div>
          <div
            title="Press / to search"
            className="relative flex items-start text-neutral-100"
          >
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              size={20}
            />
            <input
              id="search-bar"
              className="text-neutral-100 text-sm min-w-[280px] min-h-10 pl-10 placeholder-neutral-400 placeholder:text-[16px] border border-white/20 py-2 px-4 rounded-md outline-none bg-transparent hover:border-neutral-500 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-700/50 transition-all duration-300"
              placeholder="Search Websites..."
            />
            <div className="absolute bg-neutral-800 rounded-sm h-8 w-8 right-1.5 top-1/2 -translate-y-1/2 flex items-center justify-center">
              <span className="rotate-12 text-neutral-500 font-semibold">
                /
              </span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 rounded-sm border border-neutral-700/50 overflow-hidden">
          <div className="overflow-auto">
            <table className="min-w-[800px] w-full">
              <thead className="border-b border-neutral-700 bg-neutral-900">
                <tr>
                  <th className="text-neutral-400 text-sm py-4 pl-4 text-left font-medium">
                    Website Name
                  </th>
                  <th className="text-neutral-400 text-sm py-4 px-4 text-left font-medium">
                    URL
                  </th>
                  <th className="text-neutral-400 text-sm py-4 px-4 text-left font-medium">
                    Status
                  </th>
                  <th className="text-neutral-400 text-sm py-4 px-4 text-left font-medium">
                    Response Time
                  </th>
                  <th className="text-neutral-400 text-sm py-4 px-4 text-left font-medium">
                    Last Checked
                  </th>
                  <th className="text-neutral-400 text-sm py-4 px-4 text-left font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((website, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-700 hover:bg-neutral-950/30 transition-colors duration-200 cursor-pointer"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-neutral-400" />
                        <span className="text-neutral-100 text-sm">
                          {website.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <a
                        className="flex items-center gap-2 group"
                        href={website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="truncate max-w-xs text-neutral-400 text-sm transition duration-200 group-hover:text-neutral-100 group-hover:underline group-hover:decoration-neutral-200">
                          {new URL(website.url).hostname}
                        </span>
                        <ExternalLink className="h-3 w-3 text-white flex-shrink-0 transition duration-200 group-hover:text-neutral-200" />
                      </a>
                    </td>
                    <td className="px-4 py-4">
                      <Badge
                        variant={
                          website.status === "Up"
                            ? "Up"
                            : website.status === "Down"
                              ? "Down"
                              : "Checking"
                        }
                      >
                        {website.status.toUpperCase()}
                      </Badge>
                    </td>
                    <td className="px-4 py-4 text-neutral-100 text-xs">
                      {website.responseTime} ms
                    </td>
                    <td className="px-4 py-4 text-neutral-100 text-sm">
                      {website.lastChecked}
                    </td>
                    <td className="px-4 py-4 text-neutral-100 text-sm">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <EllipsisVertical
                            size={18}
                            className="cursor-pointer"
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="focus:bg-neutral-700 focus:text-neutral-50">
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem className="focus:bg-neutral-700 focus:text-neutral-50">
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-500 cursor-pointer">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="mt-4 flex justify-between items-center text-sm text-neutral-500">
          <span>
            Showing {paginatedData.length} of {websites.length} websites
          </span>
          <div className="space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-neutral-800 text-white rounded disabled:opacity-40 hover:bg-neutral-700 transition-colors"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-neutral-800 text-white rounded disabled:opacity-40 hover:bg-neutral-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
