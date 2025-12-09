import { motion } from "framer-motion";
import { CardProject } from "../components/CardProject";
import { Sidebar } from "../components/Sidebar";
import { Folders } from "lucide-react";
// Images
import chatbot from "../assets/img/chatbot.png";
import portfolio from "../assets/img/portfolio.png";
import backend from "../assets/img/backend.png";
import osis from "../assets/img/osis.png";
import progress from "../assets/img/progress.png";

export const ProjectPages = () => {
  return (
    <section className="flex items-center h-auto px-6 md:px-12 py-12">
      {/* SIDEBAR */}
      <Sidebar num="04" title="Project" />

      {/* KONTEN */}
      <div className="flex flex-col w-full">
        {/* Judul */}
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Folders className="text-yellow-600" size={35} />
          <h1 className="text-4xl font-serif">My Projects</h1>
        </motion.div>

        {/* Deskripsi */}
        <motion.p
          className="justify-center max-w-[600px] font-serif pb-12 text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          These are some of my featured projects...
        </motion.p>

        {/* CARD PROJECT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-stretch">
          {[
            {
              nameProject:
                "AI Chatbot - Interactive Website with Ollama Gemma 2",
              typeProject: "Website",
              deskProject:
                "AI Chatbot is an interactive web platform that enables users to communicate directly with a local large language model (LLM). Built using Ollama and Google's Gemma 2 model, it provides a ChatGPT-like experience while ensuring complete privacy and offline functionality. Users can chat, analyze data, or brainstorm ideas efficiently without sending information to external servers. The system is designed for both developers and general users seeking secure AI interactions.",
              status: "On-Going",
              linkRepo: "https://github.com/leapwithluvi/ai-chatbot",
              srcImg: chatbot,
            },
            {
              nameProject: "Backend Auth API",
              typeProject: "Backend",
              deskProject:
                "Backend Auth API is a secure and modular authentication service built for scalability and integration. It supports essential features like user registration, login, and password reset with JWT-based authentication. The architecture is designed to be easily integrated with any web or mobile frontend, following RESTful principles. This project aims to simplify user management while maintaining best practices for performance and security.",
              status: "On-Going",
              linkRepo: "https://github.com/leapwithluvi/backend-auth-api",
              srcImg: backend,
            },
            {
              nameProject: "Simple School Library",
              typeProject: "Website",
              deskProject:
                "Simple School Library is a modern web application that helps schools manage their digital library system efficiently. Students can log in using their NIS/NISN, explore the book catalog, and borrow or return books through an intuitive interface. The system includes admin tools for book inventory, borrowing records, and late return notifications. It aims to transform traditional library management into a smart and paperless experience.",
              status: "On-Going",
              linkRepo:
                "https://github.com/leapwithluvi/perpustakaan-sederhana",
              srcImg: progress,
            },
            {
              nameProject: "Zona Game Tenggarong - PlayStation Store & Rental",
              typeProject: "Website",
              deskProject:
                "Zona Game Tenggarong is a web-based platform for PlayStation enthusiasts to browse, rent, and purchase gaming products. The website features a digital catalog for PS3, PS4, and PS5 consoles, games, and accessories. It also provides online booking for console rental services and store promotions. Built with a focus on clean UI and responsive design, this platform helps local customers easily access gaming products from their devices.",
              status: "On-Going",
              linkRepo: "https://github.com/leapwithluvi/zonagame-tenggarong",
              srcImg: progress,
            },
            // {
            //   nameProject: "Trace Personal",
            //   typeProject: "Website",
            //   deskProject:
            //     "Trace Personal is a workplace wellness platform designed to encourage healthy habits, team bonding, and employee engagement. It allows employees to log their daily wellness activities (hydration, sleep, workouts), participate in company-wide health challenges, and track progress on leaderboards. The platform promotes overall well-being while fostering friendly competition among employees.",
            //   status: "On-Going",
            //   linkRepo: "https://github.com/leapwithluvi/TracePersonal",
            // },
            {
              nameProject: "Portfolio",
              typeProject: "Website",
              deskProject:
                "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface. This website serves as both a creative space and a professional platform to highlight my journey as a developer.",
              status: "Complete",
              linkRepo: "https://github.com/leapwithluvi/portfolio",
              srcImg: portfolio,
            },

            {
              nameProject: "OSIS President Voting System",
              typeProject: "Website",
              deskProject:
                "The OSIS President Voting System is a secure digital election platform developed to streamline the voting process for student council elections. It enables students to cast their votes online safely and transparently. With a responsive interface, real-time vote counting, and admin management features, it ensures fair and organized elections. This system aims to modernize traditional voting methods within schools and student organizations.",
              status: "Complete",
              linkRepo: "https://github.com/leapwithluvi/ketos-voting-system",
              srcImg: osis,
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex h-full"
            >
              <CardProject {...card} imgAlt="Image Project" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
