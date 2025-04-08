import {Hammer, LucideIcon, Wrench, Zap} from 'lucide-react'

export interface Service {
  id: string
  name: string
  icon:LucideIcon // Updated the type to accept a React component
  images: string[]
  shortDescription: string
  longDescription: string
  servicesList: string[]
}

export const services: Service[] = [
  {
    id: 'custom-guitar-building',
    name: 'Custom Guitar Building',
    icon: Hammer, // Pass the component directly
    images: [
            '/images/services/custom-guitar-building/Building01.jpeg',
            '/images/services/custom-guitar-building/Building02.jpeg',
            '/images/services/custom-guitar-building/Building03.jpeg',
            '/images/services/custom-guitar-building/Building04.jpeg',
            '/images/services/custom-guitar-building/Building05.jpeg',
            '/images/services/custom-guitar-building/Building06.jpeg',
        ],
        shortDescription:
            'Design and build your dream guitar, tailored to your exact specifications and playing style.',
        longDescription:
            "Experience the ultimate in personalized instrument crafting with our Custom Guitar Building service. From selecting premium tonewoods to designing unique inlays, every aspect of your guitar will be tailored to your preferences. Our workshop combines traditional techniques with modern innovations to create instruments that are truly one-of-a-kind and perfectly suited to your playing style.",
        servicesList: [
            'Personalized design consultation',
            'Premium wood selection and matching',
            'Custom body shapes and neck profiles',
            'Bespoke inlays and finishes',
            'Custom electronics configuration',
            'Premium hardware selection',
            'Full setup and playability optimization',
            'Detailed documentation of the building process',
        ],
    },
    {
        id: 'repairs-and-restorations',
        name: 'Repairs and Restorations',
        icon: Wrench,
        images: [
            '/images/services/repairs-and-restorations/Repair01.jpeg',
            '/images/services/repairs-and-restorations/Repair02.jpeg',
            '/images/services/repairs-and-restorations/Repair03.jpeg',
            '/images/services/repairs-and-restorations/Repair04.jpeg',
            '/images/services/repairs-and-restorations/Repair05.jpeg',
            '/images/services/repairs-and-restorations/Repair06.jpeg',
            '/images/services/repairs-and-restorations/Repair07.jpeg',
            '/images/services/repairs-and-restorations/repair08.jpeg',
        ],
        shortDescription:
            'Bring your beloved instruments back to life with expert repair and restoration services.',
        longDescription:
            "Our Repairs and Restorations service is dedicated to preserving and reviving your cherished instruments. Whether it's a family heirloom or a road-worn favorite, our skilled technicians have the expertise to address a wide range of issues. From structural repairs to finish touch-ups, we treat each instrument with the care and respect it deserves, ensuring it plays and looks its best for years to come.",
        servicesList: [
            'Structural repairs (cracks, breaks)',
            'Neck resets and adjustments',
            'Fretwork and fingerboard repair',
            'Hardware replacement and upgrade',
            'Finish touch-ups and full refinishing',
            'Vintage instrument restoration',
        ],
    },
    {
        id: 'upgrades-and-modifications',
        name: 'Upgrades and Modifications',
        icon: Zap,
        images: [
            '/images/services/upgrades-and-modifications/Upgrade01.jpeg',
            '/images/services/upgrades-and-modifications/Upgrade02.jpeg',
            '/images/services/upgrades-and-modifications/upgrade03.jpeg',
            '/images/services/upgrades-and-modifications/upgrade04.jpeg',
            '/images/services/upgrades-and-modifications/upgrade05.jpeg',
            '/images/services/upgrades-and-modifications/Upgrade06.jpeg',
            '/images/services/upgrades-and-modifications/upgrade07.jpeg',
            '/images/services/upgrades-and-modifications/upgrade08.jpeg',
        ],
        shortDescription:
            'Enhance and customize your existing instruments with expert upgrades and modifications.',
        longDescription:
            "Take your instrument to the next level with our Upgrades and Modifications service. Whether you're looking to improve your guitar's tone, playability, or aesthetics, our team of experts can help. We offer a wide range of customization options, from pickup swaps to complete electronic overhauls, ensuring that your instrument evolves with your playing style and musical journey.",
        servicesList: [
            'Pickup upgrades and installations',
            'Custom wiring and control configurations',
            'Bridge and tailpiece upgrades',
            'Nut replacement and optimization',
            'Tuner upgrades',
            'Cosmetic modifications (new pickguards, knobs, etc.)',
        ],
    },
]