import "../index.css";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Laptop } from "lucide-react";
import pp from "../../public/img/pp.jpeg";

export const HeroPages = () => {
  return (
    <section className="flex items-center w-full bg-white px-6 md:px-12 lg:px-24 py-16 md:py-24 overflow-hidden">
      <Sidebar num="01" title="Hero" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* TEXT */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="flex items-center gap-2 text-lg font-medium text-yellow-600">
            <Laptop size={28} className="text-yellow-600" />
            Aspiring Fullstack Developer & AI/ML Engineer
          </p>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Luvi Aprilyansyah Gabriel
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-700 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hi! I'm Luvi, a Fullstack Developer passionate about building modern
            web applications and exploring AI/ML technologies. Feel free to
            reach out via email or connect with me on LinkedIn and GitHub!
          </motion.p>

          <motion.div
            className="mt-4 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a
              onClick={(e) => {
                e.preventDefault();
                const aboutSection = document.querySelector("#about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
              href="#about"
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium border border-gray-800 rounded-lg bg-gray-800 text-white hover:bg-white hover:text-black transition duration-300"
            >
              <ArrowUpRight size={20} />
              Explore
            </a>

            <Button buttonName="Download CV" icon={Download} iconSize={20} />
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.img
            src={pp}
            alt="Luvi Aprilyansyah Gabriel"
            className="w-full h-[450px] max-w-xs md:max-w-sm lg:max-w-md rounded-2xl shadow-xl object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
