class Shape {
    constructor(options) {
      this.text = options.text || "Default Text";
      this.textColor = options.textColor || "black";
      this.shapeColor = options.shapeColor || "transparent";
    }
  
    render() {
      const { text, textColor, shapeColor } = this;
      return `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <text x="150" y="150" font-size="80" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
      `;
    }
  }
  
  class Circle extends Shape {
    constructor(options) {
      super(options);
    }
  
    render() {
      const shapeSvg = super.render();
      return `
        ${shapeSvg.replace("</svg>", "")}
        <circle cx="150" cy="110" r="80" fill="${this.shapeColor}" />
        </svg>
      `;
    }
  }
  
  class Triangle extends Shape {
    constructor(options) {
      super(options);
    }
  
    render() {
      const shapeSvg = super.render();
      return `
        ${shapeSvg.replace("</svg>", "")}
        <polygon points="150,18 282,283 18,283" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  class Square extends Shape {
    constructor(options) {
      super(options);
    }
  
    render() {
      const shapeSvg = super.render();
      return `
        ${shapeSvg.replace("</svg>", "")}
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="100" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
      `;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  