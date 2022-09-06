import React from "react";
import CompletedTodo from "./CompletedTodo";
const CompletedTodoList = () => {
  return (
    <div>
      <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li className="cursor-pointer">Clear completed</li>
        </ul>
        <CompletedTodo />
      </div>
    </div>
  );
};

export default CompletedTodoList;
