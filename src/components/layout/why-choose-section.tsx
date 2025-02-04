import { FeatureSteps } from "@/components/ui/feature-section"

const features = [
  { 

    step: 'Step 1', 
    title: ' Fully finished solutions',
    content: 'We provide fully finished solutions for your home', 
    icon: '🏠',
    image: '/completed.jpg' 


  },
  { 
    step: 'Step 2',
    title: 'Start within two weeks',
    content: 'We start within two weeks',
    icon: '⏰',
    image: '/quick.jpg'


  },
  { 
    step: 'Step 3',
    title: ' Active across central Netherlands',
    content: 'We are active across central Netherlands',
    icon: '🚗',
    image: '/active.jpg'



  },
  { 
    step: 'Step 3',
    title: 'Assistance with subsidy applications',
    content: 'We assist with subsidy applications',
    icon: '💰',
    image: '/subsidies.jpg'


  }
]

export default function WhyChooseSection() {
  return (
      <FeatureSteps 
        features={features}
        title="Why Choose Isodomi?"
        autoPlayInterval={4000}
        imageHeight="h-[450px]"
      />
  )
}