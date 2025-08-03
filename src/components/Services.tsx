import { Code, Smartphone, Search, Palette, Server, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Build modern, responsive websites and web applications tailored to your specific business needs using the latest technologies.',
      features: ['React/Next.js Development', 'Custom Functionality', 'Database Integration', 'API Development'],
      price: 'Starting from $800'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Ensure your website looks perfect and functions flawlessly across all devices - desktop, tablet, and mobile.',
      features: ['Mobile-First Approach', 'Cross-Browser Compatibility', 'Performance Optimization', 'User Experience Focus'],
      price: 'Starting from $400'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility on search engines and drive more organic traffic to your business.',
      features: ['Technical SEO', 'Page Speed Optimization', 'Meta Tags & Schema', 'Analytics Setup'],
      price: 'Starting from $300'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create beautiful, intuitive user interfaces that provide exceptional user experiences and drive conversions.',
      features: ['Wireframing & Prototyping', 'Visual Design', 'User Testing', 'Design Systems'],
      price: 'Starting from $500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Develop robust server-side applications, APIs, and database solutions to power your web applications.',
      features: ['REST API Development', 'Database Design', 'Authentication Systems', 'Third-party Integrations'],
      price: 'Starting from $600'
    },
    {
      icon: Zap,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly with regular updates, security patches, and performance monitoring.',
      features: ['Regular Updates', 'Security Monitoring', 'Backup Solutions', 'Performance Reports'],
      price: 'Starting from $200/month'
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding hero-gradient">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services I Offer</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development services to help your business succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-border/50 relative overflow-hidden">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold mb-2">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border/50">
                    <Button 
                      size="sm" 
                      onClick={() => window.open('mailto:gssajjad098@gmail.com?subject=Service Quote Request', '_blank')}
                      className="hover-lift w-full"
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-lg p-8 shadow-soft border border-border/50">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. I offer flexible packages and custom solutions 
              tailored to your specific requirements and budget.
            </p>
            <Button size="lg" onClick={scrollToContact} className="hover-lift">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;