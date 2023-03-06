/* 동기와 비동기, 콜백 함수 */

function taskA(a, b, callback) {
  setTimeout(() => {
    const res = a + b;
    callback(res); // 3초 후 실행하는 콜백 함수
  }, 3000);
}

function taskB(a, callback) {
  setTimeout(() => {
    const res = a * 2;
    callback(res); // 1초 후 실행하는 콜백 함수
  }, 1000);
}

function taskC(a, callback) {
  setTimeout(() => {
    const res = a * -1;
    callback(res); // 2초 후 실행하는 콜백 함수
  }, 2000);
}

// task 실행 후 콜백 함수 출력하는 코드

taskA(3, 4, (res) => {
  console.log("A 작업 완료 : ", res); // 4
});

taskB(7, (res) => {
  console.log("B 작업 완료 : ", res); // 2
});

taskC(14, (res) => {
  console.log("C 작업 완료 : ", res); //3
});

console.log("코드 끝"); // 1
