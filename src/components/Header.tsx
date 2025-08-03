import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import amalaLogo from "@/assets/amala-logo.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4">
        < div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={amalaLogo} alt="Amala Bioceuticals Logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-brand-primary">Amala Bioceuticals</h1>
              <p className="text-xs text-muted-foreground">Elevate Your Well-Being</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-brand-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
         <div className="hidden lg:flex items-center space-x-4">
  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
    <Phone className="h-4 w-4" />
    <span>+918318021515</span>
  </div>

  <a href="#contact" className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-4 py-2 rounded-sm text-sm flex items-center">
    <Mail className="h-4 w-4 mr-2" />
    Contact Us
  </a>
</div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t bg-background">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-brand-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
             
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;<div className="hidden lg:flex items-center space-x-4">
  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
    <Phone className="h-4 w-4" />
    <span>+918318021515</span>
  </div>

  <a href="#contact" className="border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-4 py-2 rounded-sm text-sm flex items-center">
    <Mail className="h-4 w-4 mr-2" />
    Contact Us
  </a>
</div>