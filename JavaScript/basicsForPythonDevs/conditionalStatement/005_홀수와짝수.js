function printOdd(number) {
  // 여기에 코드를 작성하세요
  for (let i = 1; i <= number; i += 2){
    console.log(i)
  }
}

function printEven(number) {
  // 여기에 코드를 작성하세요
  for (let i = 0; i <= number; i += 2){
    console.log(i)
  }
}

// while문을 활용한 printEven()
function printEvenB(number) {
  let i = 0;
  while (i <= number) {
    console.log(i);
    i += 2;
  };
}

// 테스트 코드
printOdd(10);
printOdd(23);
printEven(31);
printEven(18);