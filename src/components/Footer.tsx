import { Heart, MessageSquare, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#services', label: 'Services' },
  ];

  const socialLinks = [
    {
      href: 'https://wa.me/880161011332',
      icon: MessageSquare,
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    },
    {
      href: 'https://www.instagram.com/sajjad_mehrab1/',
      icon: Instagram,
      label: 'Instagram',
      color: 'hover:text-pink-500'
    }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">Sajjad Hossain</h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional web developer from Bangladesh, creating modern digital solutions 
              that help businesses thrive online.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover-lift ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">
                <span className="font-medium">Email:</span><br />
                <a href="mailto:hello@sajjadhossain.dev" className="hover:text-primary transition-colors duration-200">
                  hello@sajjadhossain.dev
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Phone:</span><br />
                <a href="tel:+880161011332" className="hover:text-primary transition-colors duration-200">
                  +880 161 011 332
                </a>
              </p>
              <p className="text-muted-foreground">
                <span className="font-medium">Location:</span><br />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Sajjad Hossain. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for the web
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;