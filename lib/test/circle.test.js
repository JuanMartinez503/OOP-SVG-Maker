const Circle = require('../circle.js')


describe('Shape', ()=>{
    describe('Circles',()=>{
        it('Should make an svg file of a circle with a textColor of black and a fillColor of blue', ()=>{
            const newCircle = new Circle('J','black','blue').render()
            expect(newCircle.includes('<svg')).toBe(true); // Check that the output contains an SVG element
            expect(newCircle.includes('fill="blue"')).toBe(true); // Check that the square has the right fill color
            expect(newCircle.includes('fill="black"')).toBe(true); // Check that the text has the right fill color
            expect(newCircle.includes('>J<')).toBe(true); // Check that the square contains the right text
        })
    })
})