import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Briefcase, Heart, Users, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import womenImage from "@/assets/women-empowerment.jpg";
import skillImage from "@/assets/skill-training.jpg";
import communityImage from "@/assets/community-development.jpg";

const Programs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive initiatives designed to create lasting impact in education, skill development, and community welfare.
            </p>
          </div>
        </div>
      </section>

      {/* Education Program */}
      <section id="education" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Education for All</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Breaking barriers to quality education through scholarships, free tutoring, and literacy programs.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Free schooling for underprivileged children</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">After-school tutoring and mentorship programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Scholarship schemes for higher education</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Adult literacy programs for parents</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary">
                  <a href="/get-involved">Support This Program</a>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={heroImage} alt="Education Program" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Development Program */}
      <section id="skills" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                <img src={skillImage} alt="Skill Development" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Skill Development</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Equipping youth with practical skills and digital literacy for meaningful employment and entrepreneurship.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Vocational training in various trades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Computer literacy and digital marketing courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Job placement assistance and career counseling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Entrepreneurship development programs</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary">
                  <a href="/get-involved">Support This Program</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Women Empowerment */}
      <section id="women" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Women Empowerment</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Supporting women's financial independence and leadership through training, self-help groups, and awareness programs.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Self-help group formation and microfinance support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Vocational training in tailoring, handicrafts, and food processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Business development and marketing assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Legal awareness and health education programs</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary">
                  <a href="/get-involved">Support This Program</a>
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={womenImage} alt="Women Empowerment" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Development */}
      <section id="community" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                <img src={communityImage} alt="Community Development" className="w-full h-full object-cover" />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Community Development</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  Creating healthier, more resilient communities through health initiatives, sanitation drives, and rural development.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Free health camps and medical check-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Sanitation and hygiene awareness campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Rural infrastructure development projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Environmental conservation initiatives</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary">
                  <a href="/get-involved">Support This Program</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 bg-gradient-to-br from-hero-start to-hero-end text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Support Creates Real Impact</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Every contribution helps us reach more communities and transform more lives. Join us in making a difference.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
            <a href="/donate">Make a Donation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
