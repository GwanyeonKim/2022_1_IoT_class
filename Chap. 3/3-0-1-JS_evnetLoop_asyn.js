// 자바스크립트 이벤트 루프와 비동기 프로그래밍


// 콜스택, Web APIs, 콜백큐, 이벤트 루프

// (1)
// 콜스택에 console.log('Hi')가 들어감
// 브라우저에 Hi가 출력됨
// 출력 이후 콜스택에서 console.log('Hi') 사라짐

// (2)
// 콜스택에 setTimeout(cb1)이 들어감
// Web APIs에 있는 타이머를 실행시키고 콜스택에서 사라짐
// Web APIs의 타이머는 5000ms 를 센 후에 cb1 함수를 콜백큐에 전달
// 이벤트 루프는 콜스택에 아무것도 없을 때까지 기다린 후에  ************ 중요
// cb1 함수를 콜스택에 넣음
// 이후 실행

// (3)
// 타이머가 돌아가는 동안 아래 구문 실행됨
// 콜스택에 console.log('Bye')가 들어감
// 브라우저에 Bye가 출력됨
// 출력 이후 콜스택에서 console.log('Bye') 사라짐


console.log('Hi');   // (1)
setTimeout(function cb1() {console.log('cb1');}, 5000); // (2)  // 5000ms 후에 함수 cb1을 실행하라  
// 결국에 setTimeout()은 사물을 모사했다고 할 수 있음

console.log('Bye');  // (3)


