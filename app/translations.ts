export type Language = 'en' | 'bg';

type TranslationType = {
    common: {
        image: string;
        loading: string;
        error: string;
        notFound: string;
        readMore?: string;
        viewAllNews?: string;
        searchNews?: string;
        backToNews?: string;
    };
    nav: {
        story: string;
        guitars: string;
        services: string;
        news: string;
        contact: string;
        menu: string;
        backToTop: string;
    };
    hero: {
        title: string;
        welcome: string;
        madeby: string;
    };
    story: {
        title: string;
        p1: string;
        p2: string;
        quote: string;
    };
    guitars: {
        title: string;
        backToGuitars: string;
        loading: string;
        error: string;
        description: string;
        specifications: string;
        demoVideo: string;
        clickToEnlarge: string;
        clickToPlayVideo: string;
    };
    services: {
        title: string;
        backToServices: string;
        description: string;
        servicesInclude: string;
        serviceNotFound: string;
        custom: {
            title: string;
            description: string;
        };
        repair: {
            title: string;
            description: string;
        };
        upgrades: {
            title: string;
            description: string;
        };
        details: Record<string, any>;
    };
    contact: {
        title: string;
        name: string;
        email: string;
        message: string;
        service: string;
        selectService: string;
        customGuitar: string;
        repairs: string;
        upgrades: string;
        send: string;
        sending: string;
        success: string;
        error: string;
    };
    contactForm: {
        contactUs: string;
        name: string;
        email: string;
        message: string;
        attachFile: string;
        send: string;
        sending: string;
        success: string;
        errorSubmitting: string;
    };
    footer: {
        copyright: string;
        privacyPolicy: string;
        termsOfService: string;
    };
    language: {
        en: string;
        bg: string;
    };
    guitarDetails: {
        description: string;
        specifications: string;
        video: string;
    };
    // Add translation keys for guitars
    guitars_data: {
        hellcaster?: {
            name: string;
            shortDescription: string;
            description: string;
        };
        palemoon?: {
            name: string;
            shortDescription: string;
            description: string;
        };
        'modern-t'?: {
            name: string;
            shortDescription: string;
            description: string;
        };
        wednesday?: {
            name: string;
            shortDescription: string;
            description: string;
        };
        'fretless-bass'?: {
            name: string;
            shortDescription: string;
            description: string;
        };
    };
    privacyPolicy: {
        title: string;
        lastUpdated: string;
        introduction: string;
        collectionTitle: string;
        collectionText: string;
        typesTitle: string;
        personalDataTitle: string;
        personalDataText: string;
        personalDataItems: string[];
        usageDataTitle: string;
        usageDataText: string;
        useOfDataTitle: string;
        useOfDataItems: string[];
        changesTitle: string;
        changesText1: string;
        changesText2: string;
        changesText3: string;
        contactTitle: string;
        contactText: string;
        contactItems: string[];
    };
};

const en: TranslationType = {
    // Common translations
    common: {
        image: 'Image',
        loading: 'Loading...',
        error: 'An error occurred',
        notFound: 'Not found',
        readMore: 'Read More',
        viewAllNews: 'View All News',
        searchNews: 'Search news...',
        backToNews: 'Back to News',
        viewDetails: 'View Details',
        learnMore: 'Learn More'
    },
    nav: {
        story: 'My Story',
        guitars: 'My Guitars',
        services: 'Services',
        news: 'News',
        contact: 'Contact',
        menu: 'Menu',
        backToTop: 'Back to top'
    },
    hero: {
        title: 'Stoyanov Guitars',
        welcome: 'Welcome to Stoyanov Guitars Page!',
        madeby: 'Everything you see here is made by me - Peter Stoyanov, including the webpage itself.'
    },
    story: {
        title: 'My Story',
        p1: 'Stoyanov Guitars began as a passion project by Peter Stoyanov, combining his love for music and craftsmanship. Each guitar is handcrafted with care, blending tradition with modern innovation to create unique instruments that inspire creativity.',
        p2: 'Built from premium materials and designed with precision, Stoyanov Guitars offer exceptional sound, comfort, and aesthetics. From a small workshop to a growing brand, these guitars reflect individuality and a deep connection to music.',
        quote: '"Every instrument has a story, waiting to be completed by you."'
    },
    guitars: {
        title: 'My Guitars',
        backToGuitars: '← Back to Guitars',
        loading: 'Loading...',
        error: 'An error occurred while loading.',
        description: 'Description',
        specifications: 'Specifications',
        demoVideo: 'Demo Video',
        clickToEnlarge: 'Click to enlarge',
        clickToPlayVideo: 'Click to play video'
    },
    services: {
        title: 'My Services',
        backToServices: '← Back to Services',
        description: 'Description',
        servicesInclude: 'Our Services Include',
        custom: {
            title: 'Custom Guitar Building',
            description: 'Design and build your dream guitar, tailored to your exact specifications and playing style.'
        },
        repair: {
            title: 'Repairs and Restorations',
            description: 'Bring your beloved instruments back to life with expert repair and restoration services.'
        },
        upgrades: {
            title: 'Upgrades and Modifications',
            description: 'Enhance and customize your existing instruments with expert upgrades and modifications.'
        },
        serviceNotFound: 'Service not found',
        details: {
            'custom-guitar-building': {
                name: 'Custom Guitar Building',
                longDescription: "Experience the ultimate in personalized instrument crafting with our Custom Guitar Building service. From selecting premium tonewoods to designing unique inlays, every aspect of your guitar will be tailored to your preferences. Our workshop combines traditional techniques with modern innovations to create instruments that are truly one-of-a-kind and perfectly suited to your playing style.",
                servicesList: [
                    'Personalized design consultation',
                    'Premium wood selection and matching',
                    'Custom body shapes and neck profiles',
                    'Bespoke inlays and finishes',
                    'Custom electronics configuration',
                    'Premium hardware selection',
                    'Full setup and playability optimization',
                    'Detailed documentation of the building process'
                ]
            },
            'repairs-and-restorations': {
                name: 'Repairs and Restorations',
                longDescription: "Our Repairs and Restorations service is dedicated to preserving and reviving your cherished instruments. Whether it's a family heirloom or a road-worn favorite, our skilled technicians have the expertise to address a wide range of issues. From structural repairs to finish touch-ups, we treat each instrument with the care and respect it deserves, ensuring it plays and looks its best for years to come.",
                servicesList: [
                    'Structural repairs (cracks, breaks)',
                    'Neck resets and adjustments',
                    'Fretwork and fingerboard repair',
                    'Hardware replacement and upgrade',
                    'Finish touch-ups and full refinishing',
                    'Vintage instrument restoration'
                ]
            },
            'upgrades-and-modifications': {
                name: 'Upgrades and Modifications',
                longDescription: "Take your instrument to the next level with our Upgrades and Modifications service. Whether you're looking to improve your guitar's tone, playability, or aesthetics, our team of experts can help. We offer a wide range of customization options, from pickup swaps to complete electronic overhauls, ensuring that your instrument evolves with your playing style and musical journey.",
                servicesList: [
                    'Pickup upgrades and installations',
                    'Custom wiring and control configurations',
                    'Bridge and tailpiece upgrades',
                    'Nut replacement and optimization',
                    'Tuner upgrades',
                    'Cosmetic modifications (new pickguards, knobs, etc.)'
                ]
            }
        }
    },
    contact: {
        title: 'Contact',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        service: 'Service',
        selectService: 'Select a service',
        customGuitar: 'Custom Guitar Building',
        repairs: 'Repairs and Restorations',
        upgrades: 'Upgrades and Modifications',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again or contact the administrator.'
    },
    contactForm: {
        contactUs: 'Contact Us',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        attachFile: 'Attach a File (Optional)',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        errorSubmitting: 'Failed to send message. Please try again.'
    },
    footer: {
        copyright: '© 2025 Stoyanov Guitars. All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service'
    },
    language: {
        en: 'English',
        bg: 'Български'
    },
    guitarDetails: {
        description: 'Description',
        specifications: 'Specifications',
        video: 'Video'
    },
    guitars_data: {
        // English guitar data
        hellcaster: {
            name: 'Hellcaster',
            shortDescription: 'Custom-built with a unique distressed finish and Bigsby tremolo.',
            description: 'The Hellcaster is a unique fusion of classic design and dark aesthetics. This custom-built guitar features a distressed black finish that reveals the natural wood grain beneath, creating a striking burnt effect. The contrast between the dark body and the marble-effect white pickguard creates a dramatic visual statement. Built for players who demand both distinctive looks and superior playability.'
        },
        palemoon: {
            name: 'Palemoon',
            shortDescription: 'Extended baritone neck with stunning spalted maple construction.',
            description: 'The Palemoon is a masterpiece of modern guitar craftsmanship, featuring an extended baritone neck and an Ibanez-inspired body shape. The stunning spalted maple construction creates unique, organic patterns throughout the body and neck, making each angle a visual feast. This instrument combines the aggressive playability of a modern superstrat with the ethereal beauty of natural wood grain patterns.'
        },
        'modern-t': {
            name: 'Modern T',
            shortDescription: 'Classic Telecaster shape with custom aluminum floral pickguard.',
            description: 'The Modern T takes a legendary shape and infuses it with contemporary features. It boasts a comfortable body contour, high-output pickups, and a modern C-shaped neck profile. The Modern T is perfect for players who appreciate classic aesthetics but demand cutting-edge performance.'
        },
        wednesday: {
            name: 'Wednesday',
            shortDescription: 'A Guitar With a Soul.',
            description: 'With her darkly seductive body lines, her aggressive tones and haunting sustain, this Voodoo queen is charged with a magical recipe of gear thus transforming the player into a soulful singing soloist or a Juggernaut of brutal riffage. Featuring a stunning quilted maple top in deep burgundy, this guitar is equipped with EMG active pickups for powerful, clear tone. Perfect for modern metal and progressive styles.'
        },
        'fretless-bass': {
            name: 'Fretless Bass',
            shortDescription: 'An Idea Of Mine Still In Development.',
            description: 'Currently in development, this custom fretless-bass bass represents our venture into the world of bass instruments. Inspired by the Marleaux Diva and featuring a beautiful Koa top sourced from a Swiss guitar builder, this bass is designed to be a versatile 3-in-1 instrument. It combines electric, acoustic, and synth capabilities, offering players an incredibly wide range of tonal possibilities. The fretless-bass design promises to deliver the smooth, singing qualities that only a fretless-bass bass can provide, while the multiple pickup systems ensure unparalleled versatility.'
        },
        'ginger-bass': {
            name: 'Ginger Fretless Bass',
            shortDescription: 'Custom fretless bass with premium materials and innovative design.',
            description: 'The Ginger Fretless Bass represents our venture into the world of bass instruments. Inspired by the Marleaux Diva and featuring a beautiful Koa top sourced from a Swiss guitar builder, this bass is designed to be a versatile 3-in-1 instrument. It combines electric, acoustic, and synth capabilities, offering players an incredibly wide range of tonal possibilities. The fretless design delivers the smooth, singing qualities that only a fretless bass can provide, while the multiple pickup systems ensure unparalleled versatility.'
        }
    },
    privacyPolicy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last Updated: April 7, 2025',
        introduction: 'This Privacy Policy describes how your personal information is collected, used, and shared when you visit our website.',
        collectionTitle: 'Information Collection',
        collectionText: 'We collect information about you during the browsing process and when you submit forms on our website.',
        typesTitle: 'Types of Data Collected',
        personalDataTitle: 'Personal Data',
        personalDataText: 'While using our service, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. This may include:',
        personalDataItems: [
            'Name',
            'Email address',
            'Phone number',
            'Message content'
        ],
        usageDataTitle: 'Usage Data',
        usageDataText: 'We may also collect information on how the website is accessed and used. This may include your IP address, browser type, pages visited, time and date of visit, and other diagnostic data.',
        useOfDataTitle: 'Use of Data',
        useOfDataItems: [
            'To provide and maintain our service',
            'To notify you about changes to our service',
            'To provide customer support',
            'To respond to inquiries and fulfill requests',
            'To improve our website and services'
        ],
        changesTitle: 'Changes to This Privacy Policy',
        changesText1: 'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
        changesText2: 'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
        changesText3: 'By continuing to use our website after those changes are made, you are agreeing to be bound by the revised policy.',
        contactTitle: 'Contact Us',
        contactText: 'If you have any questions about this Privacy Policy, please contact us:',
        contactItems: [
            'By email: contact@stoyanovguitars.com',
            'By visiting the contact page on our website'
        ]
    }
};

const bg: TranslationType = {
    // Bulgarian translations
    common: {
        image: 'Изображение',
        loading: 'Зареждане...',
        error: 'Възникна грешка',
        notFound: 'Не е намерено',
        readMore: 'Прочети повече',
        viewAllNews: 'Виж всички новини',
        searchNews: 'Търси новини...',
        backToNews: 'Обратно към Новини',
        viewDetails: 'Вижте детайли',
        learnMore: 'Научете повече'
    },
    nav: {
        story: 'Моята История',
        guitars: 'Моите Китари',
        services: 'Услуги',
        news: 'Новини',
        contact: 'Контакти',
        menu: 'Меню',
        backToTop: 'Обратно нагоре'
    },
    hero: {
        title: 'Stoyanov Guitars',
        welcome: 'Добре дошли на страницата на Stoyanov Guitars!',
        madeby: 'Всичко, което виждате тук, е направено от мен - Петър Стоянов, включително самата уеб страница.'
    },
    story: {
        title: 'Моята История',
        p1: 'Stoyanov Guitars започна като личен проект на Петър Стоянов, съчетавайки любовта му към музиката и майсторлъка. ' +
            'Всяка китара е ръчно изработена с грижа, съчетавайки традицията с модерните иновации, за да създаде уникални инструменти, които вдъхновяват творчеството.',
        p2: 'Изработени от първокласни материали и проектирани с прецизност, китарите на Стоянов предлагат изключителен звук, комфорт и естетика. От малко ателие до' +
            ' разрастващ се бранд, тези китари отразяват индивидуалност и дълбока връзка с музиката.',
        quote: '"Всеки инструмент има своя история, очакваща да бъде завършена от вас."'
    },
    guitars: {
        title: 'Моите Китари',
        backToGuitars: '← Обратно към Китарите',
        loading: 'Зареждане...',
        error: 'Възникна грешка при зареждането.',
        description: 'Описание',
        specifications: 'Спецификации',
        demoVideo: 'Демо Видео',
        clickToEnlarge: 'Кликнете за увеличаване',
        clickToPlayVideo: 'Кликнете за пускане на видео'
    },
    services: {
        title: 'Моите Услуги',
        backToServices: '← Обратно към Услугите',
        description: 'Описание',
        servicesInclude: 'Нашите услуги включват',
        custom: {
            title: 'Изработка на Китари',
            description: 'Проектирайте и изградете своята мечтана китара, съобразена с вашите точни спецификации и стил на свирене.'
        },
        repair: {
            title: 'Ремонти и Реставрации',
            description: 'Върнете живота на вашите любими инструменти с експертни услуги по ремонт и реставрация.'
        },
        upgrades: {
            title: 'Надграждания и Модификации',
            description: 'Подобрете и персонализирайте вашите съществуващи инструменти с експертни надграждания и модификации.'
        },
        serviceNotFound: 'Услугата не е намерена',
        details: {
            'custom-guitar-building': {
                name: 'Изработка на Китари',
                longDescription: "Изпитайте върховния персонализиран начин за изработка на инструменти с нашата услуга за изработка на китари по поръчка. От избора на премиум тонови дървесини до проектирането на уникални инкрустации, всеки аспект на вашата китара ще бъде съобразен с вашите предпочитания. Нашата работилница съчетава традиционни техники със съвременни иновации, за да създаде инструменти, които са наистина единствени по рода си и перфектно подходящи за вашия стил на свирене.",
                servicesList: [
                    'Персонализирана консултация за дизайн',
                    'Избор и съчетаване на висококачествени дървесини',
                    'Персонализирани форми на тялото и профили на грифа',
                    'Ръчно изработени инкрустации и апликации',
                    'Персонализирана конфигурация на електрониката',
                    'Избор на висококачествен хардуер',
                    'Пълна настройка и оптимизация на свиримостта',
                    'Детайлна документация на процеса на изграждане'
                ]
            },
            'repairs-and-restorations': {
                name: 'Ремонти и Реставрации',
                longDescription: "Нашата услуга за ремонти и реставрации е посветена на запазването и съживяването на вашите ценни инструменти. Независимо дали става въпрос за семейна реликва или за любим износен инструмент, нашите опитни техници имат експертизата да решат широк спектър от проблеми. От структурни ремонти до корекции на покритието, ние се отнасяме към всеки инструмент с грижата и уважението, които заслужава, осигурявайки му да свири и изглежда най-добре за години напред.",
                servicesList: [
                    'Структурни ремонти (пукнатини, счупвания)',
                    'Пренареждане и регулиране на грифа',
                    'Ремонт на прагчета и грифове',
                    'Подмяна и обновяване на хардуера',
                    'Корекции и пълно обновяване на покритието',
                    'Реставрация на винтидж инструменти'
                ]
            },
            'upgrades-and-modifications': {
                name: 'Надграждания и Модификации',
                longDescription: "Отведете вашия инструмент на следващото ниво с нашата услуга за надграждане и модификации. Независимо дали търсите да подобрите тона, свиримостта или естетиката на вашата китара, нашият екип от експерти може да помогне. Предлагаме широка гама от опции за персонализация, от смяна на звукоснематели до пълно преработване на електрониката, осигурявайки, че вашият инструмент ще се развива заедно с вашия стил на свирене и музикално пътуване.",
                servicesList: [
                    'Надграждане и инсталиране на звукоснематели',
                    'Персонализирано окабеляване и конфигурации на контролите',
                    'Надграждане на мостове и опашки',
                    'Подмяна и оптимизация на ядки',
                    'Надграждане на машинки',
                    'Козметични модификации (нови пикгарди, копчета и др.)'
                ]
            }
        }
    },
    contact: {
        title: 'Контакти',
        name: 'Име',
        email: 'Имейл',
        message: 'Съобщение',
        service: 'Услуга',
        selectService: 'Изберете услуга',
        customGuitar: 'Изработка на Китари',
        repairs: 'Ремонти и Реставрации',
        upgrades: 'Надграждания и Модификации',
        send: 'Изпрати',
        sending: 'Изпращане...',
        success: 'Съобщението е изпратено успешно!',
        error: 'Грешка при изпращане на съобщението. Моля, опитайте отново или се свържете с администратора.'
    },
    contactForm: {
        contactUs: 'Свържете се с нас',
        name: 'Име',
        email: 'Имейл',
        message: 'Съобщение',
        attachFile: 'Прикачете файл (По избор)',
        send: 'Изпратете съобщение',
        sending: 'Изпращане...',
        success: 'Съобщението е изпратено успешно!',
        errorSubmitting: 'Неуспешно изпращане на съобщението. Моля, опитайте отново.'
    },
    footer: {
        copyright: '© 2025 Стоянов Китари. Всички права запазени.',
        privacyPolicy: 'Политика за поверителност',
        termsOfService: 'Условия за ползване'
    },
    language: {
        en: 'English',
        bg: 'Български'
    },
    guitarDetails: {
        description: 'Описание',
        specifications: 'Спецификации',
        video: 'Видео'
    },
    guitars_data: {
        // Bulgarian guitar data translations
        hellcaster: {
            name: 'Хелкастър',
            shortDescription: 'Персонализиран с уникална състарена обработка и тремоло Bigsby.',
            description: 'Хелкастър съчетава класическата изтънченост с тъмната, мистична естетика. Тази персонализирана китара се отличава с луксозна черна финишировка, която разкрива естествената красота на дървесината чрез изискан изгорен ефект. Контрастът между дълбокото тяло и бляскаво белия пикгард създава драматично визуално впечатление – истинско произведение на изкуството, създадено за музиканти, търсещи уникален стил и превъзходно свирене.'
        },
        palemoon: {
            name: 'Пейлмуун',
            shortDescription: 'Удължен баритон грифт с впечатляваща конструкция от шарен клен.',
            description: 'Пейлмуун е шедьовър на модерната китарна изработка, с удължен баритон грифт и вдъхновена от Ibanez форма на тялото. Впечатляващата конструкция от шарен клен създава уникални, органични шарки по цялото тяло и грифт, правейки всеки ъгъл визуален празник. Този инструмент комбинира агресивната свиримост на модерен супер-страт с ефирната красота на естествените шарки на дървесината.'
        },
        'modern-t': {
            name: 'Модерн Т',
            shortDescription: 'Класическа Телекастър форма с персонализиран алуминиев флорален пикгард.',
            description: 'Модерн Т преосмисля класическата форма, като я обновява с модерни характеристики. Инструментът предлага удобен и изчистен контур на тялото, мощни звукоснематели и съвременен С-образен гриф, който осигурява комфорт и прецизност при свирене. Този модел е идеалният избор за музиканти, които ценят класическата естетика, без да се отказват от съвременната функционалност и изпълнителски възможности.'
        },
        wednesday: {
            name: 'Wednesday',
            shortDescription: 'Китара с душа.',
            description: 'С нейните тъмно съблазнителни линии на тялото, агресивните тонове и завладяващото сустейн, тази "Вуду кралица" е заредена с магическа рецепта от оборудване, трансформираща изпълнителя в душевен пеещ солист или жесток риф машина. С впечатляващ quilted maple топ в дълбоко бургунди, тази китара е оборудвана с активни EMG звукоснематели за мощен, ясен тон. Идеална за модерен метъл и прогресивни стилове.'
        },
        'fretless-bass': {
            name: 'Джинджър - Фретлес Бас',
            shortDescription: 'Идея, която стана реалност след почти 2.5 години работа.',
            description: 'Нашият най-нов проект – Джинджър Фретлес бас. Вдъхновен от Marleaux Diva и оборудван с елегантен Koa топ, този бас обединява електрически, акустични и синтезаторни възможности в един универсален 3-в-1 инструмент. Множеството системи за тоноизвличане предлагат изключителна тонална гъвкавост. Очаквайте още детайли, видео и снимки скоро!'
        }
    },
    privacyPolicy: {
        title: 'Политика за Поверителност',
        lastUpdated: 'Последно обновяване: 7 април, 2025',
        introduction: 'Тази Политика за поверителност описва как вашата лична информация се събира, използва и споделя, когато посещавате нашия уебсайт.',
        collectionTitle: 'Събиране на информация',
        collectionText: 'Събираме информация за вас по време на процеса на сърфиране и когато изпращате формуляри на нашия уебсайт.',
        typesTitle: 'Видове събирани данни',
        personalDataTitle: 'Лични данни',
        personalDataText: 'Докато използвате нашата услуга, може да ви помолим да предоставите определена лична информация, която може да бъде използвана за контакт или идентификация. Това може да включва:',
        personalDataItems: [
            'Име',
            'Имейл адрес',
            'Телефонен номер',
            'Съдържание на съобщението'
        ],
        usageDataTitle: 'Данни за използване',
        usageDataText: 'Може също да събираме информация за това как уебсайтът се достъпва и използва. Това може да включва вашия IP адрес, тип на браузъра, посетени страници, време и дата на посещението и други диагностични данни.',
        useOfDataTitle: 'Използване на данните',
        useOfDataItems: [
            'За предоставяне и поддържане на нашата услуга',
            'За да ви уведомим за промени в нашата услуга',
            'За предоставяне на обслужване на клиенти',
            'За да отговорим на запитвания и изпълним искания',
            'За подобряване на нашия уебсайт и услуги'
        ],
        changesTitle: 'Промени в тази Политика за поверителност',
        changesText1: 'Можем да актуализираме нашата Политика за поверителност от време на време. Ще ви уведомим за всякакви промени, като публикуваме новата Политика за поверителност на тази страница.',
        changesText2: 'Съветваме ви да преглеждате периодично тази Политика за поверителност за промени. Промените в тази Политика за поверителност влизат в сила, когато бъдат публикувани на тази страница.',
        changesText3: 'Като продължавате да използвате нашия уебсайт след направените промени, вие се съгласявате да бъдете обвързани от ревизираната политика.',
        contactTitle: 'Свържете се с нас',
        contactText: 'Ако имате въпроси относно тази Политика за поверителност, моля, свържете се с нас:',
        contactItems: [
            'По имейл: contact@stoyanovguitars.com',
            'Като посетите страницата за контакт на нашия уебсайт'
        ]
    }
};

export const translations = {en, bg};