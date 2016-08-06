const assert = require('assert')

const Arrays = require('../lib/app').Arrays

/* global describe, it */

describe('Arrays', () => {
  describe('filter', () => {
    it('should include only zero values', () => {
      let array = [0, 0, 0, 1, 1, 1]
      let filtered = Arrays.filter(array, item => item === 0)
      let expected = [0, 0, 0]
      assert.deepEqual(filtered, expected)
    })
  })
})
