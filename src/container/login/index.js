import { useState } from "react";
import { Formik, Form } from "formik";
import { Button, Input } from "../../components";
import * as Yup from "yup";
import { userLogin } from "../../store/actions/user";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const LoginPage = () => {
  const theme = createTheme();
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter valid email address")
      .required("Email cannot be empty"),
    password: Yup.string().trim().required("Password cannot be empty."),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    await userLogin(values);
    setLoading(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors, setFieldValue }) => (
            <Form>
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box>
                  <Input
                    name="email"
                    type={"email"}
                    labelName={"Email Address"}
                    error={touched.email && errors.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  />
                  <Input
                    name="password"
                    type={"password"}
                    labelName={"Password"}
                    error={touched.password && errors.password}
                    onChange={(e) => setFieldValue("password", e.target.value)}
                  />
                  <Button
                    buttonLabel={"Login"}
                    loading={loading}
                    buttonType={0}
                    type="submit"
                  />
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
