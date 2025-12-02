import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Target, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Become a Volunteer",
      description: "Join our community of passionate volunteers making a real difference in education and empowerment.",
      link: "/get-involved/volunteering",
      color: "primary"
    },
    {
      icon: Target,
      title: "Career Opportunities",
      description: "Build your career while building a better future. Explore full-time positions with our team.",
      link: "/get-involved/careers",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Internship Programs",
      description: "Gain valuable experience working on meaningful projects that create social impact.",
      link: "/get-involved/internships",
      color: "accent"
    },
    {
      icon: Award,
      title: "Partner With Us",
      description: "Collaborate with us for corporate partnerships, CSR initiatives, and community projects.",
      link: "/get-involved/partner",
      color: "primary"
    }
  ];

  const benefits = [
    "Be part of a mission-driven organization",
    "Work with diverse communities across India",
    "Professional development and training opportunities",
    "Flexible engagement options",
    "Certificate of recognition for contributions",
    "Network with like-minded changemakers"
  ];

  const impactAreas = [
    {
      title: "Education",
      description: "Help children access quality education and learning resources"
    },
    {
      title: "Skill Development",
      description: "Empower youth and adults with vocational training"
    },
    {
      title: "Women Empowerment",
      description: "Support women in achieving economic independence"
    },
    {
      title: "Community Development",
      description: "Drive sustainable change in rural and urban communities"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-start to-hero-end text-primary-foreground py-24 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Mission to Transform Lives
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Be the change you wish to see. Join EmpowerEdu and make a lasting impact on communities across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/get-involved/volunteering">Start Volunteering</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" asChild>
                <Link to="/get-involved/careers">View Careers</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Join Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ways to Get Involved</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the path that aligns with your passion, skills, and availability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-${opportunity.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <opportunity.icon className={`w-8 h-8 text-${opportunity.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{opportunity.title}</CardTitle>
                  <CardDescription className="text-base">
                    {opportunity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="gap-2" asChild>
                    <Link to={opportunity.link}>
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Areas of Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your contribution will directly support these critical areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {impactAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Join EmpowerEdu?</h2>
              <p className="text-xl text-muted-foreground">
                More than just an opportunity, it's a transformative journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Take the first step towards creating meaningful change in your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/get-involved/volunteering">Apply to Volunteer</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;