"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExternalLink, Globe, Search } from "lucide-react";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const websites = [
  {
    id: 1,
    name: "Google",
    url: "https://www.google.com",
    status: "Active",
    lastChecked: "2 minutes ago",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com",
    status: "Active",
    lastChecked: "5 minutes ago",
  },
  {
    id: 3,
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    status: "Inactive",
    lastChecked: "1 hour ago",
  },
  {
    id: 4,
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    status: "Active",
    lastChecked: "10 minutes ago",
  },
  {
    id: 5,
    name: "Vercel",
    url: "https://vercel.com",
    status: "Active",
    lastChecked: "3 minutes ago",
  },
  {
    id: 6,
    name: "Next.js",
    url: "https://nextjs.org",
    status: "Maintenance",
    lastChecked: "30 minutes ago",
  },
  {
    id: 1,
    name: "Google",
    url: "https://www.google.com",
    status: "Active",
    lastChecked: "2 minutes ago",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com",
    status: "Active",
    lastChecked: "5 minutes ago",
  },
  {
    id: 3,
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    status: "Inactive",
    lastChecked: "1 hour ago",
  },
  {
    id: 4,
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    status: "Active",
    lastChecked: "10 minutes ago",
  },
  {
    id: 5,
    name: "Vercel",
    url: "https://vercel.com",
    status: "Active",
    lastChecked: "3 minutes ago",
  },
  {
    id: 6,
    name: "Next.js",
    url: "https://nextjs.org",
    status: "Maintenance",
    lastChecked: "30 minutes ago",
  },
];

const ROWS_PER_PAGE = 5;

export default function WebsitesTable() {
  const [currentPage, setCurrentPage] = useState(1);

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
        event.preventDefault(); // Prevent default browser find behavior
        document.getElementById("search-bar")?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

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
          <Tooltip arrow placement="top" title="Press / to search">
            <div className="relative flex items-start text-neutral-100">
              {/* Icon */}
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
                size={20}
              />

              {/* Input */}
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
          </Tooltip>
        </div>

        <div className="bg-neutral-900 rounded-sm border border-neutral-700/50 overflow-hidden">
          <div className="overflow-auto">
            <Table className="min-w-[800px]">
              <TableHeader>
                <TableRow className="border-neutral-700 bg-neutral-950 font-sans hover:bg-neutral-950">
                  <TableHead className="text-white text-sm py-4 pl-4">
                    Website Name
                  </TableHead>
                  <TableHead className="text-white text-sm py-4">URL</TableHead>
                  <TableHead className="text-white text-sm py-4">
                    Status
                  </TableHead>
                  <TableHead className="text-white text-sm py-4">
                    Response Time
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedData.map((website, index) => (
                  <TableRow
                    key={index}
                    className="border-neutral-700 hover:bg-neutral-950/50 transition-colors duration-200 cursor-pointer"
                  >
                    <TableCell className="text-white py-4 pl-4">
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-neutral-400" />
                        <span className="text-white text-sm">
                          {website.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-neutral-300 py-4">
                      <div className="flex items-center gap-2">
                        <span className="truncate max-w-xs text-white text-sm">
                          {website.url}
                        </span>
                        <ExternalLink className="h-3 w-3 text-white flex-shrink-0" />
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={
                          website.status === "Active"
                            ? "default"
                            : website.status === "Inactive"
                              ? "destructive"
                              : "secondary"
                        }
                        className={
                          website.status === "Active"
                            ? "bg-green-600 hover:bg-green-700 text-white"
                            : website.status === "Inactive"
                              ? "bg-red-600 hover:bg-red-700 text-white"
                              : "bg-yellow-600 hover:bg-yellow-700 text-white"
                        }
                      >
                        {website.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-neutral-400 py-4">
                      {website.lastChecked}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
              className="px-3 py-1 bg-neutral-800 text-white rounded disabled:opacity-40"
            >
              Prev
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-neutral-800 text-white rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
