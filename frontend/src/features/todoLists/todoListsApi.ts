import { TodoList } from "./todoListsSlice";
export const API_URL = 'localhost/:4000';

export async function fetchTodoLists() {
  const url = `${API_URL}/lists`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchTodoListById(id: string) {
  const url = `${API_URL}/lists/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function addList(name: string) {
  const url = `${API_URL}/lists`;
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function deleteList(id: string) {
  const url = `${API_URL}/lists/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}