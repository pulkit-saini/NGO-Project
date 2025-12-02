import { Link } from "react-router-dom";
import { Heart, Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoShring from "@/assets/logo-shring.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoShring} alt="Shring Training & Development Foundation Logo" className="h-12 w-auto" />
              <span className="font-bold text-base">Shring Training & Development Foundation</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering communities through education, training, and social development initiatives.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/programs#education" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Education for All
                </Link>
              </li>
              <li>
                <Link to="/programs#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Skill Development
                </Link>
              </li>
              <li>
                <Link to="/programs#women" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link to="/programs#community" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Community Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates and stories of impact.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="text-sm"
              />
              <Button size="sm" className="bg-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Shring Training & Development Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
