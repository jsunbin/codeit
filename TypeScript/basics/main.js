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