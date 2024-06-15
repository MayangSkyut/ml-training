import React from "react";
import TodoList from "../components/TodoList";

const TodoHome: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-20 bg-white shadow-2xl ring-8 ring-violet-400 scale-90 rounded-xl">
      <h1 className="text-6xl font-bold">Todo List</h1>
      <TodoList />
    </div>
  );
};

export default TodoHome;
