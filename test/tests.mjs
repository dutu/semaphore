import { expect } from 'chai'
import Semaphore from '../src/semaphore.mjs'

describe('Semaphore', () => {
  it('should block on red and proceed on green', async () => {
    const semaphore = new Semaphore()
    semaphore.red()

    let proceeded = false
    const waitingTask = (async () => {
      await semaphore.wait()
      proceeded = true
    })()

    await new Promise(resolve => setTimeout(resolve, 100))
    expect(proceeded).to.be.false

    semaphore.green()

    await waitingTask
    expect(proceeded).to.be.true
  })

  it('should allow multiple waiters', async () => {
    const semaphore = new Semaphore()
    semaphore.red()

    let proceedCount = 0
    const waitingTask1 = (async () => {
      await semaphore.wait()
      proceedCount++
    })()

    const waitingTask2 = (async () => {
      await semaphore.wait()
      proceedCount++
    })()

    await new Promise(resolve => setTimeout(resolve, 100))
    expect(proceedCount).to.equal(0)

    semaphore.green()

    await Promise.all([waitingTask1, waitingTask2])
    expect(proceedCount).to.equal(2)
  })
})
