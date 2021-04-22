# convertToBgImage-example
Reproduction case for [convertToBgImage typescript error](https://github.com/timhagn/gatsby-background-image/issues/155) which happened on version < 0.14 of [gbimage-bridge (gatsby-background-image)](https://github.com/timhagn/gatsby-background-image)

## How to run
```
git clone https://github.com/asode/convertToBgImage-example.git
cd convertToBgImage-example/
npm install
npx tsc --noEmit
```
This should print the following:
```
Argument of type 'IGatsbyImageData | undefined' is not assignable to parameter of type 'IGatsbyImageDataExtended | (string | IGatsbyImageDataExtended)[]'
```

## How to fix
Update the package gbimage-bridge to version 0.14 or greater.
```
npm update
```