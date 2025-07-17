"use client";
import { Globe } from "@/components/magicui/globe";
import { Particles } from "@/components/magicui/particles";
import pulseIcon from "../public/PulseIcon.png";
import Image from "next/image";
import { motion } from "motion/react";
import { LayoutDashboard, User } from "lucide-react";
import { useRef, useState } from "react";
import WorldMap from "@/components/ui/world-map";

export default function Home() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About", href: "/about" },
    { title: "FAQs", href: "/faq" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const scrollRef = useRef(null);

  return (
    <div
      className="relative overflow-hidden bg-neutral-900 font-poppins"
      style={{
        backgroundImage: 'url("/binding-dark-texture.png")',
      }}
    >
      <div className="relative flex flex-col w-full overflow-x-hidden">
        <section className="relative h-screen w-screen mb-32">
          <div>
            <Particles
              color="#ffffff"
              vx={0}
              vy={0}
              size={0.2}
              quantity={250}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center mask-b-from-85%">
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">
              <div>{/* <Globe className="z-10" /> */}</div>

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
                <Image
                  src={pulseIcon}
                  alt="Pulse Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-red-400 text-transparent font-medium">
                PulseCheck
              </div>
            </div>

            <motion.div
              className="fixed left-1/2 transform -translate-x-1/2"
              initial={{
                y: -80,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                type: "spring",
                mass: 0.5,
              }}
            >
              <div className="max-w-xl h-10 rounded-3xl flex mx-auto border border-white/15 backdrop-blur-3xl bg-white/5 text-white">
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
              <span className="text-7xl font-semibold bg-clip-text bg-gradient-to-r from-orange-200 via-red-300 to-pink-400 text-transparent tracking-tight">
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
                  Your website deserves 24/7 attention—and that's exactly what
                  we provide.
                </div>
                <div className="mr-1 mt-1">
                  Just enter your site, and we'll track its status around the
                  clock. <span className="text-neutral-400">If</span>
                </div>
                <div className="text-neutral-400 mt-1">
                  anything breaks, we'll let you know instantly—so you can fix
                  it fast.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center mt-32 pt-32 pb-32 px-28 relative z-20">
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
              <div
                className="absolute grid grid-cols-4 auto-rows-[180px] gap-4 min-w-4xl"
                ref={scrollRef}
              >
                {/* 1st Card */}
                <motion.div
                  className="col-span-2 row-span-2 bg-transparent border border-white/25 rounded-lg backdrop-filter backdrop-blur-xs flex flex-col items-center overflow-hidden"
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    opacity: { ease: "linear" },
                  }}
                  viewport={{ root: scrollRef, amount: 0.5, once: true }}
                >
                  <div className="flex flex-col items-start">
                    <div className="bg-white/5 h-10 px-4 rounded-sm mt-4 flex items-center justify-center backdrop-filter backdrop-blur-lg">
                      <div className="text-neutral-200">
                        Real Time Website Monitoring...
                      </div>
                    </div>
                    <div className="bg-white/5 h-8 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg">
                      <div className="text-neutral-200">
                        Local Insight & Instant Alerts
                      </div>
                    </div>
                    <div className="bg-white/5 h-8 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg">
                      <div className="text-neutral-200">
                        Reliable & Efficient
                      </div>
                    </div>
                    <div className="bg-white/5 h-8 w-64 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg">
                      <div className="text-neutral-200"></div>
                    </div>
                  </div>
                  <div
                    className="w-full absolute top-28 overflow-hidden"
                    style={{ width: "600px" }}
                  >
                    <Image
                      src="/worldmap.png"
                      height={800}
                      width={800}
                      alt="World Map"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-800 via-neutral-900/50 to-transparent pointer-events-none"></div>
                </motion.div>

                {/* 2nd card */}
                <motion.div
                  className="col-span-2 row-span-1 bg-transparent border border-white/25 rounded-lg backdrop-filter backdrop-blur-xs flex flex-col items-center"
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    opacity: { ease: "linear" },
                  }}
                  viewport={{ root: scrollRef, amount: 0.5, once: true }}
                >
                  <div className="flex flex-col p-2 px-4 absolute items-center justify-center gap-4">
                    <div className="bg-white/5 h-10 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg">
                      <div className="text-neutral-200">
                        Multi-Region Health Checks
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center backdrop-filter backdrop-blur-lg text-justify">
                      <div className="text-neutral-200 text-[15px]">
                        Monitor your websites from various global locations.
                        Understand how your site performs for users in different
                        countries and continents.
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 3rd Card */}
                <motion.div
                  className="col-span-2 row-span-1 bg-transparent border border-white/25 rounded-lg backdrop-filter backdrop-blur-xs flex flex-col items-center"
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "tween",
                    duration: 0.5,
                    opacity: { ease: "linear" },
                  }}
                  viewport={{ root: scrollRef, amount: 0.5, once: true }}
                >
                  <div className="flex flex-col p-2 px-4 absolute items-center justify-center gap-4">
                    <div className="bg-white/5 h-10 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg">
                      <div className="text-neutral-200">
                        Website Status at a Glance
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-center backdrop-filter backdrop-blur-lg text-justify">
                      <div className="text-neutral-200 text-[15px]">
                        Quickly see if your entered websites are up or down with
                        clear, easy-to-understand indicators. No complex jargon,
                        just immediate status updates.
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen flex items-center pt-32 pb-32 px-28 relative">
          {/* Maintained py-32 for consistency */}
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
            <h2 className="text-5xl font-medium bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pt-2 pb-8">
              How to get{" "}
              <span className="text-7xl font-pacifico tracking-widest">
                Started
              </span>
            </h2>
            <div className="flex items-center justify-end">
              <div className="w-[1000px] h-auto flex">
                <Image
                  src="/Betterstack.jpg"
                  alt="Hand Image"
                  width={1000}
                  height={1000}
                  className="object-fit"
                />
              </div>
              <div className="absolute min-w-4xl"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
