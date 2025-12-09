import { motion } from "framer-motion";
import { Sidebar } from "../components/Sidebar";
import { myExperience } from "../utils/DataExperience";
import { ExperienceCard } from "../components/ExperienceCard";
import { BriefcaseBusiness } from "lucide-react";

export const ExperiencePages = () => {
  return (
    <section
      id="experince"
      className="fkex flex items-center h-auto px-6 md:px-12 py-12"
    >
      {/*sidebar kiri*/}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Sidebar num="03" title="Experince" />
      </motion.div>

      {/*Konten*/}
      <div className="flex flex-1">
        <motion.div
          className="flex flex-col gap-2 mb-6"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-row items-center gap-4">
            <BriefcaseBusiness className="text-yellow-600" size={35} />
            <h1 className="md:text-5xl text-4xl font-serif">Experience</h1>
          </div>

          <motion.div className="ml-4 flex flex-row gap-12 mt-8">
            {[
              { num: "6", label: "Months of Experience" },
              { num: "2", label: "Projects Published" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <h1 className="text-3xl font-serif font-bold text-gray-800">
                  {item.num}
                </h1>
                <p className="text-xs font-serif md:text-xl text-gray-600">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ExperienceCard data={myExperience} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
