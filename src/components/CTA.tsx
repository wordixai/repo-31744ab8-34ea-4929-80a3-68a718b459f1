import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";
import BuilderModal from "./BuilderModal";

const CTA = () => {
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <Card className="relative overflow-hidden card-glow border-primary/20 max-w-4xl mx-auto">
          {/* Background Elements */}
          <div className="absolute inset-0 hero-gradient opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10"></div>
          
          <CardContent className="relative z-10 p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in-down">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              Transform Your Ideas Into
              <span className="text-gradient block mt-2">Reality Today</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Join thousands of creators who are already building amazing websites with Needware. 
              Your next great idea is just a conversation away.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button 
                size="lg" 
                className="btn-primary text-lg px-8 py-4 h-auto"
                onClick={() => setIsBuilderOpen(true)}
              >
                Start Building for Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-primary/30 hover:bg-primary/10">
                Schedule a Demo
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6 animate-fade-in-up delay-500">
              No credit card required • Free to start • 5-minute setup
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Builder Modal */}
      <BuilderModal open={isBuilderOpen} onOpenChange={setIsBuilderOpen} />
    </section>
  );
};

export default CTA;