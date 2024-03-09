import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, List, ListItem, ListIcon, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (!inputValue.trim()) {
      toast({
        title: "No content",
        description: "Can't add an empty todo.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <VStack p={8}>
      <Heading mb={6}>Todo App</Heading>
      <Flex>
        <Input placeholder="Add a new todo" value={inputValue} onChange={handleInputChange} />
        <Flex>
          <Button ml={2} colorScheme="blue" leftIcon={<FaPlus />} onClick={addTodo}>
            Add
          </Button>
          <Button ml={2} colorScheme="teal" onClick={() => navigate("/settings")}>
            Settings
          </Button>
        </Flex>
      </Flex>
      <Box mt={4} w="100%">
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
              <Box>{todo}</Box>
              <ListIcon as={FaTrash} color="red.500" w={5} h={5} _hover={{ cursor: "pointer" }} onClick={() => removeTodo(index)} />
            </ListItem>
          ))}
        </List>
      </Box>
    </VStack>
  );
};

export default Index;
