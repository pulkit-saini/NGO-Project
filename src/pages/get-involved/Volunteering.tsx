import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, BookOpen, Briefcase, Camera, Code, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Volunteering = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    areaOfInterest: "",
    availability: "",
    skills: "",
    experience: "",
    motivation: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted Successfully!",
      description: "Thank you for your interest in volunteering. We'll contact you within 5-7 business days.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      areaOfInterest: "",
      availability: "",
      skills: "",
      experience: "",
      motivation: ""
    });
  };

  const volunteerOpportunities = [
    {
      icon: BookOpen,
      title: "Teaching & Tutoring",
      description: "Help children with academic subjects, homework, and learning support.",
      commitment: "4-6 hours/week",
      color: "primary"
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Engage with communities, conduct awareness programs, and mobilize beneficiaries.",
      commitment: "Flexible",
      color: "secondary"
    },
    {
      icon: Briefcase,
      title: "Skill Training",
      description: "Share your professional expertise through workshops and mentorship programs.",
      commitment: "2-4 hours/week",
      color: "accent"
    },
    {
      icon: Camera,
      title: "Documentation & Media",
      description: "Capture stories, create content, and help document program activities.",
      commitment: "Project-based",
      color: "primary"
    },
    {
      icon: Code,
      title: "Tech & Digital",
      description: "Support with website, apps, database management, and digital tools.",
      commitment: "Flexible",
      color: "secondary"
    },
    {
      icon: Heart,
      title: "Event Support",
      description: "Help organize and manage fundraising events, workshops, and community programs.",
      commitment: "Event-based",
      color: "accent"
    }
  ];

  const volunteerTypes = [
    {
      title: "Regular Volunteers",
      description: "Commit to ongoing involvement with scheduled activities",
      details: ["Weekly or monthly engagement", "Long-term relationship", "Deeper community impact"]
    },
    {
      title: "Project-Based Volunteers",
      description: "Participate in specific projects or campaigns",
      details: ["Fixed duration involvement", "Skill-specific contributions", "Flexible scheduling"]
    },
    {
      title: "Virtual Volunteers",
      description: "Contribute remotely from anywhere",
      details: ["Online tutoring", "Content creation", "Digital marketing", "Research & documentation"]
    }
  ];

  const benefits = [
    "Make a tangible difference in communities",
    "Develop new skills and gain experience",
    "Network with like-minded individuals",
    "Certificate of appreciation",
    "Regular updates on impact created",
    "Invitation to exclusive volunteer events",
    "Opportunity for leadership roles",
    "Reference letters for outstanding volunteers"
  ];

  const requirements = [
    "Age 18 or above (or with parental consent)",
    "Passion for social work and community service",
    "Good communication skills",
    "Reliable and committed to agreed schedule",
    "Background verification required",
    "Orientation training participation mandatory"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-start to-hero-end text-primary-foreground py-24 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Volunteer to Create Change
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Give your time, share your skills, and help transform lives across India
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#volunteer-form">Apply to Volunteer</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect way to contribute based on your skills and interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-${opportunity.color}/10 flex items-center justify-center mb-4`}>
                    <opportunity.icon className={`w-8 h-8 text-${opportunity.color}`} />
                  </div>
                  <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                  <CardDescription className="text-base">{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{opportunity.commitment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Types of Volunteering</h2>
            <p className="text-xl text-muted-foreground">
              Choose the engagement model that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {volunteerTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Requirements */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Heart className="w-6 h-6 text-secondary" />
                  Volunteer Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section id="volunteer-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Volunteer Application</h2>
              <p className="text-xl text-muted-foreground">
                Start your volunteering journey with Shring Training & Development Foundation
              </p>
            </div>

            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location/City *</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="areaOfInterest">Area of Interest *</Label>
                      <Select
                        value={formData.areaOfInterest}
                        onValueChange={(value) => setFormData({...formData, areaOfInterest: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="teaching">Teaching & Tutoring</SelectItem>
                          <SelectItem value="community">Community Outreach</SelectItem>
                          <SelectItem value="skill-training">Skill Training</SelectItem>
                          <SelectItem value="documentation">Documentation & Media</SelectItem>
                          <SelectItem value="tech">Tech & Digital</SelectItem>
                          <SelectItem value="events">Event Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">Availability *</Label>
                      <Select
                        value={formData.availability}
                        onValueChange={(value) => setFormData({...formData, availability: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="regular">Regular (Weekly)</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="project">Project-Based</SelectItem>
                          <SelectItem value="virtual">Virtual/Remote</SelectItem>
                          <SelectItem value="events">Events Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Expertise</Label>
                    <Input
                      id="skills"
                      placeholder="e.g., Teaching, Photography, Web Development, Marketing"
                      value={formData.skills}
                      onChange={(e) => setFormData({...formData, skills: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Previous Volunteering Experience (if any)</Label>
                    <Textarea
                      id="experience"
                      rows={3}
                      placeholder="Tell us about your previous volunteering experience..."
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to volunteer with us? *</Label>
                    <Textarea
                      id="motivation"
                      rows={4}
                      placeholder="Share your motivation and what you hope to achieve..."
                      value={formData.motivation}
                      onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Volunteer Impact</h2>
            <p className="text-xl opacity-90">
              Together, we're creating meaningful change
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Active Volunteers" },
              { number: "10,000+", label: "Hours Contributed" },
              { number: "50+", label: "Projects Supported" },
              { number: "25+", label: "Cities Covered" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Volunteering;