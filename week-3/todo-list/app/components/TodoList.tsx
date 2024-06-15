"use client";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { fetchTodo, createTodo, updateTodo, deleteTodo } from "../services/api";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  content: string;
  isCompleted: boolean;
  due: Date;
}
// const api = axios.create({
//   baseURL: "http://localhost:7071/to-do",
// });

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodo();
      console.log("Users to be displayed", data);
      setTodos(data);
    };
    getTodos();
  }, [todos]);
  const handleCreate = async (title: string, content: string, due: Date) => {
    const todo = await createTodo({
      title,
      content,
      due,
      id: 0,
      isCompleted: false,
    });
    setTodos([...todos, todo]);
  };

  const handleUpdate = async (id: number, updates: Partial<Todo>) => {
    try {
      const updatedTodo = await updateTodo(id, updates);
      setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  };
  const handleDelete = async (id: number) => {
    try {
      console.log("handle delete", id);
      // await api(`/${id}`);
      const response = await deleteTodo(id);
      if (response.status === 200) {
        fetchTodo();
      }
      console.log("Delete response", response);
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  };
  // const handleDelete = async (id: number) => {
  //   await deleteTodo(id);
  //   setTodos(todos.filter((t) => t.id !== id));
  // };

  const toggleComplete = async (id: number) => {
    const todo = todos.find((t) => t.id === id);
    if (todo) {
      handleUpdate(id, { isCompleted: !todo.isCompleted });
    }
  };

  return (
    <div className="flex flex-col w-full gap-4 items-center justify-center p-2 ">
      <p className="font-bold text-2xl">Make a schedule today!</p>
      <AddTodo addTodo={handleCreate} />
      {todos && todos.length > 0
        ? todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteItem={handleDelete}
              updateItem={(id, newTitle, newContent, newDue) =>
                handleUpdate(id, {
                  title: newTitle,
                  content: newContent,
                  due: newDue,
                })
              }
            />
          ))
        : null}
    </div>
  );
};

export default TodoList;
