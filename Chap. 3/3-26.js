// 3-26
// bind 메서드 - name 프로퍼티

// bind 메서드를 사용하면 뒤에 bound라는 접두어가 붙음 (???.name 실행 시)
// 따라서 call/apply 보다 코드 추적이 쉬움


var func = function (a, b, c, d) {
    console.log(this, a, b, c, d);
};


var bindFunc1 = func.bind({x:1}, 4, 5); // this와 두 개의 인자를 받음


console.log(func.name);      // func
console.log(bindFunc1.name); // bound func

