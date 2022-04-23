// 1-21
// 빈 요소와 배열의 순회

// forEach: undefined도 하나의 요소로 취급, empty는 요소로 취급 x (for문 자체가 안돔)
// undefined + 0 = Nan / empty + 0 = empty --> (for문 건너뜀)



var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) {console.log(v,i);});  
console.log('-')
arr2.forEach(function (v, i) {console.log(v,i);}); 

console.log('-------')

arr1.map(function (v, i) {return v+i;}); 
console.log('-')
arr2.map(function (v, i) {return v+i;}); 

console.log('-------')

arr1.filter(function (v, i) {return !v;}); 
console.log('-')
arr2.filter(function (v, i) {return !v;}); 

console.log('-------')

arr1.reduce(function (p, c, i) {return p + c + i;}, ''); 
console.log('-')
arr2.reduce(function (p, c, i) {return p + c + i;}, ''); 