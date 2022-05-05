// 3-21
// call/aplly 매서드의 활용 2) 생성자 내부에서 다른 생성자를 호출

// 함수 안의 this.???에서 this는 함수의 this를 말함


function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

function Student(name, gender, school) { // Person의 확장
    Person.call(this, name, gender); // Person의 this를 Student의 this로 설정
    this.school = school;
}

function Employee(name, gender, company) {
    Person.apply(this, [name, gender]);
    this.company = company;
}

var by = new Student('Control', 'tank', 'SMC');
var jn = new Employee('System', 'UAV', 'BLF');

console.log(by);
console.log(jn);