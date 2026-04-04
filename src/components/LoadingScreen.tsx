
import { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const name = "HARISH";
  const [progress, setProgress] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const duration = 2400;
    const steps = 60;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 100 / steps;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => setFadeOut(true), 300);
        setTimeout(() => onComplete(), 800);
      }
      setProgress(current);
      setVisibleLetters(Math.floor((current / 100) * name.length));
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mb-10 flex gap-3 md:gap-4">
        {name.split("").map((letter, i) => (
          <span
            key={i}
            className={`text-6xl md:text-8xl font-black tracking-wider transition-all ease-out ${
              i < visibleLetters
                ? "translate-x-0 opacity-100 blur-0"
                : "-translate-x-6 opacity-0 blur-sm"
            }`}
            style={{
              fontFamily: "'Playfair Display', serif",
              transitionDuration: "600ms",
              color: "hsl(var(--primary))",
              textShadow: i < visibleLetters ? "0 0 30px hsl(var(--primary) / 0.3)" : "none",
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div className="h-0.5 w-64 overflow-hidden rounded-full bg-secondary/50 md:w-80">
        <div
          className="h-full rounded-full transition-all duration-150 ease-linear"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))",
            boxShadow: "0 0 12px hsl(var(--primary) / 0.5)",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
