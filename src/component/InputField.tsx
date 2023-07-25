import React from "react";
import "../styles/inputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAddTodos }: Props) => {
  return (
    <form className="inputform" onSubmit={handleAddTodos}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input-box"
      />
      <button className="submit-go" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
