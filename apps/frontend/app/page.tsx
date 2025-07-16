"use client";
import { Globe } from "@/components/magicui/globe";
import { Particles } from "@/components/magicui/particles";
import pulseIcon from "../public/PulseIcon.png";
import Image from "next/image";
import { motion } from "motion/react";
import { LayoutDashboard, User } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About", href: "/about" },
    { title: "FAQs", href: "/faq" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="relative overflow-hidden bg-neutral-900 font-poppins "
      style={{
        backgroundImage: 'url("/binding-dark-texture.png")',
      }}
    >
      <div className="relative h-screen w-screen">
        <div>
          <Particles color="#ffffff" vx={0} vy={0} size={0.2} quantity={250} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center mask-b-from-85%">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <div>
              {/* <Globe className="z-10" /> */}
            </div>

            {/* Orbital Ring 1 - Closest orbit */}
            <div className="absolute flex items-center justify-center">
              <div className="w-[600px] h-[600px] border border-white/25 rounded-full">
                <div
                  className="absolute w-25 h-25 rounded-full border border-white/15 translate-y-[180%] translate-x-[530%] flex items-center justify-center bg-accent-foreground"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
                  }}
                >
                  <div className="relative text-white text-[10px]">
                    ADD WEBSITES
                  </div>
                </div>

                <div
                  className="absolute w-[10px] h-[10px] rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                    top: "20%",
                    left: "8.6%",
                  }}
                ></div>
                <div
                  className="absolute w-[10px] h-[10px] rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                    top: "15%",
                    left: "85.5%",
                  }}
                ></div>
                <div
                  className="absolute w-[10px] h-[10px] rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                    top: "88%",
                    left: "17.6%",
                  }}
                ></div>
                <div
                  className="absolute w-[10px] h-[10px] rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                    top: "75%",
                    left: "92%",
                  }}
                ></div>
              </div>
            </div>

            {/* Orbital Ring 2 - Middle orbit */}
            <div className="absolute flex items-center justify-center">
              <div className="w-[950px] h-[950px] border border-white/15 rounded-full">
                <div
                  className="absolute w-35 h-35 rounded-full border border-white/15 translate-y-[150%] translate-x-[585%] flex items-center justify-center bg-accent-foreground"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
                  }}
                >
                  <div className="relative text-white text-[10px] text-center">
                    TRACK STATUS OF YOUR WEBSITES
                  </div>
                </div>
                <div
                  className="absolute w-[8px] h-[8px] rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                    top: "20%",
                    left: "9.2%",
                  }}
                ></div>
                <div
                  className="absolute w-[8px] h-[8px] rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                    top: "15%",
                    left: "85.5%",
                  }}
                ></div>
                <div
                  className="absolute w-[8px] h-[8px] rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                    top: "80%",
                    left: "9.9%",
                  }}
                ></div>
                <div
                  className="absolute w-[8px] h-[8px] rounded-full"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                    top: "80%",
                    left: "89.2%",
                  }}
                ></div>

                <div
                  className="absolute w-22 h-22 rounded-full border border-white/15 translate-y-[580%] translate-x-[1025%] flex items-center justify-center bg-accent-foreground"
                  style={{
                    backgroundImage:
                      'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
                  }}
                >
                  <div className="relative text-white text-[10px]">
                    GET NOTIFIED
                  </div>
                </div>
              </div>
            </div>

            {/* Orbital Ring 3 - Outermost orbit */}
            <div className="absolute flex items-center justify-center">
              <div className="w-[1300px] h-[1300px] border border-white/5 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="absolute top-4 flex items-center justify-between w-full z-50">
          {/* Left Logo */}
          <div className="text-white text-2xl font-semibold flex items-center justify-center gap-x-3 ml-28">
            <div>
              <Image src={pulseIcon} alt="Pulse Icon" width={30} height={30} />
            </div>
            <div className="bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-red-400 text-transparent font-medium">PulseCheck</div>
          </div>

          <motion.div className="fixed left-1/2 transform -translate-x-1/2"
            initial={{
              y: -80,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 0.3,
              type: "spring",
              mass: 0.5
            }}
          >
            <div className="max-w-xl h-10 rounded-3xl flex mx-auto  border border-white/15 backdrop-blur-3xl bg-white/5 text-white box-shadow-rgba(0, 0, 0, 0.2) 0px 60px 40px -7px">
              {navItems.map((item, index) => (
                <motion.div
                  className="relative flex flex-col items-center justify-center cursor-pointer px-8 py-1"
                  key={item.title}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span className="relative z-20 group-hover:text-neutral-100 text-neutral-400">
                    {item.title}
                  </span>
                  {hovered === index && (
                    <motion.div
                      layoutId="hover"
                      className="absolute bg-neutral-900 rounded-full w-full h-full"
                      transition={{
                        type: "spring",
                        layout: { duration: 0.3 },
                        mass: 0.5,
                        stiffness: 100,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="text-white text-md font-normal flex items-center justify-center gap-x-3 mr-28 border border-white/25 px-4 py-2 cursor-pointer hover:bg-neutral-700 transition-all duration-150">
            <div>
              <User size={20} />
            </div>
            <div>Create Account</div>
          </div>
        </div>

        <div className="absolute top-48 ml-28 mr-28 flex items-center">
          <div className="flex flex-col max-w-[550px] gap-6">
            <span className="text-7xl font-semibold bg-clip-text bg-linear-to-r from-orange-200 via-red-300 to-pink-400 text-transparent tracking-tight">
              Your Website's <span>Health,</span> <span>Under</span> Watch.
            </span>
            <span className="text-neutral-300">
              We Keep an Eye on Your Site - So You Don't Have To.
            </span>
            <div className="flex gap-2">
              <div className="text-md font-normal flex items-center justify-center gap-x-2 bg-white px-2 py-2 cursor-pointer w-44">
                <div>
                  <User size={20} />
                </div>
                <div>Demo</div>
              </div>
              <div className="text-white text-md font-normal flex items-center justify-center gap-x-2 border border-white/25 px-2 py-2 cursor-pointer hover:bg-neutral-700 transition-all duration-150 w-40">
                <div>
                  <LayoutDashboard size={20} />
                </div>
                <div>Dashboard</div>
              </div>
            </div>
          </div>

          <div className="flex ml-24 translate-y-[270%]">
            <div className="text-white max-w-[640px] tracking-wide">
              <div className="mr-1">
                Your website deserves 24/7 attention—and that's exactly what we
                provide.
              </div>
              <div className="mr-1 mt-1">
                Just enter your site, and we'll track its status around the
                clock. <span className="text-neutral-400">If</span>
              </div>
              <div className="text-neutral-400 mt-1">
                anything breaks, we'll let you know instantly—so you can fix it
                fast.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center py-32 px-28 relative z-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-5xl font-medium bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pt-2 pb-8">
            Powerful Features at Your{" "}
            <span className="text-7xl font-pacifico tracking-widest">
              Fingertips
            </span>
          </h2>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src="/handImage.png"
                alt="Hand Image"
                width={1200}
                height={1200}
                className="filter blur-xs"
              />
            </div>
            <div className="absolute grid grid-cols-4 auto-rows-[180px] gap-4 min-w-4xl">
              {/* Real Time Monitoring Card */}
              <div className="col-span-2 row-span-2 bg-transparent border border-white/25 rounded-lg backdrop:filter backdrop-blur-xs flex flex-col items-center">
                <div className="bg-transparent flex items-center justify-center p-4"></div>
                <div className="flex flex-col p-2 px-4 absolute items-center justify-center mt-28 gap-4"></div>
              </div>

              {/* Instant Alerts Card */}
              <div className="col-span-2 row-span-1 bg-transparent border border-white/25 rounded-lg backdrop:filter backdrop-blur-xs flex flex-col items-center">
                <div className="flex flex-col p-2 px-4 absolute items-center justify-center mt-28 gap-4"></div>
              </div>

              {/* Multi-Location Monitoring Card */}
              <div className="col-span-2 row-span-1 bg-transparent border border-white/25 rounded-lg backdrop:filter backdrop-blur-xs flex flex-col items-center">
                <div className="bg-transparent flex items-center justify-center p-4"></div>
              </div>

              {/* 4th Grid */}
              <div className="col-span-4 h-[120px] bg-transparent border border-white/25 rounded-lg backdrop:filter backdrop-blur-xs flex flex-col items-center">
                <div className="bg-transparent flex items-center justify-center p-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pb-32 px-28 relative">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
          <h2 className="text-5xl font-medium bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pt-2 pb-8">
            How to get{" "}
            <span className="text-7xl font-pacifico tracking-widest">
              Started
            </span>
          </h2>
          <div className="flex items-center justify-center">
            <div>
              <Image
                src="/handImage.png"
                alt="Hand Image"
                width={1200}
                height={1200}
                className="filter blur-xs"
              />
            </div>
            <div className="absolute grid grid-cols-4 auto-rows-[180px] gap-4 min-w-4xl">
              {/* Real Time Monitoring Card */}
              <div className="col-span-2 row-span-2 bg-transparent border border-white/25 rounded-lg backdrop:filter backdrop-blur-xs flex flex-col items-center">
                <div className="bg-transparent flex items-center justify-center p-4"></div>
                <div className="flex flex-col p-2 px-4 absolute items-center justify-center mt-28 gap-4"></div>
              </div>

              {/* Instant Alerts Card */}
              <div className="col-span-2 row-span-1 bg-transparent border border-white/25 rounded-lg backdrop:filter backdrop-blur-xs flex flex-col items-center">
                <div className="flex flex-col p-2 px-4 absolute items-center justify-center mt-28 gap-4"></div>
              </div>

              {/* Multi-Location Monitoring Card */}
              <div className="col-span-2 row-span-1 bg-transparent border border-white/25 rounded-lg backdrop:filter backdrop-blur-xs flex flex-col items-center">
                <div className="bg-transparent flex items-center justify-center p-4"></div>
              </div>

              {/* 4th Grid */}
              <div className="col-span-4 h-[120px] bg-transparent border border-white/25 rounded-lg backdrop:filter backdrop-blur-xs flex flex-col items-center">
                <div className="bg-transparent flex items-center justify-center p-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
