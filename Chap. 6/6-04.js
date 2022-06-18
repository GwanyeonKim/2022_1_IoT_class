// 6-04
// costructor 변경


/*

constructor 변경 -->  참조하는 대상 변경  
이미 만들어진 인스턴스의 원형은 바뀌지 않음  

Some 인스턴스의 생성자 정보를 아라내기 위해 constructor 프로퍼티에 의존하는게 항상 안전하지 않음  



*/


var NewConstructor = function() {
  console.log('this is new constuctor!');
};
var dataTypes = [
  1, // Number & false
  'test', // String & false
  true, // Boolean & false
  {}, // NewConstructor & false
  [], // NewConstructor & false
  function() {}, // NewConstructor & false
  /test/, // NewConstructor & false
  new Number(), // NewConstructor & false
  new String(), // NewConstructor & false
  new Boolean(), // NewConstructor & false
  new Object(), // NewConstructor & false
  new Array(), // NewConstructor & false
  new Function(), // NewConstructor & false
  new RegExp(), // NewConstructor & false
  new Date(), // NewConstructor & false
  new Error(), // NewConstructor & false
];

dataTypes.forEach(function(d) {
  d.constructor = NewConstructor;
  console.log(d.constructor.name, '&', d instanceof NewConstructor);
});