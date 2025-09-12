
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code2, MessageCircle, Paintbrush, CloudUpload } from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation();
  const whatsappLink = "https://wa.me/62895701060973?text=Hello%2C%20I'm%20interested%20in%20your%20web%20development%20services.";

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Code2,
      title: t('web_development'),
      description: t('web_development_desc'),
      features: [
        t('responsive_design'),
        t('frontend_dev'),
        t('backend_dev'),
        t('api_integration'),
      ],
    },
    {
      icon: Paintbrush,
      title: t('ui_ux_design'),
      description: t('ui_ux_design_desc'),
      features: [
        t('user_research'),
        t('wireframing'),
        t('prototyping'),
        t('visual_design'),
      ],
    },
    {
      icon: CloudUpload,
      title: t('deployment_devops'),
      description: t('deployment_devops_desc'),
      features: [
        t('hosting_setup'),
        t('domain_config'),
        t('ssl_install'),
        t('server_maintenance'),
      ],
    },
  ];

  return (
    <div className="space-y-16">
      <div ref={heroRef} className={cn("text-center", heroInView ? "animate__animated animate__fadeInUp" : "opacity-0")}>
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
          {t('my_services')}
        </h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          {t('my_services_desc')}
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
          {t('have_project')}
        </h2>
        <p className="text-lg text-foreground/80 mb-6">
          {t('have_project_desc')}
        </p>
        <Button asChild size="lg" className="btn-shine-effect">
          <Link href={whatsappLink} target="_blank">
            {t('contact_whatsapp')} <MessageCircle className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
