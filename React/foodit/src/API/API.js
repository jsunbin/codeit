const BASE_URL = 'https://learn.codeit.kr/api'

export async function getFoods({ order = "createdAt", cursor = '', limit = 10, search = '' }) {
  const query = `order=${order}&cursor=${cursor}&limit=${limit}&search=${search}`;
  const response = await fetch(`${BASE_URL}/foods?${query}`);

  if(!response.ok) {
    throw new Error('네트워크에 오류가 발생했습니다!');
  }

  const data = await response.json();
  return data;
}

export async function createFood(formData) {
  const response = await fetch(`${BASE_URL}/foods`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('데이터를 생성하는데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

