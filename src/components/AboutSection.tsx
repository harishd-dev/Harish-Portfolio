
import { Card, CardContent } from "@/components/ui/card";
import { CodeIcon, BrainIcon, MessagesSquareIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Who I Am</p>
        <h2 className="section-heading">About Me</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          {[0, 1, 2].map((i) => (
            <p key={i} className={`text-lg text-foreground/70 leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}>
              {i === 0 && "I'm a Computer Science student with a passion for artificial intelligence, machine learning, and creating solutions that make a positive impact. My journey in tech began with coding simple websites, but quickly evolved into diving deep into the world of AI and voice technology."}
              {i === 1 && "With hands-on experience in Python, TensorFlow, and various web technologies, I enjoy building applications that are not only functional but also user-friendly. One of my proudest achievements is Lyra, my custom-built voice assistant."}
              {i === 2 && "I thrive on continuous learning, problem-solving, and collaborating with like-minded individuals to create innovative tech solutions."}
            </p>
          ))}
        </div>
        
        <div className="grid gap-5">
          {[
            { icon: BrainIcon, title: "AI & Machine Learning", desc: "Creating intelligent systems that learn and adapt with practical AI applications.", color: "primary" },
            { icon: MessagesSquareIcon, title: "Voice Technology", desc: "Built Lyra, a custom voice assistant with NLP and speech recognition.", color: "accent" },
            { icon: CodeIcon, title: "Software Development", desc: "Crafting clean, efficient code with a focus on user experience.", color: "primary" },
          ].map((item, i) => (
            <Card key={i} className={`glass-card hover:border-${item.color}/30 transition-all duration-500 group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}>
              <CardContent className="flex items-start space-x-4 p-6">
                <div className={`bg-${item.color}/10 p-3 rounded-lg group-hover:bg-${item.color}/20 transition-colors`}>
                  <item.icon className={`h-7 w-7 text-${item.color}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
