export async function getFoods(order = "createdAt") {
  const query = `order=${order}`
  const response = await fetch(`https://learn.codeit.kr/6516/foods?${query}`);
  const data = await response.json();
  return data;
}
