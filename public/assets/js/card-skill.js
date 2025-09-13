document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("stacks-container");

  const stacks = [
    // BAHASA PEMROGRAMMAN
    {
      name: "JavaScript",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      name: "C++",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "C#",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },

    // FRONTEND
    {
      name: "React",
      type: "JavaScript Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      type: "React Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },

    // NODE
    {
      name: "Node.js",
      type: "JavaScript Runtime",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },

    // BACKEND
    {
      name: "Express.js",
      type: "Web Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },

    // CSS FRAMEWORK
    {
      name: "Tailwind CSS",
      type: "CSS Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Bootstrap",
      type: "CSS Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },

    // DATABASE & ORM
    {
      name: "MySQL",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      name: "PostgreSQL",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    },
    {
      name: "SQLite",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    },
    {
      name: "Prisma",
      type: "ORM",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
    {
      name: "Sequelize",
      type: "ORM",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
    },

    // TOOLS & PLATFORM
    {
      name: "GitHub",
      type: "Git Hosting Platform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "Git",
      type: "Version Control",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Vercel",
      type: "Cloud Platform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    },

    // ML / PYTHON
    {
      name: "PyTorch",
      type: "Machine Learning Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    },
    {
      name: "TensorFlow",
      type: "Machine Learning Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Scikit-learn",
      type: "Machine Learning Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    },
    {
      name: "Keras",
      type: "Deep Learning API",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
    },
    {
      name: "NumPy",
      type: "Scientific Computing Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    },
    {
      name: "SciPy",
      type: "Scientific Computing Library",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg",
    },
    {
      name: "Pandas",
      type: "Data Analysis Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    },
    {
      name: "Matplotlib",
      type: "Data Visualization Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
    },
    {
      name: "Seaborn",
      type: "Data Visualization Library",
      logo: "https://seaborn.pydata.org/_static/logo-mark-lightbg.svg",
    },
    {
      name: "OpenCV",
      type: "Computer Vision Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    },
    {
      name: "n8n",
      type: "Workflow Automation Tool",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@12/icons/n8n.svg",
    },
    {
      name: "Jupyter Notebook",
      type: "Data Science Environment",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
    },
  ];

  stacks.forEach((stack, idx) => {
    const card = document.createElement("div");
    const logoWrapper = document.createElement("div");
    const logoImg = document.createElement("img");
    const textWrapper = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    card.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "sm:justify-start",
      "md:space-x-4",
      "p-5",
      "bg-white",
      "rounded-lg",
      "shadow-md",
      "hover:shadow-xl",
      "transition-shadow",
      "duration-300"
    );

    card.setAttribute("data-aos", "fade-right");
    card.setAttribute("data-aos-delay", `${idx * 101}`);

    logoWrapper.classList.add("flex-shrink-0");
    logoImg.classList.add("h-10", "w-15");
    textWrapper.classList.add("flex-1", "hidden", "sm:block");
    h3.classList.add("text-lg", "font-semibold", "text-gray-900");
    p.classList.add("text-sm", "text-gray-500");

    logoImg.src = stack.logo;
    logoImg.alt = stack.name + " Logo";
    h3.textContent = stack.name;
    p.textContent = stack.type;

    logoWrapper.appendChild(logoImg);
    textWrapper.appendChild(h3);
    textWrapper.appendChild(p);
    card.appendChild(logoWrapper);
    card.appendChild(textWrapper);

    container.appendChild(card);
  });
});
