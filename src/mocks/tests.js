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
        features: [`Wifi`, `Heating`],
        guests: 5,
        host: {
          avatar: ``,
          name: `Ann`,
          isStar: true
        },
        id: `test1`,
        images: [`img/room.jpg`, `img/room1.jpg`, `img/room2.jpg`],
        isPremium: true,
        price: 98,
        rating: 0,
        title: `Cozy Studio`,
        type: `Studio`,
      }, {
        bedrooms: 4,
        coords: [52.369553943508, 4.85309666406198],
        description: ``,
        features: [`Wifi`, `Heating`],
        guests: 10,
        host: {
          avatar: ``,
          name: `Anny`,
          isStar: false
        },
        id: `test2`,
        images: [`img/room3.jpg`, `img/room4.jpg`, `img/room5.jpg`],
        isPremium: false,
        price: 34,
        rating: 50,
        title: `Big Vintage Apartment`,
        type: `Apartment`,
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
        features: [`Wifi`, `Heating`],
        guests: 1,
        host: {
          avatar: ``,
          name: `Vince`,
          isStar: true
        },
        id: `test3`,
        images: [`img/room6.jpg`, `img/room7.jpg`, `img/room8.jpg`],
        isPremium: false,
        price: 80,
        rating: 100,
        title: `Small Country House`,
        type: `House`,
      }, {
        bedrooms: 0,
        coords: [52.3809553943508, 4.939309666406198],
        description: ``,
        features: [`Wifi`, `Heating`],
        guests: 0,
        host: {
          avatar: ``,
          name: `Minni`,
          isStar: false
        },
        id: `test4`,
        images: [`img/room9.jpg`, `img/room10.jpg`, `img/room11.jpg`],
        isPremium: true,
        price: 3200,
        rating: 95,
        title: `Villa with no view`,
        type: `Villa`,
      }, {
        bedrooms: 20,
        coords: [52.3809553943508, 4.93930966640619],
        description: ``,
        features: [`Wifi`, `Heating`],
        guests: 50,
        host: {
          avatar: ``,
          name: `Polly`,
          isStar: true
        },
        id: `test5`,
        images: [`img/room12.jpg`, `img/room13.jpg`, `img/room14.jpg`],
        isPremium: false,
        price: 5,
        rating: 15,
        title: `Tiny bungalow`,
        type: `Bungalow`,
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
        features: [`Wifi`],
        guests: 3,
        host: {
          avatar: ``,
          name: `Vincena`,
          isStar: true
        },
        id: `test6`,
        images: [`img/room15.jpg`, `img/room16.jpg`, `img/room17.jpg`],
        isPremium: true,
        price: 180,
        rating: 40,
        title: `Very Small Room`,
        type: `Room`,
      }, {
        bedrooms: 3,
        coords: [15.3809553943508, 52.939309666406198],
        description: ``,
        features: [`Heating`],
        guests: 5,
        host: {
          avatar: ``,
          name: `Mi`,
          isStar: false
        },
        id: `test7`,
        images: [`img/room18.jpg`, `img/room19.jpg`, `img/room20.jpg`],
        isPremium: true,
        price: 32,
        rating: 75,
        title: `Room without windows`,
        type: `Room`,
      },
    ]
  }, {
    city: {
      name: `Vatican`,
      coords: [33.44, 12.22],
    }
  }
];

export {testOffers};
