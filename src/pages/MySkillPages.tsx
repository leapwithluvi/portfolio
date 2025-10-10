import { Sidebar } from "../components/Sidebar";
import { CardSkills } from "../components/CardSkills";

export const MySkillPages = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-start h-auto px-6 md:px-12 py-12"
      id="skills"
    >
      {/* Sidebar Kiri */}
      <Sidebar num="03" title="Tech Stack" />

      {/* Konten */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-6" data-aos="fade-down">
          {/* Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 text-yellow-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h1 className="text-4xl font-serif">My Tech Stacks</h1>
        </div>

        {/* Grid */}
        <div
          className="
            grid 
            grid-cols-5 gap-3 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
          "
          data-aos="zoom-in"
        >
          <CardSkills />
        </div>
      </div>
    </section>
  );
};
