"use strict";
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
let itemName = "코드잇 블랙 후드";
let itemPrice = 129000;
let membersOnly = true;
let owner = undefined;
let seller = null;
// 배열
const cart = [];
cart.push("c001");
cart.push("c002");
cart.push(3); // Error!
const carts = [["c001", "c002"], ["c003"]];
let mySize = [167, 28];
mySize = [167, 28, 255];
mySize = [255];
mySize = [];
// 튜플
let mySizeT = [167, 28, "M"];
mySizeT = [167, 28, 255]; // Error!
mySizeT = [255]; // Error!
mySizeT = []; // Error!
mySizeT = [167, "28inch"]; // Error!
// 객체
let productB = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 129000,
    membersOnly: true,
    sizes: ["M", "L", "XL"],
};
if (productB.membersOnly) {
    console.log("회원 전용 상품");
}
else {
    console.log("일반 상품");
}
// 프로퍼티 이름에 변수를 활용하고 싶을 때
// JavaScript
let field = "field name";
let obj = {
    [field]: "field value",
};
// TypeScript
let stock = {
    c001: 3,
    c002: 0,
    c003: 1,
    c004: "codeit", // Type Error!
};
// any
// 무분별한 사용X!
const productC = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 129000,
    sizes: ["M", "L", "XL"],
}; // => X
const parsedProductA = JSON.parse('{"name": "코드잇 토트백", "price": 12000}');
const parsedProductB = JSON.parse('{"name": "코드잇 토트백", "price": 12000}');
// 함수 타입
const codeitmall = {
    stock: {
        c001: 3,
        c002: 1,
    },
    cart: [],
    addToCart,
    addManyToCart,
};
function addToCart(id, quantity = 1) {
    if (stock[id] < quantity) {
        return false;
    }
    stock[id] -= quantity;
    for (let i = 0; i < quantity; i++) {
        cart.push(id);
    }
    return true;
}
function addManyToCart(...ids) {
    for (const id of ids) {
        addToCart(id);
    }
}
// Enum
var Size;
(function (Size) {
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
let productD = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 129000,
    sizes: [Size.M, Size.L],
};
console.log(Size.S);
console.log(Size.M);
console.log(Size.L);
console.log(Size.XL);
function findProduct(size) {
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
var SizeI;
(function (SizeI) {
    SizeI["S"] = "S";
    SizeI["M"] = "M";
    SizeI["L"] = "L";
    SizeI["XL"] = "XL";
})(SizeI || (SizeI = {}));
const productInterface1 = {
    id: "c001",
    name: "코드잇 블랙 후드 집업",
    price: 129000,
    membersOnly: true,
    sizes: [SizeI.M, SizeI.L],
};
const productInterface2 = {
    id: "d001",
    name: "코드잇 텀블러",
    price: 25000,
};
const printProduct = (product) => {
    console.log(`${product.name}의 가격은 ${product.price}원입니다.`);
};
printProduct(productInterface1);
printProduct(productInterface2);
