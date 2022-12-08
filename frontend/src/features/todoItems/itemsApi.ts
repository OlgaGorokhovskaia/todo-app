export const API_URL = 'localhost/:4000';

export async function fetchItems(listId: string) {
  const url = `${API_URL}/lists/${listId}/items`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchItemById(listId: string, id: string) {
  const url = `${API_URL}/lists/${listId}/items/${id}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function addItems(listId: string, name: string) {
  const url = `${API_URL}/lists/${listId}/items`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export async function deleteItemsById(listId: string,id: string) {
  const url = `${API_URL}/lists/${listId}/items/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}