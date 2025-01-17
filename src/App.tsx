import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { TodosProvider } from "./store";
import { Heading } from "@chakra-ui/react";

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <TodosProvider>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <Heading>Todo List</Heading>
          <TopBar />
          <TodoAdd />
          <TodoList />
        </Box>
      </TodosProvider>
    </ChakraProvider>
  );
}
