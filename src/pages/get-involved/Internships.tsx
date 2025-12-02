import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Calendar, FileText, Lightbulb, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Internships = () => {
  const internshipPrograms = [
    {
      title: "Program Management Intern",
      duration: "3-6 months",
      department: "Programs",
      stipend: "₹15,000-20,000/month",
      description: "Support program planning, implementation, and monitoring of education and skill development initiatives.",
      responsibilities: [
        "Assist in program planning and coordination",
        "Conduct field visits and community assessments",
        "Help prepare reports and documentation",
        "Support beneficiary tracking and data management"
      ],
      skills: ["Project Management", "Communication", "MS Office", "Hindi"]
    },
    {
      title: "Social Media & Content Intern",
      duration: "2-4 months",
      department: "Communications",
      stipend: "₹10,000-15,000/month",
      description: "Create engaging content, manage social media channels, and support digital marketing campaigns.",
      responsibilities: [
        "Create social media content and graphics",
        "Manage social media posting schedule",
        "Write blogs and success stories",
        "Track engagement metrics and analytics"
      ],
      skills: ["Content Writing", "Social Media", "Canva/Adobe", "Video Editing"]
    },
    {
      title: "Research & Documentation Intern",
      duration: "3-6 months",
      department: "Impact & Research",
      stipend: "₹12,000-18,000/month",
      description: "Conduct research, data analysis, and support documentation of program outcomes and impact.",
      responsibilities: [
        "Conduct literature review and research",
        "Collect and analyze program data",
        "Prepare impact reports and case studies",
        "Support M&E activities"
      ],
      skills: ["Research Methods", "Data Analysis", "Excel", "Writing"]
    },
    {
      title: "Fundraising & Partnerships Intern",
      duration: "2-4 months",
      department: "Resource Mobilization",
      stipend: "₹10,000-15,000/month",
      description: "Support fundraising efforts, donor communications, and partnership development activities.",
      responsibilities: [
        "Research potential donors and partners",
        "Prepare funding proposals and presentations",
        "Support donor relationship management",
        "Assist in organizing fundraising events"
      ],
      skills: ["Business Development", "Communication", "Presentation", "Networking"]
    },
    {
      title: "Field Operations Intern",
      duration: "3-6 months",
      department: "Field Operations",
      stipend: "₹12,000-16,000/month",
      description: "Work directly with communities, support program implementation, and gain grassroots experience.",
      responsibilities: [
        "Support community mobilization activities",
        "Assist in training and workshop facilitation",
        "Conduct beneficiary surveys and feedback",
        "Help with on-ground event coordination"
      ],
      skills: ["Field Work", "Hindi/Local Languages", "Adaptability", "Teamwork"]
    },
    {
      title: "Graphic Design & Creative Intern",
      duration: "2-3 months",
      department: "Communications",
      stipend: "₹8,000-12,000/month",
      description: "Create visual content, design materials for campaigns, and support brand communication.",
      responsibilities: [
        "Design social media graphics and infographics",
        "Create program collateral and presentations",
        "Support brand consistency across materials",
        "Develop visual content for campaigns"
      ],
      skills: ["Graphic Design", "Adobe Suite", "Creativity", "Visual Storytelling"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certificate of Completion",
      description: "Recognized internship certificate upon successful completion"
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Dedicated mentor for guidance and professional development"
    },
    {
      icon: Lightbulb,
      title: "Real-World Experience",
      description: "Work on live projects with measurable social impact"
    },
    {
      icon: TrendingUp,
      title: "Career Opportunities",
      description: "High-performing interns considered for full-time roles"
    }
  ];

  const eligibility = [
    "Currently enrolled in undergraduate/postgraduate program or recent graduate (within 1 year)",
    "Passionate about social sector and development work",
    "Strong communication skills in English and Hindi",
    "Available for minimum internship duration specified",
    "Self-motivated with ability to work independently",
    "Comfortable with field visits (for relevant positions)"
  ];

  const learningOutcomes = [
    "Understanding of NGO operations and social development",
    "Practical experience in program management",
    "Exposure to grassroots communities and challenges",
    "Skills in documentation, reporting, and communication",
    "Networking with development sector professionals",
    "Hands-on experience with social impact measurement"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-start to-hero-end text-primary-foreground py-24 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GraduationCap className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Launch Your Career in Social Impact
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Gain hands-on experience, mentorship, and real-world skills through our comprehensive internship programs
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#programs">Explore Internships</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Intern With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than an internship, it's a transformative learning experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programs Section */}
      <section id="programs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Available Internship Positions</h2>
            <p className="text-xl text-muted-foreground">
              Choose a program that matches your interests and career goals
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {internshipPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {program.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="gap-1">
                          <Calendar className="w-3 h-3" />
                          {program.duration}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <FileText className="w-3 h-3" />
                          {program.department}
                        </Badge>
                        <Badge variant="outline">
                          {program.stipend}
                        </Badge>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Responsibilities:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {program.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Learning Outcomes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-2xl">What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">How to Apply</h2>
              <p className="text-xl text-muted-foreground">
                Simple and transparent application process
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Apply Online", desc: "Submit application with resume and cover letter" },
                { step: "2", title: "Screening", desc: "Review of applications and shortlisting" },
                { step: "3", title: "Interview", desc: "Virtual or in-person interview" },
                { step: "4", title: "Onboarding", desc: "Offer letter and comprehensive orientation" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block">
                <CardContent className="pt-6">
                  <p className="text-lg mb-4">
                    <strong>Application Deadline:</strong> Rolling basis (applications accepted year-round)
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Start Date: Flexible based on availability
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/contact">Submit Application</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Intern Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Hear from our past interns about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Priya Sharma",
                role: "Program Management Intern",
                quote: "My internship gave me invaluable field experience and a deep understanding of grassroots development work. It shaped my career path."
              },
              {
                name: "Rahul Verma",
                role: "Social Media Intern",
                quote: "I learned so much about creating impact-driven content. The mentorship I received helped me grow both professionally and personally."
              },
              {
                name: "Anjali Singh",
                role: "Research Intern",
                quote: "Working on real research projects and seeing the impact of data-driven decisions was incredibly rewarding. Best learning experience ever!"
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardDescription className="italic text-base">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Apply now and take the first step toward a meaningful career in social development
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Apply for Internship</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internships;