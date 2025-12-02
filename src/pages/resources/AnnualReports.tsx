import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Users, Target, TrendingUp, DollarSign } from "lucide-react";

const AnnualReports = () => {
  const reports = [
    {
      year: "2024",
      title: "Annual Report 2024",
      subtitle: "Building Bridges to a Brighter Future",
      description: "Our latest comprehensive report covering all programs, achievements, and financial details.",
      highlights: [
        { icon: Users, label: "People Impacted", value: "50,000+" },
        { icon: Target, label: "Programs Launched", value: "12" },
        { icon: TrendingUp, label: "Growth Rate", value: "35%" },
        { icon: DollarSign, label: "Funds Raised", value: "$2.5M" }
      ],
      fileSize: "2.5 MB",
      pages: "68 pages",
      featured: true
    },
    {
      year: "2023",
      title: "Annual Report 2023",
      subtitle: "Empowering Communities, Transforming Lives",
      description: "A year of growth and impact in education and community development.",
      highlights: [
        { icon: Users, label: "People Impacted", value: "38,000+" },
        { icon: Target, label: "Programs Active", value: "10" },
        { icon: TrendingUp, label: "Growth Rate", value: "28%" },
        { icon: DollarSign, label: "Funds Raised", value: "$1.8M" }
      ],
      fileSize: "2.8 MB",
      pages: "62 pages",
      featured: false
    },
    {
      year: "2022",
      title: "Annual Report 2022",
      subtitle: "Creating Sustainable Change",
      description: "Celebrating milestones in women empowerment and skill development.",
      highlights: [
        { icon: Users, label: "People Impacted", value: "28,000+" },
        { icon: Target, label: "Programs Active", value: "8" },
        { icon: TrendingUp, label: "Growth Rate", value: "22%" },
        { icon: DollarSign, label: "Funds Raised", value: "$1.2M" }
      ],
      fileSize: "2.3 MB",
      pages: "55 pages",
      featured: false
    },
    {
      year: "2021",
      title: "Annual Report 2021",
      subtitle: "Resilience and Recovery",
      description: "Adapting and growing through challenges while maintaining our commitment to communities.",
      highlights: [
        { icon: Users, label: "People Impacted", value: "22,000+" },
        { icon: Target, label: "Programs Active", value: "7" },
        { icon: TrendingUp, label: "Growth Rate", value: "18%" },
        { icon: DollarSign, label: "Funds Raised", value: "$980K" }
      ],
      fileSize: "2.1 MB",
      pages: "48 pages",
      featured: false
    },
    {
      year: "2020",
      title: "Annual Report 2020",
      subtitle: "Foundation for Growth",
      description: "Building strong foundations and expanding our reach to underserved communities.",
      highlights: [
        { icon: Users, label: "People Impacted", value: "15,000+" },
        { icon: Target, label: "Programs Active", value: "5" },
        { icon: TrendingUp, label: "Growth Rate", value: "15%" },
        { icon: DollarSign, label: "Funds Raised", value: "$650K" }
      ],
      fileSize: "1.9 MB",
      pages: "42 pages",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-hero-start to-hero-end bg-clip-text text-transparent">
                Annual Reports
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our journey through detailed annual reports showcasing our impact, achievements, 
                financial transparency, and commitment to empowering communities.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Comprehensive Overview</CardTitle>
                  <CardDescription>
                    Detailed insights into all our programs, initiatives, and impact metrics
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg">Financial Transparency</CardTitle>
                  <CardDescription>
                    Complete financial statements and fund utilization breakdowns
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-secondary/5 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-lg">Impact Stories</CardTitle>
                  <CardDescription>
                    Real stories from beneficiaries and community transformations
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Reports Grid */}
            <div className="space-y-8">
              {reports.map((report) => (
                <Card 
                  key={report.year} 
                  className={`hover:shadow-xl transition-all ${report.featured ? 'border-primary shadow-lg' : ''}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-3xl">{report.title}</CardTitle>
                            {report.featured && (
                              <Badge variant="default" className="text-xs">Latest</Badge>
                            )}
                          </div>
                          <p className="text-lg font-semibold text-muted-foreground mb-2">
                            {report.subtitle}
                          </p>
                          <CardDescription className="text-base">
                            {report.description}
                          </CardDescription>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      {report.highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-accent/30 rounded-lg">
                            <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                            <div>
                              <p className="text-xs text-muted-foreground">{highlight.label}</p>
                              <p className="text-lg font-bold">{highlight.value}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          {report.pages}
                        </span>
                        <span>File size: {report.fileSize}</span>
                      </div>
                      <Button 
                        variant={report.featured ? "default" : "outline"}
                        size="lg"
                        className="gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download {report.year} Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <p className="text-center text-muted-foreground">
                <strong>Note:</strong> All reports are available in PDF format. For older reports or specific sections, 
                please <a href="/contact" className="text-primary hover:underline">contact us</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnnualReports;
