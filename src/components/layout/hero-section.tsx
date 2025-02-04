"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <div id="hero" className="mt-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 z-0">
        {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" /> */}


        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background" /> */}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute -right-20 top-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -left-20 bottom-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container px-4  pt-8 pb-12 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"

        >
          <span className="inline-block py-1.5 px-4 rounded-full border border-primary/20 text-primary font-medium text-sm">
            Premium Construction Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-5xl mx-auto text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
        >
          Specialist in{" "}
          <span className="text-primary">

            Roof, Facade, and Floor Insulation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto"
        >
          Experience excellence in construction with our innovative solutions. 
          We bring together cutting-edge technology and expert craftsmanship to 
          deliver outstanding results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
        <Link href="#contact">
          <Button size="lg" className="text-base min-w-[250px] h-12">
            Get Started
            <motion.svg

              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </motion.svg>
          </Button>
          </Link>
        </motion.div>


        {/* Bottom Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative h-[300px] md:h-[400px] mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/hero.jpg"
            alt="Modern construction project"
            fill
            className="object-cover object-center hover:scale-105 transition-transform duration-700"
            quality={100}
            priority
          />
        </motion.div>
      </div>
    </div>
  );
} 