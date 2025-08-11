"use client";
import axios from "axios";
import { ChevronRight, ExternalLink } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface WebsiteData {
  url: string;
  name: string;
  id: string;
  user_id: string;
  ogImage?: string;
  metaDescription?: string;
  logo?: string | null;
}

// Skeleton Loading Component
const SkeletonLoader = () => (
  <>
    {/* Website Meta Info Skeleton */}
    <div className="flex w-full flex-col justify-center gap-2 py-6 pr-2 pl-14 text-neutral-200 sm:px-8">
      {/* Logo Skeleton */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-neutral-600 bg-neutral-700/50">
        <div className="h-full w-full animate-pulse rounded-full bg-neutral-600/50" />
      </div>

      {/* Website Name Skeleton */}
      <div className="mb-2 flex h-4 w-auto items-center text-xl font-medium text-white">
        <div className="h-6 w-48 animate-pulse rounded bg-neutral-700/50" />
      </div>

      {/* Website URL Skeleton */}
      <div className="mb-4 flex h-4 w-auto items-center gap-2 text-sm font-medium text-[#62bdcf]">
        <div className="h-4 w-32 animate-pulse rounded bg-neutral-700/50" />
        <span>
          <ExternalLink size={10} className="opacity-30" />
        </span>
      </div>

      <div className="border-b border-neutral-700/50" />
    </div>

    {/* OG Image Card Skeleton */}
    <div className="px-14 pb-6 sm:px-8">
      <div className="flex h-full w-full flex-col justify-center gap-2 rounded-sm border border-neutral-700/50 p-4 text-neutral-200">
        {/* Title Section Skeleton */}
        <div className="flex flex-col gap-0.5">
          <div className="text-sm text-[#ffffff9c]">Title</div>
          <div className="h-4 w-40 animate-pulse rounded bg-neutral-700/50" />
        </div>

        {/* Description Section Skeleton */}
        <div className="flex flex-col gap-0.5">
          <div className="text-sm text-[#ffffff9c]">Description</div>
          <div className="space-y-1">
            <div className="h-4 w-full animate-pulse rounded bg-neutral-700/50" />
            <div className="h-4 w-3/4 animate-pulse rounded bg-neutral-700/50" />
          </div>
        </div>

        {/* OG Image Section Skeleton */}
        <div className="flex flex-col gap-0.5">
          <div className="text-sm text-[#ffffff9c]">OG Image</div>
          <div className="h-48 w-full animate-pulse rounded-sm bg-neutral-700/50" />
        </div>
      </div>
    </div>
  </>
);

export default function Page() {
  const { websiteId } = useParams();
  const [website, setWebsite] = useState<WebsiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchWebsiteData = async () => {
      try {
        // Fetch website details
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/websites/status/websites/${websiteId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        const siteData = response.data;

        // Fetch OG image + logo
        const ogRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/websites/og-image`,
          {
            params: { url: siteData.url },
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        setWebsite({
          ...siteData,
          ogImage: ogRes.data?.ogImage || undefined,
          metaDescription: ogRes.data?.metaDescription || undefined,
          logo: ogRes.data?.logo || undefined,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // stop loading no matter what
      }
    };

    fetchWebsiteData();
  }, [websiteId]);

  return (
    <div className="relative flex min-h-screen min-w-full flex-1 p-2">
      <div className="font-poppins flex min-h-full w-full flex-col overflow-hidden rounded-sm border border-rose-500/40">
        {/* Topbar */}
        <div className="flex min-h-14 w-full items-center justify-between gap-2 border-b border-rose-500/40 py-2 pr-2 pl-14 text-neutral-100 text-shadow-white/10 text-shadow-xs sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center justify-center gap-3">
            <div
              className="flex-shrink-0 cursor-pointer text-[15px] hover:text-neutral-200"
              onClick={() => router.push("/dashboard")}
            >
              Your Websites
            </div>
            <div className="text-neutral-500">
              <ChevronRight size={18} />
            </div>
            <div className="text-[15px] text-[#5B5B5D] select-none max-md:hidden">
              {website?.name || "Loading..."}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#121212]">
          {loading ? (
            <SkeletonLoader />
          ) : (
            <>
              {/* Website Meta Info */}
              <div className="flex w-full flex-col justify-center gap-2 py-6 pr-2 pl-14 text-neutral-200 sm:px-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-neutral-600">
                  {website?.logo ? (
                    <img
                      src={website.logo}
                      alt="Logo"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-sm text-neutral-400">N/A</span>
                  )}
                </div>
                <div className="flex h-4 w-auto items-center text-xl font-medium text-white">
                  {website?.name}
                </div>
                <div className="mb-4 flex h-4 w-auto items-center gap-2 text-sm font-medium text-[#62bdcf]">
                  <a href={website?.url} target="_blank">
                    {website?.url ? new URL(website.url).host : "Loading..."}
                  </a>
                  <span>
                    <ExternalLink size={10} />
                  </span>
                </div>
                <div className="border-b border-neutral-700/50" />
              </div>

              {/* OG Image Card */}
              <div className="px-14 pb-6 sm:px-8">
                <div className="flex h-full w-full flex-col justify-center gap-2 rounded-sm border border-neutral-700/50 p-4 text-neutral-200">
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm text-[#ffffff9c]">Title</div>
                    <div className="text-sm text-white">{website?.name}</div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm text-[#ffffff9c]">Description</div>
                    <div className="text-sm text-white">
                      {website?.metaDescription || "No description available"}
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="text-sm text-[#ffffff9c]">OG Image</div>
                    <div>
                      {website?.ogImage ? (
                        <img
                          src={website.ogImage}
                          alt="Website Preview"
                          className="h-full w-full rounded-sm object-cover"
                        />
                      ) : (
                        <span className="text-sm text-white">
                          No image found
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
