# 2022_1_IoT_class

## Cha. 5


### 5.1
해당 코드를 보면 function 안에 변수 2개 있음 --> a, inner    

inner 함수 안을 보면 a를 사용함  
a는 inner 함수 내부의 변수가 아님  
즉, a는 외부의 변수임  


클로져: 어떤 함수가 외부의 변수를 팜조할때 클로저라고 함  

그 외부의 변수를 클로져 변수라고 함 (a)  
모든 JS 함수는 선언될 때 클로져가 형성되며 클로져 환경을 기억함  
--> 콜스택에 outer 함수가 없어도 (outer)a는 사라지지 않는다  
--> outer가 콜스택에 없어도 inner가 a를 사용할 수 있음  


### 5.2 
1.변수 콜스택: outer, outer2  
  데이터 영역: fuction(),  

2. outer 함수 콜스택에 올림  
   outer 함수 스캔  
   inner 함수 --> 클로져 변수 a   

   inner 함수 콜스택 올림  
   a = 2로 증가  

  3. outer2 = 2의 주소를 받음  



### 5.3
5-02와의 차이점: outer가 inner의 주소를 리턴함  


### 5.4
함수에 다시 ()로 덮은거  
== 즉시 실행 함수  
즉시 실행 함수: 정의하고 실행이 바로 됨  

그 자리에서 바로 함수 실행  
함수가 바로 실행되니까 이름을 붙힐 필요가 없음 -->  ()표시 +()실행  --> (function(){})()  

### 5.5
클로저 변수는 데이터 영역에 저장된다  -->  메모리  
클로저 변수가 많다 --> 메모리를 많이 먹는다  

참조 카운트를 0으로 만든다 --> 가비지 데이터가 된다  -->  가비지 콜렉터가 수거한다  

### 5.6
(A): 외부 함수  
(B): 내부 함수  

클로저 변수: fruit  -->  데이터 영역  

### 5.7
5-06 예제에서 (A)가 실행될 때마다 (B)를 계속 만들지 말고 한 번만 만들자 --> 5-07  


### 5.8
alertFruit --> 클로저가 없음  
alertFruit에 fruit을 args로 넣어주고 새로운 function으로 return한다.  
 
### 5.9
5-08의 alertFruit 대신에 alertFruitBuilder 함수로 작성  

alertFruitBuilder 함수 내부에서 익명 함수 반환 --> 익명함수는 기존의 alertFruit  

alertFruitBuilder의 실행 결과로 반환된 함수에는 클로저가 있음  
 
### 5.10
Car 변수에 객체를 직접 할당  

run을 이용하여 랜덤으로 연료, 연료비 생성됨  

하지만, car.fuel/car.power/car.moved로 내부 값을 직접 바꿀 수 있으므로 이를 막을 필요가 있음  

### 5.11
클로저 변수: moved, fuel, power   

내부 변수(fuel, power, moved)에 접근 불가  

moved: ReadOnly  


### 5.12
  

### 5.13
var addPartial = add.bind(null, 1, 2, 3, 4, 5); -->  this = null    
                                                -->  arg = 1,2,3,4,5 

### 5.14
5-13은 this가 null이 됨  

5-14는 클로저를 이용해서 5-13 구현  


클로저 변수: originalPartialArgs, func


slice: 어레이를 받는 함수
originalPartialArgs--> slice-like 함수
따라서 slice 함수의 인자로 slice-like 인자를 주기 위해 slice.call을 이용

### 5.15


### 5.16


### 5.17



### 5.18

