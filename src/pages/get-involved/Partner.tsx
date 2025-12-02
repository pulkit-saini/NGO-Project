import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Handshake, Building2, Gift, Users2, TrendingUp, Award, CheckCircle2, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Partner = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Inquiry Submitted",
      description: "Thank you for your interest. Our team will contact you within 48 hours.",
    });
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      partnershipType: "",
      message: ""
    });
  };

  const partnershipTypes = [
    {
      icon: Building2,
      title: "Corporate Social Responsibility (CSR)",
      description: "Align your CSR initiatives with our programs to create measurable social impact and meet compliance requirements.",
      benefits: [
        "Tax benefits under Section 80G",
        "Detailed impact reports",
        "Employee engagement opportunities",
        "Brand visibility and recognition"
      ]
    },
    {
      icon: Gift,
      title: "Sponsorship Programs",
      description: "Sponsor specific initiatives, events, or community programs to directly support our mission.",
      benefits: [
        "Customized sponsorship packages",
        "Regular progress updates",
        "Public acknowledgment",
        "Access to sponsored program beneficiaries"
      ]
    },
    {
      icon: Users2,
      title: "Employee Engagement",
      description: "Involve your employees in volunteering, skill-sharing, and mentorship programs.",
      benefits: [
        "Team building opportunities",
        "Skill-based volunteering",
        "Leadership development",
        "Enhanced employee satisfaction"
      ]
    },
    {
      icon: TrendingUp,
      title: "Strategic Partnerships",
      description: "Long-term collaborations for sustainable community development and social innovation.",
      benefits: [
        "Co-create programs",
        "Shared resources and expertise",
        "Joint impact measurement",
        "Innovation opportunities"
      ]
    }
  ];

  const partnerBenefits = [
    {
      icon: Award,
      title: "Recognition & Visibility",
      description: "Featured on our website, social media, and annual reports"
    },
    {
      icon: CheckCircle2,
      title: "Compliance & Certification",
      description: "Proper documentation for CSR compliance and tax benefits"
    },
    {
      icon: Mail,
      title: "Impact Reports",
      description: "Regular updates on how your contribution is making a difference"
    }
  ];

  const ourPartners = [
    "Leading technology companies",
    "Financial institutions",
    "Healthcare organizations",
    "Educational institutions",
    "Manufacturing corporations",
    "Service sector enterprises"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-start to-hero-end text-primary-foreground py-24 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Partner With Us for Social Impact
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join hands with Shring Training & Development Foundation to create sustainable change and fulfill your corporate social responsibility
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#inquiry-form">Start Partnership Journey</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose a partnership model that aligns with your organization's goals and values
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-muted-foreground">Key Benefits:</p>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-muted-foreground">
              What you gain by partnering with Shring Training & Development Foundation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Partners</h2>
              <p className="text-xl text-muted-foreground">
                Trusted by organizations across various sectors
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ourPartners.map((partner, index) => (
                <div key={index} className="flex items-center gap-3 p-6 rounded-lg bg-card border hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <p className="text-lg font-medium">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="inquiry-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Partner With Us</h2>
              <p className="text-xl text-muted-foreground">
                Fill out this form and our partnership team will get in touch with you
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person *</Label>
                      <Input
                        id="contactPerson"
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnershipType">Partnership Interest *</Label>
                    <Input
                      id="partnershipType"
                      placeholder="e.g., CSR, Sponsorship, Employee Engagement"
                      value={formData.partnershipType}
                      onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your organization and partnership goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Partnership Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partner;