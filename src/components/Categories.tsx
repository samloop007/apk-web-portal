import { 
  Gamepad2, 
  Camera, 
  Music, 
  Video, 
  Book, 
  ShoppingBag, 
  Utensils, 
  Car,
  Briefcase,
  Heart,
  Palette,
  Wrench
} from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Games", icon: Gamepad2, count: "2.5K", color: "from-red-500 to-pink-500" },
  { name: "Photography", icon: Camera, count: "890", color: "from-blue-500 to-cyan-500" },
  { name: "Music", icon: Music, count: "1.2K", color: "from-purple-500 to-violet-500" },
  { name: "Video", icon: Video, count: "670", color: "from-orange-500 to-red-500" },
  { name: "Education", icon: Book, count: "1.5K", color: "from-green-500 to-emerald-500" },
  { name: "Shopping", icon: ShoppingBag, count: "430", color: "from-pink-500 to-rose-500" },
  { name: "Food", icon: Utensils, count: "320", color: "from-yellow-500 to-orange-500" },
  { name: "Travel", icon: Car, count: "280", color: "from-indigo-500 to-blue-500" },
  { name: "Business", icon: Briefcase, count: "950", color: "from-gray-600 to-gray-800" },
  { name: "Health", icon: Heart, count: "540", color: "from-red-400 to-pink-400" },
  { name: "Art", icon: Palette, count: "720", color: "from-purple-400 to-pink-400" },
  { name: "Tools", icon: Wrench, count: "1.1K", color: "from-slate-500 to-gray-600" }
];

const Categories = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover apps across different categories. From games to productivity tools, 
            we have everything you need.
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