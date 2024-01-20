import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../lib/axios';

const AuthContext = createContext({
  user: null,
  isPending: true,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
});

export function AuthProvider({ children }) {
  const [values, setValues] = useState({
    user: null,
    isPending: true,
  });

  async function getMe() {
    setValues((prevValues) => ({
      ...prevValues,
      isPending: true,
    }));
    let nextUser;
    try {
      const res = await axios.get('/users/me');
      nextUser = res.data;
    } catch (error) {
      // // 401에러 처리 -> axios에서 Interceptor로 처리
      // if (error.response?.status === 401) {
      //   await axios.post('/auth/token/refresh');
      //   const res = await axios.get('/users/me');
      //   nextUser = res.data;
      // }
    } finally {
      setValues((prevValues) => ({
        ...prevValues,
        user: nextUser,
        isPending: false,
      }));
    }
  }

  async function login({ email, password }) {
    await axios.post('/auth/login', {
      email,
      password,
    });
    // 로그인 후, 유저 데이터를 가져오고 state 값을 변경해 줄 것

    await getMe();
  }

  async function logout() {
    /** @TODO 로그아웃 구현하기 */
  }

  async function updateMe(formData) {
    const res = await axios.patch('/users/me', formData);
    const nextUser = res.data;
    setValues((prevValues) => ({
      ...prevValues,
      user: nextUser,
    }));
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <AuthContext.Provider value={{
      user: values.user,
      isPending: values.isPending,
      login,
      logout,
      updateMe,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(required) {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error('반드시 AuthProvider 안에서 사용해야 합니다.');
  }

  useEffect(() => {
    if (required && !context.user && !context.isPending) {
      navigate('/login');
    }
  }, [context.user, context.isPending, navigate, required]);

  return context;
}
