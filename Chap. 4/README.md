# 2022_1_IoT_class

## Cha. 4


### 4.1
콜백 함수는 함수 또는 메서드를 인자로 넘겨줌  
인자로 들어간 함수 또는 메서드의 제어권은 위임 받음 함수에 있음  

이 예제에 있는 setInterval를 web API라고 생각하자.  ( clearInterval도 )  


### 4.2 
4-01 예제와 같다.  
차이점은 콜백 함수를 cb로 정의하고 인자로 넘겨줌  

이 예제에 있는 setInterval를 web API라고 생각하자.  ( clearInterval도 )  

콜백 함수는 web API가 요구하는 속성에 따라 만들어야함  


### 4.3
map: array.prototype 안에 있는 속성 중에 하나  
array.prototype: array instance가 활용할 수 있는 methods가 있음  

.map을 사용하기 위한 콜백 함수 프로토콜   
array.prototype.map(callback[, thisArg])  
callback: function(currentValue, index, array)  

### 4.4
.map을 사용하기 위한 콜백 함수 프로토콜   
array.prototype.map(callback[, thisArg])  
callback: function(currentValue, index, array)  
 
currentValue, index 이름을 바꿔서 사용한다고 달라지지 않음  
Just 인자의 이름일 뿐 임  

### 4.5
[10, 20, 30].map의 this는 [10, 20, 30]  
콜백 함수의 this는 제어권이 있는 함수 마음이다.  
.map은 콜백 함수의 this를 window/global로 설정되어 있음   
즉, .map과 콜백함수의 this가 다름  

이 예제는 Array.prototype.map이 어떻게 작성되어 있는지 보는 것임  
실제로 이 코드와 동일한 것은 아님  

A||B  --> A가 없으면 B를 수행, A가 있으면 A를 실행  

### 4.6
setTimeout - web API  
일정 시간 뒤에 콜백 함수를 실행하라  
setTimeout의 콜백 함수의 this는 window/global  

forEach: for문과 같다고 보면 됨  

addEventListener - web API  

### 4.7
logValues - obj의 method


### 4.8
self를 이용한 this 바인딩
this를 다른 변수에 담아서 넘기기

### 4.9
name 자체를 넘겨서 this 사용하지 않고 하기

### 4.10
앞에 예제 복습 + 응용

### 4.11
앞에 예제 복습 + 응용

### 4.12
콜백함수를 인자로 넘겨서 비동기 시스템을 만들 때 이런 문제가 발생한다.  
콜백 함수를 중첩해서 사용하기 때문에 들여쓰기를 계속 사용하게 됨.  
따라서 가독성이 매우 떨어지는 문제가 발생한다.  

이를 해결하기 위해 Promise 또는 async/await을 이용한다.   

### 4.13
익명의 콜백함수  -->  기명함수  
코드의 가독성을 높임  

### 4.14
promise의 resolve와 reject  
resolve - promise의 state를 pending에서 fulfilled로 바꾸고 value에 인자 값을 넣어줌  
reject - promise의 state를 pending에서 reject으로 바꾸고 value에 인자 값을 넣어줌  
둘이 동시에 실행되게 하면 안됨  

then(onFulfilled, onRejected) : promise 객체 안에 있는 함수  
state가 fulfilled면 onFulfilled 실행, onRejected면 reject 실행   
만약 state가 pendding이면, chained[]이라는 배열에 onFulfilled와 onRejected를 저장  

resolve -- chained에 있는 onFulfilled를 차례대로 실행  
reject   --chained에 있는 onRejected를 차례대로 실행  

### 4.15
promise를 사용하기 때문에 가독성이 좋아진다.
시간 지연에 구애 받지 않고 비동기 프로그래밍 가능


### 4.16
일반 함수는 하나의 값만 반환 가능   
여러 개의 값을 필요에 따라 하나씩 반환 할 수 있음  

generator를 사용해 비동기 처리를 동기 처리처럼 구현 가능  

yield와 return을 통해서 하나씩 순서대로 반환함  
return까지 가면 다음 순서에는 data가 나오지 않음  

### 4.17
