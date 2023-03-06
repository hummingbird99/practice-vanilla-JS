/* spread 연산자로 객체의 중복 코드 최소화하기 */

const cookie = {
  base: "cookie",
  madeIn: "Korea",
};

const chocochipCookie = {
  ...cookie,
  topping: "chocochip",
};

const blueberryCookie = {
  ...cookie,
  topping: "blueberry",
};

const strawberryCookie = {
  ...cookie,
  topping: "strawberry",
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

// 쿠키 배열 만들기

const noToppingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const toppingCookies = [
  "크림치즈쿠키",
  "블루베리쿠키",
  "스트로베리쿠키",
  "초코칩쿠키",
];

const allCookies = [...noToppingCookies, "함정쿠키", ...toppingCookies];
console.log(allCookies);
