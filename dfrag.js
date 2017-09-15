function dfrag(type, props = {}, children) {
  const element = document.createElement(type);

  Object.keys(props).forEach((prop) => {
    const val = props[prop];
    if (prop.slice(0, 2) === 'on') {
      element.addEventListener(prop.slice(2), val);
    } else if (prop.slice(0, 4) === 'data') {
      element.setAttribute(`data-${prop.slice(4)}`, val)
    } else if (val) {
      if (prop === 'className') {
        prop = 'class';
      }

      element.setAttribute(prop, val);
    }
  });

  if (!(children instanceof Array)) {
    children = [children];
  }

  children.forEach((child) => {
    if (typeof child === 'string' || typeof child === 'number') {
      element.textContent = children;
    } else if (child instanceof Element) {
      element.appendChild(child);
    }
  });

  return element;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = dfrag;
}
