// 5-01
// 외부 함수의 변수를 참조하는 내부 함수 (1)

/*
해당 코드를 보면 function 안에 변수 2개 있음 --> a, inner    

inner 함수 안을 보면 a를 사용함  
a는 inner 함수 내부의 변수가 아님  
즉, a는 외부의 변수임  


클로져: 어떤 함수가 외부의 변수를 팜조할때 클로저라고 함  

그 외부의 변수를 클로져 변수라고 함 (a)  
모든 JS 함수는 선언될 때 클로져가 형성되며 클로져 환경을 기억함  
--> 콜스택에 outer 함수가 없어도 (outer)a는 사라지지 않는다  
--> outer가 콜스택에 없어도 inner가 a를 사용할 수 있음  

*/

var outer = function() {
    var a = 1;
    var inner = function() {
      console.log(++a);
    };
    inner();
  };
  outer();