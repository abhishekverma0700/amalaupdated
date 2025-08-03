import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Amalapandsr from "@/assets/Amalapandsr.jpg";
import AmalavitQ10 from "@/assets/AmalavitQ10.jpg";
import AmalacalK27 from "@/assets/AmalacalK27.jpg";
import AmalavitGold from "@/assets/AmalavitGold.jpg";
import AmalavitOD from "@/assets/AmalavitOD.jpg";
import AmalagesicSp from "@/assets/AmalagesicSp.jpg";
import PilesCapsules from "@/assets/Pilescapsules.jpg";
import AmalaCal from "@/assets/Amalacal.jpg";
import AmalavitSyrup from "@/assets/AmalavitSyrup.jpg";
import RollOnOil from "@/assets/RollOnOil.jpg";
import AmalasonSyrup from "@/assets/AmalasonSyrup.jpg";
import AmalaferXT from "@/assets/AmalaferXT.jpg";
import Amalaliv5G from "@/assets/Amalaliv5g.jpg";
import AmalarabDSR from "@/assets/AmalarabDSR.jpg";


import productVitamins from "@/assets/product-vitamins.jpg";
import productHerbal from "@/assets/product-herbal.jpg";
import productProtein from "@/assets/product-protein.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductsPage = () => {
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
    },
    {
    id: 6,
    name: "Amala Bioceuticals Piles Capsules",
    description: "Relief from Piles – Effective on Bleeding, Dry Piles, Inflammation & Itching.",
    price: "₹109",
    originalPrice: "₹218",
    image: PilesCapsules,
    rating: 4.5,
    reviews: 154,
    category: "Piles Care",
    benefits: ["Bleeding & Dry Piles", "Controls Inflammation", "Reduces Itching", "Heals Tissue"]
    },
    {
    id: 7,
    name: "Amalagesic-SP",
    description: "Aceclofenac, Paracetamol & Serratiopeptidase Tablets for Pain Relief and Inflammation.",
    price: "₹63",
    originalPrice: "₹126",
    image: AmalagesicSp,
    rating: 4.6,
    reviews: 178,
    category: "Pain Relief",
    benefits: ["Pain Relief", "Anti-inflammatory", "Fever Reduction"]
  },
  {
  id: 6,
  name: "AmalaCal Suspension",
  description: "Calcium-rich Suspension to Support Bone Strength & Joint Health.",
  price: "₹109",
  originalPrice: "₹218",
  image: AmalaCal,
  rating: 4.4,
  reviews: 112,
  category: "Calcium Supplement",
  benefits: ["Bone Strength", "Joint Support", "Calcium Deficiency"]
  },
  {
  id: 7,
  name: "Amalavit Syrup",
  description: "Lycopene, Cyanocobalamin & Antioxidants with Multivitamin & Multimineral Syrup (Sugar Free).",
  price: "₹109",
  originalPrice: "₹218",
  image: AmalavitSyrup,
  rating: 4.5,
  reviews: 137,
  category: "Multivitamin",
  benefits: ["Boosts Immunity", "Fights Weakness", "Improves Vitality"]
  },
  {
  id: 8,
  name: "Amala Bioceuticals Roll On Oil",
  description: "Relieves Pain & Improves Joint Movement – Ideal for Joint Pain, Arthritis, Muscular Pain & Lower Backache.",
  price: "₹112",
  originalPrice: "₹224",
  image: RollOnOil,
  rating: 4.6,
  reviews: 121,
  category: "Pain Relief",
  benefits: ["Joint Pain Relief", "Muscle Relaxation", "Improves Flexibility"]
  },
  {
  id: 9,
  name: "Amalason Syrup",
  description: "Ayurvedic Uterine Tonic for Women – Supports Menstrual Health & Hormonal Balance.",
  price: "₹114",
  originalPrice: "₹228",
  image: AmalasonSyrup,
  rating: 4.6,
  reviews: 129,
  category: "Women's Health",
  benefits: ["Regulates Periods", "Relieves Cramps", "Hormonal Balance"]
  },
  {
  id: 10,
  name: "Amalafer XT Syrup",
  description: "Ferric Ammonium Citrate, Folic Acid, Zinc Sulphate & Cyanocobalamin Syrup – Sugar Free Iron Tonic.",
  price: "₹109",
  originalPrice: "₹218",
  image: AmalaferXT,
  rating: 4.5,
  reviews: 117,
  category: "Iron Supplement",
  benefits: ["Boosts Hemoglobin", "Fights Fatigue", "Supports Red Blood Cell Formation"]
  },
  {
  id: 11,
  name: "Amalaliv 5G Syrup",
  description: "Liver, Alkalizer, Enzyme, Antacid & Laxative Syrup – Sugar Free formula for liver health and digestion support.",
  price: "₹114",
  originalPrice: "₹228",
  image: Amalaliv5G,
  rating: 4.4,
  reviews: 89,
  category: "Liver & Digestion",
  benefits: [
    "Promotes liver detox and function",
    "Relieves acidity and indigestion",
    "Improves metabolism",
    "Fights jaundice and anorexia"
    ]
  },
  {
  id: 12,
  name: "AmalarabDSR",
  description: "Enteric Coated Rabeprazole Sodium with Domperidone (SR) Capsules – Effective relief from acidity, indigestion, and gastric discomfort.",
  price: "₹69",
  originalPrice: "₹138",
  image: AmalarabDSR,
  rating: 4.3,
  reviews: 77,
  category: "Digestive Health",
  benefits: [
    "Provides fast relief from acidity and heartburn",
    "Improves digestion and controls reflux",
    "Reduces gas and bloating",
    "Helps in gastric protection"
    ]
  }







  ];

  const calculateDiscount = (original: string, current: string) => {
    const originalPrice = parseInt(original.replace('₹', '').replace(',', ''));
    const currentPrice = parseInt(current.replace('₹', '').replace(',', ''));
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-4">
            {/* Back Button and Header */}
            <div className="mb-8">
              <Link to="/">
                <Button variant="outline" className="mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="text-center">
                <Badge variant="outline" className="mb-4 border-brand-primary text-brand-primary">
                  Complete Product Range
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  All <span className="text-brand-primary">Health Products</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Explore our complete range of scientifically formulated nutraceuticals designed to support your health and wellness journey.
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-soft">
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
                    <div className="aspect-square overflow-hidden rounded-lg mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

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
                      {product.benefits.map((benefit, index) => (
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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;