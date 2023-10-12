import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import User from "./components/user";
import { useState } from "react";
import Sigining from "./components/signing";

const mockUser = {
  name: "User",
};
const logedIn = false;

function App() {
  const [open, setOpen] = useState();
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <MailOutlineIcon />
          <Typography sx={{ ml: 1 }} variant="h6" flexGrow={1}>
            Chat
          </Typography>
          {logedIn ? (
            <User data={mockUser} />
          ) : (
            <Button color="inherit" onClick={handleOpen}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Sigining/>
      </Modal>
    </>
  );
}

export default App;
