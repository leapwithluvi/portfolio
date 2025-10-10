import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// PAGES
import { HeroPages } from "./pages/HeroPages";
import { AboutPages } from "./pages/AboutPages";
import { MySkillPages } from "./pages/MySkillPages";
import { ProjectPages } from "./pages/ProjectPages";
import { ContactPages } from "./pages/ContactPages";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroPages />
    <AboutPages />
    <MySkillPages />
    <ProjectPages />
    <ContactPages />
    <Footer />
  </React.StrictMode>
);
