import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Zap } from "lucide-react";
import BuilderModal from "./BuilderModal";

const Hero = () => {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-down">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Web Development</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            Build Frontend Websites with
            <span className="text-gradient block mt-2">Natural Language</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Needware empowers anyone to create stunning websites through simple conversation. 
            No coding required - just describe what you want, and watch it come to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-300">
            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4 h-auto"
              onClick={() => setIsBuilderOpen(true)}
            >
              <Wand2 className="w-5 h-5 mr-2" />
              Start Building Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-primary/30 hover:bg-primary/10">
              <Zap className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              No Coding Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Any Skill Level
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Lightning Fast
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Professional Results
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Builder Modal */}
      <BuilderModal open={isBuilderOpen} onOpenChange={setIsBuilderOpen} />
    </section>
  );
};

export default Hero;