// Dependencies
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Constants
import { ROUTES } from '../constants';

// Pages
import { LoginPage, UsersPage } from '../pages';

// Create app routes
const AppRouter = () => (
  <Router>
    <Routes>
      <Route
        path={ROUTES.LOGIN}
        element={<LoginPage />}
      />
      <Route
        path={ROUTES.USERS}
        element={<UsersPage />}
      />
      <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
    </Routes>
  </Router>
);

// Export app routes
export default AppRouter;
