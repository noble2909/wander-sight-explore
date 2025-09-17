import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Camera, Globe, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/ar-travel-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "AR Landmark Exploration",
      description: "Discover historic sites with immersive AR overlays and cultural context.",
      link: "/destinations"
    },
    {
      icon: <Camera className="w-8 h-8 text-secondary" />,
      title: "360° Hotel Previews",
      description: "Experience hotels virtually before booking with interactive room tours.",
      link: "/hotels"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Cultural Immersion",
      description: "Join virtual festivals and cultural experiences from anywhere.",
      link: "/culture"
    }
  ];

  const stats = [
    { number: "50+", label: "AR Destinations" },
    { number: "10K+", label: "Hotel Previews" },
    { number: "25+", label: "Cultural Tours" },
    { number: "98%", label: "Booking Confidence" }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover with
            <br />
            <span className="text-secondary">Cluetivity</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience destinations, hotels, and cultures in augmented reality. 
            Make confident travel decisions with immersive virtual previews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-purple hover:opacity-90 text-secondary-foreground text-lg px-8 py-4">
              Start AR Experience
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Revolutionary AR Travel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Break the limitations of traditional travel research with cutting-edge augmented reality technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 hover:shadow-travel transition-all duration-300 border-0 bg-card">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Link to={feature.link}>
                <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0">
                  Explore Feature
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-sky py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three simple steps to transform your travel planning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              step: "01",
              title: "Choose Destination",
              description: "Browse our AR-enabled destinations and select places you want to explore."
            },
            {
              step: "02", 
              title: "Experience in AR",
              description: "Use your device to virtually visit landmarks, hotels, and cultural sites."
            },
            {
              step: "03",
              title: "Book with Confidence",
              description: "Make informed decisions and book your trip knowing exactly what to expect."
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-ocean rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Travel?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the power of AR travel experiences.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
            <span className="ml-2 text-lg">4.9/5 from 2,000+ reviews</span>
          </div>
          <Button size="lg" className="bg-gradient-purple hover:opacity-90 text-secondary-foreground text-lg px-8 py-4">
            Start Your AR Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;