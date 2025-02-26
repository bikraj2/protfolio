
"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const InfiniteScroll = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: { name: string; icon: string }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.innerHTML += scrollerRef.current.innerHTML; // Duplicate items for seamless scrolling
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full w-max flex-nowrap gap-8 py-4",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `${direction === "left" ? "scroll-left" : "scroll-right"} ${speed === "fast" ? "10s" : speed === "normal" ? "20s" : "40s"} linear infinite`,
        }}
      >
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <img src={item.icon} alt={item.name} className="h-14 w-14" />
            <span className="text-white text-lg">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteScroll;
