import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import InputField from "./component/InputField";
import { Todo } from "./component/modal";
import TodoList from "./component/TodoList";



const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodos = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAddTodos={handleAddTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
