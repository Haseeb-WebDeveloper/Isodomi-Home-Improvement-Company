"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "Bieden jullie een complete oplossing aan?",
    answer: (
      <>
        <p className="mb-4">
        Ja, bij isodomi verzorgen we het complete traject van A tot Z. Dit betekent dat we u volledig ontzorgen door bijvoorbeeld:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Alle benodigde sloopwerkzaamheden uit te voeren</li>
          <li>De isolatie op vakkundige wijze aanbrengen</li>
          <li>Radiatoren, elektriciteitspunten en vensterbanken aanpassen</li>
          <li>De complete afwerking verzorgen, inclusief stucwerk, plinten en schilderwerk</li>
          <li>De werkplek schoon en opgeruimd achterlaten</li>
        </ul>
        <p>U hoeft dus niet meerdere partijen in te schakelen; wij regelen alles voor u in één keer.</p>
      </>
    ),
  },
  {
    question: "Hoe lang duurt een isolatieproject gemiddeld?",
    answer: (
      <>
        <p className="mb-4">
          De duur van een isolatieproject hangt af van het type isolatie en de grootte van uw woning. Gemiddeld duurt:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Dakisolatie: 1-2 weken</li>
          <li>Gevelisolatie: 1-2 weken</li>
          <li>Vloerisolatie: 1-2 weken</li>
        </ul>
        <p>We streven ernaar om elk project zo efficiënt mogelijk uit te voeren zonder in te leveren op kwaliteit.</p>
      </>
    ),
  },
  {
    question: "Welke isolatiematerialen gebruiken jullie?",
    answer: "We werken uitsluitend met hoogwaardige, gecertificeerde isolatiematerialen die voldoen aan alle Nederlandse bouwnormen. De exacte materiaalkeuze hangt af van uw specifieke situatie en wensen.",
  },
  {
    question: "Kan ik subsidie krijgen voor isolatie?",
    answer: "Ja, voor veel isolatiemaatregelen zijn er subsidies beschikbaar via de overheid. Als professioneel isolatiebedrijf helpen we u graag bij het aanvragen van deze subsidies. We begeleiden u door het hele proces en zorgen ervoor dat u optimaal gebruik kunt maken van de beschikbare regelingen.",
  },
  {
    question: "Wat is de terugverdientijd van isolatie?",
    answer: (
      <>
        <p className="mb-4">
          De terugverdientijd verschilt per type isolatie en situatie, maar ligt meestal tussen de 3 en 7 jaar. Factoren die hierop van invloed zijn:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Het type isolatie</li>
          <li>De huidige staat van uw woning</li>
          <li>Uw energieverbruik</li>
          <li>Energieprijzen</li>
        </ul>
      </>
    ),
  },
  {
    question: "Moet ik thuis zijn tijdens de werkzaamheden?",
    answer: "Het is niet noodzakelijk om de hele dag thuis te zijn tijdens de werkzaamheden. Wel vragen we u aanwezig te zijn bij de start van het project voor eventuele laatste afstemming en aan het einde voor de oplevering. Tijdens het bouwproces ontvangt u regelmatig updates van de voortgang. Wij zijn voorstander van een transparante communicatie.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle, index }: { question: string; answer: React.ReactNode; isOpen: boolean; onToggle: () => void; index: number; }) {
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
            Veelgestelde vragen
            </h2>
            <p className="text-muted-foreground">
            Vind antwoorden op veelgestelde vragen over onze isolatiediensten
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
              Kan je niet vinden wat je zoekt? 
              <Link href="#contact" className="text-primary hover:text-primary/80 font-medium ml-2 transition-colors">
                Neem contact op
              </Link>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 