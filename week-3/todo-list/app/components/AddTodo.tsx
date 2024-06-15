import React, { useState } from "react";

interface AddTodoProps {
  addTodo: (title: string, content: string, due: Date) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [due, setDue] = useState("");

  const handleSubmit = () => {
    if (title && due) {
      addTodo(title, content, new Date(due));
      setTitle("");
      setContent("");
      setDue("");
    }
  };

  return (
    <div className="flex flex-col w-5/6 p-6 gap-2 mb-4">
      <label htmlFor="title" className="font-bold mb-2">
        Title
      </label>
      <input
        id="title"
        type="text"
        placeholder="Enter a title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-lg p-2"
      />

      <label htmlFor="content" className="font-bold mb-2">
        Content
      </label>
      <input
        id="content"
        type="text"
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border rounded-lg p-2"
      />

      <label htmlFor="due" className="font-bold mb-2">
        Due Date
      </label>
      <input
        id="due"
        placeholder="Select a due date"
        type="date"
        value={due}
        onChange={(e) => setDue(e.target.value)}
        className="border rounded-lg p-2"
      />

      <button
        onClick={handleSubmit}
        className="bg-violet-900 text-white py-2 px-7 rounded-lg text-sm hover:bg-pink violet-800 hover:opacity-90"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;
