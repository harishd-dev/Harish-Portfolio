
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCapIcon, BrainIcon, CodeIcon, RocketIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const timelineEvents = [
  { id: 1, year: "2022", title: "Started Computer Science Journey", description: "Began CS studies focusing on programming fundamentals and web development.", icon: GraduationCapIcon },
  { id: 2, year: "2023", title: "Discovered AI & Machine Learning", description: "Dove deep into AI/ML, exploring TensorFlow and Python for data science.", icon: BrainIcon },
  { id: 3, year: "2023", title: "Built Lyra Voice Assistant", description: "Developed a custom voice assistant showcasing NLP capabilities.", icon: CodeIcon },
  { id: 4, year: "2024", title: "Expanding Tech Stack", description: "Working on various projects while exploring new technologies and open source.", icon: RocketIcon },
];

const TimelineSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="timeline" className="py-24 px-6 md:px-12 bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Timeline</p>
          <h2 className="section-heading">My Journey</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8 gap-4
                  transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <Card className="glass-card hover:border-primary/30 transition-all duration-300 hover:scale-[1.02]">
                    <CardContent className="p-6">
                      <div className={`flex items-center gap-3 mb-3 justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="p-2 rounded-lg bg-primary/10">
                          <event.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{event.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative z-10 hidden md:block">
                  <div className={`w-3 h-3 bg-primary rounded-full transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`}
                    style={{ transitionDelay: `${500 + index * 200}ms` }}></div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
