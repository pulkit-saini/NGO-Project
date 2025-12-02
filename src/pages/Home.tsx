import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import ImpactStat from "@/components/ImpactStat";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Briefcase, Heart, GraduationCap, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import womenImage from "@/assets/women-empowerment.jpg";
import skillImage from "@/assets/skill-training.jpg";
import communityImage from "@/assets/community-development.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[600px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-hero-start/90 to-hero-end/90 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 relative z-20 py-20">
          <div className="max-w-3xl mx-auto text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering Minds. Transforming Lives.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              We believe education and training are the most powerful tools to uplift communities and create lasting change.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
                <a href="/donate">Donate Now</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
                <a href="/get-involved">Join Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe education and training are the most powerful tools to uplift communities and create lasting change. 
              Our mission is to ensure equal access to learning and opportunities for every individual, regardless of background.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-impact-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ImpactStat
              value="10,000+"
              label="Students Educated"
              icon={<GraduationCap className="h-10 w-10 text-primary" />}
            />
            <ImpactStat
              value="500+"
              label="Workshops Conducted"
              icon={<Target className="h-10 w-10 text-secondary" />}
            />
            <ImpactStat
              value="50+"
              label="Communities Served"
              icon={<Users className="h-10 w-10 text-primary" />}
            />
            <ImpactStat
              value="85%"
              label="Success Rate"
              icon={<TrendingUp className="h-10 w-10 text-secondary" />}
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive initiatives designed to create lasting impact in education, skill development, and community welfare.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProgramCard
              icon={BookOpen}
              title="Education for All"
              description="Free and affordable schooling programs providing quality education to underprivileged children."
              imageUrl={heroImage}
            />
            <ProgramCard
              icon={Briefcase}
              title="Skill Development"
              description="Vocational training and digital literacy programs preparing youth for employment."
              imageUrl={skillImage}
            />
            <ProgramCard
              icon={Heart}
              title="Women Empowerment"
              description="Self-help groups and entrepreneurship support fostering financial independence."
              imageUrl={womenImage}
            />
            <ProgramCard
              icon={Users}
              title="Community Development"
              description="Health camps, sanitation drives, and rural outreach creating healthier communities."
              imageUrl={communityImage}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories of Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the lives we've touched and the communities we've transformed together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The vocational training program gave me the skills to start my own tailoring business. Today, I'm financially independent and supporting my family."
              name="Priya Sharma"
              role="Beneficiary, Women Empowerment Program"
            />
            <TestimonialCard
              quote="Thanks to the scholarship program, I completed my education and became the first graduate in my family. Now I'm pursuing my dream of becoming a teacher."
              name="Rahul Kumar"
              role="Student, Education for All"
            />
            <TestimonialCard
              quote="The digital literacy course opened up new opportunities for me. I now work as a freelance graphic designer and mentor other youth in my community."
              name="Anjali Patel"
              role="Graduate, Skill Development Program"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-hero-start to-hero-end text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the Change You Want to See</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Your support can transform lives and build stronger communities. Join us in our mission today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <a href="/donate">Make a Donation</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
              <a href="/get-involved">Volunteer With Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
