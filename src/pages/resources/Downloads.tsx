import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Image, Video, FileSpreadsheet } from "lucide-react";

const Downloads = () => {
  const documents = [
    { name: "Volunteer Application Form", size: "125 KB", type: "PDF", description: "Complete application form for volunteers" },
    { name: "Internship Application Form", size: "135 KB", type: "PDF", description: "Application for student internships" },
    { name: "Donation Receipt Template", size: "85 KB", type: "PDF", description: "Template for donation receipts" },
    { name: "Partnership Proposal Template", size: "150 KB", type: "PDF", description: "Template for partnership proposals" },
    { name: "Impact Report Template", size: "180 KB", type: "DOC", description: "Template for creating impact reports" },
    { name: "Tax Exemption Certificate", size: "95 KB", type: "PDF", description: "80G tax exemption certificate" }
  ];

  const brochures = [
    { name: "EmpowerEdu Overview Brochure", size: "2.5 MB", type: "PDF", description: "Complete overview of our organization" },
    { name: "Program Highlights 2024", size: "1.8 MB", type: "PDF", description: "Our programs and achievements" },
    { name: "Education Programs Brochure", size: "1.2 MB", type: "PDF", description: "Detailed education initiatives" },
    { name: "Women Empowerment Brochure", size: "1.4 MB", type: "PDF", description: "Women's programs overview" },
    { name: "Skill Development Catalog", size: "2.1 MB", type: "PDF", description: "Training programs offered" }
  ];

  const media = [
    { name: "Logo Package (High Resolution)", size: "5.2 MB", type: "ZIP", description: "All logo variants in various formats" },
    { name: "Brand Guidelines", size: "3.8 MB", type: "PDF", description: "Complete brand identity guidelines" },
    { name: "Promotional Images Collection", size: "12 MB", type: "ZIP", description: "High-resolution program photos" },
    { name: "Program Video Clips", size: "45 MB", type: "ZIP", description: "Short promotional videos" },
    { name: "Infographics Pack", size: "8.5 MB", type: "ZIP", description: "Impact statistics infographics" }
  ];

  const templates = [
    { name: "Event Planning Checklist", size: "95 KB", type: "XLSX", description: "Comprehensive event planning tool" },
    { name: "Budget Template", size: "110 KB", type: "XLSX", description: "Project budget planning template" },
    { name: "Volunteer Schedule Template", size: "85 KB", type: "XLSX", description: "Manage volunteer schedules" },
    { name: "Fundraising Tracker", size: "120 KB", type: "XLSX", description: "Track fundraising campaigns" },
    { name: "Impact Measurement Framework", size: "145 KB", type: "XLSX", description: "Measure program impact" }
  ];

  const newsletters = [
    { name: "Q4 2024 Newsletter", size: "2.2 MB", type: "PDF", description: "Latest quarterly update" },
    { name: "Q3 2024 Newsletter", size: "2.0 MB", type: "PDF", description: "July-September highlights" },
    { name: "Q2 2024 Newsletter", size: "1.9 MB", type: "PDF", description: "April-June updates" },
    { name: "Q1 2024 Newsletter", size: "2.1 MB", type: "PDF", description: "January-March edition" }
  ];

  const DownloadItem = ({ item, icon: Icon }: any) => (
    <div className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 hover:shadow-md transition-all group">
      <div className="flex items-center gap-4 flex-1">
        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-medium mb-1">{item.name}</p>
          <p className="text-xs text-muted-foreground mb-1">{item.description}</p>
          <p className="text-xs text-muted-foreground">
            <Badge variant="outline" className="text-xs mr-2">{item.type}</Badge>
            {item.size}
          </p>
        </div>
      </div>
      <Button size="sm" className="gap-2">
        <Download className="h-4 w-4" />
        Download
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-hero-start to-hero-end bg-clip-text text-transparent">
                Downloads Center
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access forms, brochures, media kits, templates, and other resources to support your engagement with EmpowerEdu.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="text-center bg-primary/5">
                <CardContent className="pt-4 pb-4">
                  <FileText className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-2xl font-bold">25+</p>
                  <p className="text-xs text-muted-foreground">Resources</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-accent/5">
                <CardContent className="pt-4 pb-4">
                  <Download className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-2xl font-bold">8.5K</p>
                  <p className="text-xs text-muted-foreground">Downloads</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-secondary/5">
                <CardContent className="pt-4 pb-4">
                  <Image className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-2xl font-bold">150+</p>
                  <p className="text-xs text-muted-foreground">Media Files</p>
                </CardContent>
              </Card>
              <Card className="text-center bg-muted">
                <CardContent className="pt-4 pb-4">
                  <FileSpreadsheet className="h-6 w-6 text-primary mx-auto mb-1" />
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-xs text-muted-foreground">Templates</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="documents" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="documents">Documents</TabsTrigger>
                <TabsTrigger value="brochures">Brochures</TabsTrigger>
                <TabsTrigger value="media">Media Kit</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
              </TabsList>

              <TabsContent value="documents" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Forms & Documents</CardTitle>
                    <CardDescription>
                      Download application forms and other essential documents
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {documents.map((item, idx) => (
                      <DownloadItem key={idx} item={item} icon={FileText} />
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="brochures" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Brochures & Flyers</CardTitle>
                    <CardDescription>
                      Download our informational brochures and promotional materials
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {brochures.map((item, idx) => (
                      <DownloadItem key={idx} item={item} icon={FileText} />
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="media" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Media Kit</CardTitle>
                    <CardDescription>
                      Logos, images, and videos for media and promotional use
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {media.map((item, idx) => (
                      <DownloadItem 
                        key={idx} 
                        item={item} 
                        icon={item.name.includes('Logo') || item.name.includes('Images') ? Image : Video} 
                      />
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="templates" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Templates & Tools</CardTitle>
                    <CardDescription>
                      Ready-to-use templates for planning, organizing, and managing programs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {templates.map((item, idx) => (
                      <DownloadItem key={idx} item={item} icon={FileSpreadsheet} />
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="newsletters" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Newsletter Archive</CardTitle>
                    <CardDescription>
                      Download past editions of our quarterly newsletters
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {newsletters.map((item, idx) => (
                      <DownloadItem key={idx} item={item} icon={FileText} />
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Help Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                  <p className="text-muted-foreground mb-4">
                    Can't find what you're looking for? Contact our team for assistance or to request specific resources.
                  </p>
                  <Button>Contact Support</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;
