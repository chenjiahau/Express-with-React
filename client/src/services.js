const URL = "/";

export const getTasks = async () => {
  const response = await fetch(`${URL}tasks`);
  const data = await response.json();

  return data.data;
}