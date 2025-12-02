import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, Users, Heart, TrendingUp, Award, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const openPositions = [
    {
      title: "Program Manager - Education",
      department: "Programs",
      location: "Delhi/Hybrid",
      type: "Full-time",
      experience: "3-5 years",
      description: "Lead and manage education programs across multiple locations, ensuring quality delivery and impact measurement.",
      requirements: [
        "Bachelor's degree in Education, Social Work, or related field",
        "3+ years experience in program management",
        "Strong leadership and team management skills",
        "Experience with NGO/development sector preferred"
      ]
    },
    {
      title: "Community Development Officer",
      department: "Field Operations",
      location: "Rural Rajasthan",
      type: "Full-time",
      experience: "2-4 years",
      description: "Work directly with communities to implement development programs and build local capacity.",
      requirements: [
        "Graduate degree in any discipline",
        "2+ years field experience",
        "Fluency in Hindi and local languages",
        "Willingness to work in rural areas"
      ]
    },
    {
      title: "Fundraising & Partnerships Lead",
      department: "Resource Mobilization",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-6 years",
      description: "Drive fundraising efforts and build strategic partnerships with corporates, foundations, and donors.",
      requirements: [
        "Bachelor's degree in Business, Communications, or related field",
        "4+ years experience in fundraising or business development",
        "Excellent communication and presentation skills",
        "Track record of securing funding"
      ]
    },
    {
      title: "Monitoring & Evaluation Specialist",
      department: "Impact & Research",
      location: "Delhi",
      type: "Full-time",
      experience: "3-5 years",
      description: "Design and implement M&E frameworks, collect data, and generate impact reports.",
      requirements: [
        "Master's degree in Statistics, Development Studies, or related field",
        "3+ years M&E experience",
        "Proficiency in data analysis tools",
        "Experience with donor reporting"
      ]
    },
    {
      title: "Digital Marketing Coordinator",
      department: "Communications",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      description: "Manage digital presence, create engaging content, and drive online engagement.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "2+ years digital marketing experience",
        "Strong social media and content creation skills",
        "Experience with NGO sector is a plus"
      ]
    },
    {
      title: "Skill Training Facilitator",
      department: "Programs",
      location: "Bangalore",
      type: "Full-time",
      experience: "2-4 years",
      description: "Deliver vocational training programs and support beneficiaries in skill development.",
      requirements: [
        "Bachelor's degree with relevant vocational certification",
        "2+ years training/teaching experience",
        "Passion for youth empowerment",
        "Industry connections preferred"
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Meaningful Work",
      description: "Make a real difference in communities every day"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Professional development and career advancement"
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with passionate, mission-driven colleagues"
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Health insurance, leave policies, and performance bonuses"
    },
    {
      icon: GraduationCap,
      title: "Learning & Training",
      description: "Regular workshops, conferences, and skill building"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and supportive policies"
    }
  ];

  const whyJoinUs = [
    "Work on diverse projects impacting thousands of lives",
    "Be part of a growing organization with national presence",
    "Collaborate with government, corporates, and communities",
    "Access to leadership development programs",
    "Performance-based recognition and rewards",
    "Inclusive and diverse workplace culture"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-hero-start to-hero-end text-primary-foreground py-24 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Career, Build Communities
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Join our team of dedicated professionals working to create lasting social impact across India
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href="#open-positions">View Open Positions</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Work With Shring Training & Development Foundation?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than a job, it's a calling to serve and transform lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto bg-muted/30">
            <CardHeader>
              <CardTitle className="text-2xl">Additional Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4">
                {whyJoinUs.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground">
              Find your perfect role and start making a difference
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {position.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="gap-1">
                          <Briefcase className="w-3 h-3" />
                          {position.department}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </Badge>
                        <Badge variant="outline">
                          {position.experience}
                        </Badge>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Application Process</h2>
              <p className="text-xl text-muted-foreground">
                How to apply for positions at Shring Training & Development Foundation
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Submit Application", desc: "Apply through our contact form or email" },
                { step: "2", title: "Initial Screening", desc: "Review of application and shortlisting" },
                { step: "3", title: "Interview Process", desc: "Multiple rounds including field visit" },
                { step: "4", title: "Offer & Onboarding", desc: "Job offer and comprehensive onboarding" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Send Your Resume</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;