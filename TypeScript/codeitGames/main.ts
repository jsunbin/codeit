// 1. 변수 값에 맞는 타입 지정

let monsterName: string;
let level: number;
let hasGold: boolean;
let skill: undefined;
let area: null;

monsterName = "코드잇 고블린";
level = 255;
hasGold = false;
skill = undefined;
area = null;

console.log(
  `${monsterName}의 레벨은 ${level}이고,\n` +
    `${hasGold ? "해치우면 골드를 얻는" : "해치워도 골드를 주지 않는"} 몬스터입니다.\n` +
    `${skill ? `가진 능력은 ${skill} 이고 \n` : ""}` +
    `${area ? `출현 지역은 ${area} 입니다.` : ""}`
);

// 2.주어진 코드에 맞게, 배열과 튜플 타입을 사용해서 current, target, 그리고 items 변수에 명시적으로 타입을 지정해 주세요.
const current: [number, number] = [0, 0];
const target: [number, number] = [4, 5];

const dx = target[0] - current[0];
const dy = target[1] - current[1];
console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);

const items: string[] = [];
items.push("갑옷");
items.push("빨간 물약");
console.log(`${items.join(", ")}을/를 획득했다!`);

//3. 객체 타입: monster라는 변수를 객체 타입으로 변환
const monster: {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
} = {
  name: "코드잇 고블린",
  level: 22,
  skills: ["태권도", "특공무술"],
};

console.log(
  `${monster.name}의 레벨은 ${monster.level}이고,\n` +
    `${monster.hasGold ? "해치우면 골드를 얻는" : "해치워도 골드를 주지 않는"} 몬스터입니다.\n` +
    `${monster.skills.length > 0 ? `가진 능력은 ${monster.skills.join(", ")}입니다.` : ""}`
);

// 함수에 타입 선언: 함수들에 타입을 명시적으로 지정해 주세요. 이때 함수의 리턴 타입도 명시적으로 지정
function getDiff(fromPoint: [number, number], toPoint: [number, number]): [number, number] {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monsterB: {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
  move: (fromPoint: [number, number], toPoint: [number, number]) => void;
} = {
  name: "고블린",
  level: 22,
  skills: ["태권도", "특공무술"],
  move(fromPoint, toPoint) {
    let [dx, dy] = getDiff(fromPoint, toPoint);
    console.log(`오른쪽으로 ${dx} 위쪽으로 ${dy} 만큼 이동!`);
  },
};

const currentB: [number, number] = [0, 0];
const targetB: [number, number] = [4, 5];
monsterB.move(currentB, targetB);

// Enum: 게임 캐릭터의 직업을  Job이라는 이름의 타입스크립트 Enum 타입으로 만들라.
enum Job {
  Knight = "Knight",
  Archer = "Archer",
  Mage = "Mage",
  Priest = "Priest",
  Thief = "Thief",
}

console.log(Job);

// Interface: Monster 라는 이름으로 Interface 를 부탁드려요~!그리고 주로 데이터베이스에 저장할 항목들이니까 Entity 라는 Interface를 아래 표를 참고해서 만드신 다음에, Monster 에서 Entity를 상속 받아 주세요!
interface Entity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Monster extends Entity {
  name: string;
  level: number;
  hasGold?: boolean;
  skills: string[];
}

let monsterI: Monster = {
  id: "g001",
  name: "고블린",
  level: 22,
  skills: ["태권도", "특공무술"],
  createdAt: new Date(),
  updatedAt: new Date(),
};

console.log(
  `${monsterI.name}(${monsterI.id})의 레벨은 ${monsterI.level}이고,\n` +
    `${monsterI.hasGold ? "해치우면 골드를 얻는" : "해치워도 골드를 주지 않는"} 몬스터입니다.\n` +
    `${monsterI.skills.length > 0 ? `가진 능력은 ${monsterI.skills.join(", ")}입니다.` : ""}`
);

// Union: 무기냐 방어구냐
/**
 * Equipment라는 장비 타입을 상속받은 Weapon 무기 타입과 Armor 방어구 타입이 있습니다.
 * printEquipment() 함수에서 이 두 타입을 모두 허용하면서 각각의 경우에 이 장비는 공격력을 ___ 증가 시킵니다. 또는 이 장비는 방어력을 ___ 증가 시킵니다.라는 문장을 출력하려고 합니다.
 * 주어진 코드에서 타입 오류가 없도록 printEquiment() 함수를 수정해 보세요.
 */
interface Equipment {
  id: string;
  name: string;
  price: number;
}

interface Weapon extends Equipment {
  attack: number;
}

interface Armor extends Equipment {
  defence: number;
}

function printEquipment(equipment: Weapon | Armor) {
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

const item1: Weapon = {
  id: "w001",
  name: "전쟁 도끼",
  price: 100,
  attack: 15,
};

const item2: Armor = {
  id: "a001",
  name: "사슬 갑옷",
  price: 200,
  defence: 52,
};

printEquipment(item1);
printEquipment(item2);

// Intersection: 공격과 방어를 동시에
// printEquipmentIntersection() 함수의 타입과 item1Intersection 변수의 타입을 WeaponIntersection 타입과 ArmorIntersection 타입을 합친 타입으로
interface EquipmentIntersection {
  id: string;
  name: string;
  price: number;
}

interface WeaponIntersection extends EquipmentIntersection {
  attack: number;
}

interface ArmorIntersection extends EquipmentIntersection {
  defence: number;
}

function printEquipmentIntersection(equipment: WeaponIntersection & ArmorIntersection) {
  console.log(`이름: ${equipment.name}`);
  console.log(`이 장비는 공격력을 ${equipment.attack}, 방어력을 ${equipment.defence} 증가 시킵니다.`);
}

const item1Intersection: WeaponIntersection & ArmorIntersection = {
  id: "g001",
  name: "서리불꽃 글러브",
  price: 100,
  attack: 5,
  defence: 42,
};

printEquipmentIntersection(item1Intersection);
