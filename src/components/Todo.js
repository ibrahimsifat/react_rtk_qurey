import { useState } from "react";
import cancelImage from "../assets/images/cancel.png";
import {
  useAddTodoColorMutation,
  useDeleteTodoMutation,
} from "../features/api/apiSlice";
import TodoEditModal from "./TodoEditModal";

export default function Todo({ todo }) {
  const { id, text, completed, color } = todo;
  const [modalIsOpen, setIsOpen] = useState(false);

  const [deleteTodo, { data }] = useDeleteTodoMutation();
  const [addTodoColor, { data: responseTodo }] = useAddTodoColorMutation();
  const handleTodoDelete = () => {
    console.log(id);
    deleteTodo(id);
  };
  const handleColorStatus = (selectedColor) => {
    console.log(selectedColor);
    addTodoColor({
      id,
      data: { color: selectedColor },
    });
  };

  return (
    <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
      <div className="rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 border-green-500 focus-within:border-green-500 group duration-300">
        <input type="checkbox" className="opacity-0 absolute rounded-full" />
        <svg
          className="hidden fill-current w-3 h-3 text-green-500 pointer-events-none group-hover:block "
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </div>
      {/* <form className="select-none flex-1">
        {" "}
        <input
          // onChange={(e) => setInput(e.target.value)}
          className="w-full border-2 border-gray-200 rounded focus:outline-none focus:ring focus:ring-violet-200"
          type="text"
        />
      </form> */}
      <div className="select-none flex-1 ">{text}</div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-green-500 hover:bg-green-500 ${
          color === "green" && "bg-green-500"
        }`}
        onClick={() => handleColorStatus("green")}
      ></div>
      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-yellow-500 hover:bg-yellow-500 ${
          color === "yellow" && "bg-yellow-500"
        }`}
        onClick={() => handleColorStatus("yellow")}
      ></div>

      <div
        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
          color === "red" && "bg-red-500"
        }`}
        onClick={() => handleColorStatus("red")}
      ></div>
      <TodoEditModal />

      <img
        onClick={handleTodoDelete}
        src={cancelImage}
        className="flex-shrink-0 w-5 h-5 ml-2 cursor-pointer hover:scale-110"
        alt="Cancel"
      />
    </div>
  );
}
