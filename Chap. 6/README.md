# 2022_1_IoT_class

## Cha. 6


### 6.1
- 어떤 생성자 함수(constructor)를 new 연산자와 함께 호출하면  
- constructor에서 정의된 내용을 바탕으로 새로운 인스턴스가 생성됨  
- 이때 인스턴스에는 __proto__라는 프로퍼티가 자동 부여  
- 이 프로퍼티는 constructor의 prototype이라는 프로퍼티 참조  
  
  
suzi.__proto__.getName(); 실행 결과가 Suzi가 아닌 undefined인 이유  
this가 suzi.__proto__임  -->  _name 없음  

suzi.getName = suzi.__proto__.getName


### 6.2 
constructor.prototype    
- method1  
- property1    
- constructor    

instance    
- __proto__    

옅은색: innumerable  
짙은색: enumerable  


### 6.3
인스턴스의 --protp__가 생성자 함수의 prototype 프러퍼티를 참조  
__proto__가 생략 가능 -->  인스턴스에서 직접 constructor에 접근 가능  
읽기 전용인 경우를 제외하고 값 변경 가능  

### 6.4
constructor 변경 -->  참조하는 대상 변경  
이미 만들어진 인스턴스의 원형은 바뀌지 않음  

Some 인스턴스의 생성자 정보를 아라내기 위해 constructor 프로퍼티에 의존하는게 항상 안전하지 않음  

### 6.5
Person의 인스턴스
- p1  
- p2  
- p3  
- p4  
- p5  

### 6.6
Person.prototype    
- getName  

iu  
name: 지금  
getName  


iu.getName의 this는 iu   
iu에 getName 함수가 있으면 그거 실행  
없으면 __proto__의 getName 실행  

### 6.7
arr.push(3); = arr.__proto__.push(3);     
arr.hasOwnProperty(2); =  arr.__proto__.__proto__.hasOwnProperty(2);  

arr에는 push가 없음 --> Array.prototype에 있는 psuh로 감  
Array.prototype에 hasOwnProperty 없음 --> Object.prototype으로 넘어감  

### 6.8
arr에 toString이 없음 -->  Array.prototype으로 넘어감  
Object.prototype에도 toString이 있지만 바로 위에 있는 Array.prototype의 toString을 사용  


### 6.9
객체란 이름(key 혹은 prop)과 값(value)으로 구성된 프로퍼드의 정렬되지 않은 집합이다.  
Array, Function, Date, RegExp, Map, WeekMap, Set, WeakSet  

프로퍼치의 값으로 함수가 올수 있음 --> 이러한 프로퍼티를 메소드(method)라고 함    

JS에서 숫자, 문자열, 불리언, undefined, null, Symbol 타입을 제외한 모든 것이 객체임  

But, 숫자, 문자열, 불리언, undefine, null, Symbol 타입같은 원시 타입은 값이 정해진 객체로 취급  
--> 객체로서의 특징도 함께 가지고 있음  
  
  
객체가 아닌 데이터 타입은 오류가 나야하는데 프로토타입 체이닝을 통해 getEntries 메서드에 접근할 수 있어서 아래 코드가 오류 없이 동작  
따라서, object.prototype이 아닌 object의 스택틱 메서드로 부여해야함  

### 6.10



