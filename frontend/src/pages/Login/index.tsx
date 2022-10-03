// Dependencies
import { FC, SyntheticEvent, useContext, useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { KeyboardArrowRight, Lock, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Apis
import api from '../../apis';

// Global constants
import { REMEMBER_KEY, ROUTES, TOKEN_KEY } from '../../constants';
import { AppContext } from '../../context';

// Validation schema
export const validationSchema = Yup.object().shape({
  username: Yup.string().email('Invalid Field!').required('Required Field!'),
  password: Yup.string().required('Required Field!'),
});

// Interfaces
interface ILoginData {
  username: string;
  password: string;
}

// Export login page
export const LoginPage: FC = () => {
  // States
  const [isRememberMe, setIsRememberMe] = useState(false);

  // Get navigate from hook
  const navigate = useNavigate();

  // Get context
  const { setAccount } = useContext(AppContext);

  // Remember handler
  const handleRemember = (_: SyntheticEvent<Element, Event>, checked: boolean) => {
    setIsRememberMe(checked);
  };

  // Submit handler
  const handleSubmit = (values: ILoginData) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.set(key, value);
    });
    api.auth
      .login(formData)
      .then((res) => {
        if (res.success) {
          const token = res.data.token;
          setAccount({});
          localStorage.setItem(TOKEN_KEY, token);
          localStorage.setItem(REMEMBER_KEY, JSON.stringify(isRememberMe));

          navigate(ROUTES.USERS);
        }
      })
      .catch((err) => console.log(err));
  };

  // Return login page
  return (
    <>
      <Stack
        sx={{
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Stack
              component={Form}
              onSubmit={handleSubmit}
              sx={{
                width: '100%',
                maxWidth: 480,
              }}
            >
              <Box mb={30}>
                <Typography color="warning.main" variant="h2">
                  Knowledge City
                </Typography>
                <Typography variant="h4">Learning Solutions</Typography>
              </Box>
              <Box mb={40}>
                <Typography variant="h6">Welcome to the Learning Management System</Typography>
                <Typography>Please log in to continue</Typography>
              </Box>
              <Stack spacing={20} mb={30}>
                <TextField
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  error={Boolean(errors.username && touched.username)}
                  helperText={Boolean(errors.username && touched.username) && errors.username}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <TextField
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  error={Boolean(errors.password && touched.password)}
                  helperText={Boolean(errors.password && touched.password) && errors.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" checked={isRememberMe} onChange={handleRemember} />
              </Stack>
              <Button type="submit" endIcon={<KeyboardArrowRight />} sx={{ borderRadius: 21 }}>
                Log In
              </Button>
            </Stack>
          )}
        </Formik>
      </Stack>
    </>
  );
};
