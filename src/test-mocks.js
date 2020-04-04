const testFavorites = [
  {
    city: `Moscow`,
    offers: [
      {
        bedrooms: 2,
        coords: [52.3909553943508, 4.85309666406198],
        description: ``,
        features: [`Washer`, `Washing machine`],
        guests: 5,
        host: {
          avatar: ``,
          name: `Ann`,
          isStar: true
        },
        id: 1,
        images: [`img/room.jpg`, `img/room1.jpg`, `img/room2.jpg`],
        isFavorite: false,
        isPremium: true,
        price: 98,
        rating: 0,
        title: `Cozy Studio`,
        type: `room`,
      }, {
        bedrooms: 4,
        coords: [52.369553943508, 4.85309666406198],
        description: ``,
        features: [`Fridge`],
        guests: 10,
        host: {
          avatar: ``,
          name: `Anny`,
          isStar: false
        },
        id: 2,
        images: [`img/room3.jpg`, `img/room4.jpg`, `img/room5.jpg`],
        isFavorite: false,
        isPremium: false,
        price: 34,
        rating: 50,
        title: `Big Vintage Apartment`,
        type: `apartment`,
      },
    ]
  }, {
    city: `Tokyo`,
    offers: [
      {
        bedrooms: 1,
        coords: [52.3909553943508, 4.929309666406198],
        description: ``,
        features: [`Cable TV`],
        guests: 1,
        host: {
          avatar: ``,
          name: `Vince`,
          isStar: true
        },
        id: 3,
        images: [`img/room6.jpg`, `img/room7.jpg`, `img/room8.jpg`],
        isFavorite: false,
        isPremium: false,
        price: 80,
        rating: 100,
        title: `Small Country House`,
        type: `house`,
      }, {
        bedrooms: 0,
        coords: [52.3809553943508, 4.939309666406198],
        description: ``,
        features: [`Breakfast`],
        guests: 0,
        host: {
          avatar: ``,
          name: `Minni`,
          isStar: false
        },
        id: 4,
        images: [`img/room9.jpg`, `img/room10.jpg`, `img/room11.jpg`],
        isFavorite: false,
        isPremium: true,
        price: 3200,
        rating: 95,
        title: `Villa with no view`,
        type: `hotel`,
      }, {
        bedrooms: 20,
        coords: [52.3809553943508, 4.93930966640619],
        description: ``,
        features: [`Breakfast`, `Washer`],
        guests: 50,
        host: {
          avatar: ``,
          name: `Polly`,
          isStar: true
        },
        id: 5,
        images: [`img/room12.jpg`, `img/room13.jpg`, `img/room14.jpg`],
        isFavorite: false,
        isPremium: false,
        price: 5,
        rating: 15,
        title: `Tiny bungalow`,
        type: `house`,
      },
    ]
  }
];


const testOffers = [
  {
    city: {
      name: `Moscow`,
      coords: [44.44, 2.22],
    },
    offers: [
      {
        bedrooms: 2,
        coords: [52.3909553943508, 4.85309666406198],
        description: ``,
        features: [`Washer`, `Washing machine`],
        guests: 5,
        host: {
          avatar: ``,
          name: `Ann`,
          isStar: true
        },
        id: 1,
        images: [`img/room.jpg`, `img/room1.jpg`, `img/room2.jpg`],
        isFavorite: false,
        isPremium: true,
        price: 98,
        rating: 0,
        title: `Cozy Studio`,
        type: `room`,
      }, {
        bedrooms: 4,
        coords: [52.369553943508, 4.85309666406198],
        description: ``,
        features: [`Fridge`],
        guests: 10,
        host: {
          avatar: ``,
          name: `Anny`,
          isStar: false
        },
        id: 2,
        images: [`img/room3.jpg`, `img/room4.jpg`, `img/room5.jpg`],
        isFavorite: false,
        isPremium: false,
        price: 34,
        rating: 50,
        title: `Big Vintage Apartment`,
        type: `apartment`,
      },
    ]
  }, {
    city: {
      name: `Tokyo`,
      coords: [144.44, 5.22],
    },
    offers: [
      {
        bedrooms: 1,
        coords: [52.3909553943508, 4.929309666406198],
        description: ``,
        features: [`Cable TV`],
        guests: 1,
        host: {
          avatar: ``,
          name: `Vince`,
          isStar: true
        },
        id: 3,
        images: [`img/room6.jpg`, `img/room7.jpg`, `img/room8.jpg`],
        isFavorite: false,
        isPremium: false,
        price: 80,
        rating: 100,
        title: `Small Country House`,
        type: `house`,
      }, {
        bedrooms: 0,
        coords: [52.3809553943508, 4.939309666406198],
        description: ``,
        features: [`Breakfast`],
        guests: 0,
        host: {
          avatar: ``,
          name: `Minni`,
          isStar: false
        },
        id: 4,
        images: [`img/room9.jpg`, `img/room10.jpg`, `img/room11.jpg`],
        isFavorite: false,
        isPremium: true,
        price: 3200,
        rating: 95,
        title: `Villa with no view`,
        type: `hotel`,
      }, {
        bedrooms: 20,
        coords: [52.3809553943508, 4.93930966640619],
        description: ``,
        features: [`Breakfast`, `Washer`],
        guests: 50,
        host: {
          avatar: ``,
          name: `Polly`,
          isStar: true
        },
        id: 5,
        images: [`img/room12.jpg`, `img/room13.jpg`, `img/room14.jpg`],
        isFavorite: false,
        isPremium: false,
        price: 5,
        rating: 15,
        title: `Tiny bungalow`,
        type: `house`,
      },
    ]
  }, {
    city: {
      name: `Oslo`,
      coords: [14.44, 52.22],
    },
    offers: [
      {
        bedrooms: 2,
        coords: [14.3909553943508, 52.929309666406198],
        description: ``,
        features: [`Fridge`, `Baby seat`],
        guests: 3,
        host: {
          avatar: ``,
          name: `Vincena`,
          isStar: true
        },
        id: 6,
        images: [`img/room15.jpg`, `img/room16.jpg`, `img/room17.jpg`],
        isFavorite: false,
        isPremium: true,
        price: 180,
        rating: 40,
        title: `Very Small Room`,
        type: `room`,
      }, {
        bedrooms: 3,
        coords: [15.3809553943508, 52.939309666406198],
        description: ``,
        features: [`Air conditioning`],
        guests: 5,
        host: {
          avatar: ``,
          name: `Mi`,
          isStar: false
        },
        id: 7,
        images: [`img/room18.jpg`, `img/room19.jpg`, `img/room20.jpg`],
        isFavorite: false,
        isPremium: true,
        price: 32,
        rating: 75,
        title: `Room without windows`,
        type: `room`,
      },
    ]
  }, {
    city: {
      name: `Vatican`,
      coords: [33.44, 12.22],
    }
  }
];

const testComments = [
  {
    date: `2018-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    text: `Test Comment #1`,
    user: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
    }
  }, {
    date: `2018-05-09T14:13:56.569Z`,
    id: 2,
    rating: 3,
    text: `Test Comment #2`,
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
    }
  }, {
    date: `2018-09-10T14:13:56.569Z`,
    id: 3,
    rating: 4,
    text: `Test Comment #3`,
    user: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
    }
  }, {
    date: `2018-01-11T14:13:56.569Z`,
    id: 4,
    rating: 3,
    text: `Test Comment #4`,
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
    }
  }, {
    date: `2018-10-12T14:13:56.569Z`,
    id: 5,
    rating: 4,
    text: `Test Comment #5`,
    user: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
    }
  }, {
    date: `2018-05-13T14:13:56.569Z`,
    id: 6,
    rating: 3,
    text: `Test Comment #6`,
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
    }
  }, {
    date: `2018-11-18T14:13:56.569Z`,
    id: 7,
    rating: 4,
    text: `Test Comment #7`,
    user: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
    }
  }, {
    date: `2019-01-01T14:13:56.569Z`,
    id: 8,
    rating: 3,
    text: `Test Comment #8`,
    user: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
    }
  },
];

export {testFavorites, testOffers, testComments};
