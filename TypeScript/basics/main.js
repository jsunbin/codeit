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
const cart = ["c001", "c001", "c002"];
const user = {
    username: "codeit",
    email: "typescript@codeit.kr",
    cart,
};
function getDiff(fromPoint, toPoint) {
    let dx = toPoint[0] - fromPoint[0];
    let dy = toPoint[1] - fromPoint[1];
    return [dx, dy];
}
const monster = {
    id: "g001",
    name: "고블린",
    level: 22,
    skills: ["태권도", "특공무술"],
    move(fromPoint, toPoint) {
        let [dx, dy] = getDiff(fromPoint, toPoint);
        console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
    },
    createdAt: new Date(),
    updatedAt: new Date(),
};
const current = [0, 0];
const target = [4, 5];
monster.move(current, target);
