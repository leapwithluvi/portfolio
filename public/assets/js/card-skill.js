document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("stacks-container");

  const stacks = [
    // BAHASA PEMROGRAMMAN
    {
      name: "JavaScript",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Python",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      url: "https://www.python.org/",
    },
    {
      name: "C++",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      url: "https://isocpp.org/",
    },
    {
      name: "C#",
      type: "Programming Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      url: "https://dotnet.microsoft.com/en-us/languages/csharp",
    },

    // FRONTEND
    {
      name: "React",
      type: "JavaScript Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      url: "https://react.dev/",
    },
    {
      name: "Next.js",
      type: "React Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      url: "https://nextjs.org/",
    },

    // NODE
    {
      name: "Node.js",
      type: "JavaScript Runtime",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org/en",
    },

    // BACKEND
    {
      name: "Express.js",
      type: "Web Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      url: "https://expressjs.com/",
    },

    // CSS FRAMEWORK
    {
      name: "Tailwind CSS",
      type: "CSS Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      url: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      type: "CSS Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      url: "https://getbootstrap.com/",
    },

    // DATABASE & ORM
    {
      name: "MySQL",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      url: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      url: "https://www.postgresql.org/",
    },
    {
      name: "MongoDB",
      type: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      url: "https://www.mongodb.com/",
    },
    {
      name: "Postman",
      type: "API Development",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      url: "https://www.postman.com/",
    },
    {
      name: "Prisma",
      type: "ORM",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      url: "https://www.prisma.io/",
    },
    {
      name: "Sequelize",
      type: "ORM",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
      url: "https://sequelize.org/",
    },

    // TOOLS & PLATFORM
    {
      name: "GitHub",
      type: "Git Hosting Platform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      url: "https://github.com/",
    },
    {
      name: "Git",
      type: "Version Control",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      url: "https://git-scm.com/",
    },
    {
      name: "Vercel",
      type: "Cloud Platform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
      url: "https://vercel.com/",
    },

    // ML / PYTHON
    {
      name: "PyTorch",
      type: "Machine Learning Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
      url: "https://pytorch.org/",
    },
    {
      name: "TensorFlow",
      type: "Machine Learning Framework",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      url: "https://www.tensorflow.org/",
    },
    {
      name: "Scikit-learn",
      type: "Machine Learning Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
      url: "https://scikit-learn.org/",
    },
    {
      name: "Keras",
      type: "Deep Learning API",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
      url: "https://keras.io/",
    },
    {
      name: "NumPy",
      type: "Scientific Computing Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      url: "https://numpy.org/",
    },
    {
      name: "SciPy",
      type: "Scientific Computing Library",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg",
      url: "https://scipy.org/",
    },
    {
      name: "Pandas",
      type: "Data Analysis Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      url: "https://pandas.pydata.org/",
    },
    {
      name: "Matplotlib",
      type: "Data Visualization Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
      url: "https://matplotlib.org/",
    },
    {
      name: "Seaborn",
      type: "Data Visualization Library",
      logo: "https://seaborn.pydata.org/_static/logo-mark-lightbg.svg",
      url: "https://seaborn.pydata.org/",
    },
    {
      name: "OpenCV",
      type: "Computer Vision Library",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
      url: "https://opencv.org/",
    },
    {
      name: "Google Colab",
      type: "Cloud Notebook Environment",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg",
      url: "https://colab.research.google.com/",
    },
    {
      name: "Jupyter Notebook",
      type: "Data Science Environment",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
      url: "https://jupyter.org/",
    },
    {
      name: "Kaggle",
      type: "Data Science Platform",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg",
      url: "https://www.kaggle.com/",
    },
    {
      name: "Hugging Face",
      type: "AI/ML Platform",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@12/icons/huggingface.svg",
      url: "https://huggingface.co/",
    },
    {
      name: "n8n",
      type: "Workflow Automation Tool",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@12/icons/n8n.svg",
      url: "https://n8n.io/",
    },
    {
      name: "Ollama",
      type: "Local LLM Framework",
      logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ollama.svg",
      url: "https://ollama.com/",
    },
    {
      name: "LangChain",
      type: "LLM Framework",
      logo: "https://cdn.jsdelivr.net/npm/simple-icons@12/icons/langchain.svg",
      url: "https://www.langchain.com/",
    },
    {
      name: "Lightning AI",
      type: "Deep Learning Framework",
      logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/lightning.svg",
      url: "https://lightning.ai/",
    },
  ];

  stacks.forEach((stack, idx) => {
    const card = document.createElement("a");
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
      "duration-300",
      "cursor-pointer"
    );

    card.href = stack.url;
    card.target = "_blank";

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