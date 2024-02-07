"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return <button>{pending ? "Adding..." : "Add"}</button>;
}
