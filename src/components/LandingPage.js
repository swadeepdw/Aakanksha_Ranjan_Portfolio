import React, { useState } from "react";
import { FaDribbble, FaLinkedin, FaInstagram } from "react-icons/fa";
import AboutPage from "./AboutPage";
import { ContactUs, DesignProcess } from "./ContactUs";
import Footer from "./Footer";
import PortfolioTV from "./Portfolio";

// Rotating quotes array
export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("aakanksharanjan2@gmail.com");
    setCopied(true);
    setClicked(true);

    setTimeout(() => setCopied(false), 2000); // Hide popup after 2 seconds
    setTimeout(() => setClicked(false), 150); // Remove click effect quickly
  };
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="w-full max-w-full bg-gray-100 text-black rounded-b-3xl shadow-lg">
        {/* Top Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
            <span className="text-sm">aakanksharanjan2@gmail.com</span>
            <div className="flex gap-4 my-1 md:mt-0">
              <button
                className={`bg-white text-black px-4 py-2 rounded-full cursor-pointer shadow-md border border-gray-300 hover:shadow-black/50 transition-transform duration-150 ${
                  clicked ? "scale-90" : "scale-100"
                }`}
                onClick={handleCopy}
              >
                Copy
              </button>
              <button
                className="bg-black text-white px-4 py-2 rounded-full shadow-md cursor-pointer hover:shadow-black/50 transition"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1QJMGMnxD9NIflmqacSURwq8ztG-sTMIO/view?usp=drivesdk",
                    "_blank"
                  )
                }
              >
                Open CV
              </button>
            </div>

            {copied && (
              <div className="absolute top-[-20px] left-60 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-md shadow-md">
                Email Copied!
              </div>
            )}
          </div>
          {/* Social Links */}
          <div className="flex gap-4 my-2 md:mt-0 text-gray-600">
            <a
              href="https://www.linkedin.com/in/aakanksha-ranjan-4121021b6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-black cursor-pointer" />
            </a>
            <a
              href="https://www.behance.net/aakankshasinha2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDribbble className="text-2xl hover:text-black cursor-pointer" />
            </a>
            {/* <a
              href="https://www.instagram.com/uiux_with_ak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-black cursor-pointer" />
            </a> */}
          </div>
        </div>

        {/* Hero Content */}
        <div className="px-4 sm:px-8 pt-8 pb-8 text-center">
          <div className="relative inline-block mb-6">
            <img
              src="/profile2.jpeg"
              alt="Aakanksha"
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md"
            />
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-sm px-3 py-1 rounded-full shadow-md">
              Aakanksha✨
            </span>
          </div>
          <div className="px-2 lg:px-92 md:px-32 sm:px-32">
            <h1 className="text-5xl sm:text-5xl font-bold leading-tight">
              Building digital{" "}
              <span className="font-extrabold">products, brands,</span> and
              experience.
            </h1>
          </div>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow-md text-lg hover:shadow-black/50 transition cursor-pointer">
            <a
              href="https://www.instagram.com/uiux_with_ak/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2"
            >
              <FaInstagram className="text-2xl hover:text-black" />
              Latest Posts ↗
            </a>
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="pt-12 sm:pt-20 flex flex-wrap justify-center gap-6 max-w-4xl">
        {[
          "National Bank",
          "mattered",
          "CocaCola",
          "Adobe",
          "Subway",
          "Codecademy",
        ].map((logo, index) => (
          <span
            key={index}
            className="text-lg font-semibold uppercase tracking-wide"
          >
            {logo}
          </span>
        ))}
      </div>

      <AboutPage />
      <PortfolioTV />
      <DesignProcess />
      <ContactUs />
      <Footer />
    </div>
  );
}
