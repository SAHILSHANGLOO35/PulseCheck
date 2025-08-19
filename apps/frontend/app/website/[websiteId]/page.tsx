"use client";
import axios from "axios";
import {
  ChevronRight,
  ExternalLink,
  ImageOffIcon,
  AlertTriangle,
  Globe,
  Info,
  CheckCircle,
  XCircle,
  AlertCircle,
} from "lucide-react";
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
  favicon?: string | null;
}

// Skeleton Loading Component
const SkeletonLoader = () => (
  <>
    {/* Website Meta Info Skeleton */}
    <div className="flex w-full flex-col justify-center gap-2 py-6 pr-2 pl-14 text-neutral-200 sm:px-8">
      {/* Logo Skeleton */}
      <div className="mb-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-neutral-700/50">
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

// Website Down Component
const WebsiteDownContent = ({
  websiteUrl,
  websiteName,
  errorDetails,
}: {
  websiteUrl?: string;
  websiteName?: string;
  errorDetails?: string;
}) => (
  <>
    {/* Website Meta Info for Down State */}
    <div className="flex w-full flex-col justify-center gap-2 py-6 pr-2 pl-14 text-neutral-200 sm:px-8">
      <div className="mb-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-rose-500/20">
        <AlertTriangle size={24} className="text-rose-400" />
      </div>

      <div className="flex h-4 w-auto items-center text-xl font-medium text-white">
        {websiteName || "Website"}
      </div>

      {websiteUrl && (
        <div className="mb-4 flex h-4 w-auto items-center gap-2 text-sm font-medium text-[#62bdcf]">
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            {new URL(websiteUrl).host}
          </a>
          <span>
            <ExternalLink size={10} />
          </span>
        </div>
      )}

      <div className="border-b border-neutral-700/50" />
    </div>

    {/* Website Down Status Card */}
    <div className="px-14 pb-6 sm:px-8">
      <div className="flex h-full w-full flex-col justify-center gap-6 rounded-sm border border-neutral-700/40 p-6 text-neutral-200">
        {/* Status Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20">
            <Globe size={24} className="text-rose-400" />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white">
              Website is Currently Down
            </h3>
            <p className="text-sm text-neutral-400">
              We're unable to fetch data from your website
            </p>
          </div>
        </div>

        {/* Error Details (if available) */}
        {errorDetails && (
          <div className="flex flex-col gap-3 rounded-sm border border-amber-500/40 bg-amber-500/5 p-4">
            <h4 className="text-sm font-medium text-amber-200">
              Error Details
            </h4>
            <p className="font-mono text-sm leading-relaxed text-amber-100">
              {errorDetails}
            </p>
          </div>
        )}

        {/* Issue Description */}
        <div className="flex flex-col gap-3 rounded-sm border border-neutral-700/50 p-4">
          <h4 className="text-sm text-[#ffffff9c]">What's happening?</h4>
          <p className="text-sm leading-relaxed text-white">
            Your website appears to be experiencing connectivity issues. This
            could be due to server downtime, maintenance, network problems, or
            configuration issues.
          </p>
        </div>

        {/* Common Causes */}
        <div className="flex flex-col gap-3 rounded-sm border border-neutral-700/50 p-4">
          <h4 className="text-sm text-[#ffffff9c]">Common Causes</h4>
          <div className="space-y-2 text-sm text-white">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-red-400">•</span>
              <span>
                Server is offline or experiencing technical difficulties
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-red-400">•</span>
              <span>DNS configuration issues or domain expiration</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-red-400">•</span>
              <span>
                SSL certificate problems or security misconfigurations
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-red-400">•</span>
              <span>Network connectivity issues or firewall blocking</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-red-400">•</span>
              <span>Website maintenance or updates in progress</span>
            </div>
          </div>
        </div>

        {/* Troubleshooting Steps */}
        <div className="flex flex-col gap-3 rounded-sm border border-neutral-700/50 p-4">
          <h4 className="text-sm text-[#ffffff9c]">Troubleshooting Steps</h4>
          <div className="space-y-2 text-sm text-white">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-[#62bdcf]">1.</span>
              <span>
                <strong>Check Website Directly:</strong> Visit your website in a
                browser to confirm it's down
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-[#62bdcf]">2.</span>
              <span>
                <strong>Verify Domain & DNS:</strong> Ensure your domain hasn't
                expired and DNS is properly configured
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-[#62bdcf]">3.</span>
              <span>
                <strong>Check Server Status:</strong> Contact your hosting
                provider or check their status page
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-[#62bdcf]">4.</span>
              <span>
                <strong>Review Server Logs:</strong> Check error logs for
                specific issues (500 errors, timeouts, etc.)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-[#62bdcf]">5.</span>
              <span>
                <strong>SSL Certificate:</strong> Verify your SSL certificate is
                valid and not expired
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 font-bold text-[#62bdcf]">6.</span>
              <span>
                <strong>Check Resources:</strong> Ensure adequate server
                resources (CPU, memory, disk space)
              </span>
            </div>
          </div>
        </div>

        {/* Quick Fixes */}
        <div className="flex flex-col gap-3 rounded-sm border border-neutral-700/40 p-4">
          <h4 className="text-sm font-medium text-[#ffffff9c]">
            Quick Fixes to Try
          </h4>
          <div className="space-y-2 text-sm text-white">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-green-400">✓</span>
              <span>Restart your web server (Apache, Nginx, etc.)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-green-400">✓</span>
              <span>Clear server-side caches and temporary files</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-green-400">✓</span>
              <span>
                Check and fix file permissions (typically 755 for directories,
                644 for files)
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-green-400">✓</span>
              <span>Verify database connectivity if your site uses one</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 text-green-400">✓</span>
              <span>
                Check .htaccess file for syntax errors (if using Apache)
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-sm bg-[rgb(194,30,86)] px-4 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-rose-500"
            >
              <ExternalLink size={16} />
              Visit Website
            </a>
          )}
        </div>
      </div>
    </div>
  </>
);

// SEO Suggestions Component
const SEOSuggestionsContent = ({
  website,
  missingItems,
}: {
  website: WebsiteData;
  missingItems: {
    title: boolean;
    description: boolean;
    ogImage: boolean;
    favicon: boolean;
    logo: boolean;
  };
}) => {
  const hasMissingItems = Object.values(missingItems).some(Boolean);

  return (
    <>
      {/* Website Meta Info */}
      <div className="flex w-full flex-col justify-center gap-2 py-6 pr-2 pl-14 text-neutral-200 sm:px-8">
        <div className="mb-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
          {website?.logo ? (
            <img
              src={website.logo}
              alt="Logo"
              className="h-full w-full object-cover"
            />
          ) : website?.favicon ? (
            <img
              src={website.favicon}
              alt="Favicon"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-700/50 text-xs text-neutral-400">
              N/A
            </div>
          )}
        </div>
        <div className="flex h-4 w-auto items-center text-xl font-medium text-white">
          {website?.name}
        </div>
        <div className="mb-4 flex h-4 w-auto items-center gap-2 text-sm font-medium text-[#62bdcf]">
          <a href={website?.url} target="_blank" rel="noopener noreferrer">
            {website?.url ? new URL(website.url).host : "Loading..."}
          </a>
          <span>
            <ExternalLink size={10} />
          </span>
        </div>
        <div className="border-b border-neutral-700/50" />
      </div>

      {/* SEO Status Overview */}
      <div className="px-14 pb-6 sm:px-8">
        {hasMissingItems && (
          <div className="mb-6 flex h-full w-full flex-col justify-center gap-6 rounded-sm border border-neutral-700/40 p-6 text-neutral-200">
            {/* Status Header */}
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20">
                <Info size={24} className="text-rose-400" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">
                  SEO & Social Media Optimization Needed
                </h3>
                <p className="text-sm text-neutral-400">
                  Your website is missing some important metadata for better
                  search engine and social media visibility
                </p>
              </div>
            </div>

            {/* Missing Items Overview */}
            <div className="flex flex-col gap-3 rounded-sm border border-neutral-700/40 p-4">
              <h4 className="text-sm text-[#ffffff9c]">Missing Elements</h4>
              <div className="space-y-2 text-sm text-white">
                {missingItems.title && (
                  <div className="flex items-start gap-2">
                    <XCircle size={16} className="mt-0.5 text-red-400" />
                    <span>
                      <strong>Page Title:</strong> Critical for SEO ranking
                    </span>
                  </div>
                )}
                {missingItems.description && (
                  <div className="flex items-start gap-2">
                    <XCircle size={16} className="mt-0.5 text-red-400" />
                    <span>
                      <strong>Meta Description:</strong> Improves click-through
                      rates
                    </span>
                  </div>
                )}
                {missingItems.ogImage && (
                  <div className="flex items-start gap-2">
                    <XCircle size={16} className="mt-0.5 text-red-400" />
                    <span>
                      <strong>Open Graph Image:</strong> Essential for social
                      media sharing
                    </span>
                  </div>
                )}
                {missingItems.favicon && (
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="mt-0.5 text-amber-400" />
                    <span>
                      <strong>Favicon:</strong> Enhances brand recognition in
                      browser tabs
                    </span>
                  </div>
                )}
                {missingItems.logo && (
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="mt-0.5 text-amber-400" />
                    <span>
                      <strong>Logo:</strong> Important for brand identity
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="flex flex-col gap-3 rounded-sm border border-blue-500/40 bg-blue-500/5 p-4">
              <h4 className="text-sm font-medium text-blue-200">
                How to Add Missing Elements
              </h4>
              <div className="space-y-3 text-sm text-white">
                {missingItems.title && (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#62bdcf]">
                        Title Tag:
                      </span>
                    </div>
                    <div className="ml-4 rounded bg-neutral-800 p-2 font-mono text-xs">
                      &lt;title&gt;Your Page Title - Brand Name&lt;/title&gt;
                    </div>
                    <div className="ml-4 text-xs text-neutral-400">
                      Keep it under 60 characters for optimal display in search
                      results
                    </div>
                  </div>
                )}

                {missingItems.description && (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#62bdcf]">
                        Meta Description:
                      </span>
                    </div>
                    <div className="ml-4 rounded bg-neutral-800 p-2 font-mono text-xs break-all">
                      &lt;meta name="description" content="Brief description of
                      your page content"&gt;
                    </div>
                    <div className="ml-4 text-xs text-neutral-400">
                      Keep it between 150-160 characters for best results
                    </div>
                  </div>
                )}

                {missingItems.ogImage && (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#62bdcf]">
                        Open Graph Image:
                      </span>
                    </div>
                    <div className="ml-4 rounded bg-neutral-800 p-2 font-mono text-xs break-all">
                      &lt;meta property="og:image"
                      content="https://yoursite.com/image.jpg"&gt;
                    </div>
                    <div className="ml-4 text-xs text-neutral-400">
                      Recommended size: 1200x630 pixels (1.91:1 ratio)
                    </div>
                  </div>
                )}

                {missingItems.favicon && (
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#62bdcf]">Favicon:</span>
                    </div>
                    <div className="ml-4 rounded bg-neutral-800 p-2 font-mono text-xs break-all">
                      &lt;link rel="icon" type="image/x-icon"
                      href="/favicon.ico"&gt;
                    </div>
                    <div className="ml-4 text-xs text-neutral-400">
                      Use 32x32 or 16x16 pixel ICO files
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* SEO Benefits */}
            <div className="flex flex-col gap-3 rounded-sm border border-neutral-700/40 p-4">
              <h4 className="text-sm text-[#ffffff9c]">
                Benefits of Adding These Elements
              </h4>
              <div className="space-y-2 text-sm text-white">
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 text-green-400" />
                  <span>
                    <strong>Better Search Rankings:</strong> Search engines use
                    titles and descriptions to understand your content
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 text-green-400" />
                  <span>
                    <strong>Higher Click-Through Rates:</strong> Compelling
                    titles and descriptions attract more clicks
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 text-green-400" />
                  <span>
                    <strong>Social Media Engagement:</strong> OG images make
                    your content more shareable and engaging
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 text-green-400" />
                  <span>
                    <strong>Professional Appearance:</strong> Favicons and logos
                    build trust and brand recognition
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-0.5 text-green-400" />
                  <span>
                    <strong>User Experience:</strong> Clear metadata helps users
                    understand what to expect
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={website?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-sm bg-[rgb(194,30,86)] px-4 py-2 text-sm font-medium text-neutral-100 transition-colors hover:bg-rose-500"
              >
                <ExternalLink size={16} />
                Visit Website
              </a>
            </div>
          </div>
        )}

        {/* Current Metadata Display */}
        <div className="flex h-full w-full flex-col justify-center gap-2 rounded-sm border border-neutral-700/50 p-4 text-neutral-200">
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 text-sm text-[#ffffff9c]">
              Title
            </div>
            <div className="text-sm text-white">
              {website?.name || (
                <span className="text-red-400 italic">
                  No title found - Add a &lt;title&gt; tag to your HTML
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 text-sm text-[#ffffff9c]">
              Description
            </div>
            <div className="text-sm text-white">
              {website?.metaDescription || (
                <span className="text-red-400 italic">
                  No description available - Add a meta description tag
                </span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 text-sm text-[#ffffff9c]">
              OG Image
            </div>
            <div>
              {website?.ogImage ? (
                <img
                  src={website.ogImage}
                  alt="Website Preview"
                  className="h-full w-full rounded-sm object-cover"
                />
              ) : (
                <div className="flex w-full flex-col items-center justify-center gap-4 py-8">
                  <ImageOffIcon size={40} className="text-red-400" />
                  <span className="text-red-400 italic">
                    No Open Graph Image found - Add og:image meta tag for better
                    social sharing
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Page() {
  const { websiteId } = useParams();
  const [website, setWebsite] = useState<WebsiteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isWebsiteDown, setIsWebsiteDown] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string>("");
  const router = useRouter();

  // Check what metadata is missing
  const getMissingItems = (website: WebsiteData | null) => {
    if (!website)
      return {
        title: true,
        description: true,
        ogImage: true,
        favicon: true,
        logo: true,
      };

    return {
      title: !website.name || website.name.trim() === "",
      description:
        !website.metaDescription || website.metaDescription.trim() === "",
      ogImage: !website.ogImage,
      favicon: !website.favicon,
      logo: !website.logo,
    };
  };

  const missingItems = getMissingItems(website);
  const shouldShowSEOSuggestions =
    !isWebsiteDown && Object.values(missingItems).some(Boolean);

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

        // Check if the website is down based on the response
        if (ogRes.data?.status === "down") {
          setIsWebsiteDown(true);
          setErrorDetails(ogRes.data?.details || "Unknown error");
          setWebsite({
            ...siteData,
            ogImage: undefined,
            metaDescription: undefined,
            logo: undefined,
            favicon: undefined,
          });
        } else {
          setWebsite({
            ...siteData,
            ogImage: ogRes.data?.ogImage || undefined,
            metaDescription: ogRes.data?.metaDescription || undefined,
            logo: ogRes.data?.logo || undefined,
            favicon: ogRes.data?.favicon || undefined,
          });
          setIsWebsiteDown(false);
        }
      } catch (error) {
        console.error(error);

        // Check if it's a 500 error or any error that indicates website is down
        if (
          axios.isAxiosError(error) &&
          error.response &&
          typeof error.response.status === "number" &&
          (error.response.status === 500 || error.response.status >= 400)
        ) {
          setIsWebsiteDown(true);
          setErrorDetails(
            error.response?.data?.message ||
              error.message ||
              `HTTP ${error.response.status} Error`,
          );

          try {
            const basicInfoResponse = await axios.get(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/websites/status/websites/${websiteId}`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              },
            );
            setWebsite({
              ...basicInfoResponse.data,
              ogImage: undefined,
              metaDescription: undefined,
              logo: undefined,
              favicon: undefined,
            });
          } catch (basicInfoError) {
            console.error(
              "Could not fetch basic website info:",
              basicInfoError,
            );
            setWebsite(null);
          }
        } else {
          setIsWebsiteDown(true);
          setErrorDetails("Failed to fetch website data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWebsiteData();
  }, [websiteId]);

  return (
    <div className="relative flex min-h-screen min-w-full flex-1 p-2">
      <div className="font-poppins flex min-h-full w-full flex-col overflow-hidden rounded-sm border border-rose-500/40 transition-all duration-300">
        {/* Topbar */}
        <div className="flex min-h-14 w-full items-center justify-between gap-2 border-b border-rose-500/40 py-2 pr-2 pl-14 text-neutral-100 text-shadow-white/10 text-shadow-xs sm:flex-row sm:items-center sm:px-8">
          <div className="flex items-center justify-center gap-3">
            <div
              className="flex-shrink-0 cursor-pointer text-[15px] hover:text-neutral-200"
              onClick={() => router.push("/dashboard")}
            >
              Your Websites
            </div>
            <div className="text-neutral-500 max-md:hidden">
              <ChevronRight size={18} />
            </div>
            <div className="text-[15px] text-neutral-500 select-none max-md:hidden">
              {isWebsiteDown
                ? website?.name || "Website Down"
                : website?.name || "Loading..."}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#121212]">
          {loading ? (
            <SkeletonLoader />
          ) : isWebsiteDown ? (
            <WebsiteDownContent
              websiteUrl={website?.url}
              websiteName={website?.name}
              errorDetails={errorDetails}
            />
          ) : shouldShowSEOSuggestions ? (
            <SEOSuggestionsContent
              website={website!}
              missingItems={missingItems}
            />
          ) : (
            <>
              {/* Website Meta Info */}
              <div className="flex w-full flex-col justify-center gap-2 py-6 pr-2 pl-14 text-neutral-200 sm:px-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                  {website?.logo ? (
                    <img
                      src={website.logo}
                      alt="Logo"
                      className="h-full w-full object-cover"
                    />
                  ) : website?.favicon ? (
                    <img
                      src={website.favicon}
                      alt="Favicon"
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
                  <a
                    href={website?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {website?.url ? new URL(website.url).host : "Loading..."}
                  </a>
                  <span>
                    <ExternalLink size={10} />
                  </span>
                </div>
                <div className="border-b border-neutral-700/50" />
              </div>

              {/* SEO Success Status */}
              <div className="px-14 pb-6 sm:px-8">
                <div className="mb-6 flex h-full w-full flex-col justify-center gap-6 rounded-sm border border-neutral-700/50 p-6 text-neutral-200">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/20">
                      <CheckCircle size={24} className="text-rose-500" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-white">
                        Great! Your Website SEO Looks Good
                      </h3>
                      <p className="text-sm text-neutral-400">
                        All essential metadata elements are properly configured
                      </p>
                    </div>
                  </div>
                </div>

                {/* OG Image Card */}
                <div className="flex h-full w-full flex-col justify-center gap-2 rounded-sm border border-neutral-700/50 p-4 text-neutral-200">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2 text-sm text-[#ffffff9c]">
                      Title
                    </div>
                    <div className="text-sm text-white">{website?.name}</div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2 text-sm text-[#ffffff9c]">
                      Description
                    </div>
                    <div className="text-sm text-white">
                      {website?.metaDescription || "No description available"}
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2 text-sm text-[#ffffff9c]">
                      OG Image
                    </div>
                    <div>
                      {website?.ogImage ? (
                        <img
                          src={website.ogImage}
                          alt="Website Preview"
                          className="h-full w-full rounded-sm object-cover"
                        />
                      ) : (
                        <div className="flex w-full flex-col items-center justify-center gap-4">
                          <span>
                            <ImageOffIcon size={40} />
                          </span>
                          <span className="text-md text-white">
                            No Opengraph Image found
                          </span>
                        </div>
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
