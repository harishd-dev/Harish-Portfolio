
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref, isVisible } = useScrollReveal(0.1);
  
  return (
    <footer className="border-t border-border py-10 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Harish <span className="text-primary">D</span></h2>
            <p className="text-muted-foreground text-sm mt-1">Building the future with AI and code</p>
          </div>
          
          <div className="flex space-x-3">
            {[
              { icon: GithubIcon, href: "https://github.com/Harishd-dev", label: "GitHub" },
              { icon: LinkedinIcon, href: "https://www.linkedin.com/in/harishd-dev/ ", label: "LinkedIn" },
              { icon: MailIcon, href: "mailto:harish.hema04@gmail.com", label: "Email" },
            ].map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all" aria-label={item.label}>
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs">
            &copy; {currentYear} Harish D. All rights reserved.
          </p>
          <nav className="flex space-x-6 text-xs mt-4 md:mt-0">
            {["about", "projects", "skills", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="text-muted-foreground hover:text-foreground transition-colors capitalize">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
