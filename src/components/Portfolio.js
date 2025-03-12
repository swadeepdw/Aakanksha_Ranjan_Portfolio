import { motion } from "framer-motion";
import { FaPowerOff, FaVolumeUp, FaAdjust } from "react-icons/fa";

const projects = [
  {
    title: "Perch",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/9972f055-7996-4aff-a1dd-aaa371f9ad23/Perch.png?table=block&id=645956aa-7d6e-4396-a8c3-82280472e713&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741816800000&signature=STQdkFum1J5ss7-Utd54I-DKfv8clBX3epv54ZDtul0&downloadName=Perch.png",
    link: "https://www.figma.com/design/HFYXI3eaBhyOnz8PY3QnGh/Perch-App",
  },
  {
    title: "Feeeler Web App",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/485b49c4-61b4-428f-8009-85d0d8af96ee/Feeeler.jpg?table=block&id=2a7b22b1-7749-4f06-a87a-31b6abef20ce&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741816800000&signature=E-O5XOo7hUYoyKZze6HMlTdZV6bAlJeLDYqG1snYepI&downloadName=Feeeler.jpg",
    link: "https://www.figma.com/design/1EFdpSKGzHdyMIOPIHxdh3/Feeeler-App",
  },
  {
    title: "IT Company Website",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/98419522-ed2c-4c55-a53f-7015f8990f4b/Cover.png?table=block&id=51d21234-03c6-4145-a322-bfe5c359fb2d&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741816800000&signature=L_SIvH7sboF7ajU14nREwuif3OUjNtYQP5J54M22e8I&downloadName=Cover.png",
    link: "https://www.figma.com/design/QK270AgzG4GUVdb62fYhdt/Website",
  },
  {
    title: "Furniture",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/df85685f-3d6f-470f-8436-d1e4a293cf6e/Furniture.png?table=block&id=97985b21-61be-4425-bb7c-8be5546cc16a&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741816800000&signature=SJxbxRiElZFe_ArWXBOqEfsGafsC1BilyCYEK6bsAd8&downloadName=Furniture.png",
    link: "https://www.figma.com/proto/KvvbigyCrTrTFnW5TTZXmh/Desktop-View-Furniture?page-id=0%3A1&type=design&node-id=85-2&viewport=275%2C-786%2C0.14&scaling=scale-down",
  },
  {
    title: "Loan App UI",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/ae88d2e1-800c-48a7-8461-83ca265786f8/Frame.jpg?table=block&id=25da7285-7e9d-4534-987a-b2fcc1165aaf&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741816800000&signature=4ujiQi6dnOMgAng6JIcSBJrlzm0113zkosudTFu2XsI&downloadName=Frame.jpg",
    link: "https://www.figma.com/design/wibT9DjXMK1kSYvvbnTfCc/Loan-App",
  },
  {
    title: "Job Finding App",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/bf63dedf-6e1f-4713-8270-c630103d67ba/JobsAdda.png?table=block&id=87f2a9d6-3f70-4c82-836d-f01f005cdb12&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741816800000&signature=Qr8S779vV3KJmggXfgZB8Fkqu0uJF7HMz24_oGNY2fY&downloadName=JobsAdda.png",
    link: "hhttps://www.figma.com/proto/qJHqgvs8Ps894UAYgKIWlb/JobFinderApp?page-id=0%3A1&type=design&node-id=37-13&viewport=454%2C136%2C0.14&t=FqD4330ofY2KgXEF-1&scaling=scale-down",
  },
  {
    title: "Food App",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/8b15107e-7635-4eab-828a-f5fd818d5ff3/Group_20.png?table=block&id=1ed7c9e5-d3b1-4419-a166-0382fc7f93ca&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741816800000&signature=NfCqK9H3lZP7UNCU9KxYQ1mG1Z7a_MqDRksXQWOEJq0&downloadName=Group+20.png",
    link: "https://www.figma.com/proto/IrKYYdlZwhH4RbszEjGhwc/Food-App?page-id=0%3A1&type=design&node-id=107-40&viewport=270%2C353%2C0.22&t=p0pAXdUfpi2SrAXi-1&scaling=scale-down",
  },
  {
    title: "Wireframe in Adobe XD",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/ff8134dd-2433-4424-a850-9978f0180ae1/Wireframe.jpg?table=block&id=539c7391-59d1-4eb4-ac7d-9115c4b75ad8&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741816800000&signature=uQmCFc2Pa_7hgz-Z4l-hQTgb_TpuPhVcrOFnQvUFBng&downloadName=Wireframe.jpg",
    link: "https://xd.adobe.com/view/80a372ab-b07e-4006-bcf1-be3761662613-d5f0/",
  },
  {
    title: "Coffee App",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/4039af74-7861-47ba-8bed-25d48c860e01/Coffee.png?table=block&id=473ea893-7fc3-441b-b597-07e418ea3525&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741824000000&signature=yRoJbJNxNX_C30nRqkscMUFhuX13T2Sn3pQSgvuAJw0&downloadName=Coffee.png",
    link: "https://www.figma.com/design/TqXU05TxyLumQ9Oh8vz7Ws/Coffee-App",
  },
  {
    title: "Vegetable App",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/29f00c7d-bd0b-4493-a21a-2d867a472a1c/Veggie.png?table=block&id=16d9bdad-66b1-4c48-ace8-dd0ef98574d6&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741824000000&signature=9-UOknsCO8ukS8SlMwqS8Mqf7OovY2eecdLUZl0Imeo&downloadName=Veggie.png",
    link: "https://www.figma.com/design/KQaGBj4Y7al3mdkjO6HQMn/Aakanksha-Ranjan",
  },
  {
    title: "Real Estate",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/f3084e86-95fd-4ff4-87d5-41f2a008384f/EState.png?table=block&id=19bac61e-3bbe-404a-ac44-1bd27b588580&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741824000000&signature=grNYkluldmW4IGek_Civo428zWQDgDwpaVL3S9jrxx4&downloadName=EState.png",
    link: "https://www.figma.com/design/LoV9xJin56jXi7TDudupNF/Estate?node-id=0-1&p=f",
  },
  {
    title: "Vegetable App",
    image:
      "https://file.notion.so/f/f/65034da6-ea9d-49a0-b4be-b71123cf5e5e/29f00c7d-bd0b-4493-a21a-2d867a472a1c/Veggie.png?table=block&id=16d9bdad-66b1-4c48-ace8-dd0ef98574d6&spaceId=65034da6-ea9d-49a0-b4be-b71123cf5e5e&expirationTimestamp=1741824000000&signature=9-UOknsCO8ukS8SlMwqS8Mqf7OovY2eecdLUZl0Imeo&downloadName=Veggie.png",
    link: "https://www.figma.com/design/KQaGBj4Y7al3mdkjO6HQMn/Aakanksha-Ranjan",
  },
];
// Duplicate projects for smooth looping
const repeatedProjects = [...projects, ...projects];

const PortfolioTV = () => {
  return (
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
          Explore my futuristic UI/UX designs, conceptual artworks, and creative
          projects.
        </p>
        {/* Scrolling Projects */}
        <div className="relative w-full overflow-hidden h-[600px] sm:h-[800px] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 px-4 sm:px-10">
          {/* Left Column - Scroll Down */}
          <div className="scroll-wrapper">
            <div className="scroll-content scroll-down">
              {projects.map((project, index) => (
                <motion.a
                  key={`left-${index}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-item bg-[#333] border border-white shadow-lg rounded-xl flex flex-col items-center justify-center p-4"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-60 object-cover rounded-lg shadow-md border border-gray-700"
                    whileHover={{ rotate: 2 }}
                  />
                  <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white text-center">
                    {project.title}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Column - Scroll Up */}
          <div className="scroll-wrapper hidden sm:block">
            <div className="scroll-content scroll-up">
              {projects.map((project, index) => (
                <motion.a
                  key={`right-${index}`}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-item bg-[#333] border border-white shadow-lg rounded-xl flex flex-col items-center justify-center p-4"
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-60 object-cover rounded-lg shadow-md border border-gray-700"
                    whileHover={{ rotate: 2 }}
                  />
                  <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white text-center">
                    {project.title}
                  </h3>
                </motion.a>
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
            gap: 45px;
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
  );
};

export default PortfolioTV;
