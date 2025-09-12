
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code2, MessageCircle, Paintbrush, CloudUpload } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites tailored to your needs using the latest technologies and best practices.",
    features: [
      "Responsive Design",
      "Front-end Development",
      "Back-end Development",
      "API Integration",
    ],
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Creating beautiful and user-friendly interfaces that enhance the user experience.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
    ],
  },
  {
    icon: CloudUpload,
    title: "Deployment & DevOps",
    description: "Helps the process of deploying web applications to the server easily and securely.",
    features: [
      "Hosting Setup",
      "Domain Configuration",
      "SSL Installation",
      "Basic Server Maintenance",
    ],
  },
];

export default function ServicesPage() {
  const whatsappLink = "https://wa.me/62895701060973?text=Hello%2C%20I'm%20interested%20in%20your%20web%20development%20services.";

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });


  return (
    <div className="space-y-16">
      <div ref={heroRef} className={cn("text-center", heroInView ? "animate__animated animate__fadeInUp" : "opacity-0")}>
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
          My Services
        </h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          I offer a wide range of web development and design services to help bring your ideas to life.
        </p>
      </div>

      <div ref={servicesRef} className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-8", servicesInView ? "animate__animated animate__fadeInUp" : "opacity-0")}>
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col p-6 rounded-xl shadow-sm hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300">
            <CardHeader className="items-start p-0 mb-4">
               <div className="bg-primary/10 p-3 rounded-lg mb-4">
                <service.icon className="w-8 h-8 text-primary" />
               </div>
              <CardTitle className="font-headline text-2xl font-bold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col p-0">
              <p className="text-foreground/80 mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div ref={ctaRef} className={cn("text-center bg-card p-8 rounded-lg shadow-lg", ctaInView ? "animate__animated animate__fadeInUp" : "opacity-0")}>
        <h2 className="text-3xl font-headline text-primary mb-4">
          Have a project in mind?
        </h2>
        <p className="text-lg text-foreground/80 mb-6">
          Let&apos;s discuss your requirements and how I can help you achieve your goals.
        </p>
        <Button asChild size="lg" className="btn-shine-effect">
          <Link href={whatsappLink} target="_blank">
            Contact Me on WhatsApp <MessageCircle className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
