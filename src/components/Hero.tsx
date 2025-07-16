import { Download, Shield, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Dark Tools
              <span className="block text-foreground">
                Network
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Advanced tools for penetration testing, network analysis, and security research. 
              Professional grade utilities for ethical hackers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-strong">
                <Download className="mr-2 h-5 w-5" />
                Browse Tools
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/10">
                Access Network
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-foreground">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Access</h3>
              <p className="text-muted-foreground text-sm">Encrypted downloads and verified sources</p>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-foreground">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">High Performance</h3>
              <p className="text-muted-foreground text-sm">Optimized tools for maximum efficiency</p>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-foreground">
              <Lock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Anonymous</h3>
              <p className="text-muted-foreground text-sm">No tracking, no logs, complete privacy</p>
            </Card>
            
            <Card className="p-6 bg-card/30 backdrop-blur-sm border-border text-foreground">
              <Download className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Direct Downloads</h3>
              <p className="text-muted-foreground text-sm">No restrictions, instant access</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;