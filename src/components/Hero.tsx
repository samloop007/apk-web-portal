import { Download, Star, Shield, Zap } from "lucide-react";
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
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium APK
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Store
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Discover, download, and enjoy premium Android applications. 
              Safe, verified, and always up-to-date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong">
                <Download className="mr-2 h-5 w-5" />
                Browse Apps
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Shield className="h-8 w-8 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Verified Safe</h3>
              <p className="text-white/80 text-sm">All apps are scanned and verified for security</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Zap className="h-8 w-8 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast Downloads</h3>
              <p className="text-white/80 text-sm">High-speed servers for instant downloads</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Star className="h-8 w-8 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-white/80 text-sm">Curated collection of top-rated apps</p>
            </Card>
            
            <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <Download className="h-8 w-8 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Easy Install</h3>
              <p className="text-white/80 text-sm">One-click installation process</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;