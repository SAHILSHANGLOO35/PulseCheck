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
import { useRouter } from "next/navigation";

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
    className={`animate-pulse rounded bg-neutral-800 ${width} h-4 ${className}`}
  />
);

// Mobile card component for small screens
const MobileWebsiteCard = ({
  website,
  index,
}: {
  website: any;
  index: number;
}) => {
  const router = useRouter();

  return (
    <div
      key={index}
      className="space-y-3 rounded-lg border border-neutral-700 bg-neutral-800/50 p-4"
    >
      <div className="flex items-start justify-between">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Globe className="h-4 w-4 flex-shrink-0 text-neutral-400" />
          <span className="truncate text-sm font-medium text-neutral-100">
            {website.name}
          </span>
        </div>
        <div className="flex items-center gap-2">
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVertical
                size={18}
                className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-100"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="focus:bg-neutral-700 focus:text-neutral-50"
                onClick={() => router.push(`website/${website.id}`)}
              >
                View
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-neutral-700 focus:text-neutral-50">
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-500">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-neutral-400">URL:</span>
          <a
            className="group flex items-center gap-1 text-right"
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="max-w-[200px] truncate text-neutral-400 transition duration-200 group-hover:text-neutral-100 group-hover:underline">
              {new URL(website.url).hostname}
            </span>
            <ExternalLink className="h-3 w-3 flex-shrink-0 text-white transition duration-200 group-hover:text-neutral-200" />
          </a>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Response Time:</span>
          <span className="text-neutral-100">{website.responseTime} ms</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-neutral-400">Last Checked:</span>
          <span className="text-neutral-100">{website.lastChecked}</span>
        </div>
      </div>
    </div>
  );
};

// Generate skeleton rows
const SkeletonRow = () => (
  <tr className="border-b border-neutral-700 transition-colors duration-200 hover:bg-neutral-950/30">
    {/* Website Name */}
    <td className="min-w-[150px] px-4 py-4">
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 animate-pulse text-neutral-600" />
        <Skeleton width="w-24" />
      </div>
    </td>

    {/* URL */}
    <td className="min-w-[200px] px-4 py-4">
      <div className="flex items-center gap-2">
        <Skeleton width="w-40" />
        <ExternalLink className="h-3 w-3 flex-shrink-0 animate-pulse text-neutral-600" />
      </div>
    </td>

    {/* Status */}
    <td className="hidden min-w-[100px] px-4 py-4 lg:table-cell">
      <Skeleton width="w-16" className="h-6 rounded-full" />
    </td>

    {/* Response Time */}
    <td className="hidden min-w-[120px] px-4 py-4 lg:table-cell">
      <Skeleton width="w-20" />
    </td>

    {/* Last Checked */}
    <td className="hidden min-w-[140px] px-4 py-4 xl:table-cell">
      <Skeleton width="w-32" />
    </td>

    {/* Actions */}
    <td className="w-12 px-4 py-4">
      <Skeleton width="w-6 h-6" />
    </td>
  </tr>
);

// Loading Skeleton Component
const LoadingSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 }, (_, index) => (
    <SkeletonRow key={index} />
  ));

  return (
    <div className="mt-4 h-full w-full bg-neutral-900 py-4">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="mb-6 flex flex-col">
            <h1 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl lg:text-4xl">
              Monitor your Websites
            </h1>
            <p className="text-sm text-neutral-400 sm:text-base">
              Track and monitor your websites
            </p>
          </div>

          {/* Search bar skeleton */}
          <div className="relative flex w-full items-start text-neutral-100 lg:w-auto">
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 animate-pulse text-neutral-600"
              size={20}
            />
            <div className="min-h-10 w-full rounded-md border border-white/20 bg-transparent px-4 py-2 pr-12 pl-10 text-sm text-neutral-100 lg:min-w-[280px]">
              <Skeleton width="w-32" className="mt-1" />
            </div>
            <div className="absolute top-1/2 right-1.5 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-sm bg-neutral-800">
              <span className="rotate-12 animate-pulse font-semibold text-neutral-600">
                /
              </span>
            </div>
          </div>
        </div>

        {/* Desktop table skeleton */}
        <div className="hidden overflow-hidden rounded-sm border border-neutral-700/50 bg-neutral-900 md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-full">
              <thead className="border-b border-neutral-700 bg-neutral-900">
                <tr>
                  <th className="min-w-[150px] py-4 pl-4 text-left text-sm font-medium text-neutral-400">
                    Website Name
                  </th>
                  <th className="min-w-[200px] px-4 py-4 text-left text-sm font-medium text-neutral-400">
                    URL
                  </th>
                  <th className="hidden min-w-[100px] px-4 py-4 text-left text-sm font-medium text-neutral-400 lg:table-cell">
                    Status
                  </th>
                  <th className="hidden min-w-[120px] px-4 py-4 text-left text-sm font-medium text-neutral-400 lg:table-cell">
                    Response Time
                  </th>
                  <th className="hidden min-w-[140px] px-4 py-4 text-left text-sm font-medium text-neutral-400 xl:table-cell">
                    Last Checked
                  </th>
                  <th className="w-12 px-4 py-4 text-left text-sm font-medium text-neutral-400"></th>
                </tr>
              </thead>
              <tbody>{skeletonRows}</tbody>
            </table>
          </div>
        </div>

        {/* Mobile cards skeleton */}
        <div className="space-y-4 md:hidden">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              className="space-y-3 rounded-lg border border-neutral-700 bg-neutral-800/50 p-4"
            >
              <div className="flex items-center justify-between">
                <Skeleton width="w-32" />
                <Skeleton width="w-16 h-6 rounded-full" />
              </div>
              <div className="space-y-2">
                <Skeleton width="w-full" />
                <Skeleton width="w-3/4" />
                <Skeleton width="w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls Skeleton */}
        <div className="mt-4 flex flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-center gap-1">
            Showing <Skeleton width="w-4" className="inline-block" /> of{" "}
            <Skeleton width="w-4" className="inline-block" /> websites
          </span>
          <div className="flex justify-center space-x-2 sm:justify-end">
            <button
              disabled
              className="animate-pulse rounded bg-neutral-800 px-3 py-1 text-neutral-600 opacity-40"
            >
              Prev
            </button>
            <button
              disabled
              className="animate-pulse rounded bg-neutral-800 px-3 py-1 text-neutral-600 opacity-40"
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
  const [searchTerm, setSearchTerm] = useState("");

  const { websites, loading } = useWebsiteContext();
  const router = useRouter();

  // Filter websites based on search term
  const filteredWebsites = websites.filter(
    (website: any) =>
      website.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      website.url?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredWebsites.length / ROWS_PER_PAGE);

  const paginatedData = filteredWebsites.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE,
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

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Show loading skeleton while data is being fetched
  if (loading) {
    return <LoadingSkeleton />;
  }

  // Show empty state if no websites found
  if (websites.length === 0) {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-neutral-900 p-4">
        <div className="text-center">
          <div className="text-base text-gray-500 sm:text-lg">
            No websites found. Add your 1st Website now and get started.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full bg-neutral-900 py-4 sm:py-6 lg:py-8">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold tracking-wide text-white sm:text-3xl lg:text-4xl">
              Monitor your Websites
            </h1>
            <p className="text-sm text-neutral-400 sm:text-base">
              Track and monitor your websites
            </p>
          </div>
          <div
            title="Press / to search"
            className="relative flex w-full items-start text-neutral-100 lg:w-auto"
          >
            <Search
              className="absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400"
              size={20}
            />
            <input
              id="search-bar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="min-h-10 w-full rounded-md border border-white/20 bg-transparent px-4 py-2 pr-12 pl-10 text-sm text-neutral-100 placeholder-neutral-400 transition-all duration-300 outline-none placeholder:text-[16px] hover:border-neutral-500 focus:border-neutral-500 focus:ring-2 focus:ring-neutral-700/50 lg:min-w-[280px]"
              placeholder="Search Websites..."
            />
            <div className="absolute top-1/2 right-1.5 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-sm bg-neutral-800">
              <span className="rotate-12 font-semibold text-neutral-500">
                /
              </span>
            </div>
          </div>
        </div>

        {/* Show message if no results found */}
        {filteredWebsites.length === 0 && searchTerm && (
          <div className="py-8 text-center">
            <div className="text-neutral-400">
              No websites found matching "{searchTerm}"
            </div>
          </div>
        )}

        {/* Desktop Table View */}
        {filteredWebsites.length > 0 && (
          <div className="hidden overflow-hidden rounded-sm border-t border-r border-l border-neutral-700/50 bg-neutral-900 md:block">
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead className="border-b border-neutral-700/80 bg-neutral-900">
                  <tr>
                    <th className="min-w-[150px] py-4 pl-4 text-left text-sm font-medium text-neutral-400">
                      Website Name
                    </th>
                    <th className="min-w-[200px] px-4 py-4 text-left text-sm font-medium text-neutral-400">
                      URL
                    </th>
                    <th className="hidden min-w-[100px] px-4 py-4 text-left text-sm font-medium text-neutral-400 lg:table-cell">
                      Status
                    </th>
                    <th className="hidden min-w-[120px] px-4 py-4 text-left text-sm font-medium text-neutral-400 lg:table-cell">
                      Response Time
                    </th>
                    <th className="hidden min-w-[140px] px-4 py-4 text-left text-sm font-medium text-neutral-400 xl:table-cell">
                      Last Checked
                    </th>
                    <th className="w-12 px-4 py-4 text-left text-sm font-medium text-neutral-400"></th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((website: any, index: number) => (
                    <tr
                      key={index}
                      className="cursor-pointer border-b border-neutral-700/50 transition-colors duration-200 hover:bg-neutral-950/30"
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 flex-shrink-0 text-neutral-400" />
                          <span className="truncate text-sm text-neutral-100">
                            {website.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <a
                          className="group flex items-center gap-2"
                          href={website.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="max-w-[200px] truncate text-sm text-neutral-400 transition duration-200 group-hover:text-neutral-100 group-hover:underline group-hover:decoration-neutral-200">
                            {new URL(website.url).hostname}
                          </span>
                          <ExternalLink className="h-3 w-3 flex-shrink-0 text-white transition duration-200 group-hover:text-neutral-200" />
                        </a>
                      </td>
                      <td className="hidden px-4 py-4 lg:table-cell">
                        <Badge
                          variant={
                            website.status === "Up"
                              ? "Up"
                              : website.status === "Down"
                                ? "Down"
                                : "Checking"
                          }
                        >
                          {website.status?.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="hidden px-4 py-4 text-xs text-neutral-100 lg:table-cell">
                        {website.responseTime} ms
                      </td>
                      <td className="hidden px-4 py-4 text-sm text-neutral-100 xl:table-cell">
                        {website.lastChecked}
                      </td>
                      <td className="px-4 py-4 text-sm text-neutral-100">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <EllipsisVertical
                              size={18}
                              className="cursor-pointer transition-colors hover:text-neutral-300"
                            />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="focus:bg-neutral-700 focus:text-neutral-50"
                              onClick={() =>
                                router.push(`website/${website.id}`)
                              }
                            >
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem className="focus:bg-neutral-700 focus:text-neutral-50">
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer text-red-500">
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
        )}

        {/* Mobile Card View */}
        {filteredWebsites.length > 0 && (
          <div className="space-y-4 md:hidden">
            {paginatedData.map((website: any, index: number) => (
              <MobileWebsiteCard key={index} website={website} index={index} />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {filteredWebsites.length > 0 && (
          <div className="mt-6 flex flex-col gap-4 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-center sm:text-left">
              Showing {paginatedData.length} of {filteredWebsites.length}{" "}
              websites
              {searchTerm && ` (filtered from ${websites.length} total)`}
            </span>
            <div className="flex justify-center space-x-2 sm:justify-end">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="rounded bg-neutral-800 px-3 py-1 text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Prev
              </button>
              <span className="flex items-center px-3 py-1 text-neutral-400">
                {currentPage} / {totalPages || 1}
              </span>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages || totalPages === 0}
                className="rounded bg-neutral-800 px-3 py-1 text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
