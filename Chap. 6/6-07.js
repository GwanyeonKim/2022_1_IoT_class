// 6-07
// 배열에서 배열 메서드 및 객체 메서드 실행

/*

arr.push(3); = arr.__proto__.push(3);  
arr.hasOwnProperty(2); =  arr.__proto__.__proto__.hasOwnProperty(2);

arr에는 push가 없음 --> Array.prototype에 있는 psuh로 감
Array.prototype에 hasOwnProperty 없음 --> Object.prototype으로 넘어감
*/


var arr = [1, 2];
arr.push(3);
arr.hasOwnProperty(2); // true