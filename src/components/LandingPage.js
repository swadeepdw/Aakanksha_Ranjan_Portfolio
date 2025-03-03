import React from "react";
import { FaDribbble, FaLinkedin, FaInstagram } from "react-icons/fa";
import AboutPage from "./AboutPage";
import PortfolioTV2 from "./Portfolio2";
import { DesignProcess, ContactUs } from "./ContactUs";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="text-center bg-[#F2F2F2] text-black rounded-b-4xl shadow-lg w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center py-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-sm text-black">
              aakanksharanjan2@gmail.com
            </span>
            <div className="flex gap-4">
              <button className="bg-white text-black px-5 py-2 rounded-full shadow-md border border-gray-300">
                Copy
              </button>
              <button className="bg-black text-white px-5 py-2 rounded-full shadow-md">
                CV
              </button>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 text-gray-600 mt-4 sm:mt-0">
            <FaLinkedin className="text-2xl hover:text-black cursor-pointer" />
            <FaDribbble className="text-2xl hover:text-black cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-black cursor-pointer" />
          </div>
        </div>

        <div className="px-4 py-10 sm:py-16">
          <div className="relative inline-block mb-6">
            <img
              src="/profile2.jpeg"
              alt="Aakanksha"
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md"
            />
            <span className="absolute top-8 left-12 sm:top-10 sm:left-20 bg-white text-sm px-3 py-1 rounded-full shadow-md">
              Aakanksha✨
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Building digital{" "}
            <span className="font-extrabold">products, brands,</span> and
            experience.
          </h1>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow-md text-lg">
            Latest Shots ↗
          </button>
        </div>
      </div>

      {/* Logos Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-12 max-w-4xl text-white px-4">
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
            className="text-base sm:text-lg font-semibold uppercase tracking-wide"
          >
            {logo}
          </span>
        ))}
      </div>

      {/* Other Sections */}
      <AboutPage />
      <PortfolioTV2 />
      <DesignProcess />
      <ContactUs />
      <Footer />
    </div>
  );
}

// import React from "react";
// import { FaDribbble, FaLinkedin, FaInstagram } from "react-icons/fa";
// import { Button } from "./ui/button";
// import PortfolioTV2 from "./Portfolio2";
// import AboutPage from "./AboutPage";
// import { DesignProcess, ContactUs } from "./ContactUs";
// import Footer from "./Footer";

// export default function LandingPage() {
//   return (
//     <>
//       <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
//         {/* Hero Section */}
//         <div className="text-center bg-[#F2F2F2] text-black rounded-b-4xl shadow-lg">
//           {/* Top Bar */}
//           <div className="w-full flex justify-between items-center px-10 pt-10">
//             <div className="flex justify-between items-center gap-4">
//               <span className="text-sm text-black">
//                 aakanksharanjan2@gmail.com
//               </span>
//               <div className="flex gap-4">
//                 <button className="bg-white text-black px-5 py-2 rounded-full shadow-md border border-gray-300">
//                   Copy
//                 </button>
//                 <button className="bg-black text-white px-5 py-2 rounded-full shadow-md">
//                   CV
//                 </button>
//               </div>
//             </div>
//             {/* Social Links */}
//             <div className=" flex gap-4 text-gray-600">
//               <FaLinkedin className="text-2xl hover:text-black cursor-pointer" />
//               <FaDribbble className="text-2xl hover:text-black cursor-pointer" />
//               <FaInstagram className="text-2xl hover:text-black cursor-pointer" />
//             </div>
//           </div>

//           <div className="px-25 pt-15 pb-25">
//             <div className="relative inline-block mb-6">
//               <img
//                 src="/profile2.jpeg"
//                 alt="Aakanksha"
//                 className="w-28 h-28 rounded-full border-4 border-white shadow-md"
//               />
//               <span className="absolute top-10 left-25 bg-white text-sm px-3 py-1 rounded-full shadow-md">
//                 Aakanksha✨
//               </span>
//             </div>
//             <div className="px-92">
//               <h1 className="text-5xl font-bold leading-tight">
//                 Building digital{" "}
//                 <span className="font-extrabold">products, brands,</span> and
//                 experience.
//               </h1>
//             </div>

//             <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow-md text-lg">
//               Latest Shots ↗
//             </button>
//           </div>
//         </div>

//         {/* Logos Section */}
//         <div className="mt-20 flex flex-wrap justify-center gap-12 max-w-4xl text-white">
//           {[
//             "National Bank",
//             "mattered",
//             "CocaCola",
//             "Adobe",
//             "Subway",
//             "Codecademy",
//           ].map((logo, index) => (
//             <span
//               key={index}
//               className="text-lg font-semibold uppercase tracking-wide"
//             >
//               {logo}
//             </span>
//           ))}
//         </div>
//         <AboutPage />
//         <PortfolioTV2 />
//         <DesignProcess />
//         <ContactUs />
//         <Footer />
//       </div>
//     </>
//   );
// }
