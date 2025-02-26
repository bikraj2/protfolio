"use client";

import React from "react";

import { achievements } from "@/data";
import { InfiniteMovingCardsAchievement } from "./ui/InfiniteMovingAchievementCard";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <h1 className="heading">
        Notable
        <span className="text-purple"> Achievements</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCardsAchievement
            items={achievements}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;

