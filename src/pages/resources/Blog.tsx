import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const categories = ["All", "Education", "Women Empowerment", "Skill Development", "Community", "Health", "Impact Stories"];

  const featuredPost = {
    id: 1,
    title: "Empowering Rural Women Through Digital Literacy",
    excerpt: "How our digital literacy program is transforming lives in rural communities by providing essential technology skills. Over the past year, we've trained 2,000 women in basic computer skills, enabling them to access online markets and expand their businesses.",
    author: "Priya Sharma",
    authorRole: "Program Director",
    date: "January 15, 2025",
    readTime: "8 min read",
    category: "Women Empowerment",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "The Impact of Quality Education on Community Development",
      excerpt: "Exploring the connection between education and sustainable community growth through real stories from our partner communities.",
      author: "Rajesh Kumar",
      authorRole: "Education Coordinator",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Skill Development: Building Tomorrow's Workforce",
      excerpt: "How vocational training programs are creating employment opportunities for youth in underserved areas.",
      author: "Anita Desai",
      authorRole: "Skills Training Lead",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Skill Development",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      title: "Breaking Barriers: Girls' Education in Remote Villages",
      excerpt: "The story of how we're overcoming cultural and logistical challenges to bring quality education to girls in remote areas.",
      author: "Meera Patel",
      authorRole: "Field Officer",
      date: "December 28, 2024",
      readTime: "9 min read",
      category: "Education",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      title: "Community Health Warriors: Training Local Champions",
      excerpt: "How we're empowering community members to become health educators and advocates in their villages.",
      author: "Dr. Suresh Reddy",
      authorRole: "Health Program Manager",
      date: "December 20, 2024",
      readTime: "5 min read",
      category: "Health",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      title: "From Farm to Market: Agricultural Training Success",
      excerpt: "Learn how modern farming techniques and market linkages are helping farmers double their income.",
      author: "Ramesh Yadav",
      authorRole: "Agriculture Specialist",
      date: "December 15, 2024",
      readTime: "7 min read",
      category: "Community",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
    },
    {
      id: 7,
      title: "Voices of Change: Women Entrepreneurs Share Their Journey",
      excerpt: "Inspiring stories from five women who transformed their lives through our entrepreneurship program.",
      author: "Kavita Singh",
      authorRole: "Women's Program Lead",
      date: "December 8, 2024",
      readTime: "10 min read",
      category: "Women Empowerment",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      id: 8,
      title: "The Power of Youth: Student-Led Community Projects",
      excerpt: "How our youth leadership program is fostering social responsibility and community development.",
      author: "Arun Mehta",
      authorRole: "Youth Programs Coordinator",
      date: "December 1, 2024",
      readTime: "6 min read",
      category: "Community",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80"
    },
    {
      id: 9,
      title: "Digital India: Bridging the Technology Gap",
      excerpt: "Our efforts to bring internet connectivity and digital skills to rural communities.",
      author: "Priya Sharma",
      authorRole: "Program Director",
      date: "November 25, 2024",
      readTime: "8 min read",
      category: "Skill Development",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-hero-start to-hero-end bg-clip-text text-transparent">
                Our Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Insights, stories, and perspectives on social impact and community development from our team and partners.
              </p>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <Badge 
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Featured Post */}
            <Card className="mb-12 overflow-hidden border-primary shadow-lg">
              <div className="md:flex">
                <div className="md:w-1/2 h-96 overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <CardHeader>
                    <Badge className="w-fit mb-3">Featured Post</Badge>
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant="secondary">{featuredPost.category}</Badge>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-3xl mb-3">{featuredPost.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">
                            {featuredPost.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{featuredPost.author}</p>
                          <p className="text-sm text-muted-foreground">{featuredPost.authorRole}</p>
                        </div>
                      </div>
                      <Button size="lg">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Recent Posts */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-3">
                            <Badge variant="secondary">{post.category}</Badge>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>
                          <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                          <CardDescription className="text-base">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                                <span className="text-sm font-semibold">
                                  {post.author.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium">{post.author}</p>
                                <p className="text-xs text-muted-foreground">{post.authorRole}</p>
                              </div>
                            </div>
                            <Button variant="outline">
                              Read Article
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
