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


### 6.5


### 6.6


### 6.7



### 6.8


### 6.10



