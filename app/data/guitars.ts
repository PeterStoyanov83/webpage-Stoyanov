export interface Guitar {
    id: string
    name: string
    image: string
    shortDescription: string
    images: string[]
    video?: string
    description: string
    specifications: Record<string, string>
}

export const guitars: Guitar[] = [
    {
        id: 'hellcaster',
        name: 'Hellcaster',
        image: '/images/guitars/hellcaster/Hellcaster01.jpeg',
        shortDescription: 'Custom-built with a unique distressed finish and Bigsby tremolo.',
        images: [
            '/images/guitars/hellcaster/Hellcaster01.jpeg',
            '/images/guitars/hellcaster/Hellcaster02.jpeg',
            '/images/guitars/hellcaster/Hellcaster03.jpeg',
            '/images/guitars/hellcaster/Hellcaster04.jpeg',
            '/images/guitars/hellcaster/Hellcaster05.jpeg',
            '/images/guitars/hellcaster/Hellcaster06.jpeg',
        ],
        description: 'The Hellcaster is a unique fusion of classic design and dark aesthetics. This custom-built guitar' +
            ' features a distressed black finish that reveals the natural wood grain beneath, creating a striking burnt effect. ' +
            'The contrast between the dark body and the marble-effect white pickguard creates a dramatic visual statement. ' +
            'Built for players who demand both distinctive looks and superior playability.',
        specifications: {
            Body: 'Custom chared pine wood',
            Neck: 'Maple',
            Fretboard: 'Rosewood',
            Pickups: 'Classic T-style set with high gain output',
            Bridge: 'Bigsby Tremolo System',
            Hardware: 'Chrome',
            SpecialFeatures: 'Custom distressed finish, Aluminum hand-crafted pickguard with unique shape and design',
            Construction: 'Bolt-on neck',
        }
    },
    {
        id: 'palemoon',
        name: 'Palemoon',
        image: '/images/guitars/palemoon/Palemoon01.jpeg',
        shortDescription: 'Extended baritone neck with stunning spalted maple construction.',
        images: [
            '/images/guitars/palemoon/Palemoon01.jpeg',
            '/images/guitars/palemoon/Palemoon02.jpeg',
            '/images/guitars/palemoon/palemoon03.jpg',
            '/images/guitars/palemoon/palemoon04.jpg',
            '/images/guitars/palemoon/palemoon05.jpg',
            '/images/guitars/palemoon/palemoon07.jpeg',
            '/images/guitars/palemoon/palemoon08.jpeg',
            '/images/guitars/palemoon/palemoon09.jpg',
        ],
        description: 'The Palemoon is a masterpiece of modern guitar craftsmanship, featuring an extended baritone ' +
            'neck and an Ibanez-inspired body shape. The stunning spalted maple construction creates unique, organic ' +
            'patterns throughout the body and neck, making each angle a visual feast. This instrument combines the ' +
            'aggressive playability of a modern superstrat with the ethereal beauty of natural wood grain patterns.',
        specifications: {
            Body: 'Ibanez style swamp ash with Palemoon droptop',
            Neck: 'Laminated, Extended Baritone scale',
            Fretboard: 'Palemoon wood',
            Pickups: 'Dual High-Output Humbuckers',
            Bridge: 'Fixed Bridge',
            Hardware: 'Black',
            SpecialFeatures: 'Extended scale length',
            Construction: 'Bolt-on neck',
        }
    },
    {
        id: 'modern-t',
        name: 'Modern T',
        image: '/images/guitars/modern-t/ModernT01.jpeg',
        shortDescription: 'Classic Telecaster shape with custom aluminum floral pickguard.',
        images: [
            '/images/guitars/modern-t/ModernT01.jpeg',
            '/images/guitars/modern-t/ModernT02.jpeg',
            '/images/guitars/modern-t/ModernT03.jpeg',
            '/images/guitars/modern-t/ModernT04.jpeg',
            '/images/guitars/modern-t/ModernT05.jpeg',
            '/images/guitars/modern-t/ModernT06.jpeg',
        ],
        video: 'https://www.instagram.com/p/CLhjgIQAA5R/embed',
        description: 'The Modern T takes a legendary shape and infuses it with contemporary features.' +
            ' It boasts a comfortable body contour, high-output pickups, and a modern C-shaped neck profile. ' +
            'The Modern T is perfect for players who appreciate classic aesthetics but demand cutting-edge ' +
            'performance.',
        specifications: {
            Body: 'Ash',
            Neck: 'Maple',
            Fretboard: 'Bolt-on Modern Maple',
            Frets: '22 Medium Jumbo',
            Pickups: 'Bridge: Custom Humbucker, Neck: Custom Single-coil',
            Bridge: 'Modern Fixed Bridge',
            Hardware: 'Nickel',
            ScaleLength: '25.5" (648mm)',
        }
    },
    {
        id: 'wednesday',
        name: 'Wednesday',
        image: '/images/guitars/wednesday/wednesday001.jpg',
        shortDescription: 'The Guitar With a Soul.',
        images: [
            '/images/guitars/wednesday/wednesday01.jpg',
            '/images/guitars/wednesday/wednesday001.jpg',
            '/images/guitars/wednesday/wednesday002.jpeg',
            '/images/guitars/wednesday/wednesday.jpg',
        ],
        description: 'Wednesday is a project for a friend of mine. Here is what he says about Her :' +
            ' With her darkly seductive body lines, her aggressive tones and  haunting sustain, ' +
            'This Voodoo queen is charged with a magical recipe of gear thus transforming the player into a soulful ' +
            'singing soloist or a Juggernaut of brutal riffage',
        specifications: {
            Body: 'Alder',
            Neck: 'Maple',
            Fretboard: 'Rosewood',
            Frets: '22 Medium Jumbo',
            Pickups: '3 x Custom Single-coil',
            Bridge: 'Vintage-style Tremolo',
            Hardware: 'Chrome',
            ScaleLength: '25.5" (648mm)',
        }
    },
    {
        id: 'fretless-bass',
        name: 'Fretless Bass',
        image: '/images/guitars/frettless-bass/fretless01.jpg',
        shortDescription: 'Rich tones and exceptional comfort for the discerning player.',
        images: [
            '/images/guitars/frettless-bass/fretless01.jpg',
            '/images/guitars/frettless-bass/fretless02.jpg',
            '/images/guitars/frettless-bass/fretless03.jpg',
            '/images/guitars/frettless-bass/fretless04.jpg',
        ],
        description: 'This Project is still in progress. I had the inspiration from Marleaux ' +
            'Diva. But the reason I started it was the Koa top I got from another guitar builder from Switzerland. ' +
            'The idea is to make a 3 in 1 bass - Electric (with a Stingray style humbucker pickup), ' +
            'Acoustic (piezo pictups under the saddle) and syth - Taken from the piezo digitalised sound.',
        specifications: {
            Body: 'Solid Koa Top',
            Neck: 'Laminated, Shisham, Pear Wood',
            Fretboard: 'Shisham',
            Frets: 'Fretless',
            Bridge: '',
            NutAndSaddle: 'Bone',
            ScaleLength: 'Soon to be determined',
        }
    },
]