/* async와 await를 사용한 비동기 처리 */

// async와 await를 사용한 예제
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  await delay(3000);
  return "hello Async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();

// async만 사용했을 때
/*
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  return delay(3000).then(() => {
    return "hello Async";
  });
}

helloAsync().then((res) => {
  console.log(res);
});

// console.log(hello());
// console.log(helloAsync()); // promise pendding 반환
*/
