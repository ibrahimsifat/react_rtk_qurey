import React from "react";
import { useGetTodoQuery } from "../features/api/apiSlice";
import CompletedTodo from "./CompletedTodo";
const CompletedTodoList = () => {
  const { data: todos, isLoading, isError } = useGetTodoQuery();
  // decide what to render
  let content = null;

  if (isLoading) {
    content = <div>Loading.....</div>;
  }

  if (!isLoading && isError) {
    content = <p className="text-red-500"> There was an error</p>;
  }

  if (!isLoading && !isError && todos?.length === 0) {
    content = <p className="text-red-500"> "No Todos found!" </p>;
  }

  if (!isLoading && !isError && todos?.length > 0) {
    const filterCompleted = todos?.filter((todo) => todo.completed);
    content = filterCompleted?.map((todo) => (
      <CompletedTodo key={todo.id} todo={todo} />
    ));
    //
  }
  return (
    <div>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li className="cursor-pointer">Clear completed</li>
        </ul>
        {content}
      </div>
    </div>
  );
};

export default CompletedTodoList;
