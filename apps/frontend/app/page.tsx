"use client";
import { Globe } from "@/components/magicui/globe";
import { Particles } from "@/components/magicui/particles";
import pulseIcon from "../public/PulseIcon.png";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  LayoutDashboard,
  LayoutDashboardIcon,
  Loader,
  LucideLink2,
  User,
} from "lucide-react";
import { useRef, useState } from "react";
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
import { useRouter } from "next/navigation";

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

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [signinLoading, setSigninLoading] = useState(false);
  const [dashboardLoading, setDashboardLoading] = useState(false);

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

  const handleClick = () => {
    setLoading(true);
    router.push("/sign-up");
  };

  const handleSigninClick = () => {
    setSigninLoading(true);
    router.push("/sign-in");
  };

  const handleDashboardClick = () => {
    setDashboardLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/sign-in");
      return;
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div
      className="font-poppins relative overflow-hidden bg-neutral-900"
      style={{
        backgroundImage: 'url("/binding-dark-texture.png")',
      }}
    >
      <div className="relative flex w-full flex-col overflow-hidden overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen w-screen">
          <div className="hidden md:block">
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
            <div className="relative flex h-[500px] w-[500px] items-center justify-center">
              {/* Orbital Ring 1 - Closest orbit */}
              <div className="absolute hidden items-center justify-center md:flex">
                <div className="h-[600px] w-[600px] rounded-full border border-white/25">
                  <div
                    className="bg-accent-foreground absolute flex h-25 w-25 translate-x-[530%] translate-y-[180%] items-center justify-center rounded-full border border-white/15"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
                    }}
                  >
                    <div className="relative text-[10px] text-white">
                      ADD WEBSITES
                    </div>
                  </div>

                  <div
                    className="absolute h-[10px] w-[10px] rounded-full"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                      top: "20%",
                      left: "8.6%",
                    }}
                  ></div>
                  <div
                    className="absolute h-[10px] w-[10px] rounded-full"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                      top: "15%",
                      left: "85.5%",
                    }}
                  ></div>
                  <div
                    className="absolute h-[10px] w-[10px] rounded-full"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                      top: "88%",
                      left: "17.6%",
                    }}
                  ></div>
                  <div
                    className="absolute h-[10px] w-[10px] rounded-full"
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
              <div className="absolute hidden items-center justify-center md:flex">
                <div className="h-[950px] w-[950px] rounded-full border border-white/15">
                  <div
                    className="bg-accent-foreground absolute flex h-35 w-35 translate-x-[585%] translate-y-[150%] items-center justify-center rounded-full border border-white/15"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
                    }}
                  >
                    <div className="relative text-center text-[10px] text-white">
                      TRACK STATUS OF YOUR WEBSITES
                    </div>
                  </div>
                  <div
                    className="absolute h-[8px] w-[8px] rounded-full"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                      top: "20%",
                      left: "9.2%",
                    }}
                  ></div>
                  <div
                    className="absolute h-[8px] w-[8px] rounded-full"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                      top: "15%",
                      left: "85.5%",
                    }}
                  ></div>
                  <div
                    className="absolute h-[8px] w-[8px] rounded-full"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                      top: "80%",
                      left: "9.9%",
                    }}
                  ></div>
                  <div
                    className="absolute h-[8px] w-[8px] rounded-full"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
                      top: "80%",
                      left: "89.2%",
                    }}
                  ></div>

                  <div
                    className="bg-accent-foreground absolute flex h-22 w-22 translate-x-[1025%] translate-y-[580%] items-center justify-center rounded-full border border-white/15"
                    style={{
                      backgroundImage:
                        'url("https://www.transparenttextures.com/patterns/asfalt-light.png")',
                    }}
                  >
                    <div className="relative text-[10px] text-white">
                      GET NOTIFIED
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbital Ring 3 - Outermost orbit */}
              <div className="absolute hidden items-center justify-center md:flex">
                <div className="h-[1300px] w-[1300px] rounded-full border border-white/5"></div>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="absolute top-4 z-50 flex w-full flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-0">
            {/* Left Logo */}
            <div className="flex items-center justify-center gap-x-3 text-2xl font-semibold text-white md:ml-28">
              <div>
                <Image
                  src={pulseIcon}
                  alt="Pulse Icon"
                  width={30}
                  height={30}
                />
              </div>
              <div className="bg-gradient-to-r from-pink-200 via-rose-300 to-red-400 bg-clip-text font-medium text-transparent">
                PulseCheck
              </div>
            </div>

            <motion.div
              className="absolute left-1/2 hidden -translate-x-1/2 transform md:block"
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
              <div className="mx-auto flex h-10 max-w-xl rounded-3xl border border-white/15 bg-white/5 text-white backdrop-blur-3xl">
                {navItems.map((item, index) => (
                  <motion.div
                    className="relative flex cursor-pointer flex-col items-center justify-center px-8 py-1"
                    key={item.title}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <span className="relative z-20 text-neutral-400 group-hover:text-neutral-100">
                      {item.title}
                    </span>
                    {hovered === index && (
                      <motion.div
                        layoutId="hover"
                        className="absolute h-full w-full rounded-full bg-neutral-900"
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

            <button
              className="text-md flex w-[200px] cursor-pointer items-center justify-center gap-x-3 border border-white/25 px-4 py-2 font-normal text-white transition-all duration-300 hover:bg-neutral-700 md:mr-28"
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <span className="mr-2">Redirecting</span>
                  <Loader className="h-5 w-5 animate-spin ease-linear" />
                </div>
              ) : (
                <>
                  <div>
                    <User size={20} />
                  </div>
                  <div className="text-shadow-xs">Create Account</div>
                </>
              )}
            </button>
          </div>

          {/* Hero Content */}
          <div className="absolute top-32 flex w-full flex-col items-center justify-center px-4 md:top-48 md:flex-row md:px-0">
            <div className="flex max-w-[90%] flex-col gap-6 text-center sm:max-w-[550px] md:text-left">
              <motion.span
                className="bg-gradient-to-r from-orange-200 via-red-300 to-pink-400 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl md:text-7xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  duration: 1.2,
                  bounce: 0.1,
                  mass: 0.8,
                  stiffness: 80,
                  damping: 20,
                  opacity: { duration: 1.0, ease: "easeOut" },
                }}
                viewport={{ once: true }}
              >
                Your Website's <br className="md:hidden" />
                <span>Health,</span> <span>Under</span> Watch.
              </motion.span>

              <span className="text-sm text-neutral-300 sm:text-base">
                We Keep an Eye on Your Site - So You Don't Have To.
              </span>

              <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-start sm:gap-2">
                <button
                  className="text-md flex w-full cursor-pointer items-center justify-center gap-x-2 bg-white px-2 py-2 font-normal sm:w-44"
                  onClick={handleSigninClick}
                  disabled={signinLoading}
                >
                  {signinLoading ? (
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Redirecting</span>
                      <Loader className="h-5 w-5 animate-spin ease-linear" />
                    </div>
                  ) : (
                    <>
                      <User size={20} />
                      <div className="text-shadow-xs">Sign In</div>
                    </>
                  )}
                </button>

                <button
                  className="text-md flex w-full cursor-pointer items-center justify-center gap-x-2 border border-white/25 px-2 py-2 font-normal text-white transition-all duration-150 hover:bg-neutral-700 sm:w-40"
                  onClick={handleDashboardClick}
                  disabled={dashboardLoading}
                >
                  {dashboardLoading ? (
                    <div className="flex items-center justify-center">
                      <span className="mr-2">Redirecting</span>
                      <Loader className="h-5 w-5 animate-spin ease-linear" />
                    </div>
                  ) : (
                    <>
                      <LayoutDashboard size={20} />
                      <div>Dashboard</div>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 flex w-full max-w-[640px] px-4 text-center text-sm tracking-wide text-white sm:text-base md:mt-0 md:ml-24 md:translate-y-[270%] md:px-0 md:text-start">
              <div>
                Your website deserves 24/7 attention—and that's exactly what we
                provide.
                <br className="md:hidden" />
                Just enter your site, and we'll track its status around the
                clock.{" "}
                <span className="text-neutral-400">
                  If anything breaks, we'll let you know instantly—so you can
                  fix it fast.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-20 flex h-screen items-center pb-32 text-center sm:pt-32 md:mt-32 md:mb-0 md:px-28">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center">
            <motion.h2
              className="top-8 left-0 bg-gradient-to-r from-neutral-100 to-neutral-500 bg-clip-text pb-8 text-4xl font-medium tracking-tight text-transparent sm:text-5xl md:relative md:pt-2"
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
              <span className="font-pacifico text-5xl tracking-widest sm:text-7xl">
                Fingertips
              </span>
            </motion.h2>
            <div className="flex items-center justify-center md:mask-b-from-60%">
              <div className="hidden md:block">
                <Image
                  src="/handImage.png"
                  alt="Hand Image"
                  width={1200}
                  height={1200}
                  className="blur-xs filter"
                />
              </div>
              <div
                className="relative mt-8 grid auto-rows-[180px] grid-cols-1 gap-4 md:absolute md:mt-0 md:min-w-4xl md:grid-cols-4"
                ref={scrollRef}
              >
                {/* 1st Card */}
                <motion.div
                  className="relative col-span-1 row-span-2 flex flex-col items-center overflow-hidden rounded-xl px-4 shadow-xl backdrop-blur-md backdrop-filter sm:col-span-2"
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
                      className="mt-4 flex h-10 items-center justify-center rounded-sm bg-white/5 px-4 backdrop-blur-lg backdrop-filter"
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
                      className="mt-3 flex h-8 items-center justify-center rounded-sm bg-white/5 px-4 backdrop-blur-lg backdrop-filter"
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
                      className="mt-3 flex h-8 items-center justify-center rounded-sm bg-white/5 px-4 backdrop-blur-lg backdrop-filter"
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
                    <div className="mt-3 flex h-8 w-64 items-center justify-center rounded-sm bg-white/5 mask-b-from-40% px-4 backdrop-blur-lg backdrop-filter">
                      <div className="text-neutral-200"></div>
                    </div>
                  </div>
                  <div
                    className="absolute top-28 w-full overflow-hidden"
                    style={{ width: "600px" }}
                  >
                    <Image
                      src="/worldmap.png"
                      height={800}
                      width={800}
                      alt="World Map"
                    />
                  </div>
                  <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-neutral-800 via-neutral-900/50 to-transparent"></div>
                </motion.div>

                {/* 2nd card */}
                <motion.div
                  className="relative col-span-2 row-span-1 flex flex-col items-center overflow-hidden rounded-xl shadow-xl backdrop-blur-md backdrop-filter"
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
                  <div className="absolute flex flex-col items-center justify-center gap-4 p-2 px-4">
                    <motion.div
                      className="mt-3 flex h-10 items-center justify-center rounded-sm bg-white/5 px-4 backdrop-blur-lg backdrop-filter"
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
                        SEO Insights
                      </div>
                    </motion.div>
                    <motion.div
                      className="mt-2 flex items-center justify-center rounded-sm px-4 py-2 text-justify backdrop-blur-lg backdrop-filter"
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
                      <div className="text-[15px] text-neutral-200 text-shadow-2xs">
                        View essential metadata, OG images, and suggestions to
                        improve for better SEO for personalised websites.
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* 3rd Card */}
                <motion.div
                  className="relative col-span-2 row-span-1 flex flex-col items-center overflow-hidden rounded-xl shadow-xl backdrop-blur-md backdrop-filter"
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
                  <div className="absolute flex flex-col items-center justify-center gap-4 p-2 px-4">
                    <motion.div
                      className="mt-3 flex h-10 items-center justify-center rounded-sm bg-white/5 px-4 backdrop-blur-lg backdrop-filter"
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
                      className="mt-2 flex items-center justify-center rounded-sm px-4 py-2 text-justify backdrop-blur-lg backdrop-filter"
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
                      <div className="text-[15px] text-neutral-200 text-shadow-2xs">
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

        {/* How It Works Section */}
        <section className="relative flex min-h-screen items-center px-4 pt-16 sm:px-8 sm:pt-32 md:px-16 lg:px-28">
          <div className="mx-auto flex w-full flex-col items-center justify-center">
            {/* Heading */}
            <div className="flex text-center">
              <motion.h2
                className="bg-gradient-to-r from-neutral-100 to-neutral-500 bg-clip-text pt-2 pb-6 text-4xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 1.3,
                  bounce: 0.1,
                  mass: 0.8,
                  stiffness: 100,
                  damping: 20,
                  opacity: { duration: 1.0, ease: "easeInOut" },
                }}
                viewport={{ once: true }}
              >
                How to get{" "}
                <span className="font-pacifico text-5xl tracking-widest sm:text-6xl md:text-7xl">
                  Started
                </span>
              </motion.h2>
            </div>

            {/* Content & Image */}
            <div
              className="sm:md-10 flex w-full flex-col-reverse items-center gap-10 lg:flex-row lg:items-start lg:gap-14"
              ref={imageScrollRef}
            >
              {/* Left Text & Timeline */}
              <div className="flex w-full max-w-xl flex-col px-0 sm:px-4">
                <motion.div
                  className="relative bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text pb-2 text-3xl font-semibold text-transparent sm:text-4xl md:text-5xl"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    duration: 1.2,
                    bounce: 0.1,
                    mass: 0.8,
                    stiffness: 80,
                    damping: 20,
                    opacity: { duration: 1.0, ease: "easeOut" },
                  }}
                  viewport={{ root: imageScrollRef, amount: 0.3, once: true }}
                >
                  Your Journey to Seamless Monitoring Begins Here
                </motion.div>

                <div className="relative mt-2 text-left text-sm tracking-wide text-neutral-400 sm:text-base">
                  On the right, see your intuitive dashboard. Easily track
                  metrics, monitor status, and get insights with a few clicks.
                  No data overload - just clear, actionable info.
                </div>

                <div className="mt-6 text-neutral-100">
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
                          <LucideLink2 />
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
                          <LayoutDashboardIcon />
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
                          <InsightsIcon />
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

              {/* Right Image */}
              <motion.div
                className="relative h-[250px] w-full sm:h-[400px] md:h-[500px] md:w-[420px] lg:h-[600px] lg:w-[600px]"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  duration: 1.2,
                  bounce: 0.1,
                  mass: 0.8,
                  stiffness: 80,
                  damping: 20,
                  opacity: { duration: 1.0, ease: "easeOut" },
                }}
                viewport={{ root: imageScrollRef, amount: 0.2, once: true }}
              >
                <Image
                  src="/Betterstack.jpg"
                  alt="Dashboard Preview"
                  width={700}
                  height={700}
                  className="h-full w-full rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative flex min-h-screen items-center px-4 pt-20 sm:px-8 md:px-16 md:pt-32 lg:px-28">
          <div className="mx-auto flex w-full flex-col items-center justify-center px-2 sm:px-4">
            {/* Heading Section */}
            <motion.div
              className="flex flex-col items-center justify-center px-2 pb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 1.3,
                bounce: 0.1,
                mass: 0.8,
                stiffness: 100,
                damping: 20,
                opacity: { duration: 1.0, ease: "easeInOut" },
              }}
              viewport={{ once: true }}
            >
              <h2 className="bg-gradient-to-r from-neutral-100 to-neutral-500 bg-clip-text pt-2 text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl">
                Got any Questions in Mind ?
              </h2>

              <div className="mt-4 flex flex-col items-baseline justify-center gap-0 bg-gradient-to-r from-neutral-100 to-neutral-500 bg-clip-text pb-4 text-3xl font-medium tracking-tight text-transparent sm:flex-row sm:gap-4 sm:text-4xl md:mt-0 md:text-5xl">
                <span>We've got</span>
                <span className="font-pacifico text-4xl tracking-widest sm:text-6xl md:text-7xl">
                  answers
                </span>
              </div>

              <div className="max-w-md text-center text-sm text-neutral-400 sm:max-w-lg sm:text-base md:max-w-xl md:text-lg">
                Get clear answers to how our platform makes it easy to
                understand and improve your Website's performance.
              </div>
            </motion.div>

            {/* Accordion Section */}
            <motion.div
              className="w-full md:max-w-3xl lg:max-w-4xl"
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
                    <AccordionTrigger className="text-wrap text-neutral-100">
                      Why do I need a website monitoring service like PulseCheck
                      ?
                    </AccordionTrigger>
                    <AccordionContent className="text-left">
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
                      We check your website every three minutes.
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

        {/* Footer Section */}
        <section className="relative mb-[320px] flex min-h-screen min-w-screen items-center justify-center px-4 sm:px-8 sm:pt-32 md:mb-[500px] md:px-28">
          {/* Gradient backgrounds */}
          <div
            className="absolute top-0 left-1/2 h-32 w-[700px] -translate-x-1/2 rotate-180 rounded-t-full bg-gradient-to-b from-black via-neutral-900/15 to-transparent opacity-60 blur-3xl"
            style={{ width: "1400px", height: "700px" }}
          ></div>

          <div
            className="absolute top-0 left-1/2 h-24 w-[500px] -translate-x-1/2 rotate-180 rounded-t-full bg-gradient-to-b from-neutral-800 via-neutral-900/50 to-transparent opacity-40 blur-2xl"
            style={{ width: "1000px", height: "500px", marginBottom: "8px" }}
          ></div>

          <div
            className="absolute top-0 left-1/2 h-16 w-[350px] -translate-x-1/2 rotate-180 rounded-t-full opacity-20 blur-3xl"
            style={{
              width: "700px",
              height: "350px",
              marginBottom: "16px",
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          ></div>

          {/* Main content */}
          <div className="absolute top-0 z-50 mx-auto flex w-full flex-col items-center justify-center px-4 pt-20 sm:px-8 md:pt-32">
            <div className="flex w-full flex-col items-center justify-center pb-8">
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
                <h2 className="max-w-2xl bg-gradient-to-r from-neutral-100 to-neutral-500 bg-clip-text pb-2 text-center text-3xl font-medium tracking-tight text-transparent sm:text-4xl md:text-5xl">
                  Start Monitoring Your
                </h2>
                <div className="flex items-baseline justify-center gap-4 bg-gradient-to-r from-neutral-100 to-neutral-500 bg-clip-text pb-8 text-2xl font-medium tracking-tight text-transparent">
                  <span className="text-4xl sm:text-5xl">Website</span>
                  <span className="font-pacifico text-5xl tracking-widest sm:text-7xl">
                    Today
                  </span>
                </div>
                <div className="max-w-sm pb-8 text-center text-base text-neutral-400 sm:text-lg md:max-w-xl">
                  Downtime is costly. We make it preventable. Keep your site
                  healthy, no expertise needed.
                </div>
                <div className="max-w-xl text-center text-lg text-neutral-300 sm:text-xl">
                  Powering Insights with Cutting-Edge Technology
                </div>
              </motion.div>

              {/* Technology marquee */}
              <div
                className="relative mt-8 w-full max-w-3xl overflow-hidden px-4 text-neutral-50"
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
                    <div key={`row2-${index}`} className="flex gap-4 sm:gap-8">
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <FaReact className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiNextdotjs className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiTailwindcss className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiShadcnui className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiSupabase className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiClerk className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiPostgresql className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <FaDocker className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses}`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiGithub className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                      <div
                        className={`${commonTileClasses} mr-8`}
                        style={{ backgroundColor: "transparent" }}
                      >
                        <SiRedis className="h-10 w-10 sm:h-12 sm:w-12" />
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Footer card */}
          <motion.div
            className="absolute right-4 -bottom-44 left-4 flex h-auto flex-col justify-between rounded-lg border border-white/5 bg-neutral-800/50 p-6 shadow-[0_10px_20px_rgba(64,64,64,0.3)] sm:right-8 sm:left-8 md:right-80 md:left-80 md:h-80 md:flex-row"
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
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <div className="flex flex-col gap-6 md:flex-row md:justify-between">
                {/* Logo and description */}
                <div className="flex max-w-full flex-col gap-y-3 md:max-w-1/2">
                  <div className="flex items-center justify-start gap-2">
                    <div>
                      <Image
                        src={pulseIcon}
                        alt="Pulse Icon"
                        width={40}
                        height={40}
                        className="sm:h-12 sm:w-12"
                      />
                    </div>
                    <div className="bg-gradient-to-r from-pink-200 via-rose-300 to-red-200 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
                      Pulse Check
                    </div>
                  </div>
                  <div className="text-justify text-sm text-neutral-200 sm:text-base">
                    Easily watch your website with our simple tools. Get clear
                    updates on how it's doing, without any fuss. Help your
                    business grow strong by keeping your website always online
                    and working perfectly.
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <a href="https://x.com/doubleSdotdev" target="_blank">
                      <FaXTwitter
                        size={20}
                        className="cursor-pointer sm:h-6 sm:w-6"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sahil-shangloo/"
                      target="_blank"
                    >
                      <FaLinkedin
                        size={20}
                        className="cursor-pointer sm:h-6 sm:w-6"
                      />
                    </a>
                    <a
                      href="https://github.com/SAHILSHANGLOO35"
                      target="_blank"
                    >
                      <FaGithub
                        size={22}
                        className="cursor-pointer sm:h-7 sm:w-7"
                      />
                    </a>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-6">
                  <div className="flex flex-col gap-y-3 font-thin text-neutral-300">
                    <div className="font-semibold text-white">Product</div>
                    <div>Features</div>
                    <div>Integrations</div>
                    <div>Support</div>
                  </div>
                  <div className="flex flex-col gap-y-3 font-thin text-neutral-300">
                    <div className="font-semibold text-white">Developer</div>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Partners</div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="z-50 border border-transparent"
                style={{
                  borderImage:
                    "linear-gradient(to right, rgba(255,255,255,0.2) 0%, #404040 50%, rgba(255,255,255,0.2) 100%) 1",
                }}
              />

              {/* Footer text */}
              <div className="flex flex-col gap-4 text-xs text-neutral-300 sm:flex-row sm:justify-between sm:text-sm">
                <div>
                  <span className="mr-1 text-lg">&#169;</span>2025 Pulse Check.
                  All rights reserved.
                </div>
                <div className="text-center sm:text-left">
                  ~ Created with ❤️ by Sahil Shangloo AKA doubleSdotdev
                </div>
              </div>
            </div>
          </motion.div>

          {/* Large text at bottom */}
          <div className="absolute -bottom-70 flex w-full items-center justify-center px-4 md:-bottom-115">
            <motion.div
              className="z-50 mx-auto w-full text-center text-[2.5rem] font-bold tracking-tighter text-shadow-lg/95 text-shadow-neutral-800/70 sm:text-[6rem] md:text-[8rem] md:leading-none lg:text-[15rem]"
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
              className="absolute bottom-0 left-1/2 h-[3px] w-full origin-center -translate-x-1/2 transform"
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
