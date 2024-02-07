"use server";

import { db } from "@/db";
import { todos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export type FormState = {
  text: string;
  errors: {
    text: string | undefined;
  };
};

export const addTodo = async (prevState: FormState, data: FormData) => {
  const formText = data.get("text") as string;

  if (!formText) {
    return {
      text: formText,
      errors: {
        text: "Text cannot be null",
      },
    };
  }

  await db.insert(todos).values({ text: formText });
  await sleep(2000);
  revalidatePath("/");
  return {
    text: "",
    errors: {
      text: undefined,
    },
  };
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const deleteTodo = async (todoId: number) => {
  await db.delete(todos).where(eq(todos.id, todoId));
  revalidatePath("/");
};

export const toggleTodo = async (todoId: number) => {
  const todo = await db.query.todos.findFirst({ where: eq(todos.id, todoId) });
  await db
    .update(todos)
    .set({ completed: !todo?.completed })
    .where(eq(todos.id, todoId));
  revalidatePath("/");
};
