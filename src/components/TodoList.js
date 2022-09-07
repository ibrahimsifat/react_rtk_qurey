import { useGetTodoQuery } from "../features/api/apiSlice";
import Todo from "./Todo";

export default function TodoList() {
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
    const filterCompleted = todos?.filter((todo) => !todo.completed);
    content = filterCompleted?.map((todo) => (
      <Todo key={todo.id} todo={todo} />
    ));
    //
  }

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {content}
    </div>
  );
}
