import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import CoursesSection from "./components/CoursesSection";
import PerksSection from "./components/PerksSection";
import ProcessSection from "./components/ProcessSection";
import PricingSection from "./components/PricingSection";
import EnrollmentSection from "./components/EnrollmentSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <PerksSection />
        <ProcessSection />
        <PricingSection />
        <EnrollmentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
