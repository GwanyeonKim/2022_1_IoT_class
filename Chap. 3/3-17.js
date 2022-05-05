// 3-17
// call/aplly 매서드의 활용 1-1) 유사 배열 객체에 배열 메서드를 적용

// array도 이 예제의 obj와 같이 들어가 있음

// push: Array인 속성을 가진 애들만 사용할 수 있음
// 배열에만 사용할 수 있는 push를 object에도 사용하고 싶다
// push의 this를 obj로 설정
// push 함수는 자신의 this와 length를 사용함
// obj 자리에 들어가는 것이 index와 length를 가지고 있기만 하면 됨
// => array-like object

// slice: Array인 속성을 가진 애들만 사용할 수 있음
// 복제하는 녀석임
// slice: 복제라기 보다는 array를 자르고 붙이는 함수임

var obj = {  // array-like object
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

Array.prototype.push.call(obj, 'd');  // push: Array인 속성을 가진 애들만 사용할 수 있음
                                      // 배열에만 사용할 수 있는 push를 object에도 사용하고 싶다
                                      // push의 this를 obj로 설정
                                      // push 함수는 자신의 this와 length를 사용함
                                      // obj 자리에 들어가는 것이 index와 length를 가지고 있기만 하면 됨
                                      // => array-like object
console.log(obj); // {0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4}

var arr = Array.prototype.slice.call(obj); // slice: Array인 속성을 가진 애들만 사용할 수 있음
                                           // 복제하는 녀석임
console.log(arr); // (4) ['a', 'b', 'c', 'd']


