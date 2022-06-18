// 6-08
// 메서드 오버라이드와 프로토타입 체이닝

/*

arr에 toString이 없음 -->  Array.prototype으로 넘어감
Object.prototype에도 toString이 있지만 바로 위에 있는 Array.prototype의 toString을 사용

*/



var arr = [1, 2];
Array.prototype.toString.call(arr); // 1,2
Object.prototype.toString.call(arr); // [object Array]
arr.toString(); // 1,2

arr.toString = function() {
  return this.join('_');
};
arr.toString(); // 1_2