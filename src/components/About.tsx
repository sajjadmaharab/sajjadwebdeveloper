import { Code, Globe, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Globe,
      title: 'Modern Web',
      description: 'Building responsive, fast-loading websites with the latest technologies.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, SEO, and exceptional user experience.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients and teams to deliver successful projects.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate web developer based in Bangladesh with over 5 years of experience 
            creating digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started as a curious student learning HTML and CSS, I've evolved into a full-stack 
                developer specializing in React, Node.js, and modern web technologies. My passion 
                lies in creating seamless user experiences and solving complex problems through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community in Bangladesh.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">What I Bring to the Table</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  5+ years of professional web development experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Expertise in React, TypeScript, and modern JavaScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Strong background in UI/UX design principles
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Experience with both frontend and backend development
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;