import { useEffect, useState } from "react";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { portfolioData } from "./data/portfolioData";
import type { ThemeMode } from "./types";

const isThemeMode = (value: string | null): value is ThemeMode =>
  value === "dark" || value === "light";

function App() {
  const initialMode = (() => {
    if (typeof window === "undefined") {
      return portfolioData.theme.defaultMode;
    }
    const stored = window.localStorage.getItem(portfolioData.theme.storageKey);
    return isThemeMode(stored) ? stored : portfolioData.theme.defaultMode;
  })();

  const [mode, setMode] = useState<ThemeMode>(initialMode);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.classList.toggle("dark", mode === "dark");
    root.classList.toggle("light", mode === "light");
    window.localStorage.setItem(portfolioData.theme.storageKey, mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((previousMode) => (previousMode === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-base-bg text-ink font-body">
      <Navbar data={portfolioData.navbar} mode={mode} onToggleTheme={toggleTheme} />
      <main className="container flex flex-col gap-10 pb-24 pt-24 md:gap-14 md:pt-28">
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Skills data={portfolioData.skills} />
        <Experience data={portfolioData.experience} />
        <Education data={portfolioData.education} />
        <Projects data={portfolioData.projects} />
        <Certifications data={portfolioData.certifications} />
        <Contact data={portfolioData.contact} />
      </main>
    </div>
  );
}

export default App;
