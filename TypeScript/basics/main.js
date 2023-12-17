"use strict";
// 리터럴 타입 ===============
// 값을 자체를 타입으로 하는 타입, const로 선언된 변수가 보통 이에 해당
let productName1 = "코드잇 블랙 후드";
const productName2 = "코드잇 텀블러";
let small = 95;
const large = 100;
function printSize(size) {
    console.log(`${size} 사이즈입니다.`);
}
printSize(small);
printSize(large);
