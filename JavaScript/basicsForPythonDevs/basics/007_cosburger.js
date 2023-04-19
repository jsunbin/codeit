/* 
https://www.codeit.kr/learn/5454

주문 합계를 계산해 주는 함수
burger, hotdog, drink는 각 아이템 개수를 뜻합니다. 
*/

function orderPrice(burger, hotdog, drink) {
  let burgerPrice = 6000;
  let hotdogPrice = 5000;
  let drinkPrice = 3000;
  
  totalPrice = burger * burgerPrice + hotdog * hotdogPrice + drink * drinkPrice;
  
  return totalPrice
}
// 테스트 코드
console.log(orderPrice(1, 1, 2));
console.log(orderPrice(0, 2, 2));