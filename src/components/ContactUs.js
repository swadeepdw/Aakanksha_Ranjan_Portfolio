import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaSearch,
  FaPencilRuler,
  FaPalette,
  FaCode,
  FaRocket,
} from "react-icons/fa";

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

const ContactUs = () => {
  return (
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
          Let’s build something amazing! Reach out for projects, collaborations,
          or just to say hi! ✨
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
  );
};

const DesignProcess = () => {
  return (
    <div className="w-full flex justify-center px-4 py-12 sm:py-20">
      <section id="process" className="w-full sm:w-[85%] text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-white animate-pulse">
          My Design Process
        </h2>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
          I follow a structured yet flexible approach to UI/UX design, ensuring
          optimal results with every project.
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
  );
};

export { ContactUs, DesignProcess };

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaLinkedin,
//   FaGithub,
//   FaSearch,
//   FaPencilRuler,
//   FaPalette,
//   FaCode,
//   FaRocket,
// } from "react-icons/fa";

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

// const ContactUs = () => {
//   return (
//     <div className="w-full flex justify-center my-20">
//       <section
//         id="contact"
//         className="w-[85%] max-w-full text-center p-22 relative overflow-hidden bg-black border border-white shadow-2xl rounded-xl transition-all duration-500"
//       >
//         {/* Subtle Background Effect */}
//         <div className="absolute inset-0 bg-white opacity-10 blur-[120px] rounded-full"></div>

//         <h2 className="text-4xl font-bold text-white animate-bounce uppercase tracking-widest mb-6 border-b-2 border-white inline-block pb-2">
//           🚀 Get in Touch
//         </h2>
//         <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
//           Let’s build something amazing! Reach out for projects, collaborations,
//           or just to say hi! ✨
//         </p>

//         {/* Contact Details */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
//           {contactDetails.map((detail, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.1 }}
//               className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-md text-white rounded-lg border border-white shadow-lg hover:shadow-white/50 transition transform duration-300 cursor-pointer"
//             >
//               {/* Wrap content in <a> for links */}
//               {detail.link ? (
//                 <a
//                   href={detail.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center space-x-4 w-full"
//                 >
//                   <span className="text-3xl">{detail.icon}</span>
//                   <span className="text-lg font-semibold break-words">
//                     {detail.text}
//                   </span>
//                 </a>
//               ) : (
//                 <div className="flex items-center space-x-4 w-full">
//                   <span className="text-3xl">{detail.icon}</span>
//                   <span className="text-lg font-semibold break-words">
//                     {detail.text}
//                   </span>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// const DesignProcess = () => {
//   return (
//     <div className="w-full flex justify-center">
//       {/* Process Section */}
//       <section
//         id="process"
//         className="w-[85%] max-w-full text-center py-16 scroll-mt-20"
//       >
//         <h2 className="text-4xl font-bold text-white animate-pulse">
//           My Design Process
//         </h2>
//         <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
//           I follow a structured yet flexible approach to UI/UX design, ensuring
//           optimal results with every project.
//         </p>
//         <div className="mt-6 flex justify-center space-x-8 text-gray-300 text-lg font-semibold">
//           <motion.div
//             whileHover={{ scale: 1.2 }}
//             className="flex flex-col items-center"
//           >
//             <FaSearch className="text-cyan-400 text-4xl mb-2" />
//             <span>Research</span>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.2 }}
//             className="flex flex-col items-center"
//           >
//             <FaPencilRuler className="text-purple-400 text-4xl mb-2" />
//             <span>Wireframing</span>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.2 }}
//             className="flex flex-col items-center"
//           >
//             <FaPalette className="text-pink-400 text-4xl mb-2" />
//             <span>Prototyping</span>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.2 }}
//             className="flex flex-col items-center"
//           >
//             <FaCode className="text-green-400 text-4xl mb-2" />
//             <span>Development</span>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.2 }}
//             className="flex flex-col items-center"
//           >
//             <FaRocket className="text-orange-400 text-4xl mb-2" />
//             <span>Testing & Launch</span>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export { ContactUs, DesignProcess };
