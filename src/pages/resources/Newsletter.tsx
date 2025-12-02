import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Eye, Mail, BookOpen, Users, Heart } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const featuredArticles = [
    {
      id: 1,
      title: "Making a Difference: Q4 2024 Newsletter",
      date: "December 2024",
      category: "Quarterly Update",
      excerpt: "Discover how your support has transformed lives this quarter with inspiring success stories and upcoming initiatives.",
      image: "https://images.unsplash.com/photo-1586892477838-2b96e85e0f96?auto=format&fit=crop&q=80",
      readTime: "8 min read",
      featured: true
    },
    {
      id: 2,
      title: "From Darkness to Light: Solar Energy Initiative",
      date: "November 2024",
      category: "Impact Story",
      excerpt: "How our solar energy project brought electricity to 500 rural households, transforming education and livelihoods.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
      readTime: "6 min read",
      featured: true
    }
  ];

  const newsletters = [
    {
      id: 3,
      title: "Education Insights: September Newsletter",
      date: "September 2024",
      category: "Education",
      excerpt: "Highlighting our education program achievements and the impact of scholarship initiatives on underprivileged students.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Community Updates: June Newsletter",
      date: "June 2024",
      category: "Community",
      excerpt: "Celebrating milestones in community development and women empowerment programs across rural regions.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Women Entrepreneurs: Success Stories",
      date: "May 2024",
      category: "Women Empowerment",
      excerpt: "Meet five inspiring women who transformed their communities through our entrepreneurship training program.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Skill Development Milestone: 10,000 Trained",
      date: "April 2024",
      category: "Skill Development",
      excerpt: "Celebrating the achievement of training 10,000 youth in valuable vocational skills that lead to employment.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "Health & Wellness Campaign Results",
      date: "March 2024",
      category: "Health",
      excerpt: "Our rural health camps reached 8,000 people, providing free check-ups and essential medicines.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "Volunteer Spotlight: February Edition",
      date: "February 2024",
      category: "Volunteer",
      excerpt: "Recognizing the incredible dedication of our volunteers who make our programs possible.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-hero-start to-hero-end bg-clip-text text-transparent">
                Newsletter & Articles
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Stay updated with our latest news, stories, and insights about our programs and impact.
              </p>

              {/* Newsletter Subscription */}
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-4 justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Get monthly updates on our programs, impact stories, and upcoming events.
                  </p>
                  <div className="flex gap-2 max-w-md mx-auto">
                    <Input 
                      type="email" 
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                    />
                    <Button>Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold mb-1">120+</p>
                  <p className="text-sm text-muted-foreground">Articles Published</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold mb-1">15K+</p>
                  <p className="text-sm text-muted-foreground">Subscribers</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold mb-1">48</p>
                  <p className="text-sm text-muted-foreground">Monthly Issues</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold mb-1">98%</p>
                  <p className="text-sm text-muted-foreground">Reader Satisfaction</p>
                </CardContent>
              </Card>
            </div>

            {/* Featured Articles */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all border-primary/20">
                    <div className="h-64 overflow-hidden relative">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary">
                        Featured
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <CardTitle className="text-2xl">{article.title}</CardTitle>
                      <CardDescription className="text-base">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" size="lg">
                        <Eye className="mr-2 h-4 w-4" />
                        Read Full Article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recent Newsletters */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Recent Newsletters & Articles</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {newsletters.map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{item.category}</Badge>
                        <span className="text-sm text-muted-foreground">{item.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{item.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {item.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        <Eye className="mr-2 h-4 w-4" />
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Archive Note */}
            <div className="mt-12 text-center">
              <Card className="bg-muted/50 inline-block">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    Looking for older newsletters? Visit our{" "}
                    <a href="/resources/downloads" className="text-primary hover:underline font-medium">
                      Downloads section
                    </a>{" "}
                    to access the complete archive.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
