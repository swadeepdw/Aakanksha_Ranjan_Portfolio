import React from "react";
import { FaHome, FaBox, FaBriefcase, FaBlog, FaTags } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center px-4 md:px-8 py-4">
      <div className="w-full max-w-5xl bg-black text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 rounded-lg border border-white/20 shadow-lg backdrop-blur-lg">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-full">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="text-lg font-semibold">Aakanksha</span>
        </div>

        {/* Center Section: Navigation with Icons */}
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm font-medium">
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 transition"
          >
            <FaHome className="text-lg" />
            <span>Home</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 transition"
          >
            <FaBox className="text-lg" />
            <span>Product</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 transition"
          >
            <FaBriefcase className="text-lg" />
            <span>Services</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 transition"
          >
            <FaBlog className="text-lg" />
            <span>Blog</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 hover:text-gray-400 transition"
          >
            <FaTags className="text-lg" />
            <span>Pricing</span>
          </a>
        </nav>

        {/* Right Section: Copyright */}
        <span className="text-sm text-gray-400 mt-4 md:mt-0">
          © 2025 Aakanksha
        </span>
      </div>
    </footer>
  );
};

export default Footer;

// import React from "react";
// import { FaHome, FaBox, FaBriefcase, FaBlog, FaTags } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full flex justify-center items-center">
//       <div className="w-[100%] max-w-full bg-black text-white flex justify-between items-center px-8 py-5 rounded-full border border-white/20 shadow-lg backdrop-blur-lg">
//         {/* Left Section: Logo */}
//         <div className="flex items-center space-x-3">
//           <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-full">
//             <span className="text-white font-bold text-lg">S</span>
//           </div>
//           <span className="text-lg font-semibold">Aakanksha</span>
//         </div>

//         {/* Center Section: Navigation with Icons */}
//         <nav className="flex space-x-8 text-sm font-medium">
//           <a
//             href="#"
//             className="flex items-center space-x-2 hover:text-gray-400 transition"
//           >
//             <FaHome className="text-lg" />
//             <span>Home</span>
//           </a>
//           <a
//             href="#"
//             className="flex items-center space-x-2 hover:text-gray-400 transition"
//           >
//             <FaBox className="text-lg" />
//             <span>Product</span>
//           </a>
//           <a
//             href="#"
//             className="flex items-center space-x-2 hover:text-gray-400 transition"
//           >
//             <FaBriefcase className="text-lg" />
//             <span>Services</span>
//           </a>
//           <a
//             href="#"
//             className="flex items-center space-x-2 hover:text-gray-400 transition"
//           >
//             <FaBlog className="text-lg" />
//             <span>Blog</span>
//           </a>
//           <a
//             href="#"
//             className="flex items-center space-x-2 hover:text-gray-400 transition"
//           >
//             <FaTags className="text-lg" />
//             <span>Pricing</span>
//           </a>
//         </nav>

//         {/* Right Section: Copyright */}
//         <span className="text-sm text-gray-400">© 2025 Aakanksha</span>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
