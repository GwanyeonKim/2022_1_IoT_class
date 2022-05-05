// 3-1
// 전역 공간에서의 this (브라우저 환경)

// 자바스크립트의 this와 다른 언어의 this는 전혀 다름 

// gloabal object
// 브라우저 --> window
// Nodejs  --> global
// 자바스크립트 관점에서는 거의 같다고 보면 됨

// 브라우저 환경
// this = window


console.log(this);            // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(window);          // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === window); // true