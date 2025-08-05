'use client';

import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";

type Website = {
  id: string;
  name: string;
  url: string;
  status: "Up" | "Down" | "Checking";
  responseTime: number;
  lastChecked: string;
};

interface WebsiteContextType {
  websites: Website[];
  fetchWebsites: () => void;
  loading: boolean;
}

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined);

export const WebsiteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWebsites = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/websites/`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setWebsites(
        res.data.websites.map((w: any) => ({
          id: w.id,
          name: w.name,
          url: w.url,
          status: w.ticks[0]
            ? w.ticks[0].status == "Up"
              ? "Up"
              : "Down"
            : "Checking",
          responseTime: w.ticks[0] ? w.ticks[0].response_time_ms : 0,
          lastChecked: w.ticks[0]
            ? format(new Date(w.ticks[0].createdAt), "MMMM d, yyyy, hh:mm a")
            : format(new Date(), "MMMM d, yyyy, hh:mm a"),
        }))
      );
    } catch (error) {
      console.error("Failed to fetch Websites");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  return (
    <WebsiteContext.Provider value={{ websites, fetchWebsites, loading }}>
      {children}
    </WebsiteContext.Provider>
  );
};

export const useWebsiteContext = () => {
  const context = useContext(WebsiteContext);
  if (!context) {
    throw new Error("useWebsiteContext must be used within a WebsiteProvider");
  }
  return context;
};
