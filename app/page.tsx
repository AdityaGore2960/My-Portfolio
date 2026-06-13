import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialSidebar from "@/components/SocialSidebar";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
//import AchievementsSection from "@/components/sections/AchievementsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="h-screen w-full bg-page-bg flex items-stretch p-3 sm:p-5 lg:p-7 overflow-hidden">
      {/* White card / canvas */}
      <div className="flex-1 bg-white rounded-xl shadow-sm flex overflow-hidden">
        {/* Left sidebar — desktop only */}
        <div className="hidden lg:flex flex-col items-center px-5 border-r border-gray-100 flex-shrink-0">
          <SocialSidebar />
        </div>

        {/* Main column */}
        <div className="flex-1 flex flex-col relative">
          {/* Fixed Navbar at the top of the main column */}
          <div className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur px-6 sm:px-10 lg:px-14 xl:px-16 border-b border-gray-100">
            <Navbar />
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-10 lg:px-14 xl:px-16 pt-[100px] scroll-smooth">
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <ExperienceSection />
            <SkillsSection />
            
            <CertificationsSection />
            <ContactSection />

            {/* Footer space */}
            <div className="py-10 text-center border-t border-gray-100 mt-10">
              <p className="text-xs text-mid-gray font-semibold tracking-wider uppercase">
                © {new Date().getFullYear()} Aditya Gore. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
