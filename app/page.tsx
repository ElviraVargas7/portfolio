import AboutMe from "@/components/AboutMe/AboutMe";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import SkillsTechStack from "@/components/SkillsTechStack/SkillsTechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fce7f3] dark:bg-[#1A000D] font-sans">
      <main className="mx-auto flex max-w-6xl flex-col items-center gap-28 py-32 px-16 sm:items-start">
        <Hero />
        <AboutMe />
        <SkillsTechStack />
        <Projects />
        <Contact />
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}
