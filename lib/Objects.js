export class Objects {

  /**
   * Iterates the given map with a key-value consumer/callback.
   *
   * @static
   * @param {any} map The map to iterate.
   * @param {any} biconsumer The key-value consumer/callback.
   */
  static forEach (map, biconsumer) {
    Object.keys(map).forEach(key => biconsumer(key, map[key]))
  }
}
