import React from "react";
import "../index.css";

// Components
import { Sidebar } from "../components/Sidebar";

export const HeroPages = () => {
  return (
    // Hero Section
    <section className="flex h-screen items-center justify-center px-6 md:px-12">
      {/* Sidebar */}
      <Sidebar num="01" title="Hero" />

      {/* Content */}
      <div className="md:px-12 flex flex-col gap-2">
        <p
          className="flex items-center gap-2 mb-2 text-lg font-medium"
          data-aos="fade-down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#CA8A04
"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect width="18" height="12" x="3" y="4" rx="2" ry="2"></rect>
            <line x1="2" x2="22" y1="20" y2="20"></line>
          </svg>
          Aspiring Fullstack Developer
        </p>

        <h1
          className="text-4xl md:text-6xl font-serif font-bold leading-tight relative"
          data-aos="zoom-in"
        >
          Luvi Aprilyansyah
          <span className="relative inline-block [text-shadow:0_0_15px_rgba(255,255,255,0.8)]">
            Gabriel
            <img
              src="./assets/images/Natori.jpeg"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/4 
            -z-10 h-[400px] w-[250px] object-cover opacity-70 rounded-lg hidden xl:block"
              data-aos="fade-up"
            />
          </span>
        </h1>
        <p
          className="text-lg mt-4 max-w-xl text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hi! I'm Luvi, an aspiring Fullstack & AI/ML Engineer. Feel free to
          reach out via email or connect with me on LinkedIn and GitHub. I'd
          love to hear from you!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-2">
          <a
            href="#about"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900 
      border border-gray-800 rounded-lg w-full sm:w-auto flex items-center justify-center text-center w-full sm:w-auto
      hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300
      dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-800 whitespace-nowrap"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            Explore
          </a>
          <button
            type="button"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-900 
      border border-gray-800 rounded-lg w-full sm:w-auto flex items-center justify-center text-center w-full sm:w-auto
      hover:text-black hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300
      dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:focus:ring-gray-800 whitespace-nowrap"
            data-aos="fade-left"
            data-aos-delay="250"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};
