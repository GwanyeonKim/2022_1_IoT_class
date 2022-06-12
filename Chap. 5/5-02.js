// 5-02
// 외부 함수의 변수를 참조하는 내부 함수 (2)


/*

1.변수 콜스택: outer, outer2  
  데이터 영역: fuction(),  

2. outer 함수 콜스택에 올림  
   outer 함수 스캔  
   inner 함수 --> 클로져 변수 a   

   inner 함수 콜스택 올림  
   a = 2로 증가  

  3. outer2 = 2의 주소를 받음  

*/


var outer = function() {
  var a = 1;
  var inner = function() {
    return ++a;
  };
  return inner();
};
var outer2 = outer();
console.log(outer2); // 2