"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  services: {
    roof: boolean;
    facade: boolean;
    floor: boolean;
  };
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
  services: {
    roof: false,
    facade: false,
    floor: false,
  }
};

const steps = [
  {
    id: 'personal',
    title: 'Persoonlijke informatie',
    subtitle: 'Laat ons weten wie je bent'
  },

  {
    id: 'services',
    title: 'Selecteer diensten',
    subtitle: 'Kies wat je nodig hebt'
  },

  {
    id: 'details',
    title: 'Extra details',
    subtitle: 'Help ons je nodigheden beter te begrijpen'
  }

];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setShowSuccess(true);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData(initialFormData);
      setCurrentStep(0);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <Input
              placeholder="Je volledige naam"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="h-12"

            />

            <Input
              type="email"
              placeholder="Je e-mailadres"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="h-12"

            />

            <PhoneInput
              country={'nl'}
              value={formData.phone}
              onChange={(phone) => setFormData({ ...formData, phone })}
              inputClass="!w-full !h-12 !bg-background !text-foreground !border-input"
              buttonClass="!bg-background !border-input"
              dropdownClass="!bg-background !text-foreground"
              placeholder="Je telefoonnummer"
            />
          </motion.div>

        );

      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(formData.services).map(([service, isSelected]) => (
                <motion.div
                  key={service}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative p-6 rounded-xl cursor-pointer
                    ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-primary/5'}
                    transition-colors duration-200
                  `}
                  onClick={() => setFormData({
                    ...formData,
                    services: {
                      ...formData.services,
                      [service]: !isSelected
                    }
                  })}
                >
                  <h3 className="text-lg font-medium capitalize mb-2">
                    {service} Insulation
                  </h3>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-2 right-2"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <Input
              placeholder="Je volledige adres"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              required
              className="h-12"

            />

            <Textarea
              placeholder="Extra details of vragen"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="min-h-[120px] resize-none"

            />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="contact" className="relative py-16 overflow-hidden bg-foreground/5">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/3 h-2/3 bg-primary/5 blur-[100px] rounded-full" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-2/3 bg-primary/5 blur-[100px] rounded-full" /> */}

      <div className="container relative mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-6">Laat ons je project starten</h2>
                <p className="text-muted-foreground">
                  Klaar om je huis&apos; energie-efficiëntie te verbeteren? We staan klaar om je te helpen bij elke stap van het proces.
                </p>
              </div>


              {/* Why Contact Us */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Waarom kiezen voor onze diensten?</h3>
                <ul className="space-y-3">

                  {[
                    "Gratis consultatie en offerte",
                    "Expert advies op energie-besparing oplossingen",
                    "Professioneel installatie door gecertificeerde team",
                    "Volledige na-service ondersteuning",
                    "Hulp bij subsidiabele projecten"

                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefoon</h3>
                    <p className="text-muted-foreground">+31 (0) 6 123 456 789</p>
                  </div>
                </div>


                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@Renodomi.nl</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              {/* <div className="space-y-4">
                <h3 className="text-xl font-semibold">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div> */}
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative z-10 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/10 p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {showSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-center py-8"
                    >
                      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Bedankt!</h3>
                      <p className="text-muted-foreground mb-6">
                        We hebben je bericht ontvangen en zullen zo snel mogelijk terugkomen.
                      </p>

                      <Button
                        onClick={() => {
                          setShowSuccess(false);
                          setCurrentStep(0);
                        }}
                        variant="outline"
                      >
                        Stuur een ander bericht
                      </Button>
                    </motion.div>

                  ) : (
                    <div>
                      {/* Progress Steps */}
                      <div className="mb-8">
                        <div className="flex justify-between mb-4">
                          {steps.map((step, index) => (
                            <div
                              key={step.id}
                              className={`flex-1 ${index !== steps.length - 1 ? 'relative' : ''}`}
                            >
                              <div className="flex flex-col items-center">
                                <div
                                  className={`
                                    w-8 h-8 rounded-full flex items-center justify-center
                                    transition-colors duration-200
                                    ${index === currentStep ? 'bg-primary text-primary-foreground' : 
                                      index < currentStep ? 'bg-primary/80 text-primary-foreground' : 
                                      'bg-primary/20 text-primary'}
                                  `}
                                >
                                  {index < currentStep ? (
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                  ) : (
                                    index + 1
                                  )}
                                </div>
                                <span className="text-xs mt-2 text-muted-foreground">
                                  {step.title}
                                </span>
                              </div>
                              {index !== steps.length - 1 && (
                                <div 
                                  className={`
                                    absolute top-4 left-1/2 w-full h-[2px]
                                    ${index < currentStep ? 'bg-primary' : 'bg-primary/20'}
                                  `}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Step Content */}
                      <AnimatePresence mode="wait">
                        <div className="min-h-[300px]">
                          {renderStepContent()}
                        </div>
                      </AnimatePresence>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-8">
                        <Button
                          variant="outline"
                          onClick={prevStep}
                          disabled={currentStep === 0}
                        >
                          Vorige
                        </Button>
                        

                        {currentStep === steps.length - 1 ? (
                          <Button
                            onClick={handleSubmit}
                            disabled={isLoading}
                          >
                            {isLoading ? (
                              <span className="flex items-center">
                                <svg
                                  className="animate-spin -ml-1 mr-3 h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  />
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  />
                                </svg>
                                Verzenden...
                              </span>

                            ) : (
                              "Versturen"
                            )}
                          </Button>

                        ) : (
                          <Button onClick={nextStep}>
                            Volgende
                          </Button>
                        )}

                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 