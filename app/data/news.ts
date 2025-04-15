export interface NewsItem {
    id: string;
    title: string;
    titleBg?: string; // Bulgarian title
    date: string;
    imageUrl: string; // Main image for preview in news list
    images?: string[]; // Array of image URLs for gallery in detail view
    summary: string;
    summaryBg?: string; // Bulgarian summary
    content: string;
    contentBg?: string; // Bulgarian content
    tags: string[];
}

export const newsItems: NewsItem[] = [
    {
        id: 'bmw-expo-2025',
        title: 'Bulgarian Music Workshop - Stoyanov Guitars Exhibition',
        titleBg: 'Българска Музикална Работилница - Участие на Stoyanov Guitars',
        date: '2025-05-20', // Most recent date
        imageUrl: '/images/news/BMW-main.jpg',
        images: [
            '/images/news/BMW-main.jpg',
            '/images/news/BMW-image1.jpg',
            '/images/news/BMW-image2.jpg',
            '/images/news/BMW-image3.jpg',
            '/images/news/BMW-image4.jpg',
            '/images/news/BMW-image5.jpg',
        ],
        summary: 'Stoyanov Guitars showcases at the Bulgarian Music Workshop 2025.',
        summaryBg: 'Stoyanov Guitars представя на Българска Музикална Работилница 2025.',
        content: `
We are excited to announce our participation in the Bulgarian Music Workshop 2025, the premier guitar and music expo in the Balkans.
 April 12th, we'll be showcasing our latest handcrafted instruments. Visitors will have the opportunity to see, play, and experience our guitars firsthand, including our newest models.

Peter Stoyanov will be conducting daily demonstrations showcasing our instruments. There will also be special performances by professional musicians playing Stoyanov Guitars throughout the event.
If you're in Sofia during this time, we'd love to meet you and talk about all things guitars. Whether you're a professional musician, an enthusiast, or just curious about handcrafted instruments, stop by our booth for a chat!
        `,
        contentBg: `
С радост обявяваме нашето участие в Българска Музикална Работилница 2025, най-престижното експо за китари и музика на Балканите.

На 12ти Април ще представим нашите най-нови ръчно изработени инструменти. Посетителите ще имат възможността да видят, изпробват и усетят нашите китари отблизо.

Петър Стоянов ще е с инструментите ни и ще имате възможност да се видите и говорите с него лично. Ще има и специални изпълнения от професионални музиканти, свирещи на китари Stoyanov.

Ако сте в София през този период, бихме се радвали да се запознаем и да поговорим за всичко свързано с китарите. Независимо дали сте професионален музикант, ентусиаст или просто любопитни относно ръчно изработените инструменти, заповядайте на нашия щанд за разговор!
        `,
        tags: ['event', 'exhibition', 'Bulgaria', 'music expo']
    },
    {
        id: 'custom-bass-project',
        title: 'Stoyanov Ginger - The Fretless Bass Project is Completed',
        titleBg: 'Стоянов Джинджър - Проектът фретлес бас е завършен',
        date: '2025-04-15',
        imageUrl: '/images/news/Ginger.png',
        images: [
            '/images/news/Ginger.png',
        ],
        summary: 'Completing a special custom fretless bass with unique tonal characteristics.',
        summaryBg: 'Завършване на фретлес бас-а с уникални тонални характеристики.',
        content: `
          In April 2025, I completed a unique custom fretless bass guitar for a professional musician. The instrument boasts a koa top over an alder body, while its neck is crafted from shisham and pear, paired with a smooth ebony fingerboard. The electronics feature Graphtec Ghost pickups alongside a magnetic, custom-wound, custom-sized pickup—all designed to harmonize with the guitar's overall aesthetics. Adding to its distinct character, the headstock is uniquely designed, drawing inspiration from classical guitar headstocks. Renowned Bulgarian musician Radoslav Slavchev, also known as Riverman, showcased the instrument at the Bulgarian Music Workshop—the national guitar expo. Expect video and images soon!
    `,
        contentBg: `
          През април 2025 завърших уникален проект – фретлес бас китара. Инструментът се отличава с горна част (топ) от Коа върху тяло от Елша, а нек-а е изработен от шишам и круша, комбинирани с падук маркери за позиции. Електрониката включва Graphtec Ghost пиезо елементи, заедно с магнитен, специално навит и нестандартен пикап, проектиран да се хармонизира с общата естетика на китарата. За допълнителен характер, главата  е уникално проектирана с вдъхновение от класическите китарни глави. Известният български музикант Радослав Славчев, известен още като Riverman, представи инструмента на Българска Музикална Работилница – националното експо за китари. Очаквайте скоро видео и снимки!`,
        tags: ['custom build', 'bass guitar', 'fretless', 'customer project']
    },
    
    {
        id: 'moving-to-bulgaria-2024',
        title: 'We are Moving to Bulgaria!',
        titleBg: 'Mестим се в България!',
        date: '2024-04-10',
        imageUrl: '/images/news/Bulgaria.png',
        summary: 'Hey everyone! We are moving to Bulgaria.',
        summaryBg: 'Здравейте на всички! Местим се в България.',
        content: 'Hey everyone! We are excited to announce that we will be moving to Bulgaria in 2024. After years of operating from our workshop in Switzerland, we have decided to make this important move to better connect with our roots.',
        contentBg: 'Здравейте на всички! С радост обявяваме, че през 2024 г. ще се преместим в България. След години на работа в нашата работилница в Швейцария, решихме да направим този важен ход, за да се свържем по-добре с нашите корени.',
        tags: ['event', 'exhibition', 'new models']
    }
];