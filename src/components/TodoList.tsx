import * as React from "react";
import { Button, Input, Flex, Checkbox } from "@chakra-ui/react";
import {
  useTodoContext,
} from "../store";

function TodoList() {
  const {todos, toggleTodo, updateTodo, removeTodo } = {...useTodoContext()};
  return (
    <>
      {todos?.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox onClick={() => toggleTodo ? toggleTodo(todo?.id) : null} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              updateTodo ? updateTodo(todo.id, event.target.value) : null
            }
          />
          <Button onClick={() => removeTodo ?  removeTodo(todo.id) : undefined}>
            Delete
          </Button>
        </Flex>
      ))}
    </>
  );
}

export default TodoList;
