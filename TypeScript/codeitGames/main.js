"use strict";
// 1. 변수 값에 맞는 타입 지정
let monsterName;
let level;
let hasGold;
let skill;
let area;
monsterName = "코드잇 고블린";
level = 255;
hasGold = false;
skill = undefined;
area = null;
console.log(`${monsterName}의 레벨은 ${level}이고,\n` +
    `${hasGold ? "해치우면 골드를 얻는" : "해치워도 골드를 주지 않는"} 몬스터입니다.\n` +
    `${skill ? `가진 능력은 ${skill} 이고 \n` : ""}` +
    `${area ? `출현 지역은 ${area} 입니다.` : ""}`);
// 2.주어진 코드에 맞게, 배열과 튜플 타입을 사용해서 current, target, 그리고 items 변수에 명시적으로 타입을 지정해 주세요.
const current = [0, 0];
const target = [4, 5];
const dx = target[0] - current[0];
const dy = target[1] - current[1];
console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
const items = [];
items.push("갑옷");
items.push("빨간 물약");
console.log(`${items.join(", ")}을/를 획득했다!`);
//3. 객체 타입: monster라는 변수를 객체 타입으로 변환
const monster = {
    name: "코드잇 고블린",
    level: 22,
    skills: ["태권도", "특공무술"],
};
console.log(`${monster.name}의 레벨은 ${monster.level}이고,\n` +
    `${monster.hasGold ? "해치우면 골드를 얻는" : "해치워도 골드를 주지 않는"} 몬스터입니다.\n` +
    `${monster.skills.length > 0 ? `가진 능력은 ${monster.skills.join(", ")}입니다.` : ""}`);
// 함수에 타입 선언: 함수들에 타입을 명시적으로 지정해 주세요. 이때 함수의 리턴 타입도 명시적으로 지정
function getDiff(fromPoint, toPoint) {
    let dx = toPoint[0] - fromPoint[0];
    let dy = toPoint[1] - fromPoint[1];
    return [dx, dy];
}
const monsterB = {
    name: "고블린",
    level: 22,
    skills: ["태권도", "특공무술"],
    move(fromPoint, toPoint) {
        let [dx, dy] = getDiff(fromPoint, toPoint);
        console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
    },
};
const currentB = [0, 0];
const targetB = [4, 5];
monsterB.move(currentB, targetB);
