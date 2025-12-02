import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I donate to your organization?",
      answer: "You can donate through our secure online donation page by clicking the 'Donate Now' button. We accept various payment methods including credit/debit cards, UPI, and bank transfers. You can also set up monthly recurring donations to provide sustained support."
    },
    {
      question: "Are donations tax-deductible?",
      answer: "Yes, all donations to our organization are eligible for tax deductions under Section 80G of the Income Tax Act. We will provide you with a receipt for tax purposes immediately after your donation is processed."
    },
    {
      question: "How can I volunteer with your organization?",
      answer: "We welcome volunteers! You can apply through our 'Get Involved' section. We offer various volunteering opportunities including teaching, skill training, event organization, and administrative support. Fill out the volunteer application form and our team will contact you."
    },
    {
      question: "What programs do you currently run?",
      answer: "We run four main programs: Education for All (free schooling for underprivileged children), Skill Development (vocational training and digital literacy), Women Empowerment (self-help groups and entrepreneurship), and Community Development (health camps and rural outreach)."
    },
    {
      question: "How can I track the impact of my donation?",
      answer: "We provide regular updates through our newsletter, annual reports, and impact stories on our website. Donors receive quarterly updates about the programs their contributions support. You can also visit our programs to see the impact firsthand."
    },
    {
      question: "Do you offer internship opportunities?",
      answer: "Yes, we offer internships in various departments including program management, communications, fundraising, and research. Internships typically last 2-6 months. Visit our 'Get Involved > Internships' page to learn more and apply."
    },
    {
      question: "Can corporations partner with your organization?",
      answer: "Absolutely! We welcome corporate partnerships for CSR initiatives, employee volunteering programs, skill development workshops, and more. Please visit our 'Partner With Us' page or contact us directly to discuss partnership opportunities."
    },
    {
      question: "How do you ensure transparency in fund utilization?",
      answer: "We maintain complete transparency through regular audits, annual reports, and detailed financial statements published on our website. We also provide program-specific reports showing exactly how funds are utilized and the impact created."
    },
    {
      question: "What age groups do your education programs serve?",
      answer: "Our education programs serve children from ages 5-18, covering primary through secondary education. We also offer adult literacy programs and vocational training for youth and adults aged 18 and above."
    },
    {
      question: "How can I stay updated about your work?",
      answer: "You can subscribe to our newsletter, follow us on social media, or regularly visit our website for updates. We share success stories, program updates, upcoming events, and volunteer opportunities through these channels."
    },
    {
      question: "Do you accept in-kind donations?",
      answer: "Yes, we accept in-kind donations such as books, educational materials, computers, and other resources that support our programs. Please contact us to discuss what items are currently needed and how to arrange donation drop-off."
    },
    {
      question: "What is your refund policy for donations?",
      answer: "While donations are typically non-refundable, we understand that errors can occur. If you believe there has been an error in your donation, please contact us within 7 days and we will review your request on a case-by-case basis."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-hero-start to-hero-end text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <HelpCircle className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl">
              Find answers to common questions about our programs, donations, volunteering, and more.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                    <AccordionTrigger className="text-left font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Still Have Questions */}
            <div className="max-w-4xl mx-auto mt-12 text-center p-8 bg-muted rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Please reach out to our team.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
