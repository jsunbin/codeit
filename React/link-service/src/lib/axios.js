import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://learn.codeit.kr/api/link-service',
  withCredentials: true,
});

// refresh 토큰 활용, !지금은 refresh 토큰을 2번 받아옴..! 나중에 코드 개선하기!
// interceptor로 intance를 가로챈 다음,
instance.interceptors.response.use(res => res, async (error) => {
  const originalRequest = error.config;
  // 토큰 만료로 추정된다면,
  if (error.response?.status === 401 && !originalRequest._retry) {
    // 토큰을 재발급하고, 
    await instance.post('/auth/token/refresh', undefined, { _retry: true });
    originalRequest._retry = true;
    // 다시 재시도
    return instance(originalRequest);
  }
  return Promise.reject(error);
});

export default instance;
