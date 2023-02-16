import React from "react";
import { useTodos } from "../hooks/todos";
import Page from "../components/Page";

export default function Home() {
  const { data, isFetching } = useTodos();
  console.log(data);
  return (
    <Page>
      <div className="flex flex-col gap-4">✍</div>
    </Page>
  );
}
