export async function getReviews() {
  const response = await fetch('https://learn.codeit.kr/api/film-reviews');
  const data = await response.json();
  return data;
}
