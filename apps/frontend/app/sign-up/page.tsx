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
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/signup`,
        {
          username,
          password,
        },
      );

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
      className="font-poppins relative flex h-screen items-center justify-center overflow-hidden bg-neutral-950 p-24"
      style={{
        backgroundImage: 'url("/binding-dark-texture.png")',
      }}
    >
      <div
        className="absolute top-8 left-8 flex cursor-pointer items-center justify-center gap-2 text-[14px] text-neutral-400 transition-all duration-300 hover:text-neutral-200"
        onClick={() => router.push("/")}
      >
        <FaArrowLeftLong />
        Back to Pulse Check
      </div>

      <div className="relative flex h-full items-center justify-center sm:w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-rose-500 opacity-[3%] blur-3xl"></div>
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
          <div className="absolute flex min-w-[600px] translate-y-[60%] items-center justify-center">
            <Particles
              color="#ffffff"
              size={0.1}
              quantity={40}
              className="items-centers z-10 flex w-full justify-center mask-b-from-50%"
            />
          </div>
          <div className="mb-4 flex items-center justify-center">
            <Image
              src="/PulseIcon.png"
              alt="Pulse Icon png"
              height={100}
              width={100}
            />
          </div>

          <div className="z-20 mb-2 text-3xl font-semibold text-neutral-200">
            Sign Up for Free
          </div>

          <div className="z-20 mb-8 flex items-center justify-center text-[14px] text-neutral-400">
            Already have an account?
            <div
              className="group ml-2 cursor-pointer transition-colors duration-300"
              onClick={() => router.push("/sign-in")}
            >
              <span className="text-blue-500 group-hover:bg-gradient-to-l group-hover:from-blue-500 group-hover:to-blue-300 group-hover:bg-clip-text group-hover:text-transparent">
                Sign In.
              </span>
            </div>
          </div>

          <div className="relative z-20 mb-4 flex flex-col gap-y-2">
            <div className="text-[14px] text-neutral-400">Username</div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[350px] rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-neutral-400 transition-all duration-300 outline-none hover:border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-700/50 sm:w-[400px]"
                placeholder="Enter your username"
              />
            </div>
          </div>

          <div className="z-20 mb-12">
            <div className="text-[14px] text-neutral-400">Password</div>
            <div className="flex items-center justify-center">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[350px] rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-neutral-400 transition-all duration-300 outline-none hover:border-rose-500 focus:border-rose-500 focus:ring-2 focus:ring-rose-700/50 sm:w-[400px]"
                placeholder="Enter your password"
              />
              <button
                className="absolute right-4 z-30 cursor-pointer text-xs text-neutral-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div className="z-20 mb-4">
            <div className="flex items-center justify-center">
              <button
                className="w-[350px] cursor-pointer rounded-md bg-rose-600 px-4 py-3 font-medium text-neutral-50 transition-colors duration-300 outline-none text-shadow-2xs hover:bg-gradient-to-r hover:from-rose-600 hover:to-red-500 sm:w-[400px]"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <Loader className="h-6 w-6 animate-spin ease-linear" />
                  </div>
                ) : (
                  <div>Create Account</div>
                )}
              </button>
            </div>
          </div>

          <div className="mb-8 flex items-center justify-center text-[14px] text-neutral-400">
            Be our another happy customer.
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
