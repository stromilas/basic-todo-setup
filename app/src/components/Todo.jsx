import React from "react";

export default function Todo({ todo }) {
  const date = new Date(todo.createdAt).toLocaleDateString("en-UK");
  return (
    <div className="flex justify-between align-center min-w-[500px] bg-slate-100 rounded-md p-4">
      <div>
        <h6 className="text-md">{todo.title}</h6>
      </div>
      <div className="text-sm text-opacity-75">{date}</div>
    </div>
  );
}
