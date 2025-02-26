"use client";

import { TimelineData } from "@/data";
import { cn } from "@/lib/utils";
import React from "react";

export const Timeline = () => {
  return (
    <div>
      <h1 className="heading text-3xl font-bold">
        Education
        <span className="text-purple"></span>
      </h1>
      <div className="h-12"></div>
      <div className="relative border-l border-gray-200 dark:border-gray-700 ml-4">
        {TimelineData.map((item, index) => (
          <div key={index} className="mb-10 ml-6 w-full lg:w-1/2 max-w-xl">
            {/* Timeline Circle */}
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full -left-3 ring-2 ring-white dark:ring-gray-900" />

            {/* Content Box */}
            <div className="p-4 bg-black-100 dark:bg-black-800 rounded-lg shadow-md border border-gray-300 dark:border-gray-600">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.institution}
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400">{item.location}</p>
              <p className="text-base text-gray-500 dark:text-gray-300">{item.course}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
              {item.gpa && <p className="text-sm text-blue-500">GPA: {item.gpa}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
