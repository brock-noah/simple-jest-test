// https://facebook.github.io/jest/docs/api.html
// Jest puts methods and objects into the global environment, no need for import

describe('truthy', function() {
  it('true', function() {
    expect(true).toBe(true)
  })
  it('a non zero number', function() {
    expect(!!100).toBe(true)
  })
  it('a negative number', function() {
    expect(!!-100).toBe(true)
  })
  it('empty object', function() {
    expect(!!{}).toBe(true)
  })
  it('empty array', function() {
    expect(!![]).toBe(true)
  })
  it('Infinity', function() {
    expect(!!Infinity).toBe(true)
  })
  it('negative Infinity', function() {
    expect(!!-Infinity).toBe(true)
  })
})

describe('falsey', function() {
  it('false', function() {
    expect(false).toBe(false)
  })
  it('a zero number', function() {
    expect(!!0).toBe(false)
  })
  it('null', function() {
    expect(!!null).toBe(false)
  })
  it('undefined', function() {
    expect(!!undefined).toBe(false)
  })
  it('empty string', function() {
    expect(!!'').toBe(false)
  })
  it('NaN', function() {
    expect(!!NaN).toBe(false)
  })
})
