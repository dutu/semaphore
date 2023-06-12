/**
 * A semaphore class for managing concurrent access to a resource.
 *
 * @example
 * const sem = new Semaphore()
 *
 * async function task() {
 *   console.log("Waiting for semaphore...")
 *   await sem.wait()
 *   console.log("Semaphore is green. Continuing task...")
 * }
 *
 * sem.red()
 * task()
 * setTimeout(() => {
 *   sem.green()
 * }, 5000)
 */
class Semaphore {
  #green = false
  #resolves = []

  /**
   * Waits for the semaphore to turn green.
   * @returns {Promise} Resolves when the semaphore turns green.
   */
  async wait() {
    if (!this.#green) {
      await new Promise(resolve => this.#resolves.push(resolve))
    }
  }

  /**
   * Sets the semaphore to green and allows all waiting to proceed.
   * @returns {void}
   */
  green() {
    this.#green = true
    this.#resolves.forEach(resolve => resolve())
    this.#resolves = [] // Clear out the resolves array.
  }

  /**
   * Sets the semaphore to red.
   * @returns {void}
   */
  red() {
    this.#green = false
  }
}
