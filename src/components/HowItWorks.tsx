import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Sparkles, Globe, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Describe Your Vision",
      description: "Tell us what kind of website you want to build. Be as detailed or as general as you like - our AI understands both.",
      example: "\"I need a modern portfolio website for my photography business with a dark theme and image gallery.\""
    },
    {
      icon: Sparkles,
      title: "AI Creates Your Website",
      description: "Our advanced AI analyzes your requirements and generates a complete, professional website with all the features you need.",
      example: "Complete HTML, CSS, and JavaScript code generated with responsive design and optimized performance."
    },
    {
      icon: Globe,
      title: "Review & Refine",
      description: "Preview your website instantly. Want changes? Just ask! Our AI makes real-time adjustments based on your feedback.",
      example: "\"Make the header bigger\" or \"Add a contact form\" - changes happen instantly."
    },
    {
      icon: CheckCircle,
      title: "Launch & Enjoy",
      description: "Your website is ready to go live! Deploy with one click or download the code to use anywhere you like.",
      example: "Professional website ready for launch in minutes, not months."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
            From concept to creation in four simple steps. Experience the magic of AI-powered web development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className={`flex items-start gap-6 mb-12 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`} style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl animate-pulse-glow">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <Card className="flex-1 card-glow border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm font-semibold text-primary">Step {index + 1}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <p className="text-sm italic text-muted-foreground">{step.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-primary/30"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;