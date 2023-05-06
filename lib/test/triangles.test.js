
const Triangle = require('../triangle.js')


  describe('Shape', () => {
    describe('Triangle', () => {
      it('Should make an svg file of a triangle with a fillColor of black and a textColor of yellow', () => {
        const newTriangle = new Triangle('Tri', 'yellow', 'black').render();
        expect(newTriangle.includes('<svg')).toBe(true); // Check that the output contains an SVG element
        expect(newTriangle.includes('fill="yellow"')).toBe(true); // Check that the square has the right fill color
        expect(newTriangle.includes('fill="black"')).toBe(true); // Check that the text has the right fill color
        expect(newTriangle.includes('>Tri<')).toBe(true); // Check that the square contains the right text
      });
    });
  });
  