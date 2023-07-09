export async function getFoods({ order = "createdAt", cursor = '', limit = 10 }) {
  const query = `order=${order}&cursor=${cursor}&limit=${limit}`
  const response = await fetch(`https://learn.codeit.kr/6516/foods?${query}`);

  if(!response.ok) {
    throw new Error('네트워크에 오류가 발생했습니다!');
  }
  
  const data = await response.json();
  return data;
}
