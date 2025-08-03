import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',
        'Next.js', 'Vue.js', 'SASS/SCSS', 'Responsive Design', 'Material-UI', 'Chakra UI'
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'Node.js', 'Express.js', 'Python', 'Django', 'REST APIs', 'GraphQL',
        'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Supabase', 'JWT Authentication'
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        'Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'Vercel', 'Netlify',
        'Webpack', 'Vite', 'NPM/Yarn', 'ESLint', 'Prettier'
      ]
    },
    {
      title: 'Design & Others',
      skills: [
        'Figma', 'Adobe XD', 'Photoshop', 'UI/UX Design', 'SEO Optimization',
        'Performance Optimization', 'Testing (Jest)', 'Agile/Scrum'
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding hero-gradient">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-lift border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Animated Text */}
        <div className="mt-16 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              <span className="inline-block animate-pulse text-primary">Passionate</span>
              {" "}about creating{" "}
              <span className="inline-block animate-bounce text-gradient">beautiful</span>
              {" "}and{" "}
              <span className="inline-block animate-pulse text-primary">functional</span>
              {" "}web experiences
            </h3>
            <p className="text-lg text-muted-foreground animate-fade-in">
              Always learning, always improving, always{" "}
              <span className="text-primary font-semibold animate-pulse">coding</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;