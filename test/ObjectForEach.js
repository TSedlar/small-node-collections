const assert = require('assert')

const Objects = require('../lib/app').Objects

/* global describe, it */

describe('Objects', () => {
  describe('forEach', () => {
    it('should iterate all keys in an object', () => {
      let object = { 1: 'A', 2: 'B', 3: 'C' }
      let iterated = {}
      Objects.forEach(object, (key, val) => iterated[key] = val)
      assert.deepEqual(object, iterated)
    })
  })
})
