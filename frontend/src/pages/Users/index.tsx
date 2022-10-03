// Dependencies
import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { Button, List, ListItem, ListItemAvatar, ListItemText, Pagination, Stack, Typography } from '@mui/material';
import { CheckCircle, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Api
import api from '../../apis';

// Global constants
import { ROUTES, TOKEN_KEY } from '../../constants';

// Context
import { AppContext } from '../../context';

// Constants
const limit = 5;

// Export users page
export const UsersPage: FC = () => {
  // States
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [students, setStudents] = useState([]);

  // Get navigate from hook
  const navigate = useNavigate();

  // Get context
  const { setAccount } = useContext(AppContext);

  // Page change handler
  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    setPage(page);
  };

  // Log out handler
  const handleLogout = () => {
    const formData = new FormData();
    formData.set('delete', '');

    api.auth
      .logout(formData)
      .then((res) => {
        if (res.success) {
          setAccount(null);
          localStorage.removeItem(TOKEN_KEY);

          navigate(ROUTES.LOGIN);
        }
      })
      .catch((err) => console.log(err));
  };

  // On page changed
  useEffect(() => {
    api.student
      .read({
        start: (page - 1) * limit,
        limit,
      })
      .then((res) => {
        if (res.success) {
          setStudents(res.data.students);
          setTotal(Math.ceil(res.data.pagination.total / limit));
        }
      })
      .catch((err) => console.log(err));
  }, [page]);

  // Return users page
  return (
    <Stack height="100vh">
      <Stack flex={1} px={200} py={100} alignItems="center" spacing={20}>
        <Typography variant="h3">User List</Typography>
        <List sx={{ width: '100%' }}>
          {students.map(({ id, name }, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <CheckCircle color="success" />
              </ListItemAvatar>
              <ListItemText primary={id} secondary={name} />
              <ListItemText primary="..." secondary="Default group" />
            </ListItem>
          ))}
        </List>
        <Pagination page={page} count={total} onChange={handlePageChange} />
      </Stack>
      <Button
        variant="text"
        color="inherit"
        startIcon={<Logout />}
        sx={{ bgcolor: 'rgba(232, 232, 232)' }}
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </Stack>
  );
};
