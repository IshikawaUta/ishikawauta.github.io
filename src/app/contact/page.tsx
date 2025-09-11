import ContactForm from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Have a question or a project in mind? I&apos;d love to hear from you. Fill out the form below or reach out through my other channels.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Email</h3>
              <p className="text-foreground/80">komikers09@gmail.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Phone</h3>
              <p className="text-foreground/80">+62 895 7010 60973</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Location</h3>
              <p className="text-foreground/80">Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
