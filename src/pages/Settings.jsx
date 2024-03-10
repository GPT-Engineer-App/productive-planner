import React from "react";
import { Button, Flex, VStack } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

function Settings() {
  let navigate = useNavigate();

  return (
    <Flex>
      <Sidebar />
      <VStack p={8} ml="200px" w="full">
        <Button onClick={() => navigate("/")}>Back to Home</Button>
        <h1>Settings</h1>
      </VStack>
    </Flex>
  );
}

export default Settings;
