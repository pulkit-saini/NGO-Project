import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, CheckCircle, Award, Users, TrendingUp } from "lucide-react";
import skillImage from "@/assets/skill-training.jpg";

const SkillDevelopment = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <Briefcase className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Skill Development Program</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Equipping youth with practical skills and digital literacy for meaningful employment and successful entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img src={skillImage} alt="Skill Development" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Program Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Skill Development Program bridges the gap between education and employment by providing industry-relevant training and certifications. We focus on both traditional vocational skills and modern digital competencies.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Through partnerships with industries and training institutes, we ensure our participants receive hands-on experience and placement opportunities in growing sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Training Programs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Vocational Training</h3>
                <p className="text-muted-foreground">
                  Comprehensive training in electrical work, plumbing, carpentry, tailoring, beauty services, and other high-demand trades with certification.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Literacy</h3>
                <p className="text-muted-foreground">
                  Computer fundamentals, internet usage, Microsoft Office, graphic design, digital marketing, and social media management courses.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Job Placement</h3>
                <p className="text-muted-foreground">
                  Career counseling, resume building, interview preparation, and direct placement assistance with our industry partners.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Entrepreneurship</h3>
                <p className="text-muted-foreground">
                  Business planning, financial literacy, marketing strategies, and seed funding support for aspiring entrepreneurs.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Program Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">2,000+</div>
                <p className="text-muted-foreground">Trained Participants</p>
              </div>
              <div>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">75%</div>
                <p className="text-muted-foreground">Placement Rate</p>
              </div>
              <div>
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">150+</div>
                <p className="text-muted-foreground">Businesses Started</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-hero-start to-hero-end text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Empower Through Skills</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Help us equip more youth with the skills they need to succeed in today's competitive job market.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <a href="/donate">Support This Program</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="/get-involved">Volunteer With Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SkillDevelopment;
