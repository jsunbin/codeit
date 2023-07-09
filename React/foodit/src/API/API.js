export async function getFoods({ order = "createdAt", cursor = '', limit = 10, search = '' }) {
  const query = `order=${order}&cursor=${cursor}&limit=${limit}&search=${search}`;
  const response = await fetch(`https://learn.codeit.kr/api/foods?${query}`);

  if(!response.ok) {
    throw new Error('네트워크에 오류가 발생했습니다!');
  }

  const data = await response.json();
  return data;
}
