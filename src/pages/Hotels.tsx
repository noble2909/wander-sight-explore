import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Car, Coffee, Star, Eye, ArrowRight } from "lucide-react";
import marinaBayImage from "@/assets/marina-bay-sands.jpg";
import burjAlArabImage from "@/assets/burj-al-arab.jpg";
import santoriniImage from "@/assets/santorini-hotel.jpg";
import maldivesImage from "@/assets/maldives-resort.jpg";
import swissImage from "@/assets/swiss-chalet.jpg";
import tokyoImage from "@/assets/tokyo-hotel.jpg";

const Hotels = () => {
  const hotels = [
    {
      id: 1,
      name: "Marina Bay Sands",
      location: "Singapore",
      image: marinaBayImage,
      rating: 4.9,
      reviews: 1234,
      price: "$299",
      arFeatures: ["360° Room Tours", "Virtual Concierge", "Amenity Showcase"],
      amenities: ["Pool", "Spa", "Restaurant", "Gym"],
      roomTypes: ["Ocean View Suite", "Garden Villa", "Presidential Suite"],
      description: "Luxury beachfront resort with stunning ocean views and world-class amenities."
    },
    {
      id: 2,
      name: "Burj Al Arab",
      location: "Dubai, UAE",
      image: burjAlArabImage,
      rating: 4.8,
      reviews: 892,
      price: "$189",
      arFeatures: ["City View AR", "Room Customization", "Tech Integration"],
      amenities: ["Rooftop Bar", "Business Center", "Valet", "Concierge"],
      roomTypes: ["City View Room", "Executive Suite", "Tech Suite"],
      description: "Modern hotel in the heart of Tokyo with cutting-edge technology and city views."
    },
    {
      id: 3,
      name: "Santorini Cave Hotel",
      location: "Santorini, Greece",
      image: santoriniImage,
      rating: 4.7,
      reviews: 567,
      price: "$349",
      arFeatures: ["Mountain AR", "Ski Slope Preview", "Weather Integration"],
      amenities: ["Ski Access", "Fireplace", "Hot Tub", "Restaurant"],
      roomTypes: ["Mountain View Room", "Fireplace Suite", "Cabin"],
      description: "Cozy mountain retreat with direct ski access and breathtaking mountain views."
    },
    {
      id: 4,
      name: "Maldives Resort",
      location: "Maldives",
      image: maldivesImage,
      rating: 4.9,
      reviews: 743,
      price: "$429",
      arFeatures: ["Sunset AR", "Caldera Views", "Cultural Stories"],
      amenities: ["Infinity Pool", "Spa", "Wine Cellar", "Sunset Deck"],
      roomTypes: ["Caldera Suite", "Cave Room", "Honeymoon Suite"],
      description: "Exclusive boutique hotel perched on the cliffs with stunning sunset views."
    },
    {
      id: 5,
      name: "Swiss Alpine Chalet",
      location: "Swiss Alps",
      image: swissImage,
      rating: 4.8,
      reviews: 1056,
      price: "$399",
      arFeatures: ["Desert AR", "Luxury Preview", "Cultural Experience"],
      amenities: ["Private Beach", "Golf Course", "Multiple Pools", "Spa"],
      roomTypes: ["Desert View Room", "Beach Villa", "Royal Suite"],
      description: "Luxurious desert resort combining traditional Arabic hospitality with modern luxury."
    },
    {
      id: 6,
      name: "Tokyo Sky Hotel",
      location: "Tokyo, Japan",
      image: tokyoImage,
      rating: 4.7,
      reviews: 445,
      price: "$279",
      arFeatures: ["Historical AR", "Wine Tour Preview", "Architecture Stories"],
      amenities: ["Wine Cellar", "Gardens", "Pool", "Restaurant"],
      roomTypes: ["Heritage Room", "Tower Suite", "Garden View"],
      description: "Restored 16th-century manor house in the heart of Tuscany's wine country."
    }
  ];

  const filters = [
    "All Hotels",
    "Luxury Resorts",
    "Boutique Hotels",
    "Business Hotels",
    "Family Friendly",
    "Eco-Friendly"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-sky py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              360° Hotel Previews
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Step inside hotels before you book. Experience rooms, amenities, and views 
              through immersive AR technology. No more booking surprises.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter, index) => (
                <Badge
                  key={index}
                  variant={index === 0 ? "default" : "secondary"}
                  className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                    index === 0 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hotels Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden border-0 shadow-travel hover:shadow-ar transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/2">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary text-secondary-foreground">
                      360° AR Preview
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Eye className="w-4 h-4 mr-2" />
                      Virtual Tour
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{hotel.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="text-sm font-medium">{hotel.rating}</span>
                      <span className="text-xs text-muted-foreground">({hotel.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {hotel.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {hotel.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">AR Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {hotel.arFeatures.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">Amenities:</div>
                    <div className="flex flex-wrap gap-2">
                      {hotel.amenities.map((amenity, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">Room Types:</div>
                    <div className="space-y-1">
                      {hotel.roomTypes.map((room, index) => (
                        <div key={index} className="text-sm text-muted-foreground">
                          • {room}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-foreground">{hotel.price}</span>
                      <span className="text-sm text-muted-foreground">/night</span>
                    </div>
                    <Button className="bg-gradient-ocean hover:opacity-90 text-white">
                      Book Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose AR Hotel Previews?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Revolutionary technology that transforms how you choose accommodations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-8 h-8 text-primary" />,
                title: "See Before You Stay",
                description: "Walk through actual rooms and explore amenities virtually."
              },
              {
                icon: <Star className="w-8 h-8 text-secondary" />,
                title: "Eliminate Surprises", 
                description: "Know exactly what to expect before you arrive."
              },
              {
                icon: <ArrowRight className="w-8 h-8 text-accent" />,
                title: "Book with Confidence",
                description: "Make informed decisions with complete transparency."
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
    </div>
  );
};

export default Hotels;