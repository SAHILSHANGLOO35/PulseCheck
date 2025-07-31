"use client";
import axios from "axios";
import { DeleteIcon, SquareArrowOutUpRight, SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Website {
  name: string;
  url: string;
}

export default function WebsiteCard() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/websites/`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setWebsites(res.data.websites);
      } catch (error) {
        console.error("Failed to fetch Websites");
      } finally {
        setLoading(false);
      }
    };
    fetchWebsites();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (websites.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg">No websites found</div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-4">
    </div>
  );
}
