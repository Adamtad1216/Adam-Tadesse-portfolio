import { HeroSection } from '@/components/hero/HeroSection';
import { ProjectsSection } from '@/components/projects/ProjectsSection';
import { AboutSection } from '@/components/about/AboutSection';
import { ExperienceSection } from '@/components/experience/ExperienceSection';
import { SkillsSection } from '@/components/skills/SkillsSection';
import { GithubSection } from '@/components/github/GithubSection';
import { ContactSection } from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <ProjectsSection />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ExperienceSection />
      <div className="section-divider" />
      <SkillsSection />
      <div className="section-divider" />
      <GithubSection />
      <div className="section-divider" />
      <ContactSection />
    </>
  );
}
