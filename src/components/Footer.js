export default function Footer() {
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>2 tasks left</p>
      <ul className="flex space-x-3 items-center text-xs">
        {/* <li className="cursor-pointer font-bold">All</li>
        <li>|</li>
        <li className="cursor-pointer">Incomplete</li>
        <li>|</li>
        <li className="cursor-pointer">Complete</li>
        <li></li>
        <li></li> */}
        <li className="h-4 w-4 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500"></li>
        <li className="h-4 w-4 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer"></li>
        <li className="h-4 w-4 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer"></li>
      </ul>
    </div>
  );
}
