import { CardProject } from "../components/CardProject";
import { Sidebar } from "../components/Sidebar";

export const ProjectPages = () => {
  return (
    <section className="flex items-center h-auto px-6 md:px-12 py-12">
      {/* SIDEBAR */}
      <Sidebar num="04" title="Project" />

      {/* <!-- KONTEN --> */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-6" data-aos="fade-down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#CA8A04"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"></path>
            <path d="M2 8v11a2 2 0 0 0 2 2h14"></path>
          </svg>
          <h1 className="text-4xl font-serif">My Projects</h1>
        </div>
        <p
          className="justify-center max-w-[600px] font-serif pb-12"
          data-aos="fade-up"
        >
          These are some of my featured projects...
        </p>

        {/*  CARD PROJECT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <CardProject
            nameProject="AI Chatbot - Interactive Website with Ollama Gemma 2"
            typeProject="Website"
            deskProject="The AI Chatbot is an interactive web application that allows users to communicate with a large language model (LLM) locally and privately. Built using Ollama and Google's Gemma 2 model, this application offers an experience similar to ChatGPT or Gemini, but runs entirely on your device without reliance on external servers."
            status="On-Going"
            linkRepo="https://github.com/leapwithluvi/ai-chatbot"
            srcImg="./assets/images/Natori.jpeg"
            imgAlt="Image Project"
          />
          <CardProject
            nameProject="Backend Auth API"
            typeProject="Backend"
            deskProject="The Backend Auth API is a robust and scalable backend solution designed to handle user authentication and authorization efficiently. Built with modern technologies, it ensures secure access to protected resources while providing a modular and maintainable project structure.

This API supports essential authentication features such as user registration, login, and password recovery, with JWT-based authentication ensuring secure communication. Future updates will include OAuth integration for third-party login support."
            status="On-Going"
            linkRepo="https://github.com/leapwithluvi/backend-auth-api"
            srcImg="./assets/images/Natori.jpeg"
            imgAlt="Image Project"
          />
          <CardProject
            nameProject="Simple School Library"
            typeProject="Website"
            deskProject="A web application for a school library system that allows students to log in using NIS/NISN, browse the book catalog, and manage borrowing and returning books digitally. This system is designed to simplify book management, track student borrowings, and improve library operations."
            status="On-Going"
            linkRepo="https://github.com/leapwithluvi/perpustakaan-sederhana"
            srcImg="./assets/images/Natori.jpeg"
            imgAlt="Image Project"
          />
          <CardProject
            nameProject="Zona Game Tenggarong - PlayStation Store & Game Rental"
            typeProject="Website"
            deskProject="Zona Game Tenggarong is a one-stop destination for PlayStation enthusiasts in Tenggarong. We offer a wide range of PlayStation-related products and services, including consoles, PS controllers, and games for PS3, PS4, and PS5. Additionally, we provide PlayStation rental services for a convenient and enjoyable gaming experience."
            status="On-Going"
            linkRepo="https://github.com/leapwithluvi/zonagame-tenggarong"
            srcImg="./assets/images/Natori.jpeg"
            imgAlt="Image Project"
          />
          <CardProject
            nameProject="Trace Personal"
            typeProject="Website"
            deskProject="Trace Personal is a workplace wellness platform designed to encourage healthy habits, team bonding, and employee engagement. It allows employees to log their daily wellness activities (hydration, sleep, workouts), participate in company-wide health challenges, and track progress on leaderboards. The platform promotes overall well-being while fostering friendly competition among employees."
            status="On-Going"
            linkRepo="https://github.com/leapwithluvi/TracePersonal"
            srcImg="./assets/images/Natori.jpeg"
            imgAlt="Image Project"
          />
          <CardProject
            nameProject="OSIS President Voting System"
            typeProject="Website"
            deskProject="The OSIS President Voting System is a streamlined and secure application designed to facilitate the election of the Student Council President. This system provides a user-friendly interface for students to cast their votes efficiently while ensuring vote integrity and transparency. It aims to simplify the election process, making it faster, more organized, and reliable."
            status="Complete"
            linkRepo="https://github.com/leapwithluvi/ketos-voting-system"
            srcImg="./assets/images/Natori.jpeg"
            imgAlt="Image Project"
          />
        </div>
      </div>
    </section>
  );
};
