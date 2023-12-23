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
// Union 타입 ===============
// 두가지 이상의 타입을 고려하고자 할 때 사용
var ClothingSize;
(function (ClothingSize) {
    ClothingSize["S"] = "S";
    ClothingSize["M"] = "M";
    ClothingSize["L"] = "L";
    ClothingSize["XL"] = "XL";
})(ClothingSize || (ClothingSize = {}));
function printSizes(product) {
    const availableSizes = product.sizes.join(", ");
    console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`);
    if ("color" in product) {
        console.log(`색상: ${product.color}`);
    }
    if ("handmade" in product) {
        console.log(product.handmade ? "이 상품은 장인이 직접 만듭니다." : "이 상품은 공장에서 만들어졌습니다.");
    }
}
const product1 = {
    id: "c001",
    name: "코드잇 블랙 후드 집업",
    price: 129000,
    membersOnly: true,
    sizes: [ClothingSize.M, ClothingSize.L],
    color: "black",
};
const product2 = {
    id: "s001",
    name: "코드잇 스니커즈",
    price: 69000,
    membersOnly: false,
    sizes: [220, 230, 240, 260, 280],
    handmade: false,
};
printSizes(product1);
printSizes(product2);
const product = {
    id: "c001",
    name: "코드잇 블랙 후드티",
    price: 129000,
};
const user = {
    id: "user0001",
    username: "codeit",
    email: "typescript@codeit.kr",
    createdAt: new Date(),
    updatedAt: new Date(),
};
const review = {
    id: "review001",
    userId: user.id,
    productId: product.id,
    content: "아주 좋음",
    createdAt: new Date(),
    updatedAt: new Date(),
};
const productTableKeys = ["name", "price", "salePrice", "membersOnly"];
const product = {
    id: "c001",
    name: "코드잇 블랙 후드 집업",
    price: 129000,
    salePrice: 98000,
    membersOnly: true,
};
for (let key of productTableKeys) {
    console.log(`${key} | ${product[key]}`);
}
let product2;
console.log(typeof product);
