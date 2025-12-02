import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, BookOpen, FileText } from "lucide-react";

const Publications = () => {
  const publicationTypes = ["All", "Research Papers", "Case Studies", "Impact Reports", "White Papers", "Guides"];

  const publications = [
    {
      id: 1,
      title: "Best Practices in Community-Based Education",
      description: "A comprehensive guide on implementing effective education programs in rural communities. This publication synthesizes learnings from 50+ community education initiatives across 15 states.",
      type: "Research Paper",
      year: "2024",
      pages: "45 pages",
      fileSize: "1.2 MB",
      author: "Dr. Rajesh Kumar et al.",
      abstract: "This research examines successful community-based education models and provides actionable frameworks for NGOs and educational institutions.",
      downloads: 2450
    },
    {
      id: 2,
      title: "Women Empowerment Through Skill Development",
      description: "Case studies and strategies for empowering women through vocational training programs. Features 20 detailed case studies from across India.",
      type: "Case Study",
      year: "2024",
      pages: "32 pages",
      fileSize: "980 KB",
      author: "Priya Sharma, Meera Patel",
      abstract: "Analyzing successful interventions that helped 5,000+ women gain economic independence through skill training.",
      downloads: 1820
    },
    {
      id: 3,
      title: "Impact Assessment Report: Education Programs 2020-2023",
      description: "Detailed analysis of our education initiatives and their long-term impact on communities. Includes quantitative data and qualitative insights.",
      type: "Impact Report",
      year: "2023",
      pages: "68 pages",
      fileSize: "2.1 MB",
      author: "EmpowerEdu Research Team",
      abstract: "Comprehensive three-year evaluation of education programs reaching 30,000+ students across 200 villages.",
      downloads: 3120
    },
    {
      id: 4,
      title: "Sustainable Community Development Models",
      description: "Innovative approaches to creating sustainable development in underserved areas. Features frameworks and implementation guides.",
      type: "White Paper",
      year: "2023",
      pages: "28 pages",
      fileSize: "850 KB",
      author: "Arun Mehta, Kavita Singh",
      abstract: "Presenting scalable and sustainable community development frameworks tested across 100+ villages.",
      downloads: 1560
    },
    {
      id: 5,
      title: "Digital Literacy in Rural India: Challenges and Opportunities",
      description: "Research on the state of digital literacy in rural areas and recommendations for effective intervention strategies.",
      type: "Research Paper",
      year: "2024",
      pages: "52 pages",
      fileSize: "1.5 MB",
      author: "Dr. Suresh Reddy, Anita Desai",
      abstract: "Analysis of digital divide and successful models for bridging the technology gap in rural communities.",
      downloads: 1980
    },
    {
      id: 6,
      title: "Youth Engagement in Social Development: A Handbook",
      description: "Practical guide for engaging youth in community development initiatives with proven methodologies and tools.",
      type: "Guide",
      year: "2024",
      pages: "38 pages",
      fileSize: "1.1 MB",
      author: "Youth Programs Team",
      abstract: "Comprehensive toolkit for mobilizing and empowering youth as agents of social change.",
      downloads: 1340
    },
    {
      id: 7,
      title: "Health and Nutrition Programs: Impact Evaluation 2022-2023",
      description: "Detailed evaluation of health and nutrition interventions in rural communities with measurable outcomes.",
      type: "Impact Report",
      year: "2023",
      pages: "44 pages",
      fileSize: "1.3 MB",
      author: "Dr. Meera Singh, Health Team",
      abstract: "Assessment of health camps and nutrition programs that reached 25,000+ beneficiaries.",
      downloads: 980
    },
    {
      id: 8,
      title: "Microfinance and Women's Economic Empowerment",
      description: "Case study analysis of microfinance initiatives and their role in women's economic independence.",
      type: "Case Study",
      year: "2023",
      pages: "36 pages",
      fileSize: "940 KB",
      author: "Ramesh Yadav, Financial Inclusion Team",
      abstract: "Examining the impact of microfinance on 3,000+ women entrepreneurs across 50 villages.",
      downloads: 1450
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
                Publications & Research
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Research papers, case studies, and reports documenting our work, impact, and learnings from the field.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="text-center bg-primary/5">
                <CardContent className="pt-6">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold mb-1">85+</p>
                  <p className="text-sm text-muted-foreground">Publications</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-accent/5">
                <CardContent className="pt-6">
                  <Download className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold mb-1">12.5K</p>
                  <p className="text-sm text-muted-foreground">Total Downloads</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-secondary/5">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-3xl font-bold mb-1">28</p>
                  <p className="text-sm text-muted-foreground">Research Papers</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-muted">
                <CardContent className="pt-6">
                  <Badge className="h-8 w-fit mx-auto mb-2 text-base px-3">
                    2024
                  </Badge>
                  <p className="text-3xl font-bold mb-1">15</p>
                  <p className="text-sm text-muted-foreground">This Year</p>
                </CardContent>
              </Card>
            </div>

            {/* Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {publicationTypes.map((type) => (
                  <Badge 
                    key={type}
                    variant={type === "All" ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Publications Grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              {publications.map((pub) => (
                <Card key={pub.id} className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="text-sm">{pub.type}</Badge>
                      <div className="text-right">
                        <span className="text-sm font-medium text-muted-foreground">{pub.year}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 leading-tight">{pub.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-2">
                          By {pub.author}
                        </p>
                        <CardDescription className="text-sm leading-relaxed">
                          {pub.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {/* Abstract */}
                    <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Abstract:</strong> {pub.abstract}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {pub.pages}
                        </span>
                        <span>{pub.fileSize}</span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        {pub.downloads.toLocaleString()} downloads
                      </span>
                    </div>

                    {/* Download Button */}
                    <Button variant="default" className="w-full" size="lg">
                      <Download className="mr-2 h-4 w-4" />
                      Download Publication
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="pt-6">
                  <BookOpen className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Request a Publication</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Looking for a specific publication or need it in a different format?
                  </p>
                  <Button variant="outline">Contact Research Team</Button>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-secondary/10 to-muted">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">Cite Our Work</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Using our research? Learn how to properly cite our publications.
                  </p>
                  <Button variant="outline">Citation Guidelines</Button>
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

export default Publications;
