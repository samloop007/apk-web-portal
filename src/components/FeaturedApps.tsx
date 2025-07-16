import AppCard from "./AppCard";

const featuredApps = [
  {
    id: "1",
    name: "PhotoMaster Pro",
    developer: "Creative Studios",
    category: "Photography",
    rating: 4.8,
    downloads: "10M+",
    size: "45MB",
    icon: "",
    featured: true,
    verified: true
  },
  {
    id: "2",
    name: "GameBoost",
    developer: "Performance Labs",
    category: "Tools",
    rating: 4.7,
    downloads: "5M+",
    size: "28MB",
    icon: "",
    featured: true,
    verified: true
  },
  {
    id: "3",
    name: "MusicFlow",
    developer: "Audio Tech",
    category: "Music",
    rating: 4.9,
    downloads: "15M+",
    size: "67MB",
    icon: "",
    featured: true,
    verified: true
  },
  {
    id: "4",
    name: "FitTracker Pro",
    developer: "Health Apps Inc",
    category: "Health",
    rating: 4.6,
    downloads: "8M+",
    size: "38MB",
    icon: "",
    verified: true
  },
  {
    id: "5",
    name: "CodeEditor Plus",
    developer: "Dev Tools",
    category: "Productivity",
    rating: 4.8,
    downloads: "3M+",
    size: "52MB",
    icon: "",
    verified: true
  },
  {
    id: "6",
    name: "SecureVPN",
    developer: "Privacy Corp",
    category: "Tools",
    rating: 4.7,
    downloads: "12M+",
    size: "25MB",
    icon: "",
    verified: true
  }
];

const FeaturedApps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Apps</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hand-picked premium applications that deliver exceptional performance and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;