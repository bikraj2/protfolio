
"use client";

import React from "react";
import InfiniteScroll from "./ui/InfiniteScroll";
import { skills, technologies } from "@/data";
const SkillSection = () => {
  return (
    <div className="w-full py-10 space-y-8">
      {/* Skills Scrolling Left to Right */}
      <div className="text-center text-white text-xl font-bold">Skills</div>
      <InfiniteScroll items={skills} direction="left" speed="normal" />

      {/* Technologies Scrolling Right to Left */}
      <div className="text-center text-white text-xl font-bold">Technologies</div>
      <InfiniteScroll items={technologies} direction="right" speed="normal" />
    </div>
  );
};

export default SkillSection;
