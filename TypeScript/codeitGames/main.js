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
// Enum: 게임 캐릭터의 직업을  Job이라는 이름의 타입스크립트 Enum 타입으로 만들라.
var Job;
(function (Job) {
    Job["Knight"] = "Knight";
    Job["Archer"] = "Archer";
    Job["Mage"] = "Mage";
    Job["Priest"] = "Priest";
    Job["Thief"] = "Thief";
})(Job || (Job = {}));
console.log(Job);
let monsterI = {
    id: "g001",
    name: "고블린",
    level: 22,
    skills: ["태권도", "특공무술"],
    createdAt: new Date(),
    updatedAt: new Date(),
};
console.log(`${monsterI.name}(${monsterI.id})의 레벨은 ${monsterI.level}이고,\n` +
    `${monsterI.hasGold ? "해치우면 골드를 얻는" : "해치워도 골드를 주지 않는"} 몬스터입니다.\n` +
    `${monsterI.skills.length > 0 ? `가진 능력은 ${monsterI.skills.join(", ")}입니다.` : ""}`);
function printEquipment(equipment) {
    console.log(`이름: ${equipment.name}`);
    if ("attack" in equipment) {
        // 무기인 경우 아래 코드를 실행합니다.
        console.log(`이 장비는 공격력을 ${equipment.attack} 증가 시킵니다.`);
    }
    if ("defence" in equipment) {
        //   방어구인 경우 아래 코드를 실행합니다.
        console.log(`이 장비는 방어력을 ${equipment.defence} 증가 시킵니다.`);
    }
}
const item1 = {
    id: "w001",
    name: "전쟁 도끼",
    price: 100,
    attack: 15,
};
const item2 = {
    id: "a001",
    name: "사슬 갑옷",
    price: 200,
    defence: 52,
};
printEquipment(item1);
printEquipment(item2);
function printEquipmentIntersection(equipment) {
    console.log(`이름: ${equipment.name}`);
    console.log(`이 장비는 공격력을 ${equipment.attack}, 방어력을 ${equipment.defence} 증가 시킵니다.`);
}
const item1Intersection = {
    id: "g001",
    name: "서리불꽃 글러브",
    price: 100,
    attack: 5,
    defence: 42,
};
printEquipmentIntersection(item1Intersection);
const itemTable = [
    ["name", "이름"],
    ["price", "가격"],
    ["description", "설명"],
];
const item = {
    id: "h001",
    name: "힐링 포션",
    price: 200,
    description: "마시면 체력을 50 회복한다.",
};
for (let [propertyKey, propertyName] of itemTable) {
    console.log(`${propertyName} | ${item[propertyKey]}`);
}
