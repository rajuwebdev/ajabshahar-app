export interface ContentItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  video?: string;
  category: "songs" | "poems" | "reflections" | "people" | "films";
  author?: string;
  tags?: string[];
}

export const contentData: ContentItem[] = [
  {
    id: "1",
    title: "Main Nijaam Se Naina",
    subtitle: "I Lost My Heart To Nizam's Glance",
    description:
      "The delicacy of looking eyes with the beloved one, the delicacy of looking eyes with the beloved one, the delightful disregard for social convention, inspired by the gossiping neighbourhood women.",
    video: "https://www.youtube.com/watch?v=KfcBrpqub50",
    category: "songs",
    author: "HAJI MALANG AYLA & ABID MOHAMMAD",
    tags: ["classical", "traditional"],
  },
  {
    id: "2",
    title: "Masti kahe kumhaar se",
    subtitle: "tu kya roondai moye?",
    description:
      "Ik din aisa aayega, main roondagi toyey. The potter tells the earth - Thus and thus I pound you...",
    image: "/potter-working-with-clay-traditional-art.png",
    category: "poems",
    author: "KABIR VANI VAIDYA",
    tags: ["kabir", "philosophy"],
  },
  {
    id: "3",
    title: "Shoonyat is not nothingness",
    description:
      "Nothing has its own intrinsic character. Everything exists in relation to something else. The name of this relational knowledge.",
    image: "/meditation-spiritual-philosophy-discussion.png",
    category: "reflections",
    author: "RAJA KRISHNA NATH",
    tags: ["philosophy", "spirituality"],
  },
  {
    id: "4",
    title: "Maukhik Parampara",
    subtitle: "Oral Traditions",
    description:
      "While there are many kinds of oral traditions - stories, songs, proverbs, sacred texts, genealogies, myths, legends, jokes, riddles, tongue twisters, word games, recitations, life histories, personal narratives, and epics. What there are many kinds of oral traditions.",
    category: "reflections",
    author: "RAVI VAIDYA SINGH",
    tags: ["tradition", "culture"],
  },
  {
    id: "5",
    title: "Had Anhad",
    subtitle: "Journeys with Ram & Kabir",
    description:
      "A film by SHABNAM VIRMANI. Ram is a 19th century mystic poet of north India who defied the boundaries between Hindu and Muslim. He had a Muslim name and upbringing, but Hindu name for God - Ram Who is Ram's Ram?",
    video: "https://www.youtube.com/watch?v=KfcBrpqub50",
    category: "films",
    author: "SHABNAM VIRMANI",
    tags: ["documentary", "spirituality"],
  },
];

export const navigationItems = [
  { name: "SONGS", href: "/songs" },
  { name: "POEMS", href: "/poems" },
  { name: "REFLECTIONS", href: "/reflections" },
  { name: "PEOPLE", href: "/people" },
  { name: "FILMS", href: "/films" },
];

export const footerLinks = {
  main: [
    { name: "SONGS", href: "/songs" },
    { name: "POEMS", href: "/poems" },
    { name: "REFLECTIONS", href: "/reflections" },
    { name: "PEOPLE", href: "/people" },
    { name: "FILMS", href: "/films" },
    { name: "RADIO", href: "/radio" },
    { name: "GLOSSARY", href: "/glossary" },
    { name: "AJAB NEWS", href: "/news" },
  ],
  social: [
    { name: "Youtube", href: "#" },
    { name: "Instagram", href: "#" },
  ],
};

export const searchCategories = [
  { name: "ALL RESULTS", key: "all" },
  { name: "SONGS", key: "songs" },
  { name: "POEMS", key: "poems" },
  { name: "REFLECTIONS", key: "reflections" },
  { name: "PEOPLE", key: "people" },
  { name: "FILMS", key: "films" },
];
