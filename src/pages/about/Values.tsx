import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Award, Users, Shield, Lightbulb, HandHeart, Eye } from "lucide-react";

const Values = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Values</h1>
            <p className="text-xl text-muted-foreground">
              The core principles that guide our work and define who we are.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Compassion</h3>
                <p className="text-sm text-muted-foreground">
                  We approach every individual with empathy and understanding, recognizing their unique circumstances and needs.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  We strive for the highest quality in all our programs and services, continuously improving our impact.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-accent/10">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We maintain transparency and accountability in all our operations, building trust with every stakeholder.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Inclusivity</h3>
                <p className="text-sm text-muted-foreground">
                  We believe in creating opportunities accessible to all, regardless of background, gender, or circumstances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values in Action</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">Compassion & Empathy</h3>
                    <p className="text-muted-foreground mb-4">
                      At the heart of everything we do is genuine care for people. We understand that every individual 
                      comes with their own story, challenges, and aspirations. Our team members are trained to listen 
                      actively, understand deeply, and respond with sensitivity to the needs of our beneficiaries.
                    </p>
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        "We don't just provide services; we build relationships. Every person who walks through our 
                        doors is treated with dignity, respect, and genuine care."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">Excellence & Quality</h3>
                    <p className="text-muted-foreground mb-4">
                      We are committed to delivering the highest quality programs and services. This means continuous 
                      improvement, regular training for our team, use of best practices, and rigorous monitoring of outcomes. 
                      Excellence is not a destination but a journey we embrace every day.
                    </p>
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        "Quality is never an accident; it is always the result of intelligent effort. We invest in our 
                        people, processes, and programs to ensure excellence at every level."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">Integrity & Transparency</h3>
                    <p className="text-muted-foreground mb-4">
                      We operate with complete honesty and transparency. Our financial records are open for scrutiny, 
                      our impact data is shared publicly, and our decision-making processes are clear and accountable. 
                      We believe trust is earned through consistent ethical behavior.
                    </p>
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        "Transparency builds trust. We maintain open communication with all stakeholders and ensure 
                        every rupee is spent responsibly and documented clearly."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-3">Inclusivity & Equality</h3>
                    <p className="text-muted-foreground mb-4">
                      We champion diversity and inclusion in all aspects of our work. Our programs are designed to reach 
                      the most marginalized communities, and we actively work to break down barriers based on gender, 
                      caste, religion, or economic status. Everyone deserves an equal opportunity to thrive.
                    </p>
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        "Inclusion is not about bringing people into what already exists; it's about creating new 
                        systems where everyone belongs and can contribute meaningfully."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supporting Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Supporting Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <Lightbulb className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We embrace creative solutions and new approaches to solve complex social challenges.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-accent/10">
                    <HandHeart className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Collaboration</h3>
                <p className="text-sm text-muted-foreground">
                  We work in partnership with communities, organizations, and stakeholders for greater impact.
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
                <h3 className="font-bold text-lg mb-2">Accountability</h3>
                <p className="text-sm text-muted-foreground">
                  We take responsibility for our actions and are answerable to all our stakeholders.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-secondary/10">
                    <Eye className="h-8 w-8 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  We design programs for long-term impact, ensuring communities can sustain progress independently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Values;
