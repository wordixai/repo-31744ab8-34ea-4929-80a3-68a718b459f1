import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Palette, Rocket, Settings, Smartphone, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Natural Language Interface",
      description: "Simply describe what you want in plain English. Our AI understands your vision and brings it to life instantly."
    },
    {
      icon: Palette,
      title: "Professional Design System",
      description: "Every website comes with a cohesive design system, ensuring your site looks polished and professional."
    },
    {
      icon: Rocket,
      title: "Lightning Fast Generation",
      description: "From idea to fully functional website in seconds. No more waiting weeks for development cycles."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Responsive",
      description: "All websites are automatically optimized for every device, ensuring perfect user experience everywhere."
    },
    {
      icon: Settings,
      title: "Easy Customization",
      description: "Make changes by simply asking. Want a different color? New section? Just tell us what you need."
    },
    {
      icon: Users,
      title: "Accessible for Everyone",
      description: "No technical knowledge required. Perfect for entrepreneurs, designers, marketers, and anyone with ideas."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Why Choose <span className="text-gradient">Needware</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up delay-200">
            Experience the future of web development with our AI-powered platform that makes creating stunning websites as easy as having a conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-glow border-primary/10 transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;