import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 

    step: 'Step 1', 
    title: ' Temperatuurregulatie',
    content: 'Wij helpen u de temperatuur in uw woning te reguleren', 
    icon: '🏠',
    image: '/completed.jpg' 




  },
  { 
    step: 'Step 2',
    title: 'Verlaging energiekosten',
    content: 'Wij helpen u geld te besparen op uw energierekening',
    icon: '⏰',
    image: '/quick.jpg'
  },
  { 
    step: 'Step 3',
    title: 'Verbeterd wooncomfort',
    content: 'Wij helpen u het comfort van uw woning te verbeteren',
    icon: '🚗',
    image: '/active.jpg'

  },
  { 
    step: 'Step 3',
    title: 'Waardestijging van uw woning',
    content: 'Wij helpen u de waarde van uw woning te verhogen',
    icon: '💰',
    image: '/subsidies.jpg'




  }
]

export default function WhyChooseSection() {
  return (
      <FeatureSteps 
        features={features}
        title="Waarom kiezen voor isoleren: ?"
        autoPlayInterval={4000}
        imageHeight="h-[450px]"
      />
  )
}