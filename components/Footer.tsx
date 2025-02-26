
"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 px-6 md:px-10 lg:px-20" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to discuss and brainstorm solutions?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center px-4 md:px-0">
          Feel free to reach out—I’d love to talk about backend systems, architecture, or anything tech.
        </p>
        <a href="mailto:bikrajshrestha2@gmail.com">
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      {/* Footer Bottom Section */}
      <div className="flex mt-16 flex-col md:flex-row justify-between items-center w-full">
        <p className="md:text-base text-sm md:font-normal font-light text-center md:text-left">
          This website is heavily inspired from <a href="https://github.com/adrianhajdin/portfolio"> Link</a>
        </p>

        {/* Social Media Icons */}
        <div className="flex items-center md:gap-6 gap-4 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt={info.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
