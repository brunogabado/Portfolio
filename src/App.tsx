import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import WelcomeSection from "./sections/WelcomeSections";

function App() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
