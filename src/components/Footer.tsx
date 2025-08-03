import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Globe,
  Heart,
  Send,
  Award,
  Shield,
  Leaf
} from "lucide-react";
import amalaLogo from "@/assets/amala-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const productCategories = [
    "Vitamins & Minerals",
    "Herbal Supplements", 
    "Protein & Fitness",
    "Digestive Health",
    "Immune Support",
    "Heart Health"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms of Service", 
    "Refund Policy",
    "Shipping Policy",
    "FAQ"
  ];

  const certifications = [
   
  ];

  return (
    <footer className="bg-gradient-to-br from-brand-primary to-brand-secondary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Health Tips & Offers
            </h3>
            <p className="text-white/80 mb-8 text-lg">
              Subscribe to our newsletter for the latest health insights, product updates, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button 
                className="bg-brand-accent text-black hover:bg-brand-accent/90 font-semibold"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src={amalaLogo} alt="Amala Bioceuticals" className="h-12 w-12" />
              <div>
                <h4 className="text-xl font-bold">Amala Bioceuticals</h4>
                <p className="text-sm text-white/70">Elevate Your Well-Being</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading the way in natural health solutions with over 1 years of expertise in 
              nutraceutical research and development.
            </p>
            
            {/* Certifications */}
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <cert.icon className="h-4 w-4 text-brand-accent" />
                  <span className="text-sm text-white/80">{cert.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-6 mt-8">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#"
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Product Categories</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <a 
                    href="#products"
                    className="text-white/80 hover:text-white transition-colors hover:underline"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80 text-sm">Jahagirpur</p>
                  <p className="text-white/80 text-sm">Lucknow,Uttar Pradesh,226501</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-accent" />
                <a href="tel:+919555433193" className="text-white/80 hover:text-white transition-colors">
                  +91 8318021515
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-accent" />
                <a href="mailto:info@amalabioceuticals.com" className="text-white/80 hover:text-white transition-colors">
                  amalabioceuticals@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white"
                  asChild
                >
                  <a href="https://www.instagram.com/amalabioceuticals?igsh=bDFyMzFkMWE5bTN6" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white"
                  asChild
                >
                  <a href="https://www.facebook.com/amala.bioceuticals" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white"
                  asChild
                >
                  <a href="https://wa.me/919452601372" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white"
                  asChild
                >
                  <a href="https://amalabioceuticals.com" target="_blank" rel="noopener noreferrer">
                    <Globe className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} Amala Bioceuticals. All rights reserved. 
              <span className="inline-flex items-center ml-2">
                Designed and Managed by:Abhishek Verma
              </span>
            </p>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <span>Trusted by 1K+ customers</span>
              <Separator orientation="vertical" className="h-4 bg-white/30" />
              <span>1+ years of excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;