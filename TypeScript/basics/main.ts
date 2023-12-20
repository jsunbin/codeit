// 리터럴 타입 ===============
// 값을 자체를 타입으로 하는 타입, const로 선언된 변수가 보통 이에 해당
let productName1 = "코드잇 블랙 후드";
const productName2 = "코드잇 텀블러";

let small = 95;
const large = 100;

function printSize(size: number) {
  console.log(`${size} 사이즈입니다.`);
}

printSize(small);
printSize(large);

// 타입 별칭 ===============
// interface처럼 여러군데서 사용 가능
// 타입 별칭은 모든 타입에 사용 가능 객체타입은 되도록이면 interface 사용을 권장
type Cart = string[];

type CartResultCallback = (result: boolean) => void;

interface Product {
  id: string;
  name: string;
}

const cart: Cart = ["c001", "c001", "c002"];

interface User {
  username: string;
  email: string;
  cart: Cart;
}

const user: User = {
  username: "codeit",
  email: "typescript@codeit.kr",
  cart,
};

// 실습: 반복되는 코드 줄이기 ===============
// [number, number]라는 튜플의 반복을 줄이고 재사용성이 높은 코드로 바꾸자. 타입 별칭을 이용해서 Point라는 타입으로 만들어 보세요.
type Point = [number, number];

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
  move: (fromPoint: Point, toPoint: Point) => void;
}

function getDiff(fromPoint: Point, toPoint: Point) {
  let dx = toPoint[0] - fromPoint[0];
  let dy = toPoint[1] - fromPoint[1];
  return [dx, dy];
}

const monster: Monster = {
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

const current: Point = [0, 0];
const target: Point = [4, 5];
monster.move(current, target);
