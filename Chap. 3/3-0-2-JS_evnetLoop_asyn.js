// 자바스크립트 이벤트 루프와 비동기 프로그래밍


// 콜스택, Web APIs, 콜백큐, 이벤트 루프

// setTimeout의 시간을 0으로 하면 결과가 어떻게 나올까?
// Hi - Bye - cb1

// 콜백큐에 cb1이 들어갔을 때, 
// Bye가 콜스택에 있으므로 Bye가 수행된 후에 cb1이 실행됨


console.log('Hi');   // (1)
setTimeout(function cb1() {console.log('cb1');}, 0); // (2) 
console.log('Bye');  // (3)


