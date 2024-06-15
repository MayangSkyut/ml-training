"use client";
import React, { useState } from "react";
import { Todo } from "../type/types";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteItem: (id: number) => void;
  updateItem: (
    id: number,
    newTitle: string,
    newContent: string,
    newDue: Date
  ) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  deleteItem,
  updateItem,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newContent, setNewContent] = useState(todo.content);
  const [newDue, setNewDue] = useState(getFormattedDate(todo.due));

  function getFormattedDate(date: Date | undefined): string {
    return date instanceof Date ? date.toLocaleString().split("T")[0] : "";
  }

  const handleUpdate = () => {
    updateItem(todo.id, newTitle, newContent, new Date(newDue));
    setIsEditing(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewContent(e.target.value);
  };

  const handleDueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDue(e.target.value);
  };

  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const handleDelete = () => {
    deleteItem(todo.id);
  };

  const formattedDueDate = todo.due.toLocaleString();

  return (
    <div>
      <div className=" bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg shadow-lg p-6 w-full ">
        {isEditing ? (
          // Edit mode
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={newDue.split("T")[0]}
              onChange={(e) => setNewDue(e.target.value + "T00:00:00")}
              className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          // View mode
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">{todo.title}</h3>
              <span
                className={`px-2 py-1 rounded-full ${
                  todo.isCompleted ? "bg-green-500 text-white" : "bg-gray-200"
                } ml-4`}
              >
                {todo.isCompleted ? "Completed" : "Pending"}
              </span>
            </div>
            <p className="text-white">{todo.content}</p>
            <p className="text-gray-500 text-sm">
              {formattedDueDate.split("T")[0]}
            </p>
            <div className="flex  gap-2">
              <button
                onClick={handleToggleComplete}
                className={`px-4 py-2 rounded-md ${
                  todo.isCompleted
                    ? "bg-gray-400 text-white hover:bg-gray-500"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                {todo.isCompleted ? "Undo" : "Complete"}
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default TodoItem;
