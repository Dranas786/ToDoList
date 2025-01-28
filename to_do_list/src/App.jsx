import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newToDoList = todos.filter((todo, todoIndex) => {
      return todoIndex != index;
    });
    setTodos(newToDoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
