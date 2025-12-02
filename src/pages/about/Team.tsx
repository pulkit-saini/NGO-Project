import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Award, Users, BookOpen, Briefcase, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Meet the dedicated individuals making a difference every day.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-1">Dr. Priya Sharma</h3>
                <p className="text-sm text-primary font-medium mb-3">Founder & Director</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Leading Shring Training & Development Foundation's mission with 15+ years of experience in social development and educational policy. 
                  Ph.D. in Social Work from Delhi University.
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Target className="h-16 w-16 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-1">Raj Kumar</h3>
                <p className="text-sm text-secondary font-medium mb-3">Program Director</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Overseeing all education and skill development programs across 50+ communities. 12 years of experience 
                  in program management and community development.
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-32 rounded-full bg-accent/10 flex items-center justify-center">
                    <Award className="h-16 w-16 text-accent" />
                  </div>
                </div>
                <h3 className="font-bold text-xl mb-1">Anita Desai</h3>
                <p className="text-sm text-accent font-medium mb-3">Women Empowerment Lead</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Championing women's rights and economic independence initiatives. Expert in gender studies with 10 years 
                  of grassroots experience in women empowerment.
                </p>
                <div className="flex justify-center gap-2">
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-1" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Heads */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Program Heads</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">Vikram Mehta</h3>
                <p className="text-sm text-primary font-medium mb-2">Education Program Head</p>
                <p className="text-xs text-muted-foreground">
                  B.Ed, M.A. in Education, 8 years experience
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Briefcase className="h-10 w-10 text-secondary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">Neha Gupta</h3>
                <p className="text-sm text-secondary font-medium mb-2">Skill Development Head</p>
                <p className="text-xs text-muted-foreground">
                  MBA, Certified Trainer, 7 years experience
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">Sunita Rao</h3>
                <p className="text-sm text-accent font-medium mb-2">Community Development Head</p>
                <p className="text-xs text-muted-foreground">
                  M.A. Social Work, 9 years experience
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">Amit Patel</h3>
                <p className="text-sm text-primary font-medium mb-2">Monitoring & Evaluation Head</p>
                <p className="text-xs text-muted-foreground">
                  M.Sc. Statistics, 6 years experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Staff */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Extended Team</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <h3 className="font-bold text-lg mb-2">Teachers & Trainers</h3>
                  <p className="text-sm text-muted-foreground">
                    Qualified educators delivering quality instruction across all programs
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                  <h3 className="font-bold text-lg mb-2">Field Coordinators</h3>
                  <p className="text-sm text-muted-foreground">
                    Managing on-ground operations and community engagement
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <h3 className="font-bold text-lg mb-2">Volunteers</h3>
                  <p className="text-sm text-muted-foreground">
                    Passionate individuals contributing their time and skills
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-4 text-center">Administrative Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Finance & Operations</h4>
                      <p className="text-xs text-muted-foreground">10 team members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">HR & Admin</h4>
                      <p className="text-xs text-muted-foreground">8 team members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Communications & Fundraising</h4>
                      <p className="text-xs text-muted-foreground">7 team members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">IT & Infrastructure</h4>
                      <p className="text-xs text-muted-foreground">5 team members</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for passionate individuals who want to make a difference. 
              If you're committed to social change and want to be part of our mission, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline">
                Volunteer With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
