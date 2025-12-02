import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HandHeart, Users, Building2, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const GetInvolved = () => {
  const handleVolunteerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your interest! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
            <p className="text-xl text-muted-foreground">
              Join us in creating lasting change. There are many ways you can contribute to our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-2">
                  <HandHeart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Volunteer</CardTitle>
                <CardDescription>
                  Dedicate your time and skills to support our programs and beneficiaries.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-2">
                  <Building2 className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Corporate Partnership</CardTitle>
                <CardDescription>
                  Partner with us through CSR initiatives and create meaningful social impact.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Mentor</CardTitle>
                <CardDescription>
                  Share your knowledge and experience to guide students and beneficiaries.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="p-3 rounded-lg bg-secondary/10 w-fit mb-2">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>Internship</CardTitle>
                <CardDescription>
                  Gain valuable experience while contributing to social development initiatives.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Volunteer Form */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Volunteer With Us</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get in touch with you about volunteer opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest *</Label>
                    <Select required>
                      <SelectTrigger id="interest">
                        <SelectValue placeholder="Select an area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="education">Education Programs</SelectItem>
                        <SelectItem value="skills">Skill Development</SelectItem>
                        <SelectItem value="women">Women Empowerment</SelectItem>
                        <SelectItem value="community">Community Development</SelectItem>
                        <SelectItem value="admin">Administrative Support</SelectItem>
                        <SelectItem value="fundraising">Fundraising & Events</SelectItem>
                        <SelectItem value="any">Open to Any Area</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Select>
                      <SelectTrigger id="availability">
                        <SelectValue placeholder="Select your availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Weekdays</SelectItem>
                        <SelectItem value="weekends">Weekends</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                        <SelectItem value="remote">Remote Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Experience</Label>
                    <Textarea
                      id="skills"
                      placeholder="Tell us about your relevant skills, experience, and why you want to volunteer with us..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Corporate Partnerships</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We welcome partnerships with businesses looking to fulfill their CSR objectives while creating meaningful 
              social impact. Together, we can design custom programs that align with your values and make a difference 
              in communities.
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground">Partnership opportunities include:</p>
              <ul className="text-left space-y-2 max-w-md mx-auto text-muted-foreground">
                <li>• Employee volunteering programs</li>
                <li>• Skill-based training sponsorships</li>
                <li>• Infrastructure development projects</li>
                <li>• Scholarship programs</li>
                <li>• Health and wellness camps</li>
              </ul>
            </div>
            <Button size="lg" className="mt-8 bg-primary" asChild>
              <a href="/contact">Contact Us for Partnership</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-hero-start to-hero-end text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Whether you volunteer your time or make a donation, every contribution creates real impact.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" asChild>
            <a href="/donate">Make a Donation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
