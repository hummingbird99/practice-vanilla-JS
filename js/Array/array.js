/* 배열의 고차 함수 */

let numbers = [0, 1, 7, 3, 5, 90, 10];

const compare = (a, b) => {
  // 오름차순 비교 함수
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }
};

console.log(numbers.sort(compare));
// numbers.sort((a, b) => a-b);

const array = [1, 2, 3, 4];
const squareArray = [];

array.forEach((elm) => squareArray.push(elm * 2));
console.log(squareArray);
/* forEach(): 반복문을 추상화한 고차 함수.
자신을 호출한 배열을 순회하면서 수행해야 할 처리를
콜백 함수로 전달받아 반복 호출한다. */

let mapArray = array.map((elm) => elm * 2);
console.log(mapArray);
/* map(): 자신을 호출한 배열의 모든 요소를 순회하면서
인수로 전달받은 콜백 함수를 반복 호출한다. */

// forEach 메서드는 단순히 반복문을 대체하기 위한 고차 함수이고(undefined 반환),
// map 메서드는 "요소를 다른 값으로 mapping한 새로운 배열"을 생성한다.(new array 반환)

const arr = [
  { id: 1, color: "red" },
  { id: 2, color: "yellow" },
  { id: 3, color: "blue" },
  { id: 4, color: "green" },
  { id: 5, color: "yellow" },
];

console.log(arr.filter((elm) => elm.color === "yellow"));
/* filter(): 콜백 함수의 반환값이 "true인 요소로만 구성된 새로운 배열"을 반환한다. */

const findElement = arr.find((elm) => elm.color === "blue");
console.log(findElement);
/* find(): 자신을 호출한 배열의 요소를 순회하면서
인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 "요소"를 반환한다.
콜백 함수의 반환값이 존재 하지 않으면 undefined를 반환한다. */

// findIndex()와의 차이점은 findIndex는 "index"를 반환하고, find는 "요소"를 반환한다는 점이다.

console.log(arr.findIndex((elm) => elm.color === "green"));
/* findIndex(): 자신을 호출한 배열의 요소를 순회하면서
인수로 전달된 콜백 함수를 호출하여 반환값이 true인 첫 번째 요소의 "index"를 반환한다. */

// indexOf 메서드와 동일하게 중복값의 경우 배열에서 먼저 위치 값의 index를 반환한다.

/* 배열 메서드 */

let number = 3;

console.log(array.includes(number));
/* includes(): 배열 내에 인자로 넘기는 요소가 포함되어 있는지
확인하여 true 또는 false를 반환한다.
첫 번째 인수로는 검색 대상을 지정한다.
두 번째 인수로 index를 전달할 수 있다. */

// indexOf 메서드 보다 includes() 메서드가 가독성이 좋은 이유는
// indexOF 메서드는 반환 값이 -1인지 확인해야 하고
// 배열에 NaN가 포함되어 있는지 확인할 수 없다는 점이다.

const concatArray1 = [
  [1, 2, 3],
  [4, 5, 6],
];

const concatArray2 = [
  [1, 2, 3],
  [4, 5, 6],
];

alert(concatArray1.concat(concatArray2));
/* concat(): 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
인수로 전달된 값이 배열인 경우 배열을 해체해 새로운 배열의 요소로 추가한다. */
