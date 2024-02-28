const URL = "/";

export const getTasks = async () => {
  const response = await fetch(`${URL}tasks`);
  const data = await response.json();

  return data.data;
}

export const addTask = async (task) => {
  const response = await fetch(`${URL}tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();

  return data.data;
}

export const deleteTask = async (id) => {
  const response = await fetch(`${URL}tasks/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();

  return data.data;
}