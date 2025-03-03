import axios from "axios";

const TaskApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/",
});

export const getAllTasks = () => TaskApi.get("tasks/");
export const getTask = (id) => TaskApi.get(`tasks/${id}/`);
export const createTask = (task) => TaskApi.post("tasks/", task);
export const deleteTask = (id) => TaskApi.delete(`tasks/${id}/`);
export const updateTask = (id, task) => TaskApi.put(`tasks/${id}/`, task);
