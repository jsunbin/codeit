export async function getFoods({ order = "createdAt", cursor = '', limit = 10 }) {
  const query = `order=${order}&cursor=${cursor}&limit=${limit}`
  const response = await fetch(`https://learn.codeit.kr/6516/foods?${query}`);
  const data = await response.json();
  return data;
}
