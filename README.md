![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/dutu/semaphore/main.yml?branch=master)

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


See [the API documentation](https://dutu.github.io/semaphore/) for more details on how to use it.
