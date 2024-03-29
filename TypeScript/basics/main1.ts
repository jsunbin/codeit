console.log("Hello World!");

let size = 100;
size = 105;

let product = {
  id: "c001",
  name: "라이트 윈드 브레이커",
  price: 129000,
  sizes: ["M", "L", "XL"],
};

// 타입 오류 이해하기
// ...

const newProduct = {
  id: "c002",
  name: "다크 윈드 브레이커",
  price: 139000,
  sizes: [90, 95, 100, 105, 100],
};

// ...

product = newProduct;

// 기본형
let itemName: string = "코드잇 블랙 후드";
let itemPrice: number = 129000;
let membersOnly: boolean = true;
let owner: undefined = undefined;
let seller: null = null;

// 배열
const cart: string[] = [];
cart.push("c001");
cart.push("c002");
cart.push(3); // Error!

const carts: string[][] = [["c001", "c002"], ["c003"]];

let mySize: number[] = [167, 28];
mySize = [167, 28, 255];
mySize = [255];
mySize = [];

// 튜플
let mySizeT: [number, number, string] = [167, 28, "M"];
mySizeT = [167, 28, 255]; // Error!
mySizeT = [255]; // Error!
mySizeT = []; // Error!
mySizeT = [167, "28inch"]; // Error!

// 객체
let productB: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: string[];
} = {
  id: "c001",
  name: "코드잇 블랙 후디",
  price: 129000,
  membersOnly: true,
  sizes: ["M", "L", "XL"],
};

if (productB.membersOnly) {
  console.log("회원 전용 상품");
} else {
  console.log("일반 상품");
}

// 프로퍼티 이름에 변수를 활용하고 싶을 때
// JavaScript
let field = "field name";
let obj = {
  [field]: "field value",
};

// TypeScript
let stock: {
  [id: string]: number;
} = {
  c001: 3,
  c002: 0,
  c003: 1,
  c004: "codeit", // Type Error!
};

// any
// 무분별한 사용X!
const productC: any = {
  id: "c001",
  name: "코드잇 블랙 후디",
  price: 129000,
  sizes: ["M", "L", "XL"],
}; // => X

const parsedProductA: {
  name: string;
  price: number;
} = JSON.parse('{"name": "코드잇 토트백", "price": 12000}');

const parsedProductB = JSON.parse('{"name": "코드잇 토트백", "price": 12000}') as {
  name: string;
  price: number;
};

// 함수 타입
const codeitmall: {
  stock: { [id: string]: number };
  cart: string[];
  addToCart: (id: string, quantity?: number) => boolean;
  addManyToCart: (...ids: string[]) => void;
} = {
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCart,
  addManyToCart,
};

function addToCart(id: string, quantity: number = 1): boolean {
  if (stock[id] < quantity) {
    return false;
  }

  stock[id] -= quantity;
  for (let i = 0; i < quantity; i++) {
    cart.push(id);
  }

  return true;
}

function addManyToCart(...ids: string[]) {
  for (const id of ids) {
    addToCart(id);
  }
}

// Enum
enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

let productD: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: Size[];
} = {
  id: "c001",
  name: "코드잇 블랙 후디",
  price: 129000,
  sizes: [Size.M, Size.L],
};

console.log(Size.S);
console.log(Size.M);
console.log(Size.L);
console.log(Size.XL);

function findProduct(size?: Size) {
  if (!size) {
    console.log("전체 사이즈로 검색");
    return;
  }

  console.log("특정 사이즈로 검색");
}

findProduct(Size.M);
findProduct(Size.S);
findProduct();

// Interface
enum SizeI {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: SizeI[];
}

// extends로 Product 타입을 상속한 후, size
interface ClothingProduct extends Product {
  sizes: SizeI[];
}
const productInterface1: ClothingProduct = {
  id: "c001",
  name: "코드잇 블랙 후드 집업",
  price: 129000,
  membersOnly: true,
  sizes: [SizeI.M, SizeI.L],
};

const productInterface2: Product = {
  id: "d001",
  name: "코드잇 텀블러",
  price: 25000,
};

// interface로 함수 정의하기
interface PrintProductFunction {
  (product: Product): void;
}
const printProduct: PrintProductFunction = (product) => {
  console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};

printProduct(productInterface1);
printProduct(productInterface2);
