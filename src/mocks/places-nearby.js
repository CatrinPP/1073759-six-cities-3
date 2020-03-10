export default [
  {
    city: {
      name: `Amsterdam`,
      coords: [52.36, 4.7],
    },
    offers: [
      {
        bedrooms: 3,
        coords: [52.35514938496378, 4.673877537499948],
        description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.`,
        features: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        guests: 4,
        host: {
          avatar: `img/avatar-angelina.jpg`,
          name: `Angelina`,
          isStar: true,
        },
        id: `nearby1`,
        images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
        isPremium: false,
        price: 120,
        rating: 4.8,
        title: `Beautiful & luxurious studio at great location`,
        type: `Apartment`,
      }, {
        bedrooms: 2,
        coords: [52.34514938496378, 4.663877537499948],
        description: `A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam.`,
        features: [`Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        guests: 3,
        host: {
          avatar: `img/avatar-angelina.jpg`,
          isStar: true,
          name: `Angelina`
        },
        id: `nearby2`,
        images: [`img/apartment-02.jpg`, `img/apartment-03.jpg`],
        isPremium: false,
        price: 100,
        rating: 3.8,
        title: `Beautiful apartment, great location`,
        type: `Apartment`,
      }, {
        bedrooms: 1,
        coords: [52.25514938496378, 4.273877537499948],
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        features: [`Heating`, `Kitchen`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        guests: 2,
        host: {
          avatar: `img/avatar-max.jpg`,
          isStar: false,
          name: `Max`
        },
        id: `nearby3`,
        images: [`img/apartment-03.jpg`, `img/apartment-01.jpg`],
        isPremium: true,
        price: 40,
        rating: 2.9,
        title: `Small room`,
        type: `Room`,
      }, {
        bedrooms: 6,
        coords: [52.15514938496378, 4.173877537499948],
        description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        features: [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        guests: 10,
        host: {
          avatar: `img/avatar-max.jpg`,
          id: 3,
          isPro: false,
          name: `Max`
        },
        id: `nearby4`,
        images: [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
        isPremium: false,
        price: 320,
        rating: 4.9,
        title: `Beautiful & luxurious villa at great location`,
        type: `Villa`,
      },
    ],
  }
];
