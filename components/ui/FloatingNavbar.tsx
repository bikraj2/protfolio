"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FiMenu, FiX } from "react-icons/fi";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      setVisible(scrollYProgress.get() < 0.05 || direction < 0);
    }
  });

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/10 shadow-lg max-w-fit md:min-w-[70vw] lg:min-w-fit",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "rgba(17, 25, 40, 0.75)",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          {/* Wrapper to properly align items */}
          <div className="flex items-center w-full justify-between md:justify-start">
            {/* Desktop Navigation - Hidden on Small Screens */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative text-white text-sm hover:text-gray-300 transition"
                >
                  {navItem.name}
                </Link>
              ))}
            </div>

            {/* Mobile Hamburger Button (Aligned Left on Small Screens) */}
            <div className="md:hidden flex w-full justify-start">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-white p-1 focus:outline-none"
              >
                {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[4.5rem] left-5 w-64 bg-[rgba(17,25,40,0.85)] backdrop-blur-md shadow-lg rounded-lg p-4 z-[5000] flex flex-col items-start space-y-4 text-left"
          >
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link=${idx}`}
                href={navItem.link}
                className="text-white text-sm hover:text-gray-300 transition"
                onClick={() => setMenuOpen(false)}
              >
                {navItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
