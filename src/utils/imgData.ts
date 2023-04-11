import { PROJECT_BASE } from ".";

const imageBaseUrl = `${PROJECT_BASE}img`

export const images = {
  users: {
    andry: {
      src: `${imageBaseUrl}/user/andry.png`,
      height: 85,
      width: 82,
    },
    andry2: {
      src: `${imageBaseUrl}/user/andry-2.png`,
      height: 85,
      width: 82,
    },
  },
  products: {
    tab: {
      src: `${imageBaseUrl}/product/tab.jpg`,
      height: 675,
      width: 675,
    },
    watch: {
      src: `${imageBaseUrl}/product/watch.jpg`,
      height: 940,
      width: 827,
    },
  },
  landscapeModels: {
    green: {
      src: `${imageBaseUrl}/models/landscape/1.jpg`,
      height: 518,
      width: 910,
    },
  },
  portraitModels: {
    ceo1: {
      src: `${imageBaseUrl}/models/portrait/1.jpg`,
      height: 518,
      width: 440,
    },
    ceo2: {
      src: `${imageBaseUrl}/models/portrait/2.jpg`,
      height: 380,
      width: 323,
    },
    ceo3: {
      src: `${imageBaseUrl}/models/portrait/3.jpg`,
      height: 380,
      width: 323,
    },
    ceo4: {
      src: `${imageBaseUrl}/models/portrait/4.jpg`,
      height: 380,
      width: 323,
    },
    ceo5: {
      src: `${imageBaseUrl}/models/portrait/5.jpg`,
      height: 380,
      width: 323,
    },
  },
};
