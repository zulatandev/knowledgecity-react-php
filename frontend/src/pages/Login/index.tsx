// Dependencies
import { FC } from 'react';
import { Box, Button, Checkbox, FormControlLabel, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { KeyboardArrowRight, Lock, Person } from '@mui/icons-material';

// Validation schema
export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email('Invalid Field!')
    .required('Required Field!'),
  password: Yup.string().required('Required Field!')
});

// Export login page
export const LoginPage: FC = () => {
  // Submit handler
  const handleSubmit = () => {

  };

  // Return login page
  return (
    <>
      <Stack
        sx={{
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Formik initialValues={{ username: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Stack
              spacing={20}
              component={Form}
              onSubmit={handleSubmit}
              sx={{
                width: '100%',
                maxWidth: 360
              }}
            >
              <Box>
                <Typography color="warning.main" variant="h3">Knowledge City</Typography>
                <Typography variant="h5">Learning Solutions</Typography>
              </Box>
              <TextField
                name="username"
                placeholder="Username"
                value={values.username}
                error={Boolean(errors.username && touched.username)}
                helperText={Boolean(errors.username && touched.username) && errors.username}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Person /></InputAdornment>
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
                  startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>
                }}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
              <Button endIcon={<KeyboardArrowRight />}>Log In</Button>
            </Stack>
          )}
        </Formik>
      </Stack>
    </>
  );
};
