// Dependencies
import { FC } from 'react';
import { Button, List, ListItem, ListItemAvatar, ListItemText, Pagination, Stack, Typography } from '@mui/material';
import { CheckCircle, Logout } from '@mui/icons-material';

const users = [
  {
    id: '123',
    name: 'test',
  },
  {
    id: '123',
    name: 'test',
  },
  {
    id: '123',
    name: 'test',
  },
  {
    id: '123',
    name: 'test',
  },
  {
    id: '123',
    name: 'test',
  },
];

// Export users page
export const UsersPage: FC = () => {
  // Return users page
  return (
    <Stack height="100vh">
      <Stack flex={1} px={200} py={100} alignItems="center" spacing={20}>
        <Typography variant="h3">User List</Typography>
        <List sx={{ width: '100%' }}>
          {users.map(({ id, name }, index) => (
            <ListItem key={index}>
              <ListItemAvatar>
                <CheckCircle color="success" />
              </ListItemAvatar>
              <ListItemText primary={id} secondary={name} />
              <ListItemText primary="..." secondary="Default group" />
            </ListItem>
          ))}
        </List>
        <Pagination count={5} />
      </Stack>
      <Button variant="text" color="inherit" startIcon={<Logout />} sx={{ bgcolor: 'rgba(232, 232, 232)' }}>
        Log Out
      </Button>
    </Stack>
  );
};
