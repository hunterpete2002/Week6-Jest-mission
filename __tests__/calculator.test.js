import {divide} from '../src/calculator.js'


describe('divide', () => {
    it('Divides two positive numbers', () => {
        expect(divide(6, 3)).toBe(2)
    })

    it('throws when second input is 0', () => {
        expect(() => divide(6, 0)).toThrow("Division by zero is not allowed")
    })
    
    it('throws when first input is NaN', () => {
        expect(() => divide(NaN, 3)).toThrow("Arguments cannot be NaN")
    })
    
    it('throws when second input is NaN', () => {
        expect(() => divide(6, NaN)).toThrow("Arguments cannot be NaN")
    })

    it('throws when first input isnt a number', () => {
        expect(() => divide("6", 3)).toThrow("Both arguments must be numbers")
    })
    
    it('throws when second input isnt a number', () => {
        expect(() => divide(6, "3")).toThrow("Both arguments must be numbers")
    })

})
