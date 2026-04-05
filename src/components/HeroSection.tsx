
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, InstagramIcon, ArrowDownIcon } from "lucide-react";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-24 right-[35%] w-16 h-16 border-2 border-accent rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-36 right-[28%] w-8 h-8 bg-accent rounded-full opacity-80" />
      <div className="absolute bottom-32 left-[10%] w-3 h-3 bg-primary rounded-full opacity-60" />

      <div className="container mx-auto px-6 md:px-8">
        {/* Profile Photo - background on md+, inline on mobile */}
        <div
          className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 z-0 pointer-events-none"
          style={{ transform: `translateX(-50%) translateY(${scrollY * 0.18}px)` }}
        >
          <img 
            src={profileImage} 
            alt="Harish" 
            className="w-[24rem] lg:w-[28rem] rounded-2xl object-contain opacity-90" 
          />
        </div>

        <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[80vh] pt-20 md:pt-0 pb-20 md:pb-0">
          {/* Mobile photo */}
          <div className="md:hidden flex justify-center animate-fade-in mb-2">
            <img 
              src={profileImage} 
              alt="Harish" 
              className="w-48 sm:w-56 rounded-2xl object-contain opacity-90" 
            />
          </div>

          {/* Left Column - Intro */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-lg md:text-xl font-medium text-foreground/70 mb-2 md:mb-3 animate-fade-in">
              Hi,
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 md:mb-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              I'm <span id="hero-name" className="text-primary">Harish</span>
            </h1>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/80 mb-6 md:mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              AI/ML Developer & Tech Innovator
            </h3>
            
            {/* Social links */}
            <div className="flex gap-4 animate-fade-in justify-center md:justify-start" style={{ animationDelay: "0.5s" }}>
              <a href="https://github.com/harishd-dev" target="_blank" rel="noopener noreferrer"
                className="p-3 text-foreground/50 hover:text-primary hover:scale-125 transition-all duration-300 hover:-translate-y-1">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/harishd-dev/" target="_blank" rel="noopener noreferrer"
                className="p-3 text-foreground/50 hover:text-primary hover:scale-125 transition-all duration-300 hover:-translate-y-1">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/_harish.ps_/" target="_blank" rel="noopener noreferrer"
                className="p-3 text-foreground/50 hover:text-primary hover:scale-125 transition-all duration-300 hover:-translate-y-1">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Right Column - Expert Info */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Expert on
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 animate-fade-in leading-tight" style={{ animationDelay: "0.35s" }}>
              Building AI Systems & Innovative Solutions.
            </h2>
            <p className="text-foreground/50 text-sm md:text-base mb-6 md:mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.5s" }}>
              A dedicated Computer Science professional specializing in AI/ML and voice assistant technologies. 
              Let's build something amazing together.
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <a href="#about" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40 hover:text-primary transition-colors animate-fade-in"
        style={{ animationDelay: "1s" }}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;