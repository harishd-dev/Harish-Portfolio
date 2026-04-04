
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileDownIcon, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    const fileId = '1ftg5kaij6NiBEgKOYz4GltZkKFzrs3T7';
    window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-foreground">
          Harish <span className="text-primary">D</span>
        </a>
        
        <div className="hidden md:flex items-center gap-1">
          <a href="mailto:harish.hema04@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
            harish.hema04@gmail.com
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Button onClick={handleDownloadResume} variant="ghost" size="sm" className="hidden sm:flex gap-2 text-foreground/70 hover:text-foreground">
            <FileDownIcon className="h-4 w-4" />
            Resume
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full text-foreground/70 hover:text-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 bg-card border-border">
              <DropdownMenuItem asChild>
                <a href="#about" className="cursor-pointer w-full">About Me</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#timeline" className="cursor-pointer w-full">My Journey</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#projects" className="cursor-pointer w-full">Projects</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#skills" className="cursor-pointer w-full">Skills</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" className="cursor-pointer w-full">Contact</a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
