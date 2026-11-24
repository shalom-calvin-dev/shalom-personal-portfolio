import { About } from "@/components/About";
import { getExperienceLabel } from "@/lib/experience-label";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default async function Home() {
  // Computed on the server and cached for a day (see src/lib/experience-label.ts).
  const experienceLabel = await getExperienceLabel();

  return (
    <>
      <Navbar />
      <main id="top">
        <Hero experienceLabel={experienceLabel} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
