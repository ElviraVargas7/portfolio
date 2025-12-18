import AboutMe from "@/components/AboutMe/AboutMe";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import SkillsTechStack from "@/components/SkillsTechStack/SkillsTechStack";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fce7f3] dark:bg-[#400827] font-sans">
      <main className="flex gap-28 min-h-screen w-full max-w-6xl flex-col items-center justify-between py-32 px-16 bg-[#fce7f3] dark:bg-[#400827] sm:items-start">
        <Hero />
        <AboutMe />
        <SkillsTechStack />
        <Projects />
      </main>
    </div>
  );
}
