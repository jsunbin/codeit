import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../lib/axios';

const AuthContext = createContext({
  user: null,
  avatar: null,
  isPending: true,
  login: () => {},
  logout: () => {},
  updateMe: () => {},
  updateAvatar: () => {},
});

export function AuthProvider({ children }) {
  const [values, setValues] = useState({
    user: null,
    avatar: null,
    isPending: true,
  })

  async function getMe() {
    setValues((prevValues) => ({
      ...prevValues,
      isPending: true,
    }))

    let user;
    try {
      const res = await axios.get('/users/me');
      user = res.data;
    } catch (error) {
    } finally {
      setValues((prevValues) => ({
        ...prevValues,
        user: user,
        isPending: false,
      }))
    }
  }

  async function getMyAvatar() {
    setValues((prevValues) => ({
      ...prevValues,
      isPending: true,
    }));
    let avatar;
    try {
      const res = await axios.get('/users/me/avatar');
      avatar = res.data;
    } catch (error) {
    } finally {
      setValues((prevValues) => ({
        ...prevValues,
        avatar: avatar,
        isPending: false,
      }))
    }
  }

  async function login({ email, password }) {
    await axios.post('/auth/login', { email, password })
    await getMe();
    await getMyAvatar();
  }

  async function logout() {
    await axios.delete('/auth/logout');
    setValues((prevValues) => ({
      ...prevValues,
      user: null,
    }))
  }

  async function updateMe({ name, email }) {
    const res = await axios.patch('/users/me', { name, email });
    const nextUser = res.data;
    setValues((prevValues) => ({
      ...prevValues,
      user: nextUser,
    }))
  }

  async function updateAvatar(avatar) {
    const res = await axios.patch('/users/me/avatar', avatar);
    const nextAvatar = res.data;
    setValues((prevValues) => ({
      ...prevValues,
      avatar: nextAvatar
    }))
  }

  useEffect(() => {
    getMe();
    getMyAvatar();
  }, [])
  
  return (
    <AuthContext.Provider value={{
      user: values.user,
      avatar: values.avatar,
      isPending: values.isPending,
      login,
      logout,
      updateMe,
      updateAvatar,
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
  }, [context.user, context.isPending, navigate, required])
  

  return context;
}