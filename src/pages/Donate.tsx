import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Briefcase, Heart, Users, DollarSign } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Donate = () => {
  const [donationType, setDonationType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  const presetAmounts = ["500", "1000", "2500", "5000"];

  const handleDonateSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for your generous donation! Redirecting to payment...");
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-hero-start/10 to-hero-end/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
            <p className="text-xl text-muted-foreground">
              Your donation helps us provide education, training, and support to thousands of individuals and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Examples */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Donation Creates Impact</h2>
            <p className="text-lg text-muted-foreground">See how your contribution makes a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">₹500</h3>
                <p className="text-sm text-muted-foreground">
                  Provides school supplies for one child for a month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Briefcase className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">₹1,000</h3>
                <p className="text-sm text-muted-foreground">
                  Sponsors one vocational training workshop
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Heart className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">₹2,500</h3>
                <p className="text-sm text-muted-foreground">
                  Supports a woman entrepreneur's startup kit
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">₹5,000</h3>
                <p className="text-sm text-muted-foreground">
                  Funds a complete health camp for a community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Make a Donation</CardTitle>
                <CardDescription>
                  Every contribution helps us create lasting change in communities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDonateSubmit} className="space-y-6">
                  {/* Donation Type */}
                  <div className="space-y-3">
                    <Label>Donation Type</Label>
                    <RadioGroup value={donationType} onValueChange={setDonationType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="font-normal cursor-pointer">
                          One-Time Donation
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="font-normal cursor-pointer">
                          Monthly Recurring Donation
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div className="space-y-3">
                    <Label>Select Amount (₹)</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {presetAmounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={selectedAmount === amount ? "default" : "outline"}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          className={selectedAmount === amount ? "bg-primary" : ""}
                        >
                          ₹{amount}
                        </Button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-amount">Custom Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          className="pl-9"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount("");
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Program Selection */}
                  <div className="space-y-3">
                    <Label>Support a Specific Program (Optional)</Label>
                    <RadioGroup defaultValue="general">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="font-normal cursor-pointer">
                          General Donation (Where Most Needed)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="education" id="education" />
                        <Label htmlFor="education" className="font-normal cursor-pointer">
                          Education Programs
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="skills" id="skills" />
                        <Label htmlFor="skills" className="font-normal cursor-pointer">
                          Skill Development
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="women" id="women" />
                        <Label htmlFor="women" className="font-normal cursor-pointer">
                          Women Empowerment
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="community" id="community" />
                        <Label htmlFor="community" className="font-normal cursor-pointer">
                          Community Development
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="donor-name">Full Name *</Label>
                      <Input id="donor-name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donor-email">Email *</Label>
                      <Input id="donor-email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donor-phone">Phone Number</Label>
                      <Input id="donor-phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  {/* Anonymous Donation */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="anonymous" />
                    <Label htmlFor="anonymous" className="font-normal cursor-pointer text-sm">
                      Make this donation anonymous
                    </Label>
                  </div>

                  {/* Tax Receipt */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tax-receipt" defaultChecked />
                    <Label htmlFor="tax-receipt" className="font-normal cursor-pointer text-sm">
                      Send me a tax receipt (80G deduction available)
                    </Label>
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg h-12">
                    Proceed to Payment
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Your donation is secure and encrypted. We accept all major payment methods.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Donate to EmpowerEdu?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">
                    Transparent fund utilization with regular updates
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">80G</div>
                  <p className="text-sm text-muted-foreground">
                    Tax exemption certificate available for all donations
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <p className="text-sm text-muted-foreground">
                    Years of trusted service to communities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
