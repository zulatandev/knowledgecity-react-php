import Http from './http';

export const login = (data) => {
  return Http.post('/auth/index.php', data);
};

export const logout = (data) => {
  return Http.post('/auth/index.php', data);
};

export const me = () => {
  return Http.get('/auth/index.php', { me: '' });
};
