import {
  Box,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  width: "40%",
};
function Sigining() {
  const [onSignIn, setOnSignIn] = useState(true);

  const setSignIn = () => {
    setOnSignIn(true);
  };
  const setSignUp = () => {
    setOnSignIn(false);
  };

  return (
    <>
      <Box sx={{ ...style }}>
        <Box display="flex" justifyContent="space-evenly">
          <Button sx={{ fontSize: "1.15rem" }} onClick={setSignIn}>
            Sign In
          </Button>
          <Button sx={{ fontSize: "1.15rem" }} onClick={setSignUp}>
            Sign Up
          </Button>
        </Box>
        {onSignIn ? (
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        ) : (
            <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
        <TextField
              margin="normal"
              required
              fullWidth
              name="repeatedPassword"
              label="Repeat Password"
              type="repeatedPassword"
              id="repeatedPassword"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Box>
        )}
      </Box>
    </>
  );
}
export default Sigining;
