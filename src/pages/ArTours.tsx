import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Star, Users, MapPin, ArrowRight } from "lucide-react";
import arToursImage from "@/assets/ar-tours-modern.jpg";

const ArTours = () => {
  const tours = [
    {
      id: 1,
      name: "Ancient Rome Walking Tour",
      location: "Rome, Italy",
      image: arToursImage,
      guide: "Dr. Maria Rossi",
      duration: "2.5 hours",
      rating: 4.9,
      participants: 12,
      price: "$49",
      highlights: ["Colosseum AR", "Forum Reconstruction", "Gladiator Stories", "Emperor's Palace"],
      difficulty: "Easy",
      language: "English, Italian",
      description: "Walk through ancient Rome as it was 2000 years ago with expert AR reconstruction.",
      nextTour: "Today 3:00 PM"
    },
    {
      id: 2,
      name: "Secrets of Machu Picchu",
      location: "Cusco, Peru",
      image: arToursImage,
      guide: "Carlos Mendoza",
      duration: "3 hours",
      rating: 4.8,
      participants: 8,
      price: "$89",
      highlights: ["Inca Astronomy", "Sacred Temples", "Agricultural Terraces", "Spiritual Rituals"],
      difficulty: "Moderate",
      language: "English, Spanish, Quechua",
      description: "Discover the mysteries of the Inca civilization through immersive AR storytelling.",
      nextTour: "Tomorrow 9:00 AM"
    },
    {
      id: 3,
      name: "Pharaohs' Egypt Experience",
      location: "Giza, Egypt",
      image: arToursImage,
      guide: "Dr. Ahmed Hassan",
      duration: "4 hours",
      rating: 4.9,
      participants: 10,
      price: "$79",
      highlights: ["Pyramid Interior", "Sphinx Secrets", "Mummy Process", "Hieroglyph Reading"],
      difficulty: "Easy",
      language: "English, Arabic",
      description: "Enter the world of ancient Egypt with AR that reveals hidden chambers and lost history.",
      nextTour: "Tomorrow 8:00 AM"
    },
    {
      id: 4,
      name: "Samurai Japan Journey",
      location: "Kyoto, Japan",
      image: arToursImage,
      guide: "Hiroshi Tanaka",
      duration: "3.5 hours",
      rating: 4.7,
      participants: 6,
      price: "$95",
      highlights: ["Samurai Training", "Tea Ceremony", "Zen Gardens", "Traditional Arts"],
      difficulty: "Moderate",
      language: "English, Japanese",
      description: "Experience the way of the samurai through AR that brings feudal Japan to life.",
      nextTour: "Today 2:00 PM"
    },
    {
      id: 5,
      name: "Viking Saga Adventure",
      location: "Bergen, Norway",
      image: arToursImage,
      guide: "Erik Nordahl",
      duration: "2 hours",
      rating: 4.6,
      participants: 15,
      price: "$65",
      highlights: ["Viking Ships", "Norse Gods", "Trading Routes", "Battle Tactics"],
      difficulty: "Easy",
      language: "English, Norwegian",
      description: "Sail with the Vikings through AR that recreates their legendary journeys.",
      nextTour: "Tomorrow 11:00 AM"
    },
    {
      id: 6,
      name: "Maya Civilization Deep Dive",
      location: "Chichen Itza, Mexico",
      image: arToursImage,
      guide: "Dr. Isabella Cruz",
      duration: "3 hours",
      rating: 4.8,
      participants: 12,
      price: "$72",
      highlights: ["El Castillo AR", "Ball Game Court", "Observatory", "Mayan Calendar"],
      difficulty: "Moderate",
      language: "English, Spanish, Maya",
      description: "Explore the advanced Maya civilization through AR that reveals their scientific achievements.",
      nextTour: "Today 4:30 PM"
    }
  ];

  const tourTypes = [
    "All Tours",
    "Historical",
    "Archaeological", 
    "Cultural",
    "Adventure",
    "Educational"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Guided AR Tours
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join expert guides on immersive AR tours that bring history to life. 
              Small groups, personalized experiences, and incredible stories.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {tourTypes.map((type, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`px-4 py-2 text-sm cursor-pointer transition-colors border-white/30 ${
                    index === 0 
                      ? "bg-white text-foreground" 
                      : "text-white hover:bg-white hover:text-foreground"
                  }`}
                >
                  {type}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden border-0 shadow-travel hover:shadow-ar transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-2/5">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      Live AR Guide
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Play className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-3/5 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {tour.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {tour.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      Max {tour.participants}
                    </div>
                    <div className="text-primary font-medium">
                      {tour.difficulty}
                    </div>
                    <div className="text-accent font-medium">
                      {tour.language.split(',')[0]}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">Guide: {tour.guide}</div>
                    <div className="text-xs text-muted-foreground mb-2">Next tour: {tour.nextTour}</div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">Tour Highlights:</div>
                    <div className="flex flex-wrap gap-2">
                      {tour.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground">{tour.price}</span>
                      <span className="text-sm text-muted-foreground">/person</span>
                    </div>
                    <Button className="bg-gradient-ocean hover:opacity-90 text-white">
                      Book Tour
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Guide Features */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose Guided AR Tours?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert guides combined with cutting-edge AR technology create unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Expert Guides",
                description: "PhD historians and local experts bring stories to life."
              },
              {
                icon: <Star className="w-8 h-8 text-secondary" />,
                title: "Small Groups",
                description: "Intimate experiences with personalized attention."
              },
              {
                icon: <Play className="w-8 h-8 text-accent" />,
                title: "Live AR",
                description: "Real-time AR content synchronized with your guide."
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "Flexible Timing",
                description: "Multiple daily tours to fit your schedule."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Guide CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Become an AR Tour Guide
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Share your expertise and passion for history through our AR platform. 
            Join our network of expert guides from around the world.
          </p>
          <Button className="bg-gradient-purple hover:opacity-90 text-secondary-foreground">
            Apply to Guide
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ArTours;