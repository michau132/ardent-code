## Installation

1. [`clone`](https://github.com/michau132/beerList.git) this repository and go into the project root
1. `yarn install` | `npm install` to install the website's npm dependencies

### Running locally

1. `yarn start | npm start` to start the hot-reloading development server 
1. webpage should be open automaticlly on http://localhost:3000

### Running tests
1. `yarn test | npm run test`

## Description
Function `compareObjects` takes as arguments two objects and it is comparing them. 
To see rendered differences in your browser you need to execute `compareObjects` function. For e.g.

```javascript
const obj1 = {
  a: 12,
  b: "1"
}
const obj2 = {
  a: 12,
  b: 1
}
const result = compareObjects(obj1, obj2)
```

If objects are equal copy of this object is returned. Arrays are also checked but here order is <b>important!</b>

