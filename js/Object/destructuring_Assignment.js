/* 객체의 비 구조 할당 = 구조 분해 할당 */

let object = { one: "one", two: "two", three: "three", name: "hummingbird" };

let { name: myName, one, two, three, abc = "four" } = object; // 변수명 바꾸기와 새로운 값 추가하기
console.log(one, two, three, myName, abc);
