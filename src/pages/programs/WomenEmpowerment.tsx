import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, Award, Users, Sparkles } from "lucide-react";
import womenImage from "@/assets/women-empowerment.jpg";

const WomenEmpowerment = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Heart className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Women Empowerment Program</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Supporting women's financial independence and leadership through training, self-help groups, and comprehensive awareness programs.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img src={womenImage} alt="Women Empowerment" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Program Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Women Empowerment Program is dedicated to creating opportunities for women to achieve economic independence, develop leadership skills, and access resources that enable them to thrive in their communities.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We recognize that empowering women creates a ripple effect that benefits families and entire communities, leading to sustainable social and economic development.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Program Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Self-Help Groups</h3>
                <p className="text-muted-foreground">
                  Formation and support of women's self-help groups with microfinance access, savings programs, and collective economic activities.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Vocational Training</h3>
                <p className="text-muted-foreground">
                  Skills training in tailoring, embroidery, handicrafts, food processing, beauty services, and other income-generating activities.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Support</h3>
                <p className="text-muted-foreground">
                  Business development training, marketing assistance, e-commerce setup, and linkages to markets for women entrepreneurs.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Awareness Programs</h3>
                <p className="text-muted-foreground">
                  Legal rights education, health and nutrition workshops, financial literacy, and leadership development programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Transforming Lives</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">1,200+</div>
                <p className="text-muted-foreground">Women Empowered</p>
              </div>
              <div>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">85</div>
                <p className="text-muted-foreground">Self-Help Groups</p>
              </div>
              <div>
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">300+</div>
                <p className="text-muted-foreground">Women Entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-hero-start to-hero-end text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Women, Transform Communities</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Your support helps women break barriers and build successful futures for themselves and their families.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <a href="/donate">Donate Now</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="/get-involved">Join Our Mission</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WomenEmpowerment;
