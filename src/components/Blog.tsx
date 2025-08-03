import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Responsive Web Applications with React and Tailwind CSS",
      excerpt: "Learn how to create beautiful, responsive web applications using React and Tailwind CSS. This comprehensive guide covers best practices and modern techniques.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Frontend",
      slug: "responsive-react-tailwind"
    },
    {
      title: "Modern JavaScript ES6+ Features Every Developer Should Know",
      excerpt: "Explore the latest JavaScript features that will make your code more efficient and readable. From arrow functions to async/await and beyond.",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "JavaScript",
      slug: "modern-javascript-features"
    },
    {
      title: "Optimizing Web Performance: A Complete Guide",
      excerpt: "Discover proven techniques to improve your website's loading speed and user experience. Learn about lazy loading, code splitting, and performance monitoring.",
      date: "March 5, 2024",
      readTime: "12 min read",
      category: "Performance",
      slug: "web-performance-optimization"
    },
    {
      title: "Getting Started with TypeScript in React Projects",
      excerpt: "Step-by-step guide to integrating TypeScript into your React projects. Learn about type safety, interfaces, and best practices for scalable applications.",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "TypeScript",
      slug: "typescript-react-guide"
    },
    {
      title: "CSS Grid vs Flexbox: When to Use Which?",
      excerpt: "Understanding the differences between CSS Grid and Flexbox. Learn when to use each layout method for optimal results in your web projects.",
      date: "February 22, 2024",
      readTime: "7 min read",
      category: "CSS",
      slug: "css-grid-vs-flexbox"
    },
    {
      title: "Building APIs with Node.js and Express: Best Practices",
      excerpt: "Complete guide to building robust APIs using Node.js and Express. Covers authentication, error handling, validation, and security best practices.",
      date: "February 18, 2024",
      readTime: "15 min read",
      category: "Backend",
      slug: "nodejs-express-api-guide"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge and insights about web development, programming, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover-lift border-border/50 group">
              <CardHeader>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all duration-200"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;