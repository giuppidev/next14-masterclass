"use client";

import { useFormState } from "react-dom";
import { FormState, addTodo } from "./action";
import SubmitButton from "./submit";

export default function AddForm() {
  const [state, formAction] = useFormState(addTodo, {
    text: "",
    errors: {
      text: undefined,
    },
  } as FormState);
  return (
    <form action={formAction}>
      <input name="text" />
      <SubmitButton />
      {state.errors.text ? (
        <span className="text-red-700">{state.errors.text}</span>
      ) : (
        ""
      )}
    </form>
  );
}
