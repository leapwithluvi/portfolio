import { Sidebar } from "../components/Sidebar";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

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
          <UserRound className="text-yellow-600" size={35} />
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
          "I am a vocational high school student passionate about programming and web development. What started as curiosity about how websites work has evolved into a strong interest in building scalable digital solutions.",
          "On the frontend, I work with HTML, CSS, and JavaScript to build clean and interactive interfaces. I am exploring modern frameworks such as React and Next.js while leveraging TypeScript to write safer and maintainable code.",
          "On the backend, I use Express.js to build REST APIs and work with MongoDB and PostgreSQL databases. To manage data efficiently, I learn ORM tools such as Prisma.",
          "Beyond web development, I have a strong interest in Artificial Intelligence, especially Machine Learning. I believe AI will shape the future of technology, and I am committed to learning and growing in this field.",
          "My goal is to become a Fullstack Developer who understands frontend, backend, databases, ORM, and AI/ML, and build impactful digital solutions.",
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
