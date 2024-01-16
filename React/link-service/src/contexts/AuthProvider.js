import { createContext, useState, useEffect, useContext} from 'react';
import axios from '../lib/axios';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
});

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  async function getMe() {
    const res = await axios.get('/users/me');
    const nextUser = res.data;
    setUser(nextUser);
  }

  async function login({ email, password }) {
    await axios.post('/auth/login', {
      email,
      password,
    });

    // 로그인 후, 유저 데이터를 가져오고 state 값을 변경해 줄 것
    await getMe()
  }

  async function logout() {
    /** @TODO 로그아웃 구현하기 */
  }

  async function updateMe(formData) {
    const res = await axios.patch('/users/me', formData);
    const nextUser = res.data;
    setUser(nextUser);
  }

  useEffect(() => {
    getMe();
  }, [])
  

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      updateMe,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('빈드시 AuthProvider 안에서 사용해야 합니다.');
  }

  return context;
}