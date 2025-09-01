import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Pacifico } from "next/font/google";
import "./globals.css";
import { WebsiteProvider } from "@/context/WebsiteContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // Add weights you need
});

const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  weight: ["400"], // Add weights you need
});

export const metadata: Metadata = {
  title: "PulseCheck | Website Monitoring Tool",
  description:
    "PulseCheck is a powerful website monitoring tool that tracks uptime, performance, and anomalies in real time with instant alerts.",
  keywords: [
    "PulseCheck",
    "website monitoring",
    "uptime monitoring",
    "performance tracking",
    "server health",
    "real-time alerts",
    "monitor website downtime",
  ],
  authors: [{ name: "doubleSdotdev", url: "https://doublesdotdev.me" }],
  creator: "doubleSdotdev",
  publisher: "PulseCheck",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "PulseCheck - Real-time Website Monitoring",
    description:
      "Stay ahead with PulseCheck. Monitor uptime, detect anomalies, and get instant alerts for your website's health.",
    url: "https://pulse-check-beryl.vercel.app/",
    siteName: "PulseCheck",
    images: [
      {
        url: "/og-image.png", // Add this image in /public for social sharing
        width: 1200,
        height: 630,
        alt: "PulseCheck Website Monitoring Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseCheck - Real-time Website Monitoring",
    description:
      "PulseCheck helps you monitor uptime, detect anomalies, and get instant alerts to keep your website healthy.",
    images: ["/og-image.png"], // same as OpenGraph
    creator: "@doubleSdotdev",
  },
  metadataBase: new URL("https://pulse-check-beryl.vercel.app/"),
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${pacifico.variable} antialiased`}
      >
        <WebsiteProvider>{children}</WebsiteProvider>
      </body>
    </html>
  );
}
