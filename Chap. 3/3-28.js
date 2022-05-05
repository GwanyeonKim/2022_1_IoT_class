// 3-28
// bind 메서드 - 내부함수에 this 전달

// bind 메서드를 이용하면 this 값을 임의로 바꿀 수 있음

var obj = {
    logThis: function () {
        console.log(this);
    }, 

    logThisLater1: function () {
        setTimeout(this.logThis, 500);
    },

    logThisLater2: function () {
        setTimeout(this.logThis.bind(this), 100);
    }
};

obj.logThisLater1(); // Timeout {_idleTimeout: 500, _idlePrev: null, _idleNext: null, _idleStart: 323, _onTimeout: ƒ, …}
obj.logThisLater2(); // {logThis: ƒ, logThisLater1: ƒ, logThisLater2: ƒ}
