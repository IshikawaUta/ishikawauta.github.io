
import ContactForm from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl grid md:grid-cols-2 shadow-2xl overflow-hidden rounded-2xl">
        {/* Left Side with Background Image */}
        <div className="relative text-white p-8 md:p-12 flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://picsum.photos/seed/contact/800/1200"
              alt="Contact background"
              fill
              className="object-cover"
              data-ai-hint="abstract texture"
            />
            <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl font-headline font-bold mb-4">
              Get In Touch
            </h1>
            <p className="text-primary-foreground/90 max-w-md">
              Have a question or a project in mind? I&apos;d love to hear from you. Fill out the form or reach out through my other channels.
            </p>
          </div>

          <div className="relative z-10 space-y-6 mt-8">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary-foreground" />
              <a href="mailto:komikers09@gmail.com" className="hover:underline">komikers09@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary-foreground" />
              <span>+62 895 7010 60973</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary-foreground" />
              <span>Indonesia</span>
            </div>
          </div>
        </div>

        {/* Right Side with Form */}
        <div className="p-8 md:p-12 bg-background">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
            <ContactForm />
        </div>
      </Card>
    </div>
  );
}
