import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import ImpactStat from "@/components/ImpactStat";
import { Users, GraduationCap, Heart, TrendingUp, Calendar, MapPin, Target, Award } from "lucide-react";

const Overview = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              How EmpowerEdu became a beacon of hope for thousands of individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">2010</div>
              <div className="text-sm text-muted-foreground">Founded</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">15,000+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm text-muted-foreground">Communities</div>
            </div>
            <div className="text-center">
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">8+</div>
              <div className="text-sm text-muted-foreground">Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Beginning</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                EmpowerEdu was founded in 2010 with a simple yet powerful belief: education is the cornerstone of social change. 
                What started as a small tutoring program for 20 children in a single community has grown into a comprehensive 
                social development organization serving thousands of individuals across multiple regions.
              </p>
              <p>
                Our founder, Dr. Priya Sharma, witnessed firsthand the barriers that underprivileged children faced in accessing 
                quality education. Driven by a passion to make a difference, she started conducting free tutoring sessions in 
                her home. The response was overwhelming, and within the first year, we had expanded to serve over 100 children.
              </p>
              <p>
                Over the years, we've witnessed the transformative power of education and skill development firsthand. 
                From children who became the first in their families to graduate, to women who gained financial independence 
                through vocational training, each success story reinforces our commitment to creating lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Journey */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Growth Journey</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">2010-2012: Foundation Years</h3>
                    <p className="text-muted-foreground">
                      Started with 20 students in a small tutoring center. Established core team of 5 volunteers. 
                      Developed curriculum and teaching methodologies tailored for underprivileged children.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">2013-2015: Expansion Phase</h3>
                    <p className="text-muted-foreground">
                      Expanded to 5 communities serving 500+ students. Launched skill development programs for youth. 
                      Received first major grant from government education department.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">2016-2019: Diversification</h3>
                    <p className="text-muted-foreground">
                      Added women empowerment programs and community development initiatives. 
                      Partnered with 20+ corporate organizations for CSR funding. Reached 5,000+ beneficiaries annually.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">2020-Present: Impact at Scale</h3>
                    <p className="text-muted-foreground">
                      Operating in 50+ communities with 8 comprehensive programs. Team of 100+ staff and 200+ volunteers. 
                      Recognized nationally for excellence in social development with multiple awards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ImpactStat value="15,000+" label="Lives Transformed" />
            <ImpactStat value="5,000+" label="Students Educated" />
            <ImpactStat value="3,500+" label="Skills Trained" />
            <ImpactStat value="2,000+" label="Women Empowered" />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Today, EmpowerEdu operates multiple programs focused on education, skill development, women empowerment, 
                and community development. Our work is guided by the principle that sustainable development requires 
                holistic support—addressing not just educational needs, but also economic, social, and health-related challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Holistic Development</h3>
                    <p className="text-sm text-muted-foreground">
                      We address multiple aspects of development simultaneously for comprehensive impact.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Community-Centric</h3>
                    <p className="text-sm text-muted-foreground">
                      Programs designed in partnership with communities to ensure relevance and sustainability.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6 text-center">
                    <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-lg mb-2">Evidence-Based</h3>
                    <p className="text-sm text-muted-foreground">
                      Data-driven decision making with regular monitoring and evaluation of all programs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Overview;
