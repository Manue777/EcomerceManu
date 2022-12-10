import { Link } from "react-router-dom";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";

const Register =()=>{

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
              Register
            </Typography>
            <Box my={3}>
              <TextField
                name="name"
                label="Full name"
                fullWidth
                required
              />
            </Box>
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
                name="password"
                type="password"
                label="Password"
                fullWidth
                required
              />
            </Box>
            <Box my={3}>
              <Button type="submit" fullWidth variant="outlined">
                Register
              </Button>
            </Box>
            <Box>
              <Button
                component={Link}
                to="/login"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Ya tengo cuenta
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      );
    };
    
export default Register;