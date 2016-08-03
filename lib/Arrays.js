export class Arrays {

  /**
   * Retrieves values in the given array matching the filter.
   *
   * @static
   * @param {any} array The array to filter.
   * @param {any} filter The filter to use.
   * @returns An array with values matching the given filter.
   */
  static filter (array, filter) {
    let results = []
    for (let i = 0, len = array.length; i < len; i++) {
      let item = array[i]
      if (filter(item)) {
        results.push(item)
      }
    }
    return results
  }
}
