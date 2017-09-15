function dfrag(type, props, children) {
  var element = document.createElement(type);

  return element;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = dfrag;
}
