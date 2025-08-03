import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import aboutLab from "@/assets/about-lab.jpg";
import amalaLogo from "@/assets/amala-logo.jpg";

const About = () => {
  const achievements = [
    { number: "25+", label: "Premium Products" },
    { number: "1K+", label: "Happy Customers" }
  ];

  const certifications = [
    "FSSAI Licensed"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-primary text-brand-primary">
            About Amala Bioceuticals
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pioneering <span className="text-brand-primary">Natural Health</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over years, Amala Bioceuticals has been at the forefront of natural health innovation,
            creating premium nutraceutical products that bridge the gap between traditional wisdom and modern science.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src={amalaLogo} alt="Amala Bioceuticals" className="h-16 w-16" />
              <div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                <p className="text-brand-primary font-medium">Elevate Your Well-Being</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Amala Bioceuticals, we believe that nature holds the key to optimal health. Our mission is to
              harness the power of natural ingredients through cutting-edge research and development, creating
              products that not only meet but exceed the highest standards of quality and efficacy.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are committed to transparency, sustainability, and innovation in everything we do. From sourcing
              the finest raw materials to our state-of-the-art manufacturing processes, every step is carefully
              monitored to ensure you receive products you can trust.
            </p>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Our Certifications</h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-1">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img
                src={aboutLab}
                alt="Amala Bioceuticals Laboratory"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
