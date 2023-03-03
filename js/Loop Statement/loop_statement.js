/* for문 기본 구조 */
const bird = "hummingbird";

const loop_statement = () => {
  for (let i = 0; i < bird.length; i++) {
    const item = bird[i];
    console.log(item);
  }
};

/* for문을 이용해 객체를 하나 씩 꺼내기 */
let person = {
  name: "hummingbird",
  age: 25,
  height: 8,
};

const personKeys = Object.keys(person); // Object.keys(): 열거 가능한 key를 배열로 반환
const personValues = Object.values(person); // Object.values(): value를 배열로 반환
const personEntries = Object.entries(person); // Object.entries(): key:value 쌍을 배열로 반환

for (let i = 0; i < personKeys.length; i++) {
  const currentKey = personKeys[i];
  const currentValue = personValues[i];

  console.log(`${currentKey} : ${currentValue}`);
}

//Object.entries() 추후 추가
