import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Instagram,
  Facebook,
  MessageCircle,
  Globe
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "919555433193"; // 👈 Update if needed
    const fullMessage = `*New Message from Amala Bioceuticals Contact Form*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    toast({
      title: "Redirected to WhatsApp!",
      description: "Please complete sending your message in WhatsApp.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 95554 33193", "+91 83180 21515"],
      description: "Mon-Sat 9:00 AM - 7:00 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["amalabioceuticals@gmail.com", "himanshupriyanshuverma@gmail.com"],
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Jahagirpur", "Lucknow Uttar Pradesh 226501"],
      description: "Mon-Fri 10:00 AM - 6:00 PM"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
      description: "Sunday: Closed"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://instagram.com/amalabioceuticals", color: "text-pink-500" },
    { icon: Facebook, name: "Facebook", url: "https://facebook.com/amalabioceuticals", color: "text-blue-500" },
    { icon: MessageCircle, name: "WhatsApp", url: "https://wa.me/+919555433193", color: "text-green-500" },
    { icon: Globe, name: "Website", url: "https://amalabioceuticals.com", color: "text-brand-primary" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-brand-primary text-brand-primary">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact <span className="text-brand-primary">Amala Bioceuticals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or need personalized health recommendations?
            Our expert team is here to help you on your wellness journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">How Can We Help?</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have questions about our products, need dosage recommendations,
                  or want to learn more about our research, we're here to assist you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-soft bg-gradient-card hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-brand-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                          {info.details.map((detail, i) => (
                            <p key={i} className="text-sm text-muted-foreground">{detail}</p>
                          ))}
                          <p className="text-xs text-brand-primary mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:scale-110 transition-transform duration-200"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className={`h-5 w-5 ${social.color}`} />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-medium bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-brand-primary" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                      <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                      <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Subject *</label>
                      <Input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                    <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us more about your inquiry..." required rows={6} />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-primary hover:bg-brand-primary-light text-white py-6 text-lg shadow-soft">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Need Immediate Assistance?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white shadow-soft" asChild>
              <a href="https://wa.me/+918318021515" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white shadow-soft" asChild>
              <a href="tel:+918318021515">
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
