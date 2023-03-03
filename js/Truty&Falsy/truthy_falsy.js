/*Falsy
let b = "";
        null;
        undefined;
        NaN;
        0;
        -0;
        false;

전부 false 값으로 암묵적 타입 변환된다.
*/

/* Truthy
let a = "string";
        10;
        true;
        -5;
        {upperCase: "A"};

Falsy 값 외의 모든 값은 true로 반환되는 Truty 값이다.
*/

/* Truethy & Falsy 판별 예제 코드 */
if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

const getName = (person) => {
  if (!person) {
    // falsy로 예외처리
    return "객체가 아닙니다.";
  }
  return person.name;
};

// const getName = (person) => person.name;

// let person = null;
let person; // 변수가 할당되지 않은 경우
// let person = { name: "hummingbird" };

const name = getName(person);

console.log(name);

/* 삼항 연산자로 Truethy 출력하기 */
let i = [];

console.log(i ? true : false);
