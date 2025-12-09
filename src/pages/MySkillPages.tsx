import { motion } from "framer-motion";
import { Sidebar } from "../components/Sidebar";
import { CardSkills } from "../components/CardSkills";
import { Brain, Clock3, LayoutTemplate } from "lucide-react";
import { DataSkillsWeb } from "../utils/DataSkillsWeb";
import { DataSkillsML } from "../utils/DataSkillsML";

export const MySkillPages = () => {
  return (
    <section
      id="skills"
      className="relative flex items-center h-auto px-6 md:px-12 py-20 overflow-hidden"
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
        <img
          src="../../public/img/grid.jpg"
          alt="gambar"
          className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10"
        />
        <motion.div
          className="flex flex-col gap-2 mb-6"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Clock3 className="text-yellow-600" size={35} />
            <h1 className="text-4xl font-serif">My Tech Stacks</h1>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <LayoutTemplate className="text-yellow-600" size={25} />
            <h2 className="text-2xl font-serif">Full Stack Engineering</h2>
          </div>
          {/*Full-Stack Section*/}
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
            <CardSkills data={DataSkillsWeb} />
          </motion.div>

          {/*AI/ML Section*/}
          <div className="flex items-center gap-2 mt-4">
            <Brain className="text-yellow-600 " size={25} />
            <h2 className="text-2xl font-serif">AI/ML Engineering</h2>
          </div>
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
            <CardSkills data={DataSkillsML} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
