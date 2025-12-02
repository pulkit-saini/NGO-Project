import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Overview from "./pages/about/Overview";
import MissionVision from "./pages/about/MissionVision";
import Values from "./pages/about/Values";
import Team from "./pages/about/Team";
import Achievements from "./pages/about/Achievements";
import Certificates from "./pages/about/Certificates";
import JoinUs from "./pages/get-involved/JoinUs";
import Partner from "./pages/get-involved/Partner";
import Careers from "./pages/get-involved/Careers";
import Internships from "./pages/get-involved/Internships";
import Volunteering from "./pages/get-involved/Volunteering";
import FAQ from "./pages/FAQ";
import Education from "./pages/programs/Education";
import SkillDevelopment from "./pages/programs/SkillDevelopment";
import WomenEmpowerment from "./pages/programs/WomenEmpowerment";
import CommunityDevelopment from "./pages/programs/CommunityDevelopment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/overview" element={<Overview />} />
          <Route path="/about/mission-vision" element={<MissionVision />} />
          <Route path="/about/values" element={<Values />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/achievements" element={<Achievements />} />
          <Route path="/about/certificates" element={<Certificates />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/education" element={<Education />} />
          <Route path="/programs/skill-development" element={<SkillDevelopment />} />
          <Route path="/programs/women-empowerment" element={<WomenEmpowerment />} />
          <Route path="/programs/community-development" element={<CommunityDevelopment />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/get-involved/join-us" element={<JoinUs />} />
          <Route path="/get-involved/partner" element={<Partner />} />
          <Route path="/get-involved/careers" element={<Careers />} />
          <Route path="/get-involved/internships" element={<Internships />} />
          <Route path="/get-involved/volunteering" element={<Volunteering />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
