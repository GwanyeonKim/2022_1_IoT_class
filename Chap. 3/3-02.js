// 3-2
// 전역 공간에서의 this (Node.js 환경)

// 출력값이 이상하다

// nodejs 환경
// this = global


console.log(this);            // {} <--출력값  // { process: {title: 'node', version: 'v10.13.0', ... } }
console.log(global);          // { process: {title: 'node', version: 'v10.13.0', ... }
console.log(this === global); // true ????