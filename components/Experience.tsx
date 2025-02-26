
"use client";
import React, { useState } from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { ExternalLink } from "lucide-react"; // For link icon

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleExperiences = showAll ? workExperience : workExperience.slice(0, 2);

  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {visibleExperiences.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 20000}
            borderRadius="1.5rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-3 py-6 md:p-5 lg:p-10 gap-4">
              {/* Title */}
              <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>

              {/* Company Name - Normal or Clickable */}
              {card.company && (
                <div className="text-start text-sm font-semibold flex items-center gap-2">
                  <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-md">
                    {card.companyLink ? (
                      <a
                        href={card.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-200 flex items-center gap-1 transition"
                      >
                        {card.company} <ExternalLink size={16} />
                      </a>
                    ) : (
                      <span>{card.company}</span>
                    )}
                  </span>
                </div>
              )}

              {/* Description */}
              <p className="text-start text-gray-200 mt-2 font-medium">{card.desc}</p>

              {/* Time Frame */}
              <p className="text-start text-gray-400 mt-2 text-sm">
                {card.startDate} - {card.endDate || "Present"}
              </p>
            </div>
          </Button>
        ))}
      </div>

      {/* See More / See Less Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 transition"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Experience;
