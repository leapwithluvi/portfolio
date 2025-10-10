import { Sidebar } from "../components/Sidebar";
import { motion } from "framer-motion";

export const AboutPages = () => {
  return (
    <section
      className="flex items-center h-auto px-6 md:px-12 py-12 overflow-hidden"
      id="about"
    >
      {/* Sidebar Kiri */}
      <Sidebar num="02" title="About" />

      {/* Konten */}
      <motion.div
        className="flex flex-col gap-4 text-justify max-w-[1550px]"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Judul */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Ikon User */}
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z"
            />
          </svg>
          <h1 className="md:text-5xl text-4xl font-serif">About Me</h1>
        </motion.div>

        {/* Subjudul */}
        <motion.h2
          className="md:text-3xl text-xl font-serif font-bold"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Hello, I'm Luvi Aprilyansyah Gabriel!
        </motion.h2>

        {/* Deskripsi */}
        {[
          "I am a vocational high school student passionate about programming and web development. What started as a small curiosity about how websites work has grown into a strong interest in building modern digital solutions.",
          "On the frontend side, I work with HTML, CSS, and JavaScript to create clean and interactive interfaces. I am also exploring modern frameworks such as React and Next.js, while leveraging TypeScript to write safer, more maintainable, and scalable code.",
          "For the backend, I use Express.js to build REST APIs and connect applications to databases such as MongoDB and PostgreSQL. To simplify and organize data management, I also learn ORM (Object Relational Mapping) tools like Prisma and Sequelize, which make database integration more efficient.",
          "Beyond web development, I have a deep interest in Artificial Intelligence, especially Machine Learning, because I believe AI will shape the future of technology. Even though I am still at the early stage, I am committed to continuous learning and growth in this field.",
          "My goal is to grow as a Fullstack Developer who understands frontend, backend, databases, ORM, and AI/ML, and to build modern, impactful digital solutions that truly make a difference.",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="md:text-lg text-base font-serif text-gray-600"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};
