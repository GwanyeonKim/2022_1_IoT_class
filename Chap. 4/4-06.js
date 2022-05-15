// 4-06
// 콜백 함수 내부에서의 this


// setTimeout - web API
// 일정 시간 뒤에 콜백 함수를 실행하라
// setTimeout의 콜백 함수의 this는 window/global

// forEach: for문과 같다고 보면 됨

// addEventListener - web API


setTimeout(function () {console.log(this);}, 300);  // 콜백 함수의 this를 찍어라

[1,2,3,4,5].forEach(function (x) { // 콜백 함수의 this를 찍어라  (5번)
    console.log(this);
});

document.body.innerHTML += '<button id = "a">클릭</button>';
document.body.querySelector('#a')  // # : tag/ID  // a라는 id를 가진 애를 찾아라
    .addEventListener('click', function(e) { // 
        console.log(this, e);
    }
);

