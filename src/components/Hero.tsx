import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-center">
          <span className="block bg-gradient-to-r from-white to-brand-accent bg-clip-text text-transparent">
            Elevate Your Well-Being
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
          Discover the power of nature with Amala Bioceuticals' premium range of scientifically formulated health supplements, allelopathic and nutraceutical products.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link to="/products">
            <Button
              size="lg"
              className="bg-white text-brand-primary hover:bg-white/90 shadow-medium text-lg px-8 py-6 h-auto"
            >
              Explore Our Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="lg"
            className="border border-brand-accent text-brand-accent hover:bg-transparent hover:text-brand-accent transition-all text-lg px-8 py-6 h-auto"
          >
            Learn About Us
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <ShieldCheck className="h-12 w-12 text-brand-accent mb-4" />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-white/80">Natural Ingredients</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Award className="h-12 w-12 text-brand-accent mb-4" />
            <h3 className="text-2xl font-bold mb-2">25+</h3>
            <p className="text-white/80">Premium Products</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Users className="h-12 w-12 text-brand-accent mb-4" />
            <h3 className="text-2xl font-bold mb-2">1K+</h3>
            <p className="text-white/80">Satisfied Customers</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <ChevronRight className="h-6 w-6 rotate-90" />
      </div>
    </section>
  );
};

export default Hero;
