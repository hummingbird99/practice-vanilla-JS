console.log(nameB());
console.log(nameA());

let nameA = function () {
  return "안녕하세요. A입니다.";
}; // 함수 표현식

function nameB() {
  return "안녕하세요. B입니다.";
} // 함수 선언문
