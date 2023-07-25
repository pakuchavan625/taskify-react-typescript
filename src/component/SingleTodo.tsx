import React, { useState } from "react";
import { Todo } from "./modal";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDownloadDone } from "react-icons/md";
import "../styles/singleTodo.css";

interface Props {
  items: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ items, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(items.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, isDone: !item.isDone } : item;
      })
    );
  };

  const handleDelet = (id: number) => {
    setTodos(todos.filter((item) => item.id != id));
  };

  const handleEditSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => {
        return item.id === id ? { ...item, todo: editTodo } : item;
      })
    );
    setEdit(false);
  };

  return (
    <form
      className="single-todo"
      onSubmit={(e) => handleEditSubmit(e, items.id)}
    >
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todo-heading"
        />
      ) : items.isDone ? (
        <s className="todo-heading">{items.todo}</s>
      ) : (
        <span className="todo-heading">{items.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !items.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelet(items.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(items.id)}>
          <MdDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
