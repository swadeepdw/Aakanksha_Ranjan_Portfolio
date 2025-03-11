import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaDribbble,
  FaLinkedin,
  FaInstagram,
  FaHome,
  FaBox,
  FaBriefcase,
  FaBlog,
  FaTags,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaSearch,
  FaPencilRuler,
  FaPalette,
  FaCode,
  FaRocket,
} from "react-icons/fa";

// Contact details array with links for email, maps, etc.
const contactDetails = [
  {
    icon: <FaEnvelope />,
    text: "aakanksharanjan2@gmail.com",
    link: "mailto:aakanksharanjan2@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    text: "Bangalore, India",
    link: "https://www.google.com/maps?q=Bangalore",
  },
  {
    icon: <FaLinkedin />,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/aakanksha-ranjan-4121021b6/",
  },
  { icon: <FaGithub />, text: "github.com/aakanksha" },
];

// Rotating quotes array
const quotes = [
  "Design is intelligence made visible.",
  "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it stinks.",
  "Whitespace is like air: it is necessary for design to breathe.",
  "People ignore design that ignores people.",
  "Simplicity is the ultimate sophistication.",
];

// Projects list (duplicated for continuous scrolling effect)
const projects = [
  "UI Concept",
  "UX Research",
  "Dark Mode UI",
  "3D Design",
  "AII Dashboard",
  "New Mobile UI",
];
const repeatedProjects = [...projects, ...projects];

export default function LandingPage2() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="w-full max-w-full bg-gray-100 text-black rounded-b-3xl shadow-lg">
        {/* Top Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm">aakanksharanjan2@gmail.com</span>
            <div className="flex gap-4 mt-2 md:mt-0">
              <button className="bg-white text-black px-4 py-2 rounded-full shadow-md border border-gray-300">
                Copy
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-full shadow-md">
                CV
              </button>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex gap-4 mt-4 md:mt-0 text-gray-600">
            <FaLinkedin className="text-2xl hover:text-black cursor-pointer" />
            <FaDribbble className="text-2xl hover:text-black cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-black cursor-pointer" />
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
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow-md text-lg">
            Latest Shots ↗
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

      {/* About Section */}
      <div className="w-full flex justify-center py-12 sm:py-20 px-4">
        <section
          id="about"
          className="w-full sm:w-[85%] text-center p-8 sm:p-16 relative overflow-hidden bg-black border border-white shadow-xl rounded-xl hover:shadow-white/50 transition"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90 z-[-1]" />
          {/* Futuristic Glowing Shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border border-white rounded-lg shadow-lg animate-pulse"
            />
          </div>
          {/* Section Title */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 uppercase tracking-widest">
            About Me
          </h2>
          {/* Description & Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-base sm:text-xl leading-relaxed max-w-3xl mx-auto space-y-8"
          >
            <p>
              With over <span className="font-semibold">1.5 years</span> of
              experience in <span className="font-semibold">UI/UX Design</span>,
              I specialize in crafting modern and engaging digital experiences.
            </p>
            {/* Skills List */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {[
                "User Research",
                "Wireframing",
                "Prototyping",
                "Visual Design",
                "Interaction Design",
                "Web & Mobile UI",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-black text-white px-4 py-2 rounded-full shadow-lg border border-white hover:shadow-white/50 transition transform hover:scale-110"
                >
                  🔹 {skill}
                </span>
              ))}
            </div>
          </motion.div>
          {/* Fun Fact Section */}
          <div className="mt-8 px-4 max-w-3xl mx-auto text-center">
            <motion.p
              key={quote}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 2 }}
              className="text-white text-base sm:text-lg italic font-semibold bg-gray-900 px-4 py-2 sm:px-8 sm:py-4 rounded-lg shadow-lg"
            >
              {quote}
            </motion.p>
          </div>
        </section>
      </div>

      {/* Work Section */}
      <section
        id="work"
        className="w-full flex justify-center items-center py-12 sm:py-20 px-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full sm:w-[85%] bg-black border border-white rounded-xl shadow-lg p-6 sm:p-10 overflow-hidden hover:shadow-white/50 transition"
        >
          {/* Animated Title */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-4xl font-extrabold bg-clip-text bg-white text-center text-transparent"
          >
            Welcome to My Portfolio
          </motion.h2>
          <p className="text-gray-300 my-6 max-w-4xl mx-auto text-center text-base sm:text-lg">
            Explore my futuristic UI/UX designs, conceptual artworks, and
            creative projects.
          </p>
          {/* Scrolling Projects */}
          <div className="relative w-full overflow-hidden h-[600px] sm:h-[800px] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 px-4 sm:px-10">
            {/* Left Column - Scroll Down */}
            <div className="scroll-wrapper">
              <div className="scroll-content scroll-down">
                {repeatedProjects.map((title, index) => (
                  <motion.div
                    key={`left-${index}`}
                    className="scroll-item bg-[#333] border border-white shadow-lg rounded-xl flex flex-col items-center justify-center p-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src={`/${title.toLowerCase().replace(/ /g, "-")}.jpg`}
                      alt={title}
                      className="w-full h-40 sm:h-60 object-cover rounded-lg shadow-md border border-gray-700"
                      whileHover={{ rotate: 3 }}
                    />
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white text-center">
                      {title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Scroll Up */}
            <div className="scroll-wrapper hidden sm:block">
              <div className="scroll-content scroll-up">
                {repeatedProjects.map((title, index) => (
                  <motion.div
                    key={`right-${index}`}
                    className="scroll-item bg-[#333] border border-white shadow-lg rounded-xl flex flex-col items-center justify-center p-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.img
                      src={`/${title.toLowerCase().replace(/ /g, "-")}.jpg`}
                      alt={title}
                      className="w-full h-40 sm:h-60 object-cover rounded-lg shadow-md border border-gray-700"
                      whileHover={{ rotate: 3 }}
                    />
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white text-center">
                      {title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Scroll Animation Styles */}
          <style jsx>{`
            @keyframes scroll-up {
              0% {
                transform: translateY(0);
              }
              100% {
                transform: translateY(-50%);
              }
            }

            @keyframes scroll-down {
              0% {
                transform: translateY(-50%);
              }
              100% {
                transform: translateY(0);
              }
            }

            .scroll-wrapper {
              position: relative;
              height: 100%;
              overflow: hidden;
            }

            .scroll-content {
              display: flex;
              flex-direction: column;
              gap: 24px;
            }

            .scroll-up {
              animation: scroll-up 80s linear infinite;
            }

            .scroll-down {
              animation: scroll-down 80s linear infinite;
            }
          `}</style>
        </motion.div>
      </section>

      {/* Process Section */}
      <div className="w-full flex justify-center px-4 py-12 sm:py-20">
        <section id="process" className="w-full sm:w-[85%] text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-white animate-pulse">
            My Design Process
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            I follow a structured yet flexible approach to UI/UX design,
            ensuring optimal results with every project.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-300 text-base sm:text-lg font-semibold">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center m-2"
            >
              <FaSearch className="text-cyan-400 text-3xl sm:text-4xl mb-2" />
              <span>Research</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center m-2"
            >
              <FaPencilRuler className="text-purple-400 text-3xl sm:text-4xl mb-2" />
              <span>Wireframing</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center m-2"
            >
              <FaPalette className="text-pink-400 text-3xl sm:text-4xl mb-2" />
              <span>Prototyping</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center m-2"
            >
              <FaCode className="text-green-400 text-3xl sm:text-4xl mb-2" />
              <span>Development</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="flex flex-col items-center m-2"
            >
              <FaRocket className="text-orange-400 text-3xl sm:text-4xl mb-2" />
              <span>Testing & Launch</span>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <div className="w-full flex justify-center my-12 px-4">
        <section
          id="contact"
          className="w-full sm:w-[85%] text-center p-8 sm:p-12 relative overflow-hidden bg-black border border-white shadow-2xl rounded-xl hover:shadow-white/50 transition"
        >
          <div className="absolute inset-0 bg-white opacity-10 blur-[120px] rounded-full"></div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white animate-bounce uppercase tracking-widest mb-4 border-b-2 border-white inline-block pb-2">
            🚀 Get in Touch
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg mb-6">
            Let’s build something amazing! Reach out for projects,
            collaborations, or just to say hi! ✨
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center p-4 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white shadow-lg hover:shadow-white/50 transition transform duration-300 cursor-pointer"
              >
                {detail.link ? (
                  <a
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full"
                  >
                    <span className="text-2xl">{detail.icon}</span>
                    <span className="text-base font-semibold break-words">
                      {detail.text}
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
                    <span className="text-2xl">{detail.icon}</span>
                    <span className="text-base font-semibold break-words">
                      {detail.text}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full flex justify-center items-center py-4 px-4">
        <div className="w-full max-w-full bg-black text-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 rounded-2xl border border-white/20 shadow-lg backdrop-blur-lg">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-4 sm:mb-0">
            <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-full">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-lg font-semibold">Aakanksha</span>
          </div>
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center space-x-4 text-sm font-medium mb-4 sm:mb-0">
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-400 transition"
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-400 transition"
            >
              <FaBox className="text-lg" />
              <span>Product</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-400 transition"
            >
              <FaBriefcase className="text-lg" />
              <span>Services</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-400 transition"
            >
              <FaBlog className="text-lg" />
              <span>Blog</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-1 hover:text-gray-400 transition"
            >
              <FaTags className="text-lg" />
              <span>Pricing</span>
            </a>
          </nav>
          {/* Copyright */}
          <span className="text-sm text-gray-400">© 2025 Aakanksha</span>
        </div>
      </footer>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FaDribbble,
//   FaLinkedin,
//   FaInstagram,
//   FaHome,
//   FaBox,
//   FaBriefcase,
//   FaBlog,
//   FaTags,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaGithub,
//   FaSearch,
//   FaPencilRuler,
//   FaPalette,
//   FaCode,
//   FaRocket,
// } from "react-icons/fa";

// // Contact details array with links for email, maps, etc.
// const contactDetails = [
//   {
//     icon: <FaEnvelope />,
//     text: "aakanksharanjan2@gmail.com",
//     link: "mailto:aakanksharanjan2@gmail.com",
//   },
//   {
//     icon: <FaMapMarkerAlt />,
//     text: "Bangalore, India",
//     link: "https://www.google.com/maps?q=Bangalore",
//   },
//   {
//     icon: <FaLinkedin />,
//     text: "LinkedIn",
//     link: "https://www.linkedin.com/in/aakanksha-ranjan-4121021b6/",
//   },
//   { icon: <FaGithub />, text: "github.com/aakanksha" },
// ];

// // Rotating quotes array
// const quotes = [
//   "Design is intelligence made visible.",
//   "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it stinks.",
//   "Whitespace is like air: it is necessary for design to breathe.",
//   "People ignore design that ignores people.",
//   "Simplicity is the ultimate sophistication.",
// ];

// // Projects list (duplicated for continuous scrolling effect)
// const projects = [
//   "UI Concept",
//   "UX Research",
//   "Dark Mode UI",
//   "3D Design",
//   "AII Dashboard",
//   "New Mobile UI",
// ];
// const repeatedProjects = [...projects, ...projects];

// export default function LandingPage2() {
//   const [quote, setQuote] = useState(quotes[0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
//       {/* Hero Section */}
//       <div className="w-full max-w-full bg-gray-100 text-black rounded-b-3xl shadow-lg">
//         {/* Top Bar */}
//         <div className="w-full flex flex-col md:flex-row justify-between items-center px-4 sm:px-10 pt-10">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <span className="text-sm">aakanksharanjan2@gmail.com</span>
//             <div className="flex gap-4 mt-2 md:mt-0">
//               <button className="bg-white text-black px-4 py-2 rounded-full shadow-md border border-gray-300">
//                 Copy
//               </button>
//               <button className="bg-black text-white px-4 py-2 rounded-full shadow-md">
//                 CV
//               </button>
//             </div>
//           </div>
//           {/* Social Links */}
//           <div className="flex gap-4 mt-4 md:mt-0 text-gray-600">
//             <FaLinkedin className="text-2xl hover:text-black cursor-pointer" />
//             <FaDribbble className="text-2xl hover:text-black cursor-pointer" />
//             <FaInstagram className="text-2xl hover:text-black cursor-pointer" />
//           </div>
//         </div>

//         {/* Hero Content */}
//         <div className="px-4 sm:px-8 pt-8 pb-8 text-center">
//           <div className="relative inline-block mb-6">
//             <img
//               src="/profile2.jpeg"
//               alt="Aakanksha"
//               className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md"
//             />
//             <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-sm px-3 py-1 rounded-full shadow-md">
//               Aakanksha✨
//             </span>
//           </div>
//           <div className="px-4 sm:px-12">
//             <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
//               Building digital{" "}
//               <span className="font-extrabold">products, brands,</span> and experience.
//             </h1>
//           </div>
//           <button className="mt-6 px-6 py-3 bg-black text-white rounded-full shadow-md text-lg">
//             Latest Shots ↗
//           </button>
//         </div>
//       </div>

//       {/* Logos Section */}
//       <div className="mt-12 flex flex-wrap justify-center gap-6 max-w-4xl">
//         {["National Bank", "mattered", "CocaCola", "Adobe", "Subway", "Codecademy"].map(
//           (logo, index) => (
//             <span key={index} className="text-lg font-semibold uppercase tracking-wide">
//               {logo}
//             </span>
//           )
//         )}
//       </div>

//       {/* About Section */}
//       <div className="w-full flex justify-center mt-12 px-4">
//         <section
//           id="about"
//           className="w-full sm:w-[85%] text-center p-8 sm:p-16 relative overflow-hidden bg-black border border-white shadow-xl rounded-xl hover:shadow-white/50 transition"
//         >
//           {/* Background Effects */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90 z-[-1]" />
//           {/* Futuristic Glowing Shape */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//               className="w-32 h-32 border border-white rounded-lg shadow-lg animate-pulse"
//             />
//           </div>
//           {/* Section Title */}
//           <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-6 uppercase tracking-widest">
//             About Me
//           </h2>
//           {/* Description & Skills */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-white text-base sm:text-xl leading-relaxed max-w-3xl mx-auto space-y-8"
//           >
//             <p>
//               With over{" "}
//               <span className="font-semibold">1.5 years</span> of experience in{" "}
//               <span className="font-semibold">UI/UX Design</span>, I specialize in crafting modern and engaging digital experiences.
//             </p>
//             {/* Skills List */}
//             <div className="flex flex-wrap justify-center gap-4 mt-6">
//               {[
//                 "User Research",
//                 "Wireframing",
//                 "Prototyping",
//                 "Visual Design",
//                 "Interaction Design",
//                 "Web & Mobile UI",
//               ].map((skill, index) => (
//                 <span
//                   key={index}
//                   className="bg-black text-white px-4 py-2 rounded-full shadow-lg border border-white hover:shadow-white/50 transition transform hover:scale-110"
//                 >
//                   🔹 {skill}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//           {/* Fun Fact Section */}
//           <div className="mt-8 px-4 max-w-3xl mx-auto text-center">
//             <motion.p
//               key={quote}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 2 }}
//               className="text-white text-base sm:text-lg italic font-semibold bg-gray-900 px-4 py-2 sm:px-8 sm:py-4 rounded-lg shadow-lg"
//             >
//               {quote}
//             </motion.p>
//           </div>
//         </section>
//       </div>

//       {/* Work Section */}
//       <section id="work" className="w-full flex justify-center items-center py-12 sm:py-20 px-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="relative w-full sm:w-[85%] bg-black border border-white rounded-xl shadow-lg p-6 sm:p-10 overflow-hidden"
//         >
//           {/* Animated Title */}
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-2xl sm:text-4xl font-extrabold bg-clip-text bg-white text-center text-transparent"
//           >
//             Welcome to My Portfolio
//           </motion.h2>
//           <p className="text-gray-300 my-6 max-w-4xl mx-auto text-center text-base sm:text-lg">
//             Explore my futuristic UI/UX designs, conceptual artworks, and creative projects.
//           </p>
//           {/* Scrolling Projects */}
//           <div className="relative w-full overflow-hidden h-[400px] sm:h-[800px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 px-2 sm:px-10">
//             {/* Left Column - Scroll Down */}
//             <div className="scroll-wrapper">
//               <div className="scroll-content scroll-down">
//                 {repeatedProjects.map((title, index) => (
//                   <motion.div
//                     key={`left-${index}`}
//                     className="scroll-item bg-gray-800 border border-white shadow-lg rounded-xl flex flex-col items-center justify-center p-4"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <motion.img
//                       src={`/${title.toLowerCase().replace(/ /g, "-")}.jpg`}
//                       alt={title}
//                       className="w-full h-40 sm:h-56 object-cover rounded-lg shadow-md border border-gray-700"
//                       whileHover={{ rotate: 5 }}
//                     />
//                     <h3 className="mt-4 text-lg font-semibold text-white text-center">
//                       {title}
//                     </h3>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//             {/* Right Column - Scroll Up */}
//             <div className="scroll-wrapper">
//               <div className="scroll-content scroll-up">
//                 {repeatedProjects.map((title, index) => (
//                   <motion.div
//                     key={`right-${index}`}
//                     className="scroll-item bg-gray-800 border border-white shadow-lg rounded-xl flex flex-col items-center justify-center p-4"
//                     whileHover={{ scale: 1.1 }}
//                   >
//                     <motion.img
//                       src={`/${title.toLowerCase().replace(/ /g, "-")}.jpg`}
//                       alt={title}
//                       className="w-full h-40 sm:h-56 object-cover rounded-lg shadow-md border border-gray-700"
//                       whileHover={{ rotate: 5 }}
//                     />
//                     <h3 className="mt-4 text-lg font-semibold text-white text-center">
//                       {title}
//                     </h3>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           {/* Scroll Animation Styles */}
//           <style jsx>{`
//             @keyframes scroll-up {
//               0% {
//                 transform: translateY(0);
//               }
//               100% {
//                 transform: translateY(-50%);
//               }
//             }
//             @keyframes scroll-down {
//               0% {
//                 transform: translateY(-50%);
//               }
//               100% {
//                 transform: translateY(0);
//               }
//             }
//             .scroll-wrapper {
//               position: relative;
//               height: 100%;
//               overflow: hidden;
//             }
//             .scroll-content {
//               display: flex;
//               flex-direction: column;
//               gap: 1rem;
//             }
//             .scroll-up {
//               animation: scroll-up 80s linear infinite;
//             }
//             .scroll-down {
//               animation: scroll-down 80s linear infinite;
//             }
//             .scroll-item {
//               padding: 1rem;
//               width: 100%;
//             }
//           `}</style>
//         </motion.div>
//       </section>

//       {/* Process Section */}
//       <div className="w-full flex justify-center mt-12 px-4">
//         <section id="process" className="w-full sm:w-[85%] text-center py-8 sm:py-16">
//           <h2 className="text-2xl sm:text-4xl font-bold text-white animate-pulse">
//             My Design Process
//           </h2>
//           <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
//             I follow a structured yet flexible approach to UI/UX design, ensuring optimal results with every project.
//           </p>
//           <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-300 text-base sm:text-lg font-semibold">
//             <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center m-2">
//               <FaSearch className="text-cyan-400 text-3xl sm:text-4xl mb-2" />
//               <span>Research</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center m-2">
//               <FaPencilRuler className="text-purple-400 text-3xl sm:text-4xl mb-2" />
//               <span>Wireframing</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center m-2">
//               <FaPalette className="text-pink-400 text-3xl sm:text-4xl mb-2" />
//               <span>Prototyping</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center m-2">
//               <FaCode className="text-green-400 text-3xl sm:text-4xl mb-2" />
//               <span>Development</span>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center m-2">
//               <FaRocket className="text-orange-400 text-3xl sm:text-4xl mb-2" />
//               <span>Testing & Launch</span>
//             </motion.div>
//           </div>
//         </section>
//       </div>

//       {/* Contact Section */}
//       <div className="w-full flex justify-center my-12 px-4">
//         <section
//           id="contact"
//           className="w-full sm:w-[85%] text-center p-8 sm:p-12 relative overflow-hidden bg-black border border-white shadow-2xl rounded-xl transition-all duration-500"
//         >
//           <div className="absolute inset-0 bg-white opacity-10 blur-[120px] rounded-full"></div>
//           <h2 className="text-2xl sm:text-4xl font-bold text-white animate-bounce uppercase tracking-widest mb-4 border-b-2 border-white inline-block pb-2">
//             🚀 Get in Touch
//           </h2>
//           <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg mb-6">
//             Let’s build something amazing! Reach out for projects, collaborations, or just to say hi! ✨
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
//             {contactDetails.map((detail, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white shadow-lg hover:shadow-white/50 transition transform duration-300 cursor-pointer"
//               >
//                 {detail.link ? (
//                   <a
//                     href={detail.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-4 w-full"
//                   >
//                     <span className="text-2xl">{detail.icon}</span>
//                     <span className="text-base font-semibold break-words">
//                       {detail.text}
//                     </span>
//                   </a>
//                 ) : (
//                   <div className="flex items-center space-x-4 w-full">
//                     <span className="text-2xl">{detail.icon}</span>
//                     <span className="text-base font-semibold break-words">
//                       {detail.text}
//                     </span>
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </div>

//       {/* Footer */}
//       <footer className="w-full flex justify-center items-center py-4 px-4">
//         <div className="w-full max-w-full bg-black text-white flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 rounded-full border border-white/20 shadow-lg backdrop-blur-lg">
//           {/* Logo */}
//           <div className="flex items-center space-x-3 mb-4 sm:mb-0">
//             <div className="w-10 h-10 bg-white/20 flex items-center justify-center rounded-full">
//               <span className="text-white font-bold text-lg">S</span>
//             </div>
//             <span className="text-lg font-semibold">Aakanksha</span>
//           </div>
//           {/* Navigation */}
//           <nav className="flex flex-wrap justify-center space-x-4 text-sm font-medium mb-4 sm:mb-0">
//             <a href="#" className="flex items-center space-x-1 hover:text-gray-400 transition">
//               <FaHome className="text-lg" />
//               <span>Home</span>
//             </a>
//             <a href="#" className="flex items-center space-x-1 hover:text-gray-400 transition">
//               <FaBox className="text-lg" />
//               <span>Product</span>
//             </a>
//             <a href="#" className="flex items-center space-x-1 hover:text-gray-400 transition">
//               <FaBriefcase className="text-lg" />
//               <span>Services</span>
//             </a>
//             <a href="#" className="flex items-center space-x-1 hover:text-gray-400 transition">
//               <FaBlog className="text-lg" />
//               <span>Blog</span>
//             </a>
//             <a href="#" className="flex items-center space-x-1 hover:text-gray-400 transition">
//               <FaTags className="text-lg" />
//               <span>Pricing</span>
//             </a>
//           </nav>
//           {/* Copyright */}
//           <span className="text-sm text-gray-400">© 2025 Aakanksha</span>
//         </div>
//       </footer>
//     </div>
//   );
// }
