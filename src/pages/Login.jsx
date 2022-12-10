import { Link } from "react-router-dom";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";

const Login =()=>{

    return (
        <Box
          display="flex"
          height="100vh"
          alignItems="center"
          justifyContent="center"
        >
          <Paper
            sx={{
              width: 300,
            }}
          >
            <Box p={3} component="form" >
              <Typography textAlign="center" variant="h4">
                Login
              </Typography>
              <Box my={3}>
                <TextField
                  name="email"
                 type="email"
                  label="E-mail"
                  fullWidth
                  required
                />
              </Box>
              <Box my={3}>
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  fullWidth
                  required
                />
              </Box>
              <Box my={3}>
                <Button type="submit" fullWidth variant="outlined">
                  Login
                </Button>
              </Box>
              <Box>
                <Button
                  component={Link}
                  to="/Register"
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  Crear cuenta
                </Button>
              </Box>
            </Box>
          </Paper>
        </Box>
      );
    };
    
export default Login;