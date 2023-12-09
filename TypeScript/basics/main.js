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
