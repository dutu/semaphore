# semaphore

A simple ES6 semaphore implementation.

## Installation

```bash
yarn add github:dutu/semaphore
```

## Usage
```js
import Semaphore from '@dutu/semaphore'

const sem = new Semaphore()

async function task() {
  console.log("Waiting for semaphore...")
  await sem.wait()
  console.log("Semaphore is green. Continuing task...")
}

sem.red()
task()
setTimeout(() => {
  sem.green()
}, 5000)
```
