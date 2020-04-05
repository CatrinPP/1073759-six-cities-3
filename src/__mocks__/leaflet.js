const leaflet = jest.genMockFromModule(`leaflet`);

leaflet.icon = () => {};

leaflet.map = () => {
  return {
    setView: () => {},
    remove: () => {},
    dragging: {
      disable: () => {}
    },
    scrollWheelZoom: {
      disable: () => {}
    },
  };
};

leaflet.marker = () => {
  return {
    addTo: () => {},
  };
};

leaflet.tileLayer = () => {
  return {
    addTo: () => {},
  };
};

leaflet.layerGroup = () => {
  return {
    addTo: () => {},
  };
};

module.exports = leaflet;
