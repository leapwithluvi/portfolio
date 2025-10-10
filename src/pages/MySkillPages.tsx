import { motion } from "framer-motion";
import { Sidebar } from "../components/Sidebar";
import { CardSkills } from "../components/CardSkills";

export const MySkillPages = () => {
  return (
    <section
      id="skills"
      className="flex items-center h-auto px-6 md:px-12 py-20 overflow-hidden"
    >
      {/* Sidebar Kiri */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Sidebar num="03" title="Tech Stack" />
      </motion.div>

      {/* Konten */}
      <div className="flex flex-col flex-1">
        {/* Judul */}
        <motion.div
          className="flex items-center gap-2 mb-6"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Grid Skill */}
        <motion.div
          className="grid grid-cols-5 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <CardSkills />
        </motion.div>
      </div>
    </section>
  );
};
