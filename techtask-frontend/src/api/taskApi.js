import axios from "axios";

const BASE_URL = "http://localhost:8080/api/tasks";

export const getTasks = () => axios.get(BASE_URL);

export const getTask = (id) => axios.get(`${BASE_URL}/${id}`);

export const createTask = (task) => axios.post(BASE_URL, task);

export const updateTaskStatus = (id, status) =>
  axios.patch(`${BASE_URL}/${id}?status=${status}`);

export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`);
