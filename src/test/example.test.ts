/*
Dado un número, vamos dividiendo entre 10 hasta que la parte entera del resultado sea 0 y retornamos
el número de divisiones necesarias para llegar a ese dato.

(0) -> 0
(1) -> 1
(10) -> 2
(-20) -> 2  " -0,2 si le quito la parte entera con Math.abs, que queda? 0? "
const a = -0,2 // const b = Math.abs(Math.trunc(a))
(24) -> 2
("") -> Exception

Utilizar recursividad
 */

import {saidHello} from "../core/example";

describe("Divisions to zero", () => {
    it("zero value", () => {
        expect(divideByTen(0)).toBe(0)
    })
})