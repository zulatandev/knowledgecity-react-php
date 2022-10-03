import Http from './http';

export const read = (data?: { start: number; limit: number }) => {
  return Http.get('/students/index.php', data);
};
