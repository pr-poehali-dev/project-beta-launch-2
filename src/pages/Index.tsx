import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Portfolio from "@/components/Portfolio";
import Promo from "@/components/Promo";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Featured />
      <Portfolio />
      <Promo />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;