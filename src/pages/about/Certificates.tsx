import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, FileCheck, CheckCircle, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificates & Accreditations</h1>
            <p className="text-xl text-muted-foreground">
              Our certifications reflect our commitment to transparency and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-muted-foreground">
              Shring Training & Development Foundation maintains all necessary legal registrations and certifications to operate transparently 
              and efficiently. We are committed to the highest standards of governance, accountability, and compliance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Compliant</div>
            </div>
            <div className="text-center">
              <FileCheck className="h-10 w-10 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
            <div className="text-center">
              <Award className="h-10 w-10 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Accreditations</div>
            </div>
            <div className="text-center">
              <CheckCircle className="h-10 w-10 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">Annual</div>
              <div className="text-sm text-muted-foreground">Audits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Registrations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Legal Registrations & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">12A & 80G Registration</h3>
                    <p className="text-sm text-primary font-medium mb-2">Income Tax Act, 1961</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Registered under Section 12A and 80G of the Income Tax Act, enabling tax benefits for donors. 
                      All donations to Shring Training & Development Foundation are eligible for 50% tax deduction under Section 80G.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Registration No: AAATE1234F</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Valid until: Permanent</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            

            <Card className="border-l-4 border-l-accent">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Building2 className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">CSR-1 Registration</h3>
                    <p className="text-sm text-accent font-medium mb-2">Ministry of Corporate Affairs</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Registered with Ministry of Corporate Affairs for CSR partnerships. This registration allows 
                      corporate entities to fulfill their CSR obligations by partnering with us on social development projects.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">Registration No: CSR00012345</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">Valid until: Permanent</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Niti Aayog Registration</h3>
                    <p className="text-sm text-primary font-medium mb-2">Government of India</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Registered with Niti Aayog's NGO Darpan portal. This registration enables us to apply for 
                      government schemes and participate in government-funded social development programs.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Unique ID: DL/2010/0123456</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Status: Active</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Quality Management & Accreditations</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Award className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">ISO 9001:2015 Certification</h3>
                    <p className="text-sm text-accent font-medium mb-3">International Organization for Standardization</p>
                    <p className="text-muted-foreground mb-4">
                      Certified for quality management systems ensuring consistent service delivery across all programs. 
                      This certification demonstrates our commitment to maintaining high-quality standards in program design, 
                      implementation, monitoring, and continuous improvement. Our QMS covers all operational aspects including 
                      education delivery, skill training, community development, and organizational management.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-background p-3 rounded">
                        <div className="text-xs text-muted-foreground mb-1">Certified By</div>
                        <div className="text-sm font-medium">Bureau Veritas</div>
                      </div>
                      <div className="bg-background p-3 rounded">
                        <div className="text-xs text-muted-foreground mb-1">Certificate No</div>
                        <div className="text-sm font-medium">IN123456789</div>
                      </div>
                      <div className="bg-background p-3 rounded">
                        <div className="text-xs text-muted-foreground mb-1">Valid Until</div>
                        <div className="text-sm font-medium">December 2026</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2">Credibility Alliance Accreditation</h3>
                    <p className="text-sm text-primary font-medium mb-3">Credibility Alliance - India's Accountability Framework</p>
                    <p className="text-muted-foreground mb-4">
                      Accredited by Credibility Alliance for maintaining high standards of governance, transparency, and 
                      accountability. This accreditation validates our commitment to ethical practices, financial transparency, 
                      and impact reporting. We undergo annual assessments across multiple governance and transparency norms.
                    </p>
                    <div className="bg-background p-3 rounded">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Accreditation Status: Active</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Annual audits conducted. Financial statements and impact reports published on our website.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sector-Specific Registrations 
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Sector-Specific Registrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <FileCheck className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">NSDC Affiliation</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  National Skill Development Corporation partner for vocational training programs
                </p>
                <div className="text-xs text-muted-foreground">Partner Code: NSDC/2018/789</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <FileCheck className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">State Education Board</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Recognized by State Education Board for supplementary education programs
                </p>
                <div className="text-xs text-muted-foreground">License No: SEB/2015/4567</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <FileCheck className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Women Development Cell</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Registered with State Women Development Cell for empowerment programs
                </p>
                <div className="text-xs text-muted-foreground">Reg No: WDC/2016/234</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> 
      */}

      {/* Financial Transparency 
      <section className="py-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Financial Transparency & Governance</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Annual Audited Financial Statements</h3>
                      <p className="text-sm text-muted-foreground">
                        Audited by a reputed Chartered Accountant firm. Annual reports publicly available on our website.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">FCRA Returns Filed</h3>
                      <p className="text-sm text-muted-foreground">
                        Annual FCRA returns filed with Ministry of Home Affairs. All foreign contributions duly reported.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Income Tax Returns Filed</h3>
                      <p className="text-sm text-muted-foreground">
                        Regular income tax returns filed. All statutory compliances maintained.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold mb-1">Independent Board of Trustees</h3>
                      <p className="text-sm text-muted-foreground">
                        Governed by an independent board with diverse expertise. Regular board meetings and documented minutes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline">Download Annual Report 2023-24</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      <Footer />
    </div>
  );
};

export default Certificates;
