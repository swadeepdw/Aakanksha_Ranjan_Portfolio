import { motion } from "framer-motion";
import { FaPowerOff, FaVolumeUp, FaAdjust } from "react-icons/fa";

const projects = [
  "UI Concept",
  "UX Research",
  "Dark Mode UI",
  "3D Design",
  "AII Dashboard",
  "New Mobile UI",
];

// Duplicate projects for smooth looping
const repeatedProjects = [...projects, ...projects];

const PortfolioTV2 = () => {
  return (
    <section
      id="work"
      className="w-full flex justify-center items-center py-20 px-4 md:px-10"
    >
      {/* TV Unit Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-5xl bg-black border border-white rounded-2xl shadow-[0_0_15px_white] p-6 sm:p-10 overflow-hidden"
      >
        {/* Animated Title on TV */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          Welcome to My Portfolio
        </motion.h2>

        <p className="text-gray-300 my-6 sm:my-10 max-w-4xl mx-auto text-center text-sm sm:text-lg">
          Explore my futuristic UI/UX designs, conceptual artworks, and creative
          projects.
        </p>

        {/* Scrolling Projects in 1 Column for Mobile, 2 for Larger Screens */}
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
      </motion.div>

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
          animation: scroll-up 60s linear infinite;
        }

        .scroll-down {
          animation: scroll-down 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PortfolioTV2;

// import { motion } from "framer-motion";
// import { FaPowerOff, FaVolumeUp, FaAdjust } from "react-icons/fa";

// const projects = [
//   "UI Concept",
//   "UX Research",
//   "Dark Mode UI",
//   "3D Design",
//   "AII Dashboard",
//   "New Mobile UI",
// ];

// // Duplicate projects for smooth looping
// const repeatedProjects = [...projects, ...projects];

// const PortfolioTV2 = () => {
//   return (
//     <section
//       id="work"
//       className="w-full flex justify-center items-center py-30"
//     >
//       {/* TV Unit Container */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="relative w-[85%] max-w-full bg-[black] border-1 border-white rounded-[20px] shadow-[0_0_15px_white] p-10 overflow-hidden"
//         // className="relative w-[95%] max-w-7xl bg-black border-1 border-gradient-to-r from-cyan-900 to-purple-900 rounded-[50px] shadow-[0_0_15px_#00ffff] p-10 pb-32 overflow-hidden"
//       >
//         {/* Animated Title on TV */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-white text-center"
//         >
//           Welcome to My Portfolio
//         </motion.h2>

//         <p className="text-gray-300 my-10 max-w-4xl mx-auto text-center text-lg">
//           Explore my futuristic UI/UX designs, conceptual artworks, and creative
//           projects.
//         </p>

//         {/* Scrolling Projects in 2 Columns */}
//         <div className="relative w-full overflow-hidden h-[800px] grid grid-cols-2 gap-10 px-10">
//           {/* Left Column - Scroll Down */}
//           <div className="scroll-wrapper">
//             <div className="scroll-content scroll-down">
//               {repeatedProjects.map((title, index) => (
//                 <motion.div
//                   key={`left-${index}`}
//                   className="scroll-item bg-[#333333] border border-white shadow-lg rounded-xl flex flex-col items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <motion.img
//                     src={`/${title.toLowerCase().replace(/ /g, "-")}.jpg`}
//                     alt={title}
//                     className="w-full h-75 object-cover rounded-lg shadow-md border border-gray-700"
//                     whileHover={{ rotate: 5 }}
//                   />
//                   <h3 className="mt-4 text-xl font-semibold text-white text-center">
//                     {title}
//                   </h3>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Scroll Up */}
//           <div className="scroll-wrapper">
//             <div className="scroll-content scroll-up">
//               {repeatedProjects.map((title, index) => (
//                 <motion.div
//                   key={`right-${index}`}
//                   className="scroll-item bg-[#333333] border border-white shadow-lg rounded-xl flex flex-col items-center justify-center"
//                   whileHover={{ scale: 1.1 }}
//                 >
//                   <motion.img
//                     src={`/${title.toLowerCase().replace(/ /g, "-")}.jpg`}
//                     alt={title}
//                     className="w-full h-75 object-cover rounded-lg shadow-md border border-gray-700"
//                     whileHover={{ rotate: 5 }}
//                   />
//                   <h3 className="mt-4 text-xl font-semibold text-white text-center">
//                     {title}
//                   </h3>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <style jsx>{`
//         @keyframes scroll-up {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(-50%);
//           }
//         }

//         @keyframes scroll-down {
//           0% {
//             transform: translateY(-50%);
//           }
//           100% {
//             transform: translateY(0);
//           }
//         }

//         .scroll-wrapper {
//           position: relative;
//           height: full; /* Set a fixed height for scrolling area */
//           overflow: hidden;
//         }

//         .scroll-content {
//           display: flex;
//           flex-direction: column;
//           gap: 40px;
//         }

//         .scroll-up {
//           animation: scroll-up 80s linear infinite;
//         }

//         .scroll-down {
//           animation: scroll-down 80s linear infinite;
//         }

//         .scroll-item {
//           padding: 20px;
//           width: 100%;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PortfolioTV2;
