/* &&(논리곱), ||(논리합) 연산자를 사용한 단축 평가
논리곱, 논리합 연산자 표현식은 좌항에서 우항으로 평가가 진행된다.
피연산자를 타입 변환하지 않고 그대로 반환한다.
표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략한다.

&&(논리곱) 연산자: 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다.
||(논리합) 연산자: 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다.
*/

// 논리곱(||) 연산자
console.log("Cat" || "Dog"); // "Cat"
console.log(false || "Dog"); // "Dog"
console.log("Cat" || false); // "Cat"

// 논리합(&&) 연산자
console.log("Cat" && "Dog"); // "Dog"
console.log(false && "Dog"); // false
console.log("Cat" && false); // false

/*
단축 평가를 사용할 경우
객체를 가리키기를 기대하는 변수가
null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때
타입 에러가 나지 않고 출력된다.
*/

// falsy 예시
const getName = (person) => {
  const name = person && person.name; // person이 falsy면 person으로 평가되고 truthy면 person.name으로 평가된다.
  return name || "객체가 아닙니다"; // 예외처리
};

let person; // 객체를 가리키기를 기대하는 변수
const name = getName(person);
console.log(name); // "객체가 아닙니다" 출력

// truthy 예시
const getName2 = (person2) => {
  const name = person2 && person2.name;
  return name || "객체가 아닙니다";
};

let person2 = { name: "hummingbird" }; // 객체를 가리키기를 기대하는 변수
const name2 = getName2(person2);
console.log(name2); // hummingbird 출력
