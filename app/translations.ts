type TranslationType = {
    nav: {
        story: string
        guitars: string
        services: string
        contact: string
    }
    hero: {
        title: string
        subtitle: string
        cta: string
    }
    story: {
        title: string
        p1: string
        p2: string
    }
    services: {
        title: string
        custom: {
            title: string
            description: string
        }
        repair: {
            title: string
            description: string
        }
        workshop: {
            title: string
            description: string
        }
    }
    contact: {
        title: string
        name: string
        email: string
        message: string
        send: string
    }
}

const bg: TranslationType = {
    nav: {
        story: 'Моята История',
        guitars: 'Моите Китари',
        services: 'Услуги',
        contact: 'Контакти'
    },
    hero: {
        title: 'Стоянов Китари',
        subtitle: 'Ръчно изработени с перфекционизъм за взискателни музиканти',
        cta: 'Разгледай Моите Китари'
    },
    story: {
        title: 'Моята История',
        p1: 'Моето пътешествие в света на изработкат�� на китари започна преди повече от три десетилетия. Това, което започна като страст към музиката и дървообработката, се превърна в житейско призвание за създаване на изключителни инструменти.',
        p2: 'Всяка китара Стоянов е свидетелство за безбройните часове, които съм прекарал в усъвършенстване на занаята си, знанията, предадени от майстори лютиери, и моята непоколебима отдаденост към качеството. Всеки инструмент, който създавам, не е просто китара, а произведение на изкуството, което носи част от моята история и страст.'
    },
    services: {
        title: 'Моите Услуги',
        custom: {
            title: 'Изработка на Китари',
            description: 'Работя с вас за проектиране и изработка на вашата мечтана китара, съобразена с вашите точни спецификации и стил на свирене.'
        },
        repair: {
            title: 'Ремонти и Реставрации',
            description: 'Върнете живота на ва��ите любими инструменти с експертни услуги по ремонт и реставрация.'
        },
        workshop: {
            title: 'Работилници за Китари',
            description: 'Научете изкуството на създаване на китари в практически работилници, подходящи както за начинаещи, така и за напреднали майстори.'
        }
    },
    contact: {
        title: 'Контакти',
        name: 'Име',
        email: 'Имейл',
        message: 'Съобщение',
        send: 'Изпрати'
    }
}

const en: TranslationType = {
    nav: {
        story: 'My Story',
        guitars: 'My Guitars',
        services: 'Services',
        contact: 'Contact'
    },
    hero: {
        title: 'Stoyanoff Guitars',
        subtitle: 'Handcrafted perfection for discerning musicians',
        cta: 'Explore My Guitars'
    },
    story: {
        title: 'My Story',
        p1: 'My journey into the world of guitar craftsmanship began over three decades ago. What started as a passion for music and woodworking has evolved into a lifelong dedication to creating exceptional instruments.',
        p2: 'Each Stoyanoff guitar is a testament to the countless hours I have spent perfecting my craft, the knowledge passed down from master luthiers, and my unwavering commitment to quality. Every instrument I create is not just a guitar, but a piece of art that carries a part of my story and passion.'
    },
    services: {
        title: 'My Services',
        custom: {
            title: 'Custom Guitar Building',
            description: 'Work with me to design and build your dream guitar, tailored to your exact specifications and playing style.'
        },
        repair: {
            title: 'Repairs and Restorations',
            description: 'Bring your beloved instruments back to life with expert repair and restoration services.'
        },
        workshop: {
            title: 'Guitar Building Workshops',
            description: 'Learn the art of guitar making in hands-on workshops, suitable for beginners and advanced craftsmen alike.'
        }
    },
    contact: {
        title: 'Contact',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
    }
}

export const translations = {bg, en}
export type Language = keyof typeof translations

