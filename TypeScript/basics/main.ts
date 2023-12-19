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
