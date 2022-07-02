import React from "react";

// Standard interface and functions
export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

export const addMultipleTodos = (newTodos: Todo[]): Todo[] => [...newTodos];

export const useTodos = (initial: Todo[] = []) => {
  const [todos, setTodos] = React.useState<Todo[]>(initial);
  const [newTodo, setNewTodo] = React.useState<string>("");
  return {
    todos,
    setTodos,
    newTodo,
    setNewTodo,

    addTodo: React.useCallback(() => {
      setTodos((tl) => addTodo(tl, newTodo));
      setNewTodo("");
    }, [newTodo]),
    updateTodo: (id: number, text: string) => {
      setTodos((tl) => updateTodo(tl, id, text));
    },
    toggleTodo: (id: number) => {
      setTodos((tl) => toggleTodo(tl, id));
    },
    removeTodo: (id: number) => {
      setTodos((tl) => removeTodo(tl, id));
    },
    load: (inTodos: Todo[]) => {
      setTodos(addMultipleTodos(inTodos));
    },
  };
};
export type UseTodosType = ReturnType<typeof useTodos>;

const TodoContext = React.createContext<ReturnType<typeof useTodos> | null>(
  null
);

export const useTodoContext = () => React.useContext(TodoContext);

export const TodosProvider = ({ children }: { children: React.ReactNode }) => (
  <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
);
