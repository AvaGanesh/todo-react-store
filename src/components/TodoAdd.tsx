import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useTodoContext } from "../store";

function TodoAdd() {
  const { newTodo, setNewTodo, addTodo } = { ...useTodoContext() };
  const handleAddTodo = () => {
    if (addTodo) {
      addTodo();
    }
  };
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="4">
      <Input
        mx={6}
        placeholder="New todo"
        value={newTodo}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo ? setNewTodo(evt.target?.value) : undefined
        }
      />
      <Button ml={3} onClick={handleAddTodo}>
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
