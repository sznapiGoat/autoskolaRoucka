import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import CoursesSection from "./components/CoursesSection";
import PerksSection from "./components/PerksSection";
import ProcessSection from "./components/ProcessSection";
import VraceniSection from "./components/VraceniSection";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";
import EnrollmentSection from "./components/EnrollmentSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <CoursesSection />
        <PerksSection />
        <ProcessSection />
        <VraceniSection />
        <PricingSection />
        <ReviewsSection />
        <EnrollmentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
