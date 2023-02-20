const header = '游戏征服史';
const footer = '等待你的加入';
const entries = [
  {
    id: 'Ark',
    categories: ['game'],
    color: 'green',
    faicon: 'gamepad',
    datetime: '2021-01-01 05:00',
    title: 'Ark/方舟征服史',
    image: {
      link: 'https://playark.com/ark-survival-evolved/',
      src: 'https://yunkuangao.com/images/ark_bg.jpeg',
      alt: 'Ark/方舟',
      caption: '驾驭你的恐龙!',
    },
    body: `方舟征服史`,
    links: [
      {
        href: 'https://ark.fandom.com/wiki/ARK_Survival_Evolved_Wiki',
        linkText: 'Ark',
      },
    ],
  },
  {
    id: 'Valheim',
    categories: ['game'],
    color: 'green',
    faicon: 'gamepad',
    datetime: '2021-05-01 23:55',
    title: 'Valheim/英灵神殿征服史',
    image: {
      link: 'https://www.valheimgame.com/',
      src: 'https://yunkuangao.com/images/valheim_bg.webp',
      alt: 'Valheim/英灵神殿',
      caption: '谁不想当一个真正的战神!',
    },
    body: `英灵神殿征服史`,
    links: [
      {
        href: 'https://valheim.fandom.com/wiki/Valheim_Wiki',
        linkText: 'Valheim',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
