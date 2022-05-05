// 1-21
// 빈 요소와 배열의 순회

// forEach: undefined도 하나의 요소로 취급, empty는 요소로 취급 x (for문 자체가 안돔)
// undefined + 0 = Nan / empty + 0 = empty --> (for문 건너뜀)



var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) {console.log(v,i);});  
arr2.forEach(function (v, i) {console.log(v,i);}); 

console.log('-------')

b1 = arr1.map(function (v, i) {return v+i;}); 
b2 = arr2.map(function (v, i) {return v+i;}); 

console.log(b1);
console.log(b2);

console.log('-------')

c1 = arr1.filter(function (v, i) {return !v;}); 
c2 = arr2.filter(function (v, i) {return !v;}); 

console.log(c1);
console.log(c2);

console.log('-------')

d1 = arr1.reduce(function (p, c, i) {return p + c + i;}, ''); 
d2 = arr2.reduce(function (p, c, i) {return p + c + i;}, ''); 

console.log(d1);
console.log(d2);