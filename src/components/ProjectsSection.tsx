
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  { id: 1, title: "Lyra Voice Assistant", description: "A custom-built voice assistant using Python and NLP for tasks like weather updates, reminders, and music playback.", tags: ["Python", "NLP", "TensorFlow"], liveLink: "https://example.com", codeLink: "https://github.com/Harishd-dev?tab=repositories" },
  { id: 2, title: "Climate Change Simulation", description: "Interactive tool simulating climate change effects with data visualization and ML predictions.", tags: ["Python", "ML", "Data Viz"], liveLink: "https://example.com", codeLink: "https://github.com/Harishd-dev?tab=repositories" },
  { id: 3, title: "Weather Forecast App", description: "Real-time weather updates and forecasts with interactive maps and location-based alerts.", tags: ["React", "API", "Geolocation"], liveLink: "https://example.com", codeLink: "https://github.com/Harishd-dev?tab=repositories" },
  { id: 4, title: "Food Calorie Tracker", description: "Mobile-friendly app for tracking calorie intake, nutritional info, and personalized health goals.", tags: ["React", "Firebase", "Health"], liveLink: "https://example.com", codeLink: "https://github.com/Harishd-dev?tab=repositories" },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="section" ref={ref}>
      <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="section-heading">Featured Projects</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Card key={project.id}
            className={`glass-card hover:border-primary/30 transition-all duration-500 group hover:scale-[1.02] overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${200 + i * 150}ms` }}>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden h-48 bg-muted">
              <iframe
                src={project.liveLink}
                title={`${project.title} preview`}
                className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-primary/5 transition-colors duration-300" />
            </a>
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary text-foreground/70 text-xs">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button variant="ghost" size="sm" asChild className="text-foreground/60 hover:text-foreground">
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <GithubIcon className="h-4 w-4" /> Code
                </a>
              </Button>
              <Button size="sm" asChild className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Live Demo <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className={`mt-12 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '800ms' }}>
        <Button asChild variant="outline" className="rounded-full px-8 border-border text-foreground/70 hover:text-foreground hover:border-foreground/30">
          <a href="https://github.com/Harishd-dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <GithubIcon className="h-5 w-5" /> View More on GitHub
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
