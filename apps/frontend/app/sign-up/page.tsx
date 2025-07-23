"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "motion/react";
import { Particles } from "@/components/magicui/particles";
import { Eye, EyeOff, Loader } from "lucide-react";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signup`, {
        username,
        password,
      });

      setUsername("");
      setPassword("");

      setLoading(false);
      router.push("/sign-in");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div
      className="relative h-screen overflow-hidden bg-neutral-950 font-poppins p-24 flex items-center justify-center"
      style={{
        backgroundImage: 'url("/binding-dark-texture.png")',
      }}
    >
      <div
        className="text-neutral-400 text-[14px] absolute top-8 left-8 flex items-center justify-center gap-2 hover:text-neutral-200 transition-all duration-300 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <FaArrowLeftLong />
        Back to Pulse Check
      </div>

      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] rounded-full bg-rose-500 blur-3xl opacity-[3%]"></div>
        </div>
        <motion.div
          className="relative flex flex-col items-center justify-center"
          initial={{
            y: -80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "tween",
            duration: 0.8,
            bounce: 0.2,
            mass: 0.8,
            stiffness: 80,
            damping: 20,
            opacity: {
              duration: 1.0,
              ease: "linear",
            },
          }}
          viewport={{ once: true }}
        >
          <div className="absolute translate-y-[60%] min-w-[600px] flex items-center justify-center">
            <Particles
              color="#ffffff"
              size={0.1}
              quantity={40}
              className="mask-b-from-50% z-10 w-full flex items-centers justify-center"
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/pulseIcon.png"
              alt="Pulse Icon png"
              height={100}
              width={100}
            />
          </div>

          <div className="text-neutral-200 text-3xl font-semibold mb-2 z-20">
            Sign Up for Free
          </div>

          <div className="flex items-center justify-center text-neutral-400 text-[14px] mb-8 z-20">
            Already have an account?
            <div
              className="ml-2 group cursor-pointer transition-colors duration-300"
              onClick={() => router.push("/sign-in")}
            >
              <span className="text-blue-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l group-hover:to-blue-300 group-hover:from-blue-500">
                Sign In.
              </span>
            </div>
          </div>

          <div className="relative flex flex-col gap-y-2 mb-4 z-20">
            <div className="text-neutral-400 text-[14px]">Username</div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-white placeholder-neutral-400 border border-white/10 w-[400px] py-3 px-4 rounded-md outline-none bg-transparent hover:border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-700/50 transition-all duration-300"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="mb-12 z-20">
            <div className="text-neutral-400 text-[14px]">Password</div>
            <div className="flex items-center justify-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-white placeholder-neutral-400 border border-white/10 w-[400px] py-3 px-4 rounded-md outline-none bg-transparent hover:border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-700/50 transition-all duration-300"
                placeholder="Enter your password"
              />
              <button
                className="absolute right-4 text-neutral-400 text-xs z-30 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className="mb-4 z-20">
            <div className="flex items-center justify-center">
              <button
                className="text-neutral-50 bg-rose-600 w-[400px] py-3 px-4 rounded-md outline-none hover:bg-gradient-to-r hover:from-rose-600 hover:to-red-500 cursor-pointer transition-colors duration-300 font-medium text-shadow-2xs"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Loader className="ease-linear animate-spin w-6 h-6" />
                  </div>
                ) : (
                  <div>Create Account</div>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center text-neutral-400 text-[14px] mb-8">
            Be our another happy customer.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
