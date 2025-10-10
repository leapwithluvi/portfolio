import "../index.css";
import { Sidebar } from "../components/Sidebar";
import { Button } from "../components/Button";
import { motion } from "framer-motion";

export const HeroPages = () => {
  return (
    <section className="relative flex h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar num="01" title="Hero" />

      {/* Grid Container */}
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-full max-w-7xl mx-auto">
        {/* Text Content */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="flex items-center gap-2 text-lg font-medium text-yellow-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#CA8A04"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="12" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="2" x2="22" y1="20" y2="20"></line>
            </svg>
            Aspiring Fullstack Developer
          </p>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-gray-900 tracking-tight md:whitespace-nowrap md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Luvi Aprilyansyah Gabriel
          </motion.h1>

          <motion.p
            className="text-lg mt-3 max-w-md text-gray-700"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi! I'm Luvi, an aspiring Fullstack & AI/ML Engineer. Feel free to
            reach out via email or connect with me on LinkedIn and GitHub. I'd
            love to hear from you!
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#about"
              className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium 
              border border-gray-800 rounded-lg hover:bg-gray-900 hover:text-white 
              transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              Explore
            </a>

            <Button
              buttonName="Download CV"
              svgProps={{ viewBox: "0 0 24 24" }}
              pathProps={{ d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }}
              polylineProps={{ points: "7 10 12 15 17 10" }}
              lineProps={{ x1: "12", x2: "12", y1: "15", y2: "3" }}
            />
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="hidden xl:flex justify-center ml-14"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <motion.img
            src="/src/assets/Natori.jpeg"
            alt="Luvi Portrait"
            className="h-[420px] w-[300px] object-cover rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
