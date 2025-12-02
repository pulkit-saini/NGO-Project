import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Shring Training & Development Foundation</h1>
            <p className="text-xl text-muted-foreground">
              Building a world where every person has the knowledge, skills, and confidence to shape a better future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="overview" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Shring Training & Development Foundation was founded in 2010 with a simple yet powerful belief: education is the cornerstone of social change. 
                What started as a small tutoring program for 20 children has grown into a comprehensive social development 
                organization serving thousands of individuals across multiple communities.
              </p>
              <p className="mb-4">
                Over the years, we've witnessed the transformative power of education and skill development firsthand. 
                From children who became the first in their families to graduate, to women who gained financial independence 
                through vocational training, each success story reinforces our commitment to creating lasting change.
              </p>
              <p>
                Today, Shring Training & Development Foundation operates multiple programs focused on education, skill development, women empowerment, 
                and community development. Our work is guided by the principle that sustainable development requires 
                holistic support—addressing not just educational needs, but also economic, social, and health-related challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission-vision" className="py-16 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To ensure equal access to quality education and opportunities for every individual, regardless of their 
                  background, by providing comprehensive educational, vocational, and social development programs that 
                  empower communities and create lasting positive change.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-muted-foreground">
                  A world where every person has the knowledge, skills, and confidence to shape a better future for 
                  themselves and their communities. We envision thriving communities where education is accessible to 
                  all, and where individuals are empowered to reach their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Compassion</h3>
                <p className="text-sm text-muted-foreground">
                  We approach every individual with empathy and understanding.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for the highest quality in all our programs and services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain transparency and accountability in all our operations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Inclusivity</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in creating opportunities accessible to all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-16 bg-muted scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Dr. Priya Sharma</h3>
                <p className="text-sm text-primary font-medium mb-2">Founder & Director</p>
                <p className="text-sm text-muted-foreground">
                  Leading Shring Training & Development Foundation's mission with 15+ years of experience in social development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Target className="h-12 w-12 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Raj Kumar</h3>
                <p className="text-sm text-secondary font-medium mb-2">Program Manager</p>
                <p className="text-sm text-muted-foreground">
                  Overseeing education and skill development programs across communities.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Anita Desai</h3>
                <p className="text-sm text-primary font-medium mb-2">Women Empowerment Lead</p>
                <p className="text-sm text-muted-foreground">
                  Championing women's rights and economic independence initiatives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10 scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements & Recognition</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">National NGO Excellence Award 2023</h3>
                    <p className="text-muted-foreground">
                      Recognized for outstanding contribution to education and community development.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Women Empowerment Initiative Award 2022</h3>
                    <p className="text-muted-foreground">
                      Honored for innovative programs supporting women's financial independence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Community Impact Award 2021</h3>
                    <p className="text-muted-foreground">
                      Acknowledged for measurable positive impact across 50+ communities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certificates & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">ISO 9001:2015 Certified</h3>
                    <p className="text-muted-foreground">
                      Certified for quality management systems ensuring consistent service delivery.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">12A & 80G Registration</h3>
                    <p className="text-muted-foreground">
                      Registered under Income Tax Act, enabling tax benefits for donors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">FCRA Registration</h3>
                    <p className="text-muted-foreground">
                      Approved to receive foreign contributions for social welfare activities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">CSR-1 Registration</h3>
                    <p className="text-muted-foreground">
                      Registered with Ministry of Corporate Affairs for CSR partnerships.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
