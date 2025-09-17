import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-muted">
      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start your AR travel journey? Get in touch with our team for support, 
            partnerships, or to learn more about our immersive experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
            <p className="text-muted-foreground">hello@cluetivity.com</p>
            <p className="text-muted-foreground">support@cluetivity.com</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
            <p className="text-muted-foreground">Mon-Fri 9AM-6PM EST</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
            <p className="text-muted-foreground">123 Innovation Street</p>
            <p className="text-muted-foreground">San Francisco, CA 94105</p>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="max-w-md mx-auto text-center">
          <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
          <div className="flex gap-2">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button className="bg-primary hover:opacity-90 text-primary-foreground">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer Bottom */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold text-primary">Cluetivity</div>
              <span className="text-muted-foreground">© 2024 All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow us:</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                  <Youtube className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;