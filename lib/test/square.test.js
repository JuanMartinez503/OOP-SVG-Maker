const Square = require('../square.js')

describe('Shape', () => {
    describe('Square', () => {
      it('Should make an svg file of a square with a fillColor of red and a textColor of green', () => {
        const newSquare = new Square('Sqr', 'red', 'green').render();
        expect(newSquare.includes('<svg')).toBe(true); // Check that the output contains an SVG element
        expect(newSquare.includes('fill="red"')).toBe(true); // Check that the square has the right fill color
        expect(newSquare.includes('fill="green"')).toBe(true); // Check that the text has the right fill color
        expect(newSquare.includes('>Sqr<')).toBe(true); // Check that the square contains the right text
      });
    });
  });
  