import { useEffect } from "react";
import Lenis from "lenis";

// PAGES
import { HeroPages } from "./pages/HeroPages";
import { AboutPages } from "./pages/AboutPages";
import { ExperiencePages } from "./pages/ExperiencePages";
import { MySkillPages } from "./pages/MySkillPages";
import { ProjectPages } from "./pages/ProjectPages";
import { ContactPages } from "./pages/ContactPages";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Global Vertical Dividers */}
      <div className="absolute left-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border hidden xl:block" />
      <div className="absolute right-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border hidden xl:block" />

      <Navbar />

      <HeroPages />
      <AboutPages />
      <ExperiencePages />
      <MySkillPages />
      <ProjectPages />
      <ContactPages />
      <Footer />
    </div>
  );
};
