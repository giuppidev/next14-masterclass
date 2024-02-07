"use client";

import { Todo } from "@/db/schema";
import { deleteTodo, toggleTodo } from "./action";

export const TodoComponent = ({ todo }: { todo: Todo }) => {
  const deleteTodoWrapper = deleteTodo.bind(null, todo.id);
  const toggleTodoWrapper = toggleTodo.bind(null, todo.id);

  return (
    <div className="flex gap-2 items-center">
      <div>
        {todo.text} {todo.completed ? "✅" : "⛔️"}
      </div>
      <form action={toggleTodoWrapper}>
        <button className="bg-blue-700 text-white p-1">toggle</button>
      </form>
      <form action={deleteTodoWrapper}>
        <button className="bg-red-700 text-white p-1">delete</button>
      </form>
    </div>
  );
};
