
"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { useState, useEffect } from "react";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let displayedProjects = projects;
  if (!showAll) {
    displayedProjects = screenWidth <= 400 ? projects.slice(0, 2) : projects.slice(0, 6);
  }

  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {displayedProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>

              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden aspect-[16/9] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src="/bg.png"
                    alt="bgimg"
                    className="w-full h-full object-contain"
                  />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-20 absolute bottom-0 object-contain max-w-full max-h-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className={`border border-white/[.2] rounded-full ${!(icon.startsWith("kafka") || icon.startsWith("express"))
                        ? "bg-black"
                        : "bg-white"
                        } lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center`}
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`icon-${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {item.live === "Live" ? "Live" : "Github"}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* See More / See Less Button */}
      {projects.length > (screenWidth <= 400 ? 2 : 6) && (
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-all"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "See Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
