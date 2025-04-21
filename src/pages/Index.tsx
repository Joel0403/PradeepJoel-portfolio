
import { BannerSlider } from "@/components/BannerSlider";
import { ContactSection } from "@/components/ContactSection";
import { CountdownTimer } from "@/components/CountdownTimer";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImportantGuidelines } from "@/components/ImportantGuidelines";
import { RegistrationForm } from "@/components/RegistrationForm";
import { TournamentRules } from "@/components/TournamentRules";

const Index = () => {
  return (
    <>
      <Header />
      
      {/* Padding to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section with Banner Slider */}
        <BannerSlider />
        
        {/* Countdown Timer */}
        <CountdownTimer />
        
        {/* Tournament Rules Section */}
        <section id="rules">
          <TournamentRules />
        </section>
        
        {/* Important Guidelines Section */}
        <section id="guidelines">
          <ImportantGuidelines />
        </section>
        
        {/* Registration Form Section */}
        <section id="register">
          <RegistrationForm />
        </section>
        
        {/* FAQ Section */}
        <section id="faq">
          <FaqSection />
        </section>
        
        {/* Contact Section */}
        <section id="contact">
          <ContactSection />
        </section>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
