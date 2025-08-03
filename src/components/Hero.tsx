import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-workspace.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="text-gradient animate-pulse">Sajjad Hossain</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Professional{" "}
                <span className="text-primary animate-bounce inline-block">Web Developer</span>
                {" "}from Bangladesh
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                I create modern, responsive websites and web applications using cutting-edge technologies. 
                Let's bring your digital vision to life with clean code and beautiful design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="hover-lift"
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('mailto:gssajjad098@gmail.com?subject=Hello&body=Hi Sajjad, I would like to discuss a project with you.', '_blank')}
                className="hover-lift"
              >
                Send Me a Message
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <img
              src={heroImage}
              alt="Professional web developer workspace"
              className="w-full h-auto rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-200"
            aria-label="Scroll to About section"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;