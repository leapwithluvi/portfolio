import backend from "../assets/img/backend.png";
import chatbot from "../assets/img/chatbot.png";
import osis from "../assets/img/osis.png";
import portfolio from "../assets/img/portfolio.png";
import perpustakaan from "../assets/img/perpustakaan.png";

export interface Project {
  nameProject: string;
  typeProject: string;
  deskProject: string;
  status: string;
  linkRepo: string;
  srcImg: string;
  stacks: string[];
}

export const DataProjects: Project[] = [
  {
    nameProject: "Library Management System",
    typeProject: "Website",
    deskProject:
    "Library Management System is a web-based platform that helps users browse, search, and view information about available books in the library, allowing them to check details online before visiting and borrowing books directly from the physical library.",
    status: "Complete",
    linkRepo: "https://github.com/leapwithluvi/library-management-system",
    srcImg: perpustakaan,
    stacks: ["Vite", "React", "Tailwind CSS", "Framer Motion", "Shadcn UI", "Express", "PostgreSQL", "Supabase", "Prisma", "TypeScript"],
  },
  {
    nameProject: "Portfolio",
    typeProject: "Website",
    deskProject:
    "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface.",
    status: "Complete",
    linkRepo: "https://github.com/leapwithluvi/portfolio",
    srcImg: portfolio,
    stacks: ["Vite", "React", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
  },
  {
    nameProject: "OSIS President Voting System",
        typeProject: "Website",
        deskProject:
        "The OSIS President Voting System is a secure digital election platform developed to streamline the voting process for student council elections. It enables students to cast their votes online safely and transparently, with real-time vote counting.",
        status: "Complete",
        linkRepo: "https://github.com/leapwithluvi/ketos-voting-system",
        srcImg: osis,
        stacks: ["React", "Express.js", "MongoDB", "Prisma", "Tailwind CSS"],
      },
      {
          nameProject: "AI Chatbot - Interactive Website with Ollama Gemma 2",
          typeProject: "Website",
          deskProject:
            "AI Chatbot is an interactive web platform that enables users to communicate directly with a local large language model (LLM). Built using Ollama and Google's Gemma 2 model, it provides a ChatGPT-like experience while ensuring complete privacy and offline functionality.",
          status: "On-Going",
          linkRepo: "https://github.com/leapwithluvi/ai-chatbot",
          srcImg: chatbot,
          stacks: ["React", "Ollama", "Gemma 2", "Tailwind CSS"],
        },
        {
          nameProject: "Backend Auth API",
          typeProject: "Backend",
          deskProject:
            "Backend Auth API is a secure and modular authentication service built for scalability and integration. It supports essential features like user registration, login, and password reset with JWT-based authentication following RESTful principles.",
          status: "On-Going",
          linkRepo: "https://github.com/leapwithluvi/backend-auth-api",
          srcImg: backend,
          stacks: ["Express.js", "Node.js", "PostgreSQL", "Prisma", "JWT"],
        },
    ];