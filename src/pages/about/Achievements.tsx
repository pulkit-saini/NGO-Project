import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Trophy, Star, Medal, Calendar } from "lucide-react";

const Achievements = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Awards & Recognition</h1>
            <p className="text-xl text-muted-foreground">
              Celebrating milestones in our journey to empower communities.
            </p>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Trophy className="h-10 w-10 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">National Awards</div>
            </div>
            <div className="text-center">
              <Medal className="h-10 w-10 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">State Recognitions</div>
            </div>
            <div className="text-center">
              <Star className="h-10 w-10 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">International Honors</div>
            </div>
            <div className="text-center">
              <Award className="h-10 w-10 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Partnership Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* National Awards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">National Awards</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl">National NGO Excellence Award</h3>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2023
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">Ministry of Social Justice & Empowerment</p>
                    <p className="text-muted-foreground">
                      Recognized for outstanding contribution to education and community development. This prestigious award 
                      honors organizations demonstrating exceptional impact, innovation, and sustainability in social development work.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Trophy className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl">Women Empowerment Initiative Award</h3>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2022
                      </span>
                    </div>
                    <p className="text-sm text-primary font-medium mb-2">National Commission for Women</p>
                    <p className="text-muted-foreground">
                      Honored for innovative programs supporting women's financial independence and social empowerment. 
                      Recognition of our comprehensive approach to women's empowerment including skill training, 
                      entrepreneurship support, and advocacy initiatives.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Medal className="h-10 w-10 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl">Community Impact Award</h3>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2021
                      </span>
                    </div>
                    <p className="text-sm text-secondary font-medium mb-2">Indian Social Development Foundation</p>
                    <p className="text-muted-foreground">
                      Acknowledged for measurable positive impact across 50+ communities. This award recognizes our 
                      data-driven approach and the tangible improvements in education, employment, and quality of life 
                      among beneficiaries.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Star className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl">Best Educational Initiative Award</h3>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        2020
                      </span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-2">National Education Excellence Foundation</p>
                    <p className="text-muted-foreground">
                      Awarded for innovative teaching methodologies and improved learning outcomes in underprivileged communities. 
                      Recognition of our unique curriculum design and student-centered approach to education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* State & Regional Awards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">State & Regional Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">State Excellence in Social Work Award (2023)</h3>
                    <p className="text-sm text-muted-foreground">
                      State Government recognition for outstanding social development initiatives
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Trophy className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Best Rural Development Project (2022)</h3>
                    <p className="text-sm text-muted-foreground">
                      District Administration award for transformative community development programs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Medal className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Skill Development Excellence Award (2021)</h3>
                    <p className="text-sm text-muted-foreground">
                      State Skill Development Mission recognition for quality vocational training
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Star className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Youth Empowerment Award (2020)</h3>
                    <p className="text-sm text-muted-foreground">
                      State Youth Affairs Department honor for youth development initiatives
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* International Recognition */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">International Recognition</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Star className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Global Education Excellence Award (2023)</h3>
                    <p className="text-sm text-accent font-medium mb-2">International Education Summit, Singapore</p>
                    <p className="text-sm text-muted-foreground">
                      International recognition for innovative approaches to education in underserved communities
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
                    <h3 className="font-bold text-lg mb-2">Asian Social Impact Award (2021)</h3>
                    <p className="text-sm text-primary font-medium mb-2">Asian Development Foundation</p>
                    <p className="text-sm text-muted-foreground">
                      Recognized among top 100 social organizations making significant impact in Asia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Media Coverage</h2>
            <p className="text-muted-foreground mb-8">
              Our work has been featured in leading national and international media outlets including Times of India, 
              The Hindu, NDTV, BBC World Service, and various international development publications. Our innovative 
              programs and measurable impact have attracted attention from researchers, policymakers, and social development practitioners worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-xs text-muted-foreground">Media Features</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">10+</div>
                  <div className="text-xs text-muted-foreground">TV Appearances</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-accent mb-1">25+</div>
                  <div className="text-xs text-muted-foreground">Radio Interviews</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">Research Papers</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Achievements;
