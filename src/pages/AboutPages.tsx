import { Sidebar } from "../components/Sidebar";

export const AboutPages = () => {
  return (
    <section
      className="flex items-center h-auto px-6 md:px-12 py-12"
      id="about"
    >
      {/* Sidebar Kiri */}
      <Sidebar num="02" title="About"/>

      {/* Konten */}
      <div className="flex flex-col gap-4 text-justify max-w-[1550px]">
        <div className="flex items-center gap-3 mb-4" data-aos="fade-down">
          {/* Ikon User */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-8 text-yellow-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z"
            />
          </svg>
          <h1 className="md:text-5xl text-4xl font-serif">About Me</h1>
        </div>
        <h2
          className="md:text-3xl text-xl font-serif font-bold"
          data-aos="fade-right"
        >
          Hello, I'm Luvi Aprilyansyah Gabriel!
        </h2>

        {/* Deskripsi */}
        <p
          className="md:text-lg text-base font-serif text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          i am a vocational high school student passionate about programming and
          web development. What started as a small curiosity about how websites
          work has grown into a strong interest in building modern digital
          solutions.{" "}
        </p>
        <p
          className="md:text-lg text-base font-serif text-gray-600"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          On the
          <strong>frontend side</strong>, I work with
          <strong>HTML, CSS, and JavaScript</strong> to create clean and
          interactive interfaces. I am also exploring modern frameworks such as{" "}
          <strong>React and Next.js</strong> , while leveraging
          <strong>TypeScript</strong> to write safer, more maintainable, and
          scalable code.
        </p>
        <p
          className="md:text-lg text-base font-serif text-gray-600"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          For the
          <strong>backend</strong>, I use
          <strong>Express.js</strong> to build REST APIs and connect
          applications to databases such as
          <strong>MongoDB and PostgreSQL</strong>. To simplify and organize data
          management, I also learn ORM (Object Relational Mapping) tools like{" "}
          <strong>Prisma and Sequelize</strong>, which make database integration
          more efficient.
        </p>
        <p
          className="md:text-lg text-base font-serif text-gray-600"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Beyond web development, I have a deep interest in
          <strong>Artificial Intelligence</strong>, especially{" "}
          <strong>Machine Learning</strong>, because I believe AI will shape the
          future of technology. Even though I am still at the early stage, I am
          committed to continuous learning and growth in this field.
        </p>
        <p
          className="md:text-lg text-base font-serif text-gray-600"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          My goal is to grow as a <strong>Fullstack Developer</strong> who
          understands
          <strong>frontend, backend, databases, ORM, and AI/ML</strong>, and to
          build modern, impactful digital solutions that truly make a difference
        </p>
      </div>
    </section>
  );
};
