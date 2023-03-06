/* Callback Hell 함수를 Promise를 사용해 탈출하기 */

// Promise 객체 사용 예제
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}
function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}
function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

/*
taskA(5, 1)
  .then((a_res) => {
    console.log("A의의 결과 값 : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B의 결과 값 : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C의 결과 값 : ", c_res);
  });
*/

const bPromiseResult = taskA(5, 1).then((a_res) => {
  console.log("지금부터 비동기 작업을 수행합니다.");
  console.log("A의의 결과 값 : ", a_res);
  return taskB(a_res);
});

console.log("동기적으로 작업 수행중");

bPromiseResult
  .then((b_res) => {
    console.log("B의 결과 값 : ", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C의 결과 값 : ", c_res);
    console.log("비동기 작업 완료");
  });

// 콜백 함수 예제
/*
function taskA(a, b, callback) {
  setTimeout(() => {
    const res = a + b;
    callback(res);
  }, 3000);
}
function taskB(a, callback) {
  setTimeout(() => {
    const res = a * 2;
    callback(res);
  }, 1000);
}
function taskC(a, callback) {
  setTimeout(() => {
    const res = a * -1;
    callback(res);
  }, 2000);
}

taskA(3, 4, (a_res) => {
  console.log("task A : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("taks B : ", b_res);
    taskC(b_res, (c_res) => {
      console.log("task C : ", c_res);
    });
  });
});
*/
