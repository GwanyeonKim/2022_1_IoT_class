// 3-8
// 매서드 내부에서의 this

// 매서드 내부에서의 this에 대한 예제
// 앞에 예제 복습하는 내용


var obj = {
    methodA: function () {
        console.log(this);
    },

    inner: {
        methodB: function () {
            console.log(this);
        }
    }
};

obj.methodA();
obj['methodA']();

obj.inner.methodB();
obj.inner['methodB']();
obj['inner'].methodB();
obj['inner']['methodB']();
