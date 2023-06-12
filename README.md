![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dutu/semaphore/Run%20Tests)

# semaphore

A simple ES6 semaphore implementation.

## Installation

```bash
yarn add @dutu/semaphore@github:dutu/semaphore
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
