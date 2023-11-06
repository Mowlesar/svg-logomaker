class Shape {
  constructor(options) {
    this.text = options.text || "Default Text";
    this.textColor = options.textColor || "black";
    this.shapeColor = options.shapeColor || "transparent";
  }

  render() {
    return ''; // The base Shape class doesn't render any shape.
  }
}

class Circle extends Shape {
  constructor(options) {
    super(options);
  }

  render() {
    const { text, textColor, shapeColor } = this;
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <g> <!-- Group for text and shape -->
          <circle cx="150" cy="110" r="80" fill="${shapeColor}" />
          <text x="150" y="150" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text>
        </g>
      </svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(options) {
    super(options);
  }

  render() {
    const { text, textColor, shapeColor } = this;
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <g> <!-- Group for text and shape -->
          <polygon points="150,18 282,283 18,283" fill="${shapeColor}" />
          <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </g>
      </svg>
    `;
  }
}

class Square extends Shape {
  constructor(options) {
    super(options);
  }

  render() {
    const { text, textColor, shapeColor } = this;
    return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <g> <!-- Group for text and shape -->
          <rect width="200" height="200" fill="${shapeColor}" />
          <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </g>
      </svg>
    `;
  }
}

module.exports = { Circle, Triangle, Square };
