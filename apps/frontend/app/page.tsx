"use client";
import { Globe } from "@/components/magicui/globe";
import { Particles } from "@/components/magicui/particles";
import pulseIcon from "../public/PulseIcon.png";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import {
  LayoutDashboard,
  LayoutDashboardIcon,
  LucideLink2,
  User,
} from "lucide-react";
import { useRef, useState } from "react";
import WorldMap from "@/components/ui/world-map";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import InsightsIcon from "@mui/icons-material/Insights";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SiClerk,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaXTwitter,
} from "react-icons/fa6";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  const navItems = [
    { title: "Home", href: "/" },
    { title: "Features", href: "/features" },
    { title: "About", href: "/about" },
    { title: "FAQs", href: "/faq" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const scrollRef = useRef(null);
  const imageScrollRef = useRef(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const hoverVariants: Variants = {
    whileHover: {
      scale: 1.2,
      rotate: -1.02,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const reverseMarqueeVariants: Variants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const commonTileClasses = `rounded-lg flex items-center justify-center h-20 min-w-max text-neutral-500`;

  return (
    <div
      className="relative overflow-hidden bg-neutral-900 font-poppins"
      style={{
        backgroundImage: 'url("/binding-dark-texture.png")',
      }}
    >
      <div className="relative flex flex-col w-full overflow-x-hidden overflow-hidden">
        <section className="relative h-screen w-screen ">
          <div>
            <Particles
              color="#ffffff"
              vx={0}
              vy={0}
              size={0.2}
              quantity={250}
              className="mask-b-from-90%"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center mask-b-from-90%">
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
              className="absolute left-1/2 transform -translate-x-1/2"
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
                          duration: 1.2,
                          bounce: 0.1,
                          mass: 0.8,
                          stiffness: 80,
                          damping: 20,
                          opacity: {
                            duration: 1.0,
                            ease: "easeOut",
                          },
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
              <div className="text-shadow-xs">Create Account</div>
            </div>
          </div>
          <div className="absolute top-48 ml-28 mr-28 flex items-center">
            <div className="flex flex-col max-w-[550px] gap-6">
              <motion.span
                className="text-7xl font-semibold bg-clip-text bg-gradient-to-r from-orange-200 via-red-300 to-pink-400 text-transparent tracking-tight"
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  type: "spring",
                  duration: 1.2,
                  bounce: 0.1,
                  mass: 0.8,
                  stiffness: 80,
                  damping: 20,
                  opacity: {
                    duration: 1.0,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
              >
                Your Website's <span>Health,</span> <span>Under</span> Watch.
              </motion.span>
              <span className="text-neutral-300">
                We Keep an Eye on Your Site - So You Don't Have To.
              </span>
              <div className="flex gap-2">
                <div className="text-md font-normal flex items-center justify-center gap-x-2 bg-white px-2 py-2 cursor-pointer w-44">
                  <div>
                    <User size={20} />
                  </div>
                  <div className="text-shadow-xs">Demo</div>
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
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center ">
            <motion.h2
              className="text-5xl font-medium bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pt-2 pb-8"
              initial={{
                y: 30,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                duration: 1.3,
                bounce: 0.1,
                mass: 0.8,
                stiffness: 100,
                damping: 20,
                opacity: {
                  duration: 1.0,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
            >
              Powerful Features at Your{" "}
              <span className="text-7xl font-pacifico tracking-widest">
                Fingertips
              </span>
            </motion.h2>
            <div className="flex items-center justify-center mask-b-from-60%">
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
                  className="col-span-2 row-span-2 rounded-xl backdrop-filter backdrop-blur-md flex flex-col items-center overflow-hidden relative shadow-xl"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%),
                      linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)
                    `,
                    backdropFilter: "blur(20px) saturate(180%)",
                    boxShadow: `
                      inset 0 1px 0 rgba(255,255,255,0.2),
                      0 8px 32px rgba(0,0,0,0.3),
                      0 0 0 1px rgba(255,255,255,0.1)
                    `,
                  }}
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1.2,
                    bounce: 0.1,
                    mass: 0.8,
                    stiffness: 80,
                    damping: 20,
                    opacity: {
                      duration: 1.0,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ root: scrollRef, amount: 0.5, once: true }}
                >
                  <div className="flex flex-col items-start">
                    <motion.div
                      className="bg-white/5 h-10 px-4 rounded-sm mt-4 flex items-center justify-center backdrop-filter backdrop-blur-lg"
                      whileHover={{
                        scale: 1.02,
                        rotate: -0.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <div className="text-neutral-200 text-shadow-2xs">
                        Real Time Website Monitoring...
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-white/5 h-8 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg"
                      whileHover={{
                        scale: 1.02,
                        rotate: -0.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <div className="text-neutral-200 text-shadow-2xs">
                        Local Insight & Instant Alerts
                      </div>
                    </motion.div>
                    <motion.div
                      className="bg-white/5 h-8 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg"
                      whileHover={{
                        scale: 1.02,
                        rotate: -0.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <div className="text-neutral-200 text-shadow-2xs">
                        Reliable & Efficient
                      </div>
                    </motion.div>
                    <div className="bg-white/5 h-8 w-64 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg mask-b-from-40%">
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
                  className="col-span-2 row-span-1 rounded-xl backdrop-filter backdrop-blur-md flex flex-col items-center overflow-hidden relative shadow-xl"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%),
                      linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)
                    `,
                    backdropFilter: "blur(20px) saturate(180%)",
                    boxShadow: `
                      inset 0 1px 0 rgba(255,255,255,0.2),
                      0 8px 32px rgba(0,0,0,0.3),
                      0 0 0 1px rgba(255,255,255,0.1)
                    `,
                  }}
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1.2,
                    bounce: 0.1,
                    mass: 0.8,
                    stiffness: 80,
                    damping: 20,
                    opacity: {
                      duration: 1.0,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ root: scrollRef, amount: 0.5, once: true }}
                >
                  <div className="flex flex-col p-2 px-4 absolute items-center justify-center gap-4">
                    <motion.div
                      className="bg-white/5 h-10 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg"
                      whileHover={{
                        scale: 1.02,
                        rotate: -0.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <div className="text-neutral-200 text-shadow-2xs">
                        Multi-Region Health Checks
                      </div>
                    </motion.div>
                    <motion.div
                      className="mt-2 flex items-center justify-center backdrop-filter backdrop-blur-lg text-justify px-4 py-2 rounded-sm"
                      whileHover={{
                        scale: 1.02,
                        rotate: -0.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <div className="text-neutral-200 text-[15px] text-shadow-2xs">
                        Monitor your websites from various global locations.
                        Understand how your site performs for users in different
                        countries and continents.
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* 3rd Card */}
                <motion.div
                  className="col-span-2 row-span-1 rounded-xl backdrop-filter backdrop-blur-md flex flex-col items-center overflow-hidden relative shadow-xl"
                  style={{
                    background: `
                      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05) 0%, transparent 50%),
                      linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)
                    `,
                    backdropFilter: "blur(20px) saturate(180%)",
                    boxShadow: `
                      inset 0 1px 0 rgba(255,255,255,0.2),
                      0 8px 32px rgba(0,0,0,0.3),
                      0 0 0 1px rgba(255,255,255,0.1)
                    `,
                  }}
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1.2,
                    bounce: 0.1,
                    mass: 0.8,
                    stiffness: 80,
                    damping: 20,
                    opacity: {
                      duration: 1.0,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ root: scrollRef, amount: 0.3, once: true }}
                >
                  <div className="flex flex-col p-2 px-4 absolute items-center justify-center gap-4">
                    <motion.div
                      className="bg-white/5 h-10 px-4 rounded-sm mt-3 flex items-center justify-center backdrop-filter backdrop-blur-lg"
                      whileHover={{
                        scale: 1.02,
                        rotate: -0.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <div className="text-neutral-200 text-shadow-2xs">
                        Website Status at a Glance
                      </div>
                    </motion.div>
                    <motion.div
                      className="mt-2 flex items-center justify-center backdrop-filter backdrop-blur-lg text-justify px-4 py-2 rounded-sm"
                      whileHover={{
                        scale: 1.02,
                        rotate: -0.3,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                    >
                      <div className="text-neutral-200 text-[15px] text-shadow-2xs">
                        Quickly see if your entered websites are up or down. No
                        complex jargon, just immediate status updates.
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center pt-32 px-28 relative">
          <div className="w-full mx-auto flex flex-col justify-center items-center">
            <div className="flex text-center">
              <motion.h2
                className="text-5xl font-medium bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pt-2 pb-8"
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  duration: 1.3,
                  bounce: 0.1,
                  mass: 0.8,
                  stiffness: 100,
                  damping: 20,
                  opacity: {
                    duration: 1.0,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: true }}
              >
                How to get{" "}
                <span className="text-7xl font-pacifico tracking-widest">
                  Started
                </span>
              </motion.h2>
            </div>
            <div
              className="flex mt-10 w-screen pl-28 items-center mask-b-from-85%"
              ref={imageScrollRef}
            >
              <div className="flex flex-col">
                <motion.div
                  className="relative bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400 text-transparent text-6xl font-semibold pb-2"
                  initial={{
                    x: -100,
                    opacity: 0,
                  }}
                  whileInView={{
                    x: 0,
                    opacity: 1,
                  }}
                  transition={{
                    type: "spring",
                    duration: 1.2,
                    bounce: 0.1,
                    mass: 0.8,
                    stiffness: 80,
                    damping: 20,
                    opacity: {
                      duration: 1.0,
                      ease: "easeOut",
                    },
                  }}
                  viewport={{ root: imageScrollRef, amount: 0.3, once: true }}
                >
                  Your Journey to Seamless Monitoring Begins Here
                </motion.div>
                <div className="text-neutral-400 mt-2 text-[18px] tracking-wider relative min-w-2xl text-left">
                  On the right, see your intuitive dashboard. Easily track
                  metrics, monitor status, and get insights with a few clicks.
                  No data overload - just clear, actionable info.
                </div>
                <div className="text-neutral-100">
                  <Timeline position="alternate">
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="oklch(87% 0 0)"
                      >
                        Step 1
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                          <PersonIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Create Your Account
                        </Typography>
                        <Typography>
                          Sign up in seconds and explore our features.
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="oklch(87% 0 0)"
                      >
                        Step 2
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                          <LucideLink2 />{" "}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Connect Your Data
                        </Typography>
                        <Typography>
                          Easily integrate your systems with our guided setup.
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="oklch(87% 0 0)"
                      >
                        Step 3
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                          <LayoutDashboardIcon />{" "}
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Gain Insights
                        </Typography>
                        <Typography>
                          Access your dashboard and see real-time performance.
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        variant="body2"
                        color="oklch(87% 0 0)"
                      >
                        Step 4
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                        <TimelineDot color="secondary">
                          <InsightsIcon />{" "}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span">
                          Optimize & Grow
                        </Typography>
                        <Typography>
                          Leverage data to make informed decisions and scale.
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
                </div>
              </div>
              <motion.div
                className="h-[600px] w-[860px] flex-shrink-0 relative -right-30"
                initial={{
                  x: 100,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  duration: 1.2,
                  bounce: 0.1,
                  mass: 0.8,
                  stiffness: 80,
                  damping: 20,
                  opacity: {
                    duration: 1.0,
                    ease: "easeOut",
                  },
                }}
                viewport={{ root: imageScrollRef, amount: 0.2, once: true }}
              >
                <Image
                  src="/Betterstack.jpg"
                  alt="Hand Image"
                  width={700}
                  height={700}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center pt-32 px-28 relative">
          <div className="w-full mx-auto flex flex-col justify-center items-center mask-b-from-90%">
            <motion.div
              className="flex flex-col items-center justify-center pb-8"
              initial={{
                y: 30,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                duration: 1.3,
                bounce: 0.1,
                mass: 0.8,
                stiffness: 100,
                damping: 20,
                opacity: {
                  duration: 1.0,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-medium bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pt-2">
                Got any Questions in Mind ?
              </h2>
              <div className="flex text-5xl font-medium items-baseline justify-center gap-4 bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pb-4">
                <span>We've got</span>
                <span className="text-7xl font-pacifico tracking-widest">
                  answers
                </span>
              </div>
              <div className="text-neutral-400 text-lg max-w-xl text-center">
                Get clear answers to how our platform makes it easy to
                understand and improve your Website's performance.
              </div>
            </motion.div>
            <motion.div
              className="min-w-4xl max-w-4xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Accordion type="single" collapsible>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-neutral-100">
                      What is PulseCheck ?
                    </AccordionTrigger>
                    <AccordionContent className="text-left">
                      PulseCheck is a website monitoring tool that watches your
                      site 24/7. If your site goes down, gets slow, or something
                      stops working, it sends you an alert right away so you can
                      fix it before your users notice.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-neutral-100">
                      Why do I need a website monitoring service like PulseCheck
                      ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Your website is important for your business. If it goes
                      down, you could lose money, hurt your reputation, and
                      annoy users. PulseCheck keeps you updated on your site's
                      status so you can keep it running smoothly, fast, and
                      always available for your visitors.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-neutral-100">
                      How often does PulseCheck monitor my website ?
                    </AccordionTrigger>
                    <AccordionContent>
                      We let you choose how often your website gets checked —
                      from every minute to longer gaps. Pick the option that
                      fits your needs and how important your site is.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-neutral-100">
                      Is PulseCheck suitable for all types of websites ?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, PulseCheck works for all kinds of websites — whether
                      it's a small blog, a big online store, or a complex web
                      app. If it's online, we can monitor it.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section className="min-h-screen min-w-screen items-center justify-center flex pt-32 mb-[480px] px-28 relative">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-32 bg-gradient-to-b from-black via-neutral-900/15 to-transparent rounded-t-full opacity-60 blur-3xl rotate-180"
            style={{ width: "1400px", height: "700px" }}
          ></div>

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-24 bg-gradient-to-b from-neutral-800 via-neutral-900/50 to-transparent rounded-t-full rotate-180 opacity-40 blur-2xl"
            style={{ width: "1000px", height: "500px", marginBottom: "8px" }}
          ></div>

          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-16 rounded-t-full opacity-20 rotate-180 blur-3xl"
            style={{
              width: "700px",
              height: "350px",
              marginBottom: "16px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          ></div>

          <div className="absolute w-full mx-auto flex flex-col justify-center items-center pt-32 top-0 z-50">
            <div className="flex flex-col items-center justify-center pb-8">
              <motion.div
                initial={{
                  y: 30,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  duration: 1.3,
                  bounce: 0.1,
                  mass: 0.8,
                  stiffness: 100,
                  damping: 20,
                  opacity: {
                    duration: 1.0,
                    ease: "easeInOut",
                  },
                }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-medium bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pb-2 text-center max-w-2xl">
                  Start Monitoring Your
                </h2>
                <div className="flex text-2xl font-medium items-baseline justify-center gap-4 bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500 text-transparent tracking-tight pb-8">
                  <span className="text-5xl">Website</span>
                  <span className="text-7xl font-pacifico tracking-widest">
                    Today
                  </span>
                </div>
                <div className="text-neutral-400 text-lg max-w-xl text-center pb-8">
                  Downtime is costly. We make it preventable. Keep your site
                  healthy, no expertise needed.
                </div>
                <div className="text-neutral-300 text-xl max-w-xl text-center">
                  Powering Insights with Cutting-Edge Technology
                </div>
              </motion.div>
              <div
                className="relative overflow-hidden w-[calc(100%-16px)] mt-8 text-neutral-50 max-w-3xl"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, white 10%, white 90%, transparent)",
                }}
              >
                <motion.div
                  className="flex items-center whitespace-nowrap"
                  variants={reverseMarqueeVariants}
                  animate="animate"
                >
                  {[...Array(2)].map((_, index) => (
                    <div key={`row2-${index}`} className="flex gap-8">
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <FaReact className=" h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiNextdotjs className=" h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        {" "}
                        {/* Adjusted width for Aceternity UI */}
                        <SiTailwindcss className=" h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiShadcnui className="h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiSupabase className="h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiClerk className="h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiPostgresql className="h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses} `}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <FaDocker className="h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses} `}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiGithub className="h-12 w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses} mr-8 `}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiRedis className="h-12 w-12" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            className="absolute bg-neutral-800/50 -bottom-30 border border-white/5 left-80 right-80 h-80 rounded-lg flex py-8 px-8 justify-between shadow-[0_10px_20px_rgba(64,64,64,0.3)] mask-b-from-96%"
            initial={{
              y: -100,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              duration: 1.3,
              bounce: 0.1,
              mass: 0.8,
              stiffness: 100,
              damping: 20,
              opacity: {
                duration: 1.0,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-y-4">
              <div className="flex justify-between">
                <div className="flex flex-col max-w-1/2 gap-y-3">
                  <div className="flex items-center justify-start gap-2">
                    <div>
                      <Image
                        src={pulseIcon}
                        alt="Pulse Icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="text-3xl font-semibold bg-clip-text bg-gradient-to-r from-pink-200 via-rose-300 to-red-200 text-transparent">
                      Pulse Check
                    </div>
                  </div>
                  <div className="text-neutral-200 text-justify">
                    Easily watch your website with our simple tools. Get clear
                    updates on how it's doing, without any fuss. Help your
                    business grow strong by keeping your website always online
                    and working perfectly.
                  </div>
                  <div className="flex text-white gap-4 items-center">
                    <a href="https://x.com/doubleSdotdev" target="_blank">
                      <FaXTwitter size={24} className="cursor-pointer" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sahil-shangloo/"
                      target="_blank"
                    >
                      <FaLinkedin size={24} className="cursor-pointer" />
                    </a>
                    <a
                      href="https://github.com/SAHILSHANGLOO35"
                      target="_blank"
                    >
                      <FaGithub size={26} className="cursor-pointer" />
                    </a>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-y-3 text-neutral-300 font-thin">
                    <div className="text-white font-semibold">Product</div>
                    <div>Features</div>
                    <div>Integrations</div>
                    <div>Support</div>
                  </div>
                  <div className="flex flex-col gap-y-3 text-neutral-300 font-thin">
                    <div className="text-white font-semibold">Developer</div>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Partners</div>
                  </div>
                </div>
              </div>
              <div
                className="border border-transparent z-50"
                style={{
                  borderImage:
                    "linear-gradient(to right, rgba(255,255,255,0.2) 0%, #404040 50%, rgba(255,255,255,0.2) 100%) 1",
                }}
              />
              <div className="flex justify-between">
                <div className="text-neutral-300">
                  <span className="text-lg mr-1">&#169;</span>2025 Pulse Check.
                  All rights reserved.
                </div>
                <div className="flex text-neutral-300">
                  ~ Created with ❤️ by Sahil Shangloo AKA doubleSdotdev
                </div>
              </div>
            </div>
          </motion.div>
          <div className="absolute -bottom-105 flex items-center justify-center">
            <motion.div
              className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[15.85rem] font-bold text-center tracking-tighter leading-none w-full mx-auto text-shadow-lg/95 text-shadow-neutral-800/70"
              style={{
                background:
                  "linear-gradient(to right, #e5e5e5, #fda4af, #f43f5e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                maxWidth: "100%",
                overflowWrap: "break-word",
                display: "block",
                opacity: 1,
              }}
              initial={{
                y: 120,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                duration: 1.5,
                bounce: 0.2,
                mass: 0.8,
                stiffness: 100,
                damping: 20,
                opacity: {
                  duration: 1.0,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true }}
            >
              PULSECHECK
            </motion.div>
            <motion.div
              className="absolute bottom-0 w-full h-[3px] origin-center left-1/2 transform -translate-x-1/2" // Removed border and border-transparent classes
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 30,
                delay: 0.5,
                duration: 4,
                opacity: {
                  duration: 0.6,
                  ease: "easeInOut",
                },
              }}
              viewport={{ once: true, amount: 1 }}
              style={{
                transformOrigin: "center",
                width: "100%",
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.2) 0%, #404040 50%, rgba(255,255,255,0.2) 100%)",
              }}
            ></motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
