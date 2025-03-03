import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 cursor-pointer"
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <h1 className="font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <hr />
    </div>
  );
}
