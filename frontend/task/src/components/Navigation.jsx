import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="justify-between flex items-center p-4 bg-zinc-900 text-white">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Taks App</h1>
      </Link>
      <Link to="/tasks-create">
        <button className="bg-indigo-500 px-3 py-2 rounded-lg cursor-pointer">
          Create Task
        </button>
      </Link>
    </div>
  );
}
