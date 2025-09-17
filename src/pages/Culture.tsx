import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Music, Globe, ArrowRight } from "lucide-react";
import japaneseImage from "@/assets/japanese-culture.jpg";
import indianImage from "@/assets/indian-culture.jpg";
import spanishImage from "@/assets/spanish-culture.jpg";

const Culture = () => {
  const experiences = [
    {
      id: 1,
      name: "Carnival of Rio",
      location: "Rio de Janeiro, Brazil",
      image: spanishImage,
      type: "Festival",
      date: "February 2024",
      participants: "2M+",
      arFeatures: ["Samba Dancing", "Parade Floats", "Costume Details", "Music Sync"],
      duration: "4 hours",
      rating: 4.9,
      description: "Experience the world's most famous carnival with immersive AR that puts you in the middle of the celebration."
    },
    {
      id: 2,
      name: "Japanese Tea Ceremony",
      location: "Kyoto, Japan",
      image: japaneseImage,
      type: "Tradition",
      date: "Year Round",
      participants: "50K+",
      arFeatures: ["Step-by-step Guide", "Historical Context", "Zen Philosophy", "Proper Etiquette"],
      duration: "45 min",
      rating: 4.8,
      description: "Learn the ancient art of Japanese tea ceremony with detailed AR guidance and cultural insights."
    },
    {
      id: 3,
      name: "Diwali Festival",
      location: "Mumbai, India",
      image: indianImage,
      type: "Religious",
      date: "October/November",
      participants: "1B+",
      arFeatures: ["Light Displays", "Fireworks AR", "Rangoli Patterns", "Prayer Rituals"],
      duration: "3 hours",
      rating: 4.9,
      description: "Celebrate the Festival of Lights with AR that illuminates the spiritual and cultural significance."
    },
    {
      id: 4,
      name: "Flamenco Experience",
      location: "Seville, Spain",
      image: spanishImage,
      type: "Dance",
      date: "Year Round",
      participants: "100K+",
      arFeatures: ["Dance Moves", "Guitar Techniques", "Emotional Expression", "Cultural History"],
      duration: "60 min",
      rating: 4.7,
      description: "Feel the passion of flamenco through AR that teaches you the moves and the cultural story behind them."
    },
    {
      id: 5,
      name: "Aboriginal Dreamtime",
      location: "Uluru, Australia",
      image: japaneseImage,
      type: "Spiritual",
      date: "Year Round",
      participants: "25K+",
      arFeatures: ["Creation Stories", "Rock Art", "Sacred Sites", "Traditional Music"],
      duration: "90 min",
      rating: 4.8,
      description: "Journey through 65,000 years of Aboriginal culture with respectful AR storytelling."
    },
    {
      id: 6,
      name: "Viking Heritage",
      location: "Bergen, Norway",
      image: indianImage,
      type: "Historical",
      date: "Year Round",
      participants: "75K+",
      arFeatures: ["Viking Ships", "Norse Mythology", "Battle Scenes", "Daily Life"],
      duration: "75 min",
      rating: 4.6,
      description: "Sail with the Vikings through AR that recreates their epic journeys and rich culture."
    }
  ];

  const categories = [
    "All Experiences",
    "Festivals",
    "Traditions",
    "Religious",
    "Dance & Music",
    "Historical"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-sunset py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cultural Immersion
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience authentic cultural moments from around the world. Join festivals, 
              learn traditions, and connect with diverse cultures through AR.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`px-4 py-2 text-sm cursor-pointer transition-colors border-white/30 ${
                    index === 0 
                      ? "bg-white text-foreground" 
                      : "text-white hover:bg-white hover:text-foreground"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden border-0 shadow-travel hover:shadow-ar transition-all duration-300">
              <div className="relative">
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-secondary text-secondary-foreground">
                    {experience.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-sm">
                  ⭐ {experience.rating}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="outline" className="bg-white/90 text-foreground border-0">
                    AR Cultural Experience
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{experience.location}</span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {experience.name}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {experience.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {experience.participants}
                  </div>
                  <div className="flex items-center gap-1">
                    <Music className="w-4 h-4" />
                    {experience.duration}
                  </div>
                  <div className="text-primary font-medium">
                    Interactive AR
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-medium text-foreground mb-2">AR Features:</div>
                  <div className="flex flex-wrap gap-2">
                    {experience.arFeatures.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-purple hover:opacity-90 text-secondary-foreground">
                  Join Experience
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Cultural Respect Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Respectful Cultural Exploration
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AR experiences are developed in partnership with local communities 
              to ensure authentic and respectful cultural representation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Community Partners",
                description: "Working directly with local cultural experts and community leaders."
              },
              {
                icon: <Globe className="w-8 h-8 text-secondary" />,
                title: "Authentic Stories",
                description: "Stories told by the people who live and breathe these traditions."
              },
              {
                icon: <Music className="w-8 h-8 text-accent" />,
                title: "Cultural Education",
                description: "Learn the deeper meaning and significance behind each experience."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Share Your Culture
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Are you a cultural expert or community leader? Partner with us to share 
            your traditions with the world through respectful AR experiences.
          </p>
          <Button className="bg-gradient-purple hover:opacity-90 text-secondary-foreground">
            Become a Cultural Partner
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Culture;