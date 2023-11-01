const Shapes = require('./shapes');

describe('Shapes', () => {
  describe('Circle', () => {
    it('should return a circle SVG with the correct user input', () => {
      const circle = new Shapes.Circle("img", "blue", "orange").render();
      expect(circle).toContain("<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"150\" cy=\"110\" r=\"80\" fill=\"orange\"/><text x=\"150\" y=\"150\" font-size=\"80\" text-anchor=\"middle\" fill=\"blue\">img</text></svg>");
    });
  });

  describe('Triangle', () => {
    it('should return a triangle SVG with the correct user input', () => {
      const triangle = new Shapes.Triangle("img", "yellow", "green").render();
      expect(triangle).toContain('<polygon points="150, 18 282, 283 18, 283" fill="green"/>');
    });
  });

  describe('Square', () => {
    it('should return a square SVG with the correct user input', () => {
      const square = new Shapes.Square("img", "red", "pink").render();
      expect(square).toContain("<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"200\" height=\"200\" fill=\"pink\"/><text x=\"100\" y=\"120\" font-size=\"60\" text-anchor=\"middle\" fill=\"red\">img</text></svg>");
    });
  });
});