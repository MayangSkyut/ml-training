export interface Todo {
  id: number;
  title: string;
  content: string;
  isCompleted: boolean;
  due: Date;
}

export interface TodoItemProps {
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

export interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  deleteItem: (id: number) => void;
  updateItem: (
    id: number,
    newTitle: string,
    newContent: string,
    newDue: Date
  ) => void;
}
