import { useState } from "react"; // Added for loading state
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import emailjs from "@emailjs/browser"; // Re-imported EmailJS

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, LinkedinIcon, GithubIcon, Loader2 } from "lucide-react"; // Added Loader2
import { useScrollReveal } from "@/hooks/useScrollReveal";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track loading state
  const { ref, isVisible } = useScrollReveal();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  // Re-integrated the EmailJS logic here
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: data.name,
          user_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
        <h2 className="section-heading text-3xl md:text-4xl font-bold">Get In Touch</h2>
        <div className="section-divider"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <h3 className={`text-xl font-semibold mb-6 text-foreground/90 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}>Reach Out</h3>
          
          {[
            { 
              icon: MailIcon, 
              label: "Email", 
              value: "harish.hema04@gmail.com", 
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=harish.hema04@gmail.com" 
            },
            { 
              icon: LinkedinIcon, 
              label: "LinkedIn", 
              value: "linkedin.com/in/harishd-dev", 
              href: "https://www.linkedin.com/in/harishd-dev/", 
              external: true 
            },
            { 
              icon: GithubIcon, 
              label: "GitHub", 
              value: "github.com/Harishd-dev", 
              href: "https://github.com/Harishd-dev", 
              external: true 
            },
          ].map((item, i) => (
            <Card key={item.label}
              className={`glass-card hover:border-primary/30 transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}>
              <CardContent className="flex items-center space-x-4 p-5">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-xs font-medium text-muted-foreground">{item.label}</h4>
                  <a href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm hover:text-primary transition-colors font-medium">
                    {item.value}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className={`glass-card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
          style={{ transitionDelay: '400ms' }}>
          <h3 className="text-xl font-semibold mb-6 text-foreground/90">Send a Message</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/70">Name</FormLabel>
                  <FormControl><Input placeholder="Your name" className="bg-secondary border-border" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/70">Email</FormLabel>
                  <FormControl><Input placeholder="Your email" type="email" className="bg-secondary border-border" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="subject" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/70">Subject</FormLabel>
                  <FormControl><Input placeholder="Subject" className="bg-secondary border-border" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/70">Message</FormLabel>
                  <FormControl><Textarea placeholder="Your message..." className="min-h-28 bg-secondary border-border" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button 
                type="submit" 
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;