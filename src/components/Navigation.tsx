import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import logoShring from "@/assets/logo-shring.png";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [{
    href: "/",
    label: "Home"
  }, {
    href: "/about",
    label: "About Us"
  }, {
    href: "/programs",
    label: "Programs"
  }, {
    href: "/get-involved",
    label: "Get Involved"
  }, {
    href: "/need-help",
    label: "Need Help?"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoShring} alt="Shring Training & Development Foundation Logo" className="h-16 w-auto ml-4" />
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => link.href === "/about" ? <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-background border-border z-50 shadow-lg">
                    <DropdownMenuItem asChild>
                      <Link to="/about/overview" className="cursor-pointer">
                        Overview
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/about/mission-vision" className="cursor-pointer">
                        Mission & Vision
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/about/values" className="cursor-pointer">
                        Our Values
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/about/team" className="cursor-pointer">
                        Our Team
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/about/achievements" className="cursor-pointer">
                        Awards & Recognition
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/about/certificates" className="cursor-pointer">
                        Certificates
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> : link.href === "/programs" ? <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-background border-border z-50 shadow-lg">
                    <DropdownMenuItem asChild>
                      <Link to="/programs/education" className="cursor-pointer">
                        Education for All
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/programs/skill-development" className="cursor-pointer">
                        Skill Development
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/programs/women-empowerment" className="cursor-pointer">
                        Women Empowerment
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/programs/community-development" className="cursor-pointer">
                        Community Development
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> : link.href === "/get-involved" ? <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-background border-border z-50 shadow-lg">
                    <DropdownMenuItem asChild>
                      <Link to="/get-involved/join-us" className="cursor-pointer">
                        Join Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/get-involved/volunteering" className="cursor-pointer">
                        Volunteering
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/get-involved/internships" className="cursor-pointer">
                        Internships
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/get-involved/careers" className="cursor-pointer">
                        Careers
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/get-involved/partner" className="cursor-pointer">
                        Partner With Us
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> : link.href === "/need-help" ? <DropdownMenu key={link.href}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-background border-border z-50 shadow-lg">
                    <DropdownMenuItem asChild>
                      <Link to="/contact" className="cursor-pointer">
                        Contact Us
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/faq" className="cursor-pointer">
                        FAQ
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                 </DropdownMenu> : <NavLink key={link.href} to={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" activeClassName="text-primary font-semibold border-b-2 border-primary pb-1">
                  {link.label}
                </NavLink>)}
            <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => link.href === "/about" ? <div key={link.href} className="flex flex-col gap-2">
                    <Link to={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-border">
                      <Link to="/about/overview" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Overview
                      </Link>
                      <Link to="/about/mission-vision" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Mission & Vision
                      </Link>
                      <Link to="/about/values" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Our Values
                      </Link>
                      <Link to="/about/team" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Our Team
                      </Link>
                      <Link to="/about/achievements" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Awards & Recognition
                      </Link>
                      <Link to="/about/certificates" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Certificates
                      </Link>
                    </div>
                  </div> : link.href === "/programs" ? <div key={link.href} className="flex flex-col gap-2">
                    <Link to={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-border">
                      <Link to="/programs/education" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Education for All
                      </Link>
                      <Link to="/programs/skill-development" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Skill Development
                      </Link>
                      <Link to="/programs/women-empowerment" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Women Empowerment
                      </Link>
                      <Link to="/programs/community-development" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Community Development
                      </Link>
                    </div>
                  </div> : link.href === "/get-involved" ? <div key={link.href} className="flex flex-col gap-2">
                    <Link to={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-border">
                      <Link to="/get-involved/join-us" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Join Us
                      </Link>
                      <Link to="/get-involved/volunteering" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Volunteering
                      </Link>
                      <Link to="/get-involved/internships" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Internships
                      </Link>
                      <Link to="/get-involved/careers" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Careers
                      </Link>
                      <Link to="/get-involved/partner" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Partner With Us
                      </Link>
                    </div>
                  </div> : link.href === "/need-help" ? <div key={link.href} className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-foreground">
                      {link.label}
                    </span>
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-border">
                      <Link to="/contact" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        Contact Us
                      </Link>
                      <Link to="/faq" onClick={() => setIsOpen(false)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                        FAQ
                      </Link>
                    </div>
                   </div> : <NavLink key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" activeClassName="text-primary font-semibold border-l-4 border-primary pl-2">
                    {link.label}
                  </NavLink>)}
              <Button asChild className="bg-accent hover:bg-accent/90 w-full">
                <Link to="/donate">Donate Now</Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;