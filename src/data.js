export const thoughts = [
  {
    key: "ugly",
    verses: ["v6"],
  },
  {
    key: "fear",
    verses: ["v5"],
  },
  {
    key: "uncapable",
    verses: ["v4", "v2"],
  },
  {
    key: "not enough",
    verses: ["v3"],
  },
  {
    key: "lazy",
    verses: ["v2"],
  },
  {
    key: "unsure",
    verses: ["v1"],
  },
];

export let decks = [
  {
    id: "d1",
    name: "diligence",
    cards: ["c1", "c2", "c7"],
  },
  {
    id: "d2",
    name: "fear",
    cards: ["c3", "c5"],
  },
  {
    id: "d3",
    name: "purpose",
    cards: ["c2", "c4"],
  },
  {
    id: "d4",
    name: "forgiveness",
    cards: ["c6", "c7"],
  },
];
export let cards = [
  {
    id: "c1",
    resources: [
      {
        id: "v1",
        ref: "proverbs 3:5-6",
        scripture:
          "Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take.",
      },
      {
        id: "n1",
        content: "Keep praying and keep on going",
      },
      {
        id: "n4",
        content: "Yes, you can do hard things!",
      },
    ],
  },
  {
    id: "c2",
    resources: [
      {
        id: "v2",
        ref: "galatians 6:7-8",
        scripture:
          "Do not be fooled. You cannot fool God. A man will get back whatever he plants! 8 If a man does things to please his sinful old self, his soul will be lost. If a man does things to please the Holy Spirit, he will have life that lasts forever.",
      },

      {
        id: "n6",
        content: "God doesn't make mistakes",
      },
    ],
  },
  {
    id: "c3",
    resources: [
      {
        id: "v3",
        ref: "2 peter 1:3",
        scripture:
          "His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness.",
      },
    ],
  },
  {
    id: "c4",
    resources: [
      {
        id: "n1",
        content: "Keep praying and keep on going",
      },
      {
        id: "n6",
        content: "God doesn't make mistakes",
      },
    ],
  },
  {
    id: "c5",
    resources: [
         {
        id: "v2",
        ref: "galatians 6:7-8",
        scripture:
          "Do not be fooled. You cannot fool God. A man will get back whatever he plants! 8 If a man does things to please his sinful old self, his soul will be lost. If a man does things to please the Holy Spirit, he will have life that lasts forever.",
      },
    ],
  },
  {
    id: "c6",
    resources: [
      {
        id: "v8",
        ref: "Ephesians 4:32",
        scripture:
          "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
      },
    ],
  },
  {
    id: "c7",
    resources: [
      {
        id: "v7",
        ref: "Proverbs 21:5",
        scripture:
          "The plans of the diligent lead surely to abundance and advantage, but everyone who acts in haste comes surely to poverty.",
      },
    ],
  },
];
export const verses = [
  {
    id: "v1",
    ref: "proverbs 3:5-6",
    scripture:
      "Trust in the Lord with all your heart; do not depend on your own understanding. Seek his will in all you do, and he will show you which path to take.",
  },
  {
    id: "v2",
    ref: "galatians 6:7-8",
    scripture:
      "Do not be fooled. You cannot fool God. A man will get back whatever he plants! 8 If a man does things to please his sinful old self, his soul will be lost. If a man does things to please the Holy Spirit, he will have life that lasts forever.",
  },
  {
    id: "v3",
    ref: "2 peter 1:3",
    scripture:
      "His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness.",
  },
  {
    id: "v4",
    ref: "philippians 4:13",
    scripture: "I can do all things through Christ which strengtheneth me.",
  },
  {
    id: "v5",
    ref: "philippians 4:6-7",
    scripture:
      "Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus..",
  },
  {
    id: "v6",
    ref: "psalms 139:14",
    scripture:
      "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.",
  },
  {
    id: "v7",
    ref: "Proverbs 21:5",
    scripture:
      "The plans of the diligent lead surely to abundance and advantage, but everyone who acts in haste comes surely to poverty.",
  },
  {
    id: "v8",
    ref: "Ephesians 4:32",
    scripture:
      "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
  },
];
// export const notes = [
//   {
//     id: "n6",
//     content: "God doesn't make mistakes",
//   },
//   {
//     id: "n5",
//     content: "God is in control",
//   },

//   {
//     id: "n4",
//     content: "Yes, you can do hard things!",
//   },
//     {
//     id: "n3",
//     content: "Don't think, trust",
//   },
//   {
//     id: "n2",
//     content: "You need to do your part",
//   },
//   {
//     id: "n1",
//     content: "Keep praying and keep on going",
//   },
//];

export const setCards = (newArrayOfCards) => {
  cards = newArrayOfCards;
};
export const setDecks = (newArrayOfDecks) => {
  decks = newArrayOfDecks;
};
