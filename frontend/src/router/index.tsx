// Dependencies
import { useContext, useEffect, useState } from 'react';
import { CircularProgress, Stack, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Constants
import { REMEMBER_KEY, ROUTES } from '../constants';

// Pages
import { LoginPage, UsersPage } from '../pages';

// Api
import api from '../apis';

// Context
import { AppContext } from '../context';

// Create app routes
const AppRouter = () => {
  // States
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Get context
  const { account, setAccount } = useContext(AppContext);

  // On mounted
  useEffect(() => {
    const isRemember = localStorage.getItem(REMEMBER_KEY);
    if (isRemember && JSON.parse(isRemember) === true) {
      api.auth
        .me()
        .then((res) => {
          setIsLoading(false);
          if (res.success) {
            setAccount({});
          }
        })
        .catch((err) => console.log(err));
    } else {
      setIsLoading(false);
    }
  }, []);

  return isLoading ? (
    <Stack sx={{ width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <CircularProgress />
      <Typography color="warning.main" variant="h5">Knowledge City</Typography>
    </Stack>
  ) : (
    <Router>
      <Routes>
        {account ? (
          <>
            <Route path={ROUTES.USERS} element={<UsersPage />} />
            <Route path="*" element={<Navigate to={ROUTES.USERS} />} />
          </>
        ) : (
          <>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

// Export app routes
export default AppRouter;
