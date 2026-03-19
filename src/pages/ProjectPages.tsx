import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { CardProject } from "../components/CardProject";
import { CardCertificate } from "../components/CardCertificate";
import { Sidebar } from "../components/Sidebar";
import { Folders, Award } from "lucide-react";
import { DataCertificates } from "../utils/DataCertificates";
// Images
import chatbot from "../assets/img/chatbot.png";
import portfolio from "../assets/img/portfolio.png";
import backend from "../assets/img/backend.png";
import osis from "../assets/img/osis.png";

const projects = [
  {
    nameProject: "AI Chatbot - Interactive Website with Ollama Gemma 2",
    typeProject: "Website",
    deskProject:
      "AI Chatbot is an interactive web platform that enables users to communicate directly with a local large language model (LLM). Built using Ollama and Google's Gemma 2 model, it provides a ChatGPT-like experience while ensuring complete privacy and offline functionality.",
    status: "On-Going",
    linkRepo: "https://github.com/leapwithluvi/ai-chatbot",
    srcImg: chatbot,
  },
  {
    nameProject: "Backend Auth API",
    typeProject: "Backend",
    deskProject:
      "Backend Auth API is a secure and modular authentication service built for scalability and integration. It supports essential features like user registration, login, and password reset with JWT-based authentication following RESTful principles.",
    status: "On-Going",
    linkRepo: "https://github.com/leapwithluvi/backend-auth-api",
    srcImg: backend,
  },
  {
    nameProject: "Portfolio",
    typeProject: "Website",
    deskProject:
      "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface.",
    status: "Complete",
    linkRepo: "https://github.com/leapwithluvi/portfolio",
    srcImg: portfolio,
  },
  {
    nameProject: "OSIS President Voting System",
    typeProject: "Website",
    deskProject:
      "The OSIS President Voting System is a secure digital election platform developed to streamline the voting process for student council elections. It enables students to cast their votes online safely and transparently, with real-time vote counting.",
    status: "Complete",
    linkRepo: "https://github.com/leapwithluvi/ketos-voting-system",
    srcImg: osis,
  },
];

type Tab = "projects" | "certificates";

const tabConfig = [
  { id: "projects" as Tab, label: "My Projects", icon: Folders },
  { id: "certificates" as Tab, label: "My Certificates", icon: Award },
];

const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.08 },
  },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const ProjectPages = () => {
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  return (
    <section id="work" className="flex items-start h-auto px-6 md:px-12 py-16">
      {/* SIDEBAR */}
      <Sidebar num="04" title="Work" />

      {/* CONTENT */}
      <div className="flex flex-col w-full">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Folders className="text-yellow-600" size={35} />
          <h1 className="text-4xl font-serif">My Work</h1>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex items-center gap-1 mb-10 border-b border-gray-200"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {tabConfig.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                <Icon size={16} />
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch"
            >
              {projects.map((card, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex h-full"
                >
                  <CardProject {...card} imgAlt="Image Project" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {DataCertificates.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <CardCertificate certificate={cert} index={index} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
