/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Box, Container, TextField, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef, useState } from "react";

const footerSize = 64;

function Chat(props) {
  const curRef = useRef(null);
  function Message(props) {
    return (
      <Box p={1} mb={1}>
        <Typography
          width="100%"
          height={48}
          bgcolor="#90caf9"
          boxShadow={1}
          autoFocus
          ref={curRef}
          variant="h5"
          p={1}
        >
          {props.text}
        </Typography>
      </Box>
    );
  }
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    const m = props.chatData.messages.map((item) => {
      return <Message text={item} />;
    });
    setMessages(m);
  }, []);

  useEffect(() => {
    curRef.current.scrollIntoView();
  }, [messages]);

  const containerStyles = {
    height: `calc(100vh - ${footerSize}px)`,
    padding: 1,
  };
  const chatBoxStyles = {
    height: "90%",
    border: "1px solid black",
    overflow: "auto",
    width: "100%",
  };
  const messageInputStyles = {
    position: "sticky",
    bottom: 3,
    mt: 1,
  };
  const footerStyles = { display: "flex", eight: footerSize };
  const handleSend = () => {
    if (message) setMessages([...messages, <Message text={message} />]);
  };

  return (
    <Container ref={curRef} sx={{ ...containerStyles }}>
      <Box sx={{ ...chatBoxStyles }}>{messages}</Box>
      <Box sx={{ ...footerStyles }}>
        <TextField
          sx={{ ...messageInputStyles }}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="messageInput"
          name="messageInput"
          autoFocus
        />
        <Button variant="contained" endIcon={<SendIcon />} onClick={handleSend}>
          Send
        </Button>
      </Box>
    </Container>
  );
}

export default Chat;
