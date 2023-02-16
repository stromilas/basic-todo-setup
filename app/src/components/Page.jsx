import React from "react";

export default function Page({ children }) {
  return (
    <div className="flex flex-col items-center w-full min-h-full">
      <div className="max-w-[900px] w-full">{children}</div>
    </div>
  );
}
