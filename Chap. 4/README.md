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


### 4.9


### 4.10


### 4.11


### 4.12


### 4.13


### 4.14


### 4.15


### 4.16


### 4.17
