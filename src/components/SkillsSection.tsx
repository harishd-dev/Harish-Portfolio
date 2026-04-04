
import { useEffect, useRef, useState } from 'react';
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  { name: "Python", level: 90 },
  { name: "TensorFlow", level: 85 },
  { name: "NLP", level: 80 },
  { name: "Machine Learning", level: 85 },
  { name: "SQL", level: 75 },
  { name: "Git", level: 80 },
  { name: "Dev Tools", level: 85 },
  { name: "Web (HTML/CSS/JS)", level: 75 },
];

const otherSkills = [
  "Neural Networks", "Voice Recognition", "Data Analysis",
  "Scikit-learn", "PyTorch", "REST APIs",
  "Flask", "OpenAI", "AWS", "Problem Solving"
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setWidth(level), 200);
      }
    }, { threshold: 0.5 });
    if (barRef.current) observer.observe(barRef.current);
    return () => { if (barRef.current) observer.unobserve(barRef.current); };
  }, [level]);

  return (
    <div className="mb-5" ref={barRef}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-1.5">
        <div className="skill-bar h-1.5" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="section-heading">Skills & Tools</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '200ms' }}>
            <h3 className="text-lg font-semibold mb-6 text-foreground/90">Core Skills</h3>
            {skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </Card>
          
          <div className="space-y-6">
            <Card className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDelay: '300ms' }}>
              <h3 className="text-lg font-semibold mb-4 text-foreground/90">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {otherSkills.map((skill, index) => (
                  <span key={index}
                    className={`px-3 py-1.5 bg-secondary text-foreground/70 rounded-full text-xs font-medium
                      hover:bg-primary/10 hover:text-primary transition-all cursor-default
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                    style={{ transitionDelay: `${400 + index * 50}ms`, transitionDuration: '500ms' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
            
            <Card className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
              style={{ transitionDelay: '500ms' }}>
              <h3 className="text-lg font-semibold mb-4 text-foreground/90">Highlights</h3>
              <ul className="space-y-3 text-sm text-foreground/60">
                {["1.5 years team management experience", "Led multiple AI research projects", "Voice technology solutions for accessibility", "Open-source ML contributions"].map((item, i) => (
                  <li key={i} className={`flex items-start gap-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                    style={{ transitionDelay: `${600 + i * 100}ms` }}>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
