"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingNav = ({ navItems, className }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-x-0 mx-auto flex items-center justify-center max-w-fit border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black/30 bg-white backdrop-blur-md shadow-lg z-[5000] px-6 py-4 space-x-6",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-2 text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500 transition-colors duration-200",
              "text-xs sm:text-sm md:text-base lg:text-base"
            )}
          >
            {navItem.icon}
            <span className="hidden sm:inline">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
