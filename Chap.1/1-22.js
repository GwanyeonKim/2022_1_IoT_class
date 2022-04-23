// 1-22
// defined와 null의 비교

// null은 'object'
// null == undefined  O (동등 연산자)
// null === undefined X (일지 연산자)

var n = null;
console.log(typeof n);          // object
console.log('-------')

console.log(n == undefined);    // true
console.log(n == null);         // true
console.log('-------')

console.log(n === undefined);   // false
console.log(n === null);         // true 