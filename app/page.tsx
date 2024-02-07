import { db } from "@/db";
import { todos } from "@/db/schema";
import { asc } from "drizzle-orm";
import { addTodo } from "./action";
import { TodoComponent } from "./todo";
import SubmitButton from "./submit";
import AddForm from "./add-form";

export default async function Home() {
  const todosList = await db.query.todos.findMany({ orderBy: [asc(todos.id)] });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-2">
        {todosList.map((todo) => (
          <TodoComponent todo={todo} key={todo.id} />
        ))}
        <AddForm />
      </div>
    </main>
  );
}
