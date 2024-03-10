import React from "react";
import { Box, Link, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box position="fixed" left={0} p={5} w="200px" h="100vh" bg="blue.500">
      <Stack spacing={3} color="white">
        <Link as={RouterLink} to="/">
          Home
        </Link>
        <Link as={RouterLink} to="/settings">
          Settings
        </Link>
      </Stack>
    </Box>
  );
};

export default Sidebar;
