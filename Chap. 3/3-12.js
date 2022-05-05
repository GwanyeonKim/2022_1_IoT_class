// 3-12
// 콜백 함수 내부에서의 this

// 함수: object의 일종으로 생각
// 함수를 함수의 argument로 사용 가능함

// 콜백 함수를 사용하는 함수에 따라 this가 정해짐
// 우리가 정할 수 없음


setTimeout(function () {// 함수를 함수의 argument로 전달
    console.log(this); // this --> global
}, 300);                   

[1, 2, 3, 4, 5].forEach(function (x) {
    console.log(this, x);  // this --> global
});


// 아래 코드 에러 발생

// document.body.innerHTML += '<button id = "a">클릭</button>';
// document.body.querySelector('#a')
//     .addEventListener('click', function (e) {    // 함수를 함수의 argument로 전달, 첫 번째 'click', 두 번째 function (e)
//         console.log(this, e);
//     });
