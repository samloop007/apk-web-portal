import AppCard from "./AppCard";

const featuredApps = [
  {
    id: "1",
    name: "Metasploit Framework",
    developer: "Rapid7",
    category: "Penetration Testing",
    rating: 4.9,
    downloads: "250K+",
    size: "128MB",
    icon: "",
    featured: true,
    verified: true
  },
  {
    id: "2",
    name: "Wireshark",
    developer: "Wireshark Foundation",
    category: "Network Analysis",
    rating: 4.8,
    downloads: "180K+",
    size: "85MB",
    icon: "",
    featured: true,
    verified: true
  },
  {
    id: "3",
    name: "Nmap",
    developer: "Nmap Project",
    category: "Network Scanner",
    rating: 4.7,
    downloads: "320K+",
    size: "45MB",
    icon: "",
    featured: true,
    verified: true
  },
  {
    id: "4",
    name: "Burp Suite",
    developer: "PortSwigger",
    category: "Web Security",
    rating: 4.6,
    downloads: "95K+",
    size: "156MB",
    icon: "",
    verified: true
  },
  {
    id: "5",
    name: "John the Ripper",
    developer: "Openwall",
    category: "Password Cracking",
    rating: 4.5,
    downloads: "75K+",
    size: "32MB",
    icon: "",
    verified: true
  },
  {
    id: "6",
    name: "SQLMap",
    developer: "SQLMap Dev Team",
    category: "SQL Injection",
    rating: 4.4,
    downloads: "65K+",
    size: "28MB",
    icon: "",
    verified: true
  }
];

const FeaturedApps = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-primary">Elite Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional-grade hacking tools used by penetration testers and security researchers worldwide.
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