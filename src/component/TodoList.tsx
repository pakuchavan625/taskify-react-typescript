import React from "react";
import { Todo } from "./modal";
import "../styles/todos.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((items) => {
        return (
          <SingleTodo
            items={items}
            key={items.id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
