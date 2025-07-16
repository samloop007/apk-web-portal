import { Download, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface AppCardProps {
  app: {
    id: string;
    name: string;
    developer: string;
    category: string;
    rating: number;
    downloads: string;
    size: string;
    icon: string;
    featured?: boolean;
    verified?: boolean;
  };
}

const AppCard = ({ app }: AppCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* App Icon */}
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-soft">
              {app.name.charAt(0)}
            </div>
            {app.verified && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* App Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {app.name}
                </h3>
                <p className="text-sm text-muted-foreground">{app.developer}</p>
              </div>
              {app.featured && (
                <Badge className="bg-gradient-primary text-primary-foreground border-0">
                  Featured
                </Badge>
              )}
            </div>

            {/* Rating & Category */}
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{app.rating}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {app.category}
              </Badge>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
              <span>{app.downloads} downloads</span>
              <span>{app.size}</span>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <Button 
          className="w-full mt-4 bg-gradient-primary hover:opacity-90 transition-opacity shadow-soft"
          size="sm"
        >
          <Download className="w-4 h-4 mr-2" />
          Download APK
        </Button>
      </div>
    </Card>
  );
};

export default AppCard;