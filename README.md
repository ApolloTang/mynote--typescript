
Note: 

- There is no way to get `tslab` to read `tsconfig.json`, see: [Any way to set tsconfig.json or other properties? #63](https://github.com/yunabe/tslab/issues/63)

- pnpm does not work, use yarn or npm instead. 

- typescript seem to run in [script mode](https://stackoverflow.com/questions/55488642/what-is-the-difference-between-a-module-and-a-script) which force me to wrap all javascript and typescript in an **IIFE** (Immediately Invoked Function Expression)

