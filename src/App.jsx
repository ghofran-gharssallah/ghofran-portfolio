import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import Journey from "./sections/Journey";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
function App() {
  // Smooth scrolling, skipped when the user prefers reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.1,
    });

    return () => lenis.destroy();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Navbar />

      <Hero />

      <Journey />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </MotionConfig>
  );
}

export default App;
