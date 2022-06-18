# 2022_1_IoT_class

## Cha. 7


### 7.1
JS는 프로토입 기반 언어라서 '상속' 개념이 존재하지 않음  
클래스 비슷하게 동자하게끔 흉내내는 기법들이 탄생함  -->  ES6에 클래스 문법이 추가됨  

이 책은 클래스가 없는 ES5 체제에서 클래스를 흉내내는 기법을 배움  


6장에서 배운 내용을 바탕으로 클래스와 유사하게 만듬  


스태틱 메서드: 인스턴스에서 직접 접근할 수 없는 메서드  


### 7.2 
6-2-4절의 내용이 클래스 상속의 핵심  

JS에서 클래스 상속을 구현했다 == 프로퍼티 타입 체이닝을 잘 연결한 것이다.  


### 7.3
Grade의 __proto__: []  

g.this = [0]: 100, [1]:80, length:2  
 
g는 push가 없음 -->  __proto__에도 push가 없음  -->  Array.prototype에 push가 있음  


### 7.4
Grade의 __proto__: [0]:a, [1]:b, [2]:c, [3]:d, length:4  

g.this = [0]: 100, [1]:80, length:2  

g는 push가 없음 -->  __proto__에도 push가 없음  -->  Array.prototype에 push가 있음  

push: length 자리에 인자를 넣어라 (ex) length:4 --> [4]번 인덱스에 추가  

g의 length를 지움  
g.push(70);를 실행함  
g는 length가 없기 때문에 __proto__의 length로 실행됨  
따라서 [4]번 인덱스에 70이 추가됨  
__proto__의 length는 5로 증가  

### 7.5
this로 width, height를 만듬  
Rectangle의 prototype에 getArea 함수를 만듬 --> 클래스 안에 함수 만드는 느낌으로  
__proto__에 있는 getArea 실행  

Square 함수도 비슷하게 만듬  

### 7.6
이렇게 고치고 나면 Square 함수가 Rectangle 함수의 하위 클래스로 들어갈 수 있겠다는 생각을 할 수 있음.


### 7.7
부모 클래스와 자식 클래스를 흉내내보자  

Square 함수 안에 Rectangle 함수가 들어가 있음  


### 7.8
클래스는  구체적인 데이터를 지니지 않음  
이를 구현하기 위해 프로퍼티들을 일일이 지움  

SubClass는 SuperClass를 상속   
SubClass에 있는 프로퍼티를 반복문을 통해 지움 



### 7.9
1. Bridge라는 빈 함수 생성  
2. Bridge.prototype이 Rectangle.prototype을 참조하게 함  
3. Square.prototype에 new Bridge()로 할당  

인스턴스를 제외한 프로토 타입 체인 경로 상에 구체적인 데이터가 남지 않음  



### 7.10
Object 클래스 사용  
간단한게 장점  

subClass의 prototype의 __proto__가 SuperClass의 prototype을 바라봄  
단, SuperClass의 인스턴스가 되지는 않음  

따라서 앞선 두 예제보다 간단하고 안전하다.  


### 7.11
해당 코드는 7-8에  
SubClass.prototype.consturctor = SubClass;  
위 구문을 추가함   


앞선 예제는 상속을 구현했지만 문제가 있음  
subClass 인스턴스의 contructor는 여전히 superClass를 가리킴   

해결법: subCalss.prototype.constructor가 원래의 subclass를 바라보도록 해주면 됨   
  


### 7.12
  

### 7.13


### 7.14


### 7.15


### 7.16


### 7.17



### 7.18

