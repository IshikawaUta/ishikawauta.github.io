import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Custom Website Development",
    description: "From personal portfolios to corporate websites, I build bespoke sites tailored to your unique needs.",
  },
  {
    title: "E-Commerce Solutions",
    description: "Powerful and scalable online stores with secure payment gateways and intuitive product management.",
  },
  {
    title: "Web Application Development",
    description: "Complex, data-driven web applications with rich user interfaces and robust back-end systems.",
  },
  {
    title: "Responsive Design",
    description: "Ensuring your website looks and functions perfectly on all devices, from desktops to smartphones.",
  },
];

export default function ServicesPage() {
  const whatsappLink = "https://wa.me/62895701060973?text=Hello%2C%20I'm%20interested%20in%20your%20web%20development%20services.";

  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
          My Services
        </h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          I offer professional web development services to bring your ideas to life. My focus is on creating responsive, fast, and user-friendly digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="bg-card/80">
            <CardHeader className="flex flex-row items-center gap-4">
              <CheckCircle className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center bg-card p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-headline text-primary mb-4">
          Have a project in mind?
        </h2>
        <p className="text-lg text-foreground/80 mb-6">
          Let&apos;s discuss your requirements and how I can help you achieve your goals.
        </p>
        <Button asChild size="lg">
          <Link href={whatsappLink} target="_blank">
            Contact Me on WhatsApp <MessageCircle className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
