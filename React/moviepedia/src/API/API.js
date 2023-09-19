const BASE_URL ='https://learn.codeit.kr/api'

export async function getReviews({ order="createdAt", offset=0, limit=6 }) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`
  const response = await fetch(`${BASE_URL}/film-reviews?${query}`);

  if(!response.ok) {
    throw new Error('네트워크에 오류가 발생했습니다!')
  }

  const data = await response.json();
  return data;
}

export async function createReviews(formData) {
  const response = await fetch(`${BASE_URL}/film-reviews`, {
    method: 'POST',
    body: formData
  });

  if(!response.ok) {
    throw new Error('리뷰 생성에 실패했습니다')
  }

  const data = await response.json();
  return data;
}

export async function updateReview(id,formData) {
  const response = await fetch(`${BASE_URL}/film-reviews/${id}`, {
    method: 'PUT',
    body: formData
  });

  if(!response.ok) {
    throw new Error('리뷰 수정에 실패했습니다')
  }

  const data = await response.json();
  return data;
}

