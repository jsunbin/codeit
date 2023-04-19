let n = 180;

// 여기에 코드를 작성하세요
let i = 1;
let count = 0
while (i <= n) {
  if (n % i === 0) {
    console.log(i);
    count++;
  };
  i++;
}

console.log(`${n}의 약수는 총 ${count}개입니다.`)