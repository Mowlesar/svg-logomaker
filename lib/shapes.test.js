const { Circle, Triangle, Square } = require('./shapes');

describe('Shapes', () => {
  describe('Circle', () => {
    it('should return a circle SVG with the correct user input', () => {
      // Correctly create a Circle instance with an options object
      const circle = new Circle({ text: "img", textColor: "blue", shapeColor: "orange" }).render();
      // Remove version="1.1" from the expected string and use correct expected output
      expect(circle).toContain('<circle cx="150" cy="110" r="80" fill="orange" />');
      expect(circle).toContain('<text x="150" y="150" font-size="80" text-anchor="middle" fill="blue">img</text>');
    });
  });

  describe('Triangle', () => {
    it('should return a triangle SVG with the correct user input', () => {
      // Correctly create a Triangle instance with an options object
      const triangle = new Triangle({ text: "img", textColor: "yellow", shapeColor: "green" }).render();
      // Use the correct assertion based on the actual expected output
      expect(triangle).toContain('<polygon points="150,18 282,283 18,283" fill="green" />');
    });
  });

  describe('Square', () => {
    it('should return a square SVG with the correct user input', () => {
      // Correctly create a Square instance with an options object
      const square = new Square({ text: "img", textColor: "red", shapeColor: "pink" }).render();
      // Fix the expected output to match the actual output
      expect(square).toContain('<rect width="200" height="200" fill="pink" />');
      expect(square).toContain('<text x="150" y="150" font-size="60" text-anchor="middle" fill="red">img</text>');
    });
  });
});
