import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  createTask,
  deleteTask,
  updateTask,
  getTask,
} from "../../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
    } else {
      await createTask(data);
      toast.success("Tarea creada corectamente", {
        position: "bottom-right",
        duration: 5000,
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    if (params.id) {
      const fetchTask = async () => {
        const task = await getTask(params.id);
        setValue("title", task.data.title);
        setValue("description", task.data.description);
      };
      fetchTask();
    }
  });

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </div>

        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            required
            className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
            {...register("description", { required: true })}
          ></textarea>
          {errors.description && <span>This field is required</span>}
        </div>

        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-full mt-3"
            onClick={async () => {
              const acceepted = window.confirm(
                "are you sure you want to delete this task?"
              );
              if (acceepted) {
                await deleteTask(params.id);
                navigate("/tasks");
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
