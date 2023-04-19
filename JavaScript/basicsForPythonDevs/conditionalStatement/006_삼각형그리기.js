// 여기에 코드를 작성하세요
// // for문
// function printTriangle(height) {
//   for (let i = 1; i <= height; i++) {
//     console.log('*'.repeat(i));
//   }
// }

// while문
function printTriangle(height) {
  let i = 1;
  let star = '*';
  
  while(i <= height){
    console.log(star.repeat(i));
    i++
  }
}

// 테스트 코드
console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);