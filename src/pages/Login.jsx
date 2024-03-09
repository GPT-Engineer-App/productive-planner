import React, { useState } from "react";
import { Box, Button, Input, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "miwink" && password === "password") {
      setLoggedIn(true);
      navigate("/");
    } else {
      toast({
        title: "Invalid Credentials",
        description: "The username or password you entered is incorrect.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} align="stretch" m="auto" mt={10} maxWidth="lg">
      <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
    </VStack>
  );
};

export default Login;
