import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Blog from '@/components/Blog';
import Services from '@/components/Services';
import FAQs from '@/components/FAQs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Blog />
        <Services />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
