// 3-20
// call/aplly 매서드의 활용 1-4) ES6의 Array. from 메서드




var obj = { 
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

var arr = Array.from(obj);

console.log(arr);
