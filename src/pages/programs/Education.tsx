import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Award, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Education = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10">
                <BookOpen className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Education for All</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Breaking barriers to quality education through scholarships, free tutoring, and comprehensive literacy programs for all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img src={heroImage} alt="Education Program" className="w-full rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Program Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our Education for All program is designed to ensure that every child, regardless of their economic background, has access to quality education. We believe education is the cornerstone of social transformation and economic empowerment.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Through our comprehensive approach, we provide not just access to schooling, but also the support systems needed for children to thrive academically and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Free Schooling</h3>
                <p className="text-muted-foreground">
                  Complete educational support including books, uniforms, and supplies for underprivileged children from primary to secondary education.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">After-School Programs</h3>
                <p className="text-muted-foreground">
                  Personalized tutoring and mentorship programs to help students excel in their studies and develop essential life skills.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scholarship Schemes</h3>
                <p className="text-muted-foreground">
                  Merit and need-based scholarships for higher education, helping talented students pursue college and vocational training.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-muted">
                <CheckCircle className="h-8 w-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Adult Literacy</h3>
                <p className="text-muted-foreground">
                  Evening classes for adults focusing on basic literacy, numeracy, and functional skills for daily life and employment.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">1,500+</div>
                <p className="text-muted-foreground">Students Enrolled</p>
              </div>
              <div>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-muted-foreground">Scholarships Awarded</p>
              </div>
              <div>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-muted-foreground">Graduation Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-hero-start to-hero-end text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Support Education for All</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Your contribution can help provide quality education to children who need it most. Join us in building a brighter future.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
              <a href="/donate">Make a Donation</a>
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

export default Education;
