/* 객체 생성 방식 */

let person1 = new Object(); // 생성자 함수에 의한 객체 생성

person1.name = "Kim";
person1.age = 30;
person1.nickname = "hummingbird";
person1.says = function () {
  console.log("Hi! my name is " + this.name);
};

console.log(person1); // {name: "Kim", says: f}
person1.says(); // Hi! my name is Kim

let person = {
  nickname: "hummingbird",
  name: "Kim",
  human: false,
  future: undefined,
  favorite: ["puppy", "kitty"],
  says: function () {
    console.log(`Hi my name is ${person.name}`);
  },
}; // 객체 리터럴 방식

/* 객체 접근 방식 */
console.log(person.name); // 점 표기법
console.log(person["human"]); // 괄호 표기법

/* 객체에 속성 추가하기 */
person.country = "Korea";
person["gender"] = "female";

/* 객체 속성 삭제하기 */
delete person.future;
delete person["human"]; // delete연산자를 사용한 삭제는 속성의 참조만 끊을 뿐 메모리는 삭제되지 않는다.

person.name = null; // null을 할당하면 메모리 상에서 name의 value가 제거된다.

console.log(person);
