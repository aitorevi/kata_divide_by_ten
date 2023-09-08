/*
Dado un número, vamos dividiendo entre 10 hasta que la parte entera del resultado sea 0 y retornamos
el número de divisiones necesarias para llegar a ese dato.

(0) -> 0
(1) -> 1
(10) -> 2
(-20) -> 2  " -0,2 si le quito la parte entera con Math.abs, que queda? 0? "
const a = -0,2 // const b = Math.abs(Math.trunc(a))
(24) -> 2

Utilizar recursividad
 */

import {divideByTen} from "./divideByTen";

describe("Divisions to zero", () => {
    it("zero value", () => {
        expect(divideByTen(0)).toBe(0)
    })

    it("divide one-digit numbers", () => {
        expect(divideByTen(1)).toBe(1)
    })

    it("divide two-digit numbers", () => {
        expect(divideByTen(10)).toBe(2)
    })

    it("divide two-digit numbers negative", () => {
        expect(divideByTen(-20)).toBe(2)
    })

    it("divide three-digit numbers", () => {
        expect(divideByTen(204)).toBe(3)
    })
})