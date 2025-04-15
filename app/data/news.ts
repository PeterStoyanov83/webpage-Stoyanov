export interface NewsItem {
    id: string;
    title: string;
    titleBg?: string; // Bulgarian title
    date: string;
    imageUrl: string;
    summary: string;
    summaryBg?: string; // Bulgarian summary
    content: string;
    contentBg?: string; // Bulgarian content
    tags: string[];
}

export const newsItems: NewsItem[] = [
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
    },

    {
        id: 'custom-bass-project',
        title: 'Stoyanov Ginger - The Fretless Bass Project is Completed',
        titleBg: 'Стоянов Джинджър - Проектът фретлес бас е завършен',
        date: '2024-02-15',
        imageUrl: '/images/news/Ginger.png',
        summary: 'Completing a special custom fretless bass with unique tonal characteristics.',
        summaryBg: 'Завършване на фретлес бас-а с уникални тонални характеристики.',
        content: `
          In April 2025, I completed a unique custom fretless bass guitar for a professional musician. The instrument boasts a koa top over an alder body, while its neck is crafted from shisham and pear, paired with a smooth ebony fingerboard. The electronics feature Graphtec Ghost pickups alongside a magnetic, custom-wound, custom-sized pickup—all designed to harmonize with the guitar's overall aesthetics. Adding to its distinct character, the headstock is uniquely designed, drawing inspiration from classical guitar heads. Renowned Bulgarian musician Radoslav Slavchev, also known as Riverman, showcased the instrument at the Bulgarian Music Workshop—the national guitar expo. Expect video and images soon!
    `,
        contentBg: `
          През април 2025 завърших уникален проект – безладова бас китара, изработена за професионален музикант. Инструментът се отличава с горна част от коя върху тяло от али, а шията е изработена от шишам и круша, комбинирани с гладка есенова клавиатура. Електрониката включва Graphtec Ghost пикапи, заедно с магнитен, специално навит и нестандартен пикап, проектиран да се хармонизира с общата естетика на китарата. За допълнителен характер, клешът е уникално проектиран с вдъхновение от класическите китарни клешове. Известният български музикант Радослав Славчев, известен още като Riverman, представи инструмента на Българския музикален уъркшоп – националната експо за китари. Очаквайте скоро видео и снимки!    `,
        tags: ['custom build', 'bass guitar', 'fretless', 'customer project']
    }
];