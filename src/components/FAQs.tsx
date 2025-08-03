import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React, TypeScript, Node.js, Next.js, and various databases. I also work with popular CSS frameworks like Tailwind CSS and have experience with cloud platforms like AWS and Vercel."
    },
    {
      question: "How long does it typically take to complete a project?",
      answer: "Project timelines vary depending on complexity and requirements. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. I provide detailed timeline estimates after understanding your specific needs."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, I offer comprehensive maintenance packages that include regular updates, security monitoring, backup solutions, and performance optimization. Maintenance plans start from $200/month depending on your needs."
    },
    {
      question: "Can you work with existing codebases or teams?",
      answer: "Absolutely! I have experience collaborating with existing development teams and can work with your current codebase. I follow best practices for code reviews, documentation, and version control to ensure smooth collaboration."
    },
    {
      question: "What is your development process?",
      answer: "I follow an agile development approach with regular communication and feedback. The process typically includes: requirements gathering, planning & design, development in iterations, testing, deployment, and post-launch support."
    },
    {
      question: "Do you provide design services as well?",
      answer: "Yes, I offer UI/UX design services including wireframing, prototyping, and visual design. I can work with your existing brand guidelines or help create a complete design system from scratch."
    },
    {
      question: "What are your payment terms?",
      answer: "I typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, I can arrange milestone-based payments. I accept various payment methods including bank transfers and digital payments."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "I provide technical SEO optimization as part of my web development services, including page speed optimization, meta tags, schema markup, and analytics setup. For comprehensive digital marketing, I can refer you to trusted partners."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, I work with clients globally. I'm experienced in remote collaboration and can adapt to different time zones. All communication is conducted in English, and I'm familiar with international business practices."
    },
    {
      question: "What happens if I'm not satisfied with the work?",
      answer: "Client satisfaction is my priority. I provide regular updates and seek feedback throughout the development process. If you're not satisfied, I'll work with you to address concerns and make necessary revisions within the agreed scope."
    }
  ];

  return (
    <section id="faqs" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about my services and process
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 hover-lift"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors duration-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-primary hover:underline font-medium"
          >
            Get in touch and I'll be happy to help
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;