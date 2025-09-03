import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Wand2, Code, Globe, CheckCircle, ArrowRight } from "lucide-react";

interface BuilderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BuilderModal = ({ open, onOpenChange }: BuilderModalProps) => {
  const [step, setStep] = useState(1);
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStartBuilding = async () => {
    if (!description.trim()) return;
    
    setIsGenerating(true);
    setStep(2);
    
    // Simulate AI generation process
    const steps = [
      { progress: 20, text: "Analyzing your requirements..." },
      { progress: 40, text: "Generating layout structure..." },
      { progress: 60, text: "Creating responsive design..." },
      { progress: 80, text: "Adding interactive elements..." },
      { progress: 100, text: "Finalizing your website..." }
    ];

    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setProgress(steps[i].progress);
    }

    setIsGenerating(false);
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    setDescription("");
    setProgress(0);
    setIsGenerating(false);
  };

  const examplePrompts = [
    "A modern portfolio website for a photographer with dark theme and image gallery",
    "A landing page for a SaaS product with pricing tables and testimonials",
    "An e-commerce site for handmade jewelry with product showcase",
    "A restaurant website with menu, reservations, and location info",
    "A personal blog with clean design and social media integration"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="w-6 h-6 text-primary" />
            Start Building Your Website
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Describe your website idea</h3>
              <p className="text-muted-foreground mb-4">
                Tell us what kind of website you want to create. Be as detailed or as simple as you like!
              </p>
              <Textarea
                placeholder="Example: I want a modern portfolio website for my design agency with a clean layout, project showcase, and contact form..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-32 resize-none"
              />
            </div>

            <div>
              <h4 className="font-medium mb-3">Need inspiration? Try these examples:</h4>
              <div className="grid grid-cols-1 gap-2">
                {examplePrompts.map((prompt, index) => (
                  <Card 
                    key={index} 
                    className="cursor-pointer hover:bg-primary/5 transition-colors border-primary/20"
                    onClick={() => setDescription(prompt)}
                  >
                    <CardContent className="p-3">
                      <p className="text-sm text-muted-foreground">{prompt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={handleStartBuilding}
                disabled={!description.trim()}
                className="btn-primary flex-1"
                size="lg"
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Generate My Website
              </Button>
              <Button variant="outline" onClick={() => onOpenChange(false)} size="lg">
                Cancel
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary animate-pulse" />
            </div>
            
            <h3 className="text-xl font-semibold">Creating your website...</h3>
            <p className="text-muted-foreground">
              Our AI is analyzing your requirements and building your custom website
            </p>

            <div className="max-w-md mx-auto space-y-3">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground">
                {progress < 20 && "Analyzing your requirements..."}
                {progress >= 20 && progress < 40 && "Generating layout structure..."}
                {progress >= 40 && progress < 60 && "Creating responsive design..."}
                {progress >= 60 && progress < 80 && "Adding interactive elements..."}
                {progress >= 80 && progress < 100 && "Finalizing your website..."}
                {progress === 100 && "Almost ready!"}
              </p>
            </div>

            <Card className="max-w-md mx-auto bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <p className="text-sm font-medium mb-2">Your Request:</p>
                <p className="text-sm text-muted-foreground italic">"{description}"</p>
              </CardContent>
            </Card>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h3 className="text-xl font-semibold">Your website is ready! 🎉</h3>
            <p className="text-muted-foreground">
              We've generated a complete, responsive website based on your description
            </p>

            <Card className="max-w-md mx-auto bg-gradient-to-br from-primary/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Responsive design generated</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Modern UI components added</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">SEO optimized</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Cross-browser compatible</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Button className="btn-primary flex-1" size="lg">
                <Globe className="w-4 h-4 mr-2" />
                Preview Website
              </Button>
              <Button variant="outline" className="flex-1" size="lg">
                <Code className="w-4 h-4 mr-2" />
                View Code
              </Button>
            </div>

            <div className="pt-4">
              <Button 
                variant="ghost" 
                onClick={handleReset}
                className="text-primary hover:bg-primary/10"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Create Another Website
              </Button>
            </div>

            <Card className="max-w-lg mx-auto bg-yellow-50 border-yellow-200">
              <CardContent className="p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Next steps:</strong> Sign up for a free account to save your website, 
                  make edits, and deploy it to the web!
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BuilderModal;