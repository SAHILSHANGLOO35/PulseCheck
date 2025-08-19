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
  title: "PulseCheck",
  description: "Created by doubleSdotdev",
  icons: {
    icon: "/PulseIcon.png",
  },
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
