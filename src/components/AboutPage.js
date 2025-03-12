import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const quotes = [
  "Design is intelligence made visible.",
  "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it stinks.",
  "Whitespace is like air: it is necessary for design to breathe.",
  "People ignore design that ignores people.",
  "Simplicity is the ultimate sophistication.",
];

export default function AboutPage() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
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
            experience in <span className="font-semibold">UI/UX Design</span>, I
            specialize in crafting modern and engaging digital experiences.
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
  );
}

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const quotes = [
//   "Design is intelligence made visible.",
//   "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it stinks.",
//   "Whitespace is like air: it is necessary for design to breathe.",
//   "People ignore design that ignores people.",
//   "Simplicity is the ultimate sophistication.",
// ];

// export default function AboutPage() {
//   const [quote, setQuote] = useState(quotes[0]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full flex justify-center mt-20">
//       <section
//         id="about"
//         className="w-[85%] max-w-full text-center p-16 relative overflow-hidden bg-black border border-white shadow-xl rounded-xl hover:shadow-white/50 transition"
//       >
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90 z-[-1]" />

//         {/* Futuristic Glowing Shape */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
//             className="w-32 h-32 border border-white rounded-lg shadow-lg animate-pulse"
//           />
//         </div>

//         {/* Section Title */}
//         <h2 className="text-4xl font-extrabold text-white mb-12 uppercase tracking-widest">
//           About Me
//         </h2>

//         {/* Description */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-white text-xl leading-relaxed max-w-3xl mx-auto space-y-8"
//         >
//           <p>
//             With over{" "}
//             <span className="text-white font-semibold">1.5 years</span> of
//             experience in{" "}
//             <span className="text-white font-semibold"> UI/UX Design</span>, I
//             specialize in crafting **modern and engaging** digital experiences.
//           </p>

//           {/* Skills List */}
//           <div className="flex flex-wrap justify-center gap-6 text-lg mt-6">
//             {[
//               "User Research",
//               "Wireframing",
//               "Prototyping",
//               "Visual Design",
//               "Interaction Design",
//               "Web & Mobile UI",
//             ].map((skill, index) => (
//               <span
//                 key={index}
//                 className="bg-black text-white px-5 py-3 rounded-full shadow-lg border border-white hover:shadow-white/50 transition transform hover:scale-110"
//               >
//                 🔹 {skill}
//               </span>
//             ))}
//           </div>
//         </motion.div>

//         {/* Fun Fact Section */}
//         <div className="mt-16 px-8 max-w-3xl mx-auto text-center">
//           <motion.p
//             key={quote}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 2 }}
//             className="text-white text-lg italic font-semibold bg-gray-900 px-8 py-4 rounded-lg shadow-lg"
//           >
//             {quote}
//           </motion.p>
//         </div>
//       </section>
//     </div>
//   );
// }
