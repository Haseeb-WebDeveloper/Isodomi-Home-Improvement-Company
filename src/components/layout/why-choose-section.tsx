"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Verbeterd wooncomfort",
    description: "Geniet van een aangenamer binnenklimaat het hele jaar door",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
  },
  {
    title: "Waardestijging van uw woning",
    description: "Verhoog de marktwaarde van uw woning met duurzame verbeteringen",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 20 2-2m0 0 2-2m-2 2-2-2m2 2 2 2m-2-4v4m-2-2h4" />
        <path d="M19 9V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2" />
        <path d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
        <path d="m5 18 6-6m0 0 6-6" />
      </svg>
    ),
  },
  {
    title: "Verlaging energiekosten",
    description: "Bespaar significant op uw maandelijkse energierekening",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20" />
        <path d="m17 5-5-3-5 3" />
        <path d="m17 19-5 3-5-3" />
        <path d="M20 10c0 6-8 6-8 6s-8 0-8-6" />
      </svg>
    ),
  },
  {
    title: "Temperatuurregulatie",
    description: "Behoud een constante, aangename temperatuur in elk seizoen",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 bg-foreground/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Waarom kiezen voor isoleren:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative z-10 h-full p-8 rounded-2xl bg-background border border-primary/10 hover:border-primary/20 transition-colors">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 border border-primary/50 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}