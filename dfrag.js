function dfrag(type, props, children) {
  var element = document.createElement(type);



  if (typeof children === 'string' || typeof children === 'number') {
    element.textContent = children;
  } else if (children instanceof Array) {
    for (var i = 0; i < children.length; i++) {
      element.appendChild(children[i]);
    }
  }

  return element;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = dfrag;
}
