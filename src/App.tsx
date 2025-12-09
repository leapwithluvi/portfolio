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

export const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0,
      smoothWheel: true,
      easing: (t) => t * (2 - t),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <HeroPages />
      <AboutPages />
      <ExperiencePages />
      <MySkillPages />
      <ProjectPages />
      <ContactPages />
      <Footer />
    </>
  );
};
