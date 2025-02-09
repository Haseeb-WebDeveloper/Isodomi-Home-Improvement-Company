"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Dakisolatie",
    image: "/Dakisolatie.avif",
    features: "Optimaal haalbaar rendement dankzij professionele dakisolatie, uitgevoerd met hoogwaardige materialen en vakkundige installatie inclusief complete afwerking.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="m4 14 8-8 8 8" />
        <path d="M14 14v6" />
      </svg>
    )
  },
  {
    title: "Gevelisolatie",
    image: "/Gevelisolatie.avif",
    features: "Professionele binnengevelisolatie met hoogwaardige isolatiematerialen voor optimale warmtewering en energiebesparing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
      </svg>
    )
  },
  {
    title: "Vloerisolatie",
    image: "/Vloerisolatie.avif",
    features: "Professionele isolatie van vloeren en kruipruimtes maakt uw huis warmer. Met hoogwaardige isolatiematerialen en vakkundige installatie creëren we een comfortabeler leefklimaat.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 15h18" />
      </svg>
    )
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 overflow-hidden bg-foreground/5">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      <div className="absolute top-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-background to-transparent" /> */}

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Onze Diensten
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full"
            >
              {/* Service Card */}
              <div className="relative bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden border border-border h-full flex flex-col justify-between">

              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" /> */}
                  
                  {/* Icon */}
                  {/* <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center backdrop-blur-sm">
                    {service.icon}
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  {/* Features */}
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2  text-muted-foreground"
                      >
                        {service.features}
                      </motion.p>
                </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <Link
                    href="#contact"
                    className="flex items-center justify-center px-4 py-2 rounded-md bg-foreground/90 text-background w-full group-hover:bg-primary/80 group-hover:text-primary-foreground transition-colors"
                  >


                    Contact Ons
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"

                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 