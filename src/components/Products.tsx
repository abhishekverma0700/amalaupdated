import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Amalapandsr from "@/assets/Amalapandsr.jpg";
import AmalavitQ10 from "@/assets/AmalavitQ10.jpg";
import AmalacalK27 from "@/assets/AmalacalK27.jpg";
import AmalavitGold from "@/assets/AmalavitGold.jpg";
import AmalavitOD from "@/assets/AmalavitOD.jpg";

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "AMALAVIT-OD",
      description: "Multivitamin, Multimineral & Antioxident Softgel Capsules.",
      price: "₹84",
      originalPrice: "₹168",
      image: AmalavitOD,
      rating: 4.8,
      reviews: 124,
      category: "Nutraceuticals",
      benefits: ["Power", "Immunity", "Antioxidant"]
    },
    {
      id: 2,
      name: "AMALAVIT Q10",
      description: "Co Enzyme Q10, Myo-inositol,L-Carnitine,Omega 3 Fatty Acid & Vitamin D3 Tablets.",
      price: "₹114",
      originalPrice: "₹228",
      image: AmalavitQ10,
      rating: 4.9,
      reviews: 89,
      category: "Nutraceuticals",
      benefits: ["Heart Health", "Cellular Energy", "Improves Fertility"]
    },
    {
      id: 3,
      name: "AMALAVIT-GOLD",
      description: "Forifield With Kaunch beej,Ashwagandha & Shilajit Capsules.",
      price: "₹109",
      originalPrice: "₹218",
      image: AmalavitGold,
      rating: 4.7,
      reviews: 203,
      category: "Power Booster",
      benefits: ["Energy", "Strength", "Stamina"]
    },
    {
      id: 4,
      name: "AMALACAL K27",
      description: "Calcitriol,Calcium Carbonate,Folate Soft Gelatin Capsules.",
      price: "₹114",
      originalPrice: "₹228",
      image: AmalacalK27,
      rating: 4.6,
      reviews: 67,
      category: "Calcium",
      benefits: ["Supports Muscles", "Joints", "Immune Health"]
    },
    {
      id: 5,
      name: "AMALAPAN DSR",
      description: "Pantoprazole Gastro-resistant & Domperidone Prolonged Release Capsules I.P.",
      price: "₹69",
      originalPrice: "₹139",
      image: Amalapandsr,
      rating: 4.5,
      reviews: 145,
      category: "Gastro-resistant",
      benefits: ["Digestion", "Gut Health", "Gastro-resistant"]
    }
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, products.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  const calculateDiscount = (original: string, current: string) => {
    const originalPrice = parseInt(original.replace('₹', '').replace(',', ''));
    const currentPrice = parseInt(current.replace('₹', '').replace(',', ''));
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

 return (
    <section id="products" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-primary text-brand-primary">
            Our Product Range
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Premium <span className="text-brand-primary">Health Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our scientifically formulated range of nutraceuticals, designed to support your health and wellness journey with the finest natural ingredients.
          </p>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-12 w-12 rounded-full shadow-medium bg-background border-brand-primary hover:bg-brand-primary hover:text-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-12 w-12 rounded-full shadow-medium bg-background border-brand-primary hover:bg-brand-primary hover:text-white"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Product Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {products.map((product) => (
                <div key={product.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-soft">
                    <CardHeader className="relative p-6">
                      {/* Discount Badge */}
                      <Badge className="absolute top-4 left-4 z-10 bg-brand-accent text-black font-bold">
                        {calculateDiscount(product.originalPrice, product.price)}% OFF
                      </Badge>

                      {/* Action Buttons */}
                      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="icon" variant="outline" className="h-8 w-8 bg-white/90 hover:bg-white">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="h-8 w-8 bg-white/90 hover:bg-white">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Product Image */}
                      <Link to="/products">
                        <div className="aspect-square overflow-hidden rounded-lg mb-4 cursor-pointer">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>

                      {/* Category Badge */}
                      <Badge variant="secondary" className="w-fit mb-2">
                        {product.category}
                      </Badge>

                      <CardTitle className="text-xl mb-2 group-hover:text-brand-primary transition-colors">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {product.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-6 pb-6">
                      {/* Benefits */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {product.benefits.map((benefit: string, index: number) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating)
                                  ? "fill-brand-accent text-brand-accent"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">({product.reviews})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-brand-primary">{product.price}</span>
                        <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                      </div>

                      {/* Add to Cart Button */}
                     {/* <Button className="w-full bg-brand-primary hover:bg-brand-primary-light text-white shadow-soft">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>*/}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? "bg-brand-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white px-8"
            >
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;