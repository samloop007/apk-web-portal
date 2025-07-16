import { 
  Shield, 
  Wifi, 
  Lock, 
  Eye, 
  Code, 
  Search, 
  Zap, 
  Terminal,
  Network,
  Key,
  Bug,
  Fingerprint
} from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Penetration", icon: Shield, count: "420", color: "from-primary to-primary-glow" },
  { name: "Network", icon: Wifi, count: "380", color: "from-primary to-primary-glow" },
  { name: "Crypto", icon: Lock, count: "290", color: "from-primary to-primary-glow" },
  { name: "OSINT", icon: Eye, count: "250", color: "from-primary to-primary-glow" },
  { name: "Exploits", icon: Code, count: "180", color: "from-primary to-primary-glow" },
  { name: "Forensics", icon: Search, count: "120", color: "from-primary to-primary-glow" },
  { name: "Payloads", icon: Zap, count: "95", color: "from-primary to-primary-glow" },
  { name: "Shells", icon: Terminal, count: "340", color: "from-primary to-primary-glow" },
  { name: "Proxies", icon: Network, count: "280", color: "from-primary to-primary-glow" },
  { name: "Keyloggers", icon: Key, count: "150", color: "from-primary to-primary-glow" },
  { name: "Malware", icon: Bug, count: "75", color: "from-primary to-primary-glow" },
  { name: "Biometrics", icon: Fingerprint, count: "60", color: "from-primary to-primary-glow" }
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Tool Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional hacking tools and utilities organized by specialization. 
            Choose your weapon of choice.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card 
              key={category.name}
              className="group cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border/50"
            >
              <div className="p-6 text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-soft`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {category.count} apps
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;