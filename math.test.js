const sumVariables = require('./frontend/utils/math')


test('Check math.js a, b, c are integers:', () => {
    expect((typeof sumVariables[0]) === Number)
    expect((typeof sumVariables[1]) === Number)
    expect((typeof sumVariables[2]) === Number)
})

test('Properly sum math.js integers: a and b', () => {
    const minusSumToEqualA = sumVariables[2] - sumVariables[1]
    const minusSumToEqualB = sumVariables[2] - sumVariables[0]
    expect(minusSumToEqualA === sumVariables[0])
    expect(minusSumToEqualB === sumVariables[1])
})