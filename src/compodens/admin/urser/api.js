const API_URL = "http://localhost:3000/posts";

export async function fetchData() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

export async function deleteData(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to delete data");
  }
}

export async function updateData(updatedData) {
  const response = await fetch(`${API_URL}/${updatedData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
  if (!response.ok) {
    throw new Error("Failed to update data");
  }
  return response.json();
}

export async function createData(newData) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Failed to create data: ${response.statusText} - ${errorText}`
    );
  }
  return response.json();
}
