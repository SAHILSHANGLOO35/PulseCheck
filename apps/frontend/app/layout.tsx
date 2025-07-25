import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Pacifico } from "next/font/google";
import "./globals.css";

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
    icon: "/PulseIcon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
