"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="relative pt-16 pb-24">
      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[650px] rounded-xl overflow-hidden">
              <Image
                src="/construction-worker.jpg"
                alt="Professional insulation work"
                fill
                className="object-cover"
                quality={100}
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            </div>

            {/* Stats */}
            <div className="absolute bottom-6 right-6 bg-background/80 backdrop-blur-lg rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">€180/m²</div>
                  <div className="text-sm text-muted-foreground">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=""
          >
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p>
                Isodomi is a specialized insulation company focused on making homes and 
                commercial buildings more energy-efficient across central Netherlands. 
                As experts in roof, facade, and floor insulation, we have extensive 
                experience in the insulation industry.
              </p>
              
              <p>
                Our mission is to help homeowners reduce their energy bills and improve 
                their living comfort. We achieve this by providing high-quality insulation 
                solutions, executed by our skilled team.
              </p>
              
              <p>
                At Isodomi, we understand that every home is unique. That's why we offer 
                personalized advice and tailor-made solutions that perfectly match your 
                situation and needs. From the first inspection to the final finishing, 
                you can count on our professional approach and quality guarantee.
              </p>
              
              <p>
                As a certified insulation company, we also assist you in applying for 
                available subsidies, making sustainability not only comfortable but 
                also affordable.
              </p>
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10"
            >
              <div className="text-xl font-semibold mb-2">
                Professional roof insulation for just €180/m²
              </div>
              <p className="text-muted-foreground mb-4">
                Start saving on your energy bill immediately!
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                Get Your Free Quote
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
