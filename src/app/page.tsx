import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{ minHeight: "100vh", position: "relative", overflowX: "hidden" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
