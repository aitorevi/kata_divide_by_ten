export function divideByTen(number: number) {
    function isZero(number: number) {
        return Math.trunc(number) === 0
    }

    number = Math.abs(number)
    if (!isZero(number)) {
        const resultDivision = number / 10
        return divideByTen(resultDivision) + 1
    }
    return 0
}