"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Do you offer a complete solution?",
    answer: (
      <>
        <p className="mb-4">
          Yes, at Isodomi, we handle the entire process from A to Z, which includes:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Carrying out necessary demolition work</li>
          <li>Professionally applying insulation</li>
          <li>Adjusting radiators, electrical outlets, and windowsills</li>
          <li>Completing all finishing touches, including plastering, skirting, and painting</li>
          <li>Leaving the work area clean and tidy</li>
        </ul>
        <p>You don't need to hire multiple contractors; we take care of everything in one go.</p>
      </>
    ),
  },
  {
    question: "How long does an insulation project take?",
    answer: (
      <>
        <p className="mb-4">
          The duration of an insulation project depends on the type of insulation and the size of your home. On average:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Roof insulation: 1-2 weeks</li>
          <li>Facade insulation: 1-2 weeks</li>
          <li>Floor insulation: 1-2 weeks</li>
        </ul>
        <p>We aim to complete every project as efficiently as possible without compromising quality.</p>
      </>
    ),
  },
  {
    question: "What insulation materials do you use?",
    answer: "We use only high-quality, certified insulation materials that meet all Dutch building standards. The exact choice of materials depends on your specific situation and preferences.",
  },
  {
    question: "Can I get a subsidy for insulation?",
    answer: "Yes, government subsidies are available for many insulation measures. As a certified insulation company, we assist you in applying for these subsidies, guiding you through the process to ensure you maximize available benefits.",
  },
  {
    question: "What is the payback period for insulation?",
    answer: (
      <>
        <p className="mb-4">
          The payback period varies by insulation type and home condition but typically ranges between 3 and 7 years. Factors influencing this include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Type of insulation</li>
          <li>Current state of your home</li>
          <li>Your energy consumption</li>
          <li>Energy prices</li>
        </ul>
      </>
    ),
  },
  {
    question: "Can insulation work be done in winter?",
    answer: "Yes, we can install insulation all year round. Our materials and techniques are suitable for all weather conditions.",
  },
  {
    question: "Do I need to be home during the work?",
    answer: "You don't need to be present all day during the work. However, we do ask you to be available at the start of the workday for final coordination and at the end for a final inspection and handover.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div 
        className={`
          border-b border-primary/10 
          transition-colors duration-300
          ${isOpen ? 'bg-primary/[0.02]' : ''}
        `}
      >
        <button
          onClick={onToggle}
          className="w-full py-6 flex items-center justify-between gap-4 text-left"
        >
          <span className="text-lg font-medium">{question}</span>
          <div className={`
            flex-shrink-0 w-6 h-6 rounded-full 
            flex items-center justify-center
            transition-colors duration-300
            ${isOpen ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}
          `}>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <path d="m18 15-6-6-6 6"/>
                ) : (
                  <path d="m6 9 6 6 6-6"/>
                )}
              </svg>
            </motion.div>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pb-6 text-muted-foreground">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 ">
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our insulation services
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="divide-y divide-primary/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                index={index}
              />
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 pt-8 text-center border-t border-primary/10"
          >
            <Link href="#contact" className="text-muted-foreground">
              Can't find what you're looking for? 
              <Link href="#contact" className="text-primary hover:text-primary/80 font-medium ml-2 transition-colors">
                Contact Us
              </Link>
            </Link>
          </motion.div>



        </div>
      </div>
    </section>
  );
} 