import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";
import colosseumImage from "@/assets/colosseum-rome.jpg";
import machupicchImage from "@/assets/machu-picchu.jpg";
import tajmahalImage from "@/assets/taj-mahal.jpg";
import greatwallImage from "@/assets/great-wall-china.jpg";
import pyramidsImage from "@/assets/pyramids-giza.jpg";
import eiffeltowerImage from "@/assets/eiffel-tower.jpg";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Colosseum, Rome",
      location: "Rome, Italy",
      image: colosseumImage,
      arFeatures: ["Historical Timeline", "3D Reconstruction", "Gladiator Battles"],
      duration: "45 min",
      rating: 4.9,
      visitors: "2.3M",
      description: "Step into ancient Rome with AR overlays showing the Colosseum in its full glory."
    },
    {
      id: 2,
      name: "Machu Picchu",
      location: "Peru",
      image: machupicchImage,
      arFeatures: ["Inca Civilization", "Sacred Rituals", "Ancient Astronomy"],
      duration: "60 min", 
      rating: 4.8,
      visitors: "1.8M",
      description: "Discover the mysteries of the Inca empire through immersive AR storytelling."
    },
    {
      id: 3,
      name: "Taj Mahal",
      location: "Agra, India",
      image: tajmahalImage,
      arFeatures: ["Love Story", "Construction Timeline", "Architectural Details"],
      duration: "40 min",
      rating: 4.9,
      visitors: "3.1M",
      description: "Experience the greatest love story in architecture with detailed AR narratives."
    },
    {
      id: 4,
      name: "Great Wall",
      location: "Beijing, China",
      image: greatwallImage,
      arFeatures: ["Dynasty History", "Defense Systems", "Construction Process"],
      duration: "55 min",
      rating: 4.7,
      visitors: "2.9M",
      description: "Walk along the Great Wall and witness centuries of Chinese history unfold."
    },
    {
      id: 5,
      name: "Pyramids of Giza",
      location: "Cairo, Egypt",
      image: pyramidsImage,
      arFeatures: ["Pharaoh Stories", "Construction Mysteries", "Star Alignment"],
      duration: "50 min",
      rating: 4.8,
      visitors: "2.5M",
      description: "Uncover the secrets of ancient Egypt with cutting-edge AR technology."
    },
    {
      id: 6,
      name: "Eiffel Tower",
      location: "Paris, France", 
      image: eiffeltowerImage,
      arFeatures: ["Engineering Marvel", "Historical Events", "Night Illumination"],
      duration: "35 min",
      rating: 4.9,
      visitors: "4.2M",
      description: "See Paris from a new perspective with interactive AR experiences."
    }
  ];

  const categories = [
    "All Destinations",
    "Ancient Wonders",
    "Modern Landmarks", 
    "Natural Sites",
    "Cultural Heritage",
    "Religious Sites"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-sky py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              AR Destinations
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore the world's most iconic landmarks through augmented reality. 
              Experience history, culture, and architecture like never before.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "secondary"}
                  className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                    index === 0 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden border-0 shadow-travel hover:shadow-ar transition-all duration-300">
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">
                    AR Experience
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  ⭐ {destination.rating}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {destination.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {destination.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {destination.visitors}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-foreground mb-2">AR Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {destination.arFeatures.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-ocean hover:opacity-90 text-white">
                  Start AR Tour
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Don't See Your Dream Destination?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're constantly adding new AR experiences. Request your favorite destination 
            and be among the first to explore it virtually.
          </p>
          <Button className="bg-primary hover:opacity-90 text-primary-foreground">
            Request Destination
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Destinations;