import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, CheckCircle, Award, Heart, Leaf } from "lucide-react";
import communityImage from "@/assets/community-development.jpg";

const CommunityDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Users className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Development Program</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Creating healthier, more resilient communities through health initiatives, sanitation drives, and sustainable rural development.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img src={communityImage} alt="Community Development" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Program Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Community Development Program takes a holistic approach to improving the quality of life in underserved areas. We work closely with local communities to identify needs and implement sustainable solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From healthcare access to environmental conservation, we address multiple aspects of community wellbeing to create lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Initiatives</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Health Camps</h3>
                <p className="text-muted-foreground">
                  Regular free medical check-ups, health screenings, vaccination drives, and specialist consultations in underserved rural areas.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sanitation & Hygiene</h3>
                <p className="text-muted-foreground">
                  Clean water access, toilet construction, waste management systems, and hygiene awareness campaigns in communities.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Infrastructure Development</h3>
                <p className="text-muted-foreground">
                  Building community centers, improving roads, installing street lights, and creating public spaces for community activities.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Environmental Conservation</h3>
                <p className="text-muted-foreground">
                  Tree plantation drives, water conservation projects, renewable energy promotion, and environmental education programs.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Community Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">50+</div>
                <p className="text-muted-foreground">Villages Covered</p>
              </div>
              <div>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p className="text-muted-foreground">Health Check-ups</p>
              </div>
              <div>
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">25,000+</div>
                <p className="text-muted-foreground">Trees Planted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-hero-start to-hero-end text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Build Stronger Communities</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Help us create healthier, more sustainable communities where everyone has access to basic necessities and opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <a href="/donate">Support Our Work</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="/get-involved">Get Involved</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityDevelopment;
