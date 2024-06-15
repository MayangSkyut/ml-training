import axios from "axios";
import { Todo } from "../type/types";

const api = axios.create({
  baseURL: "http://localhost:7071/to-do",
});
const url = process.env.BASE_URL;
export const fetchTodo = async () => {
  try {
    // const response = await api.get(`${url}`);
    const response = await api.get("http://localhost:7071/to-do");
    console.log("Users:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const createTodo = async (todo: Todo) => {
  try {
    const response = await api.post("http://localhost:7071/to-do", todo);
    console.log("Response Create", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error; // Rethrow the error to propagate it up the call stack
  }
};
export const updateTodo = async (
  id: number,
  updates: Partial<{
    title: string;
    description: string;
    due: Date;
    completed: boolean;
  }>
) => {
  const response = await api.patch(`http://localhost:7071/to-do/${id}`, updates);
  return response.data;
};
export const deleteTodo = async (id: number) => {
  //await api.delete(`http://localhost:7071/to-do/${id}`);

  const response = axios.delete(`http://localhost:7071/to-do/${id}`);
  console.log("Deleted", response);
  return response;
};

export const searchTodo = async (title: string) => {
  const response = await api.get(`/to-do/${title}`);
  return response.data;
};

export default api;
