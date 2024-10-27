const API_URL = "http://localhost:3000/products";

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

// Hàm mới để xóa nhiều sản phẩm cùng lúc
export async function deleteMultipleData(ids) {
  const deletePromises = ids.map((id) =>
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
  );
  const responses = await Promise.all(deletePromises);

  // Kiểm tra nếu có bất kỳ yêu cầu nào không thành công
  responses.forEach((response) => {
    if (!response.ok) {
      throw new Error(
        `Failed to delete product with id ${response.url.split("/").pop()}`
      );
    }
  });
}

function computeNewProductStatus(date) {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  return new Date(date) > oneYearAgo;
}

export async function updateData(updatedData) {
  updatedData.newProduct = computeNewProductStatus(updatedData.date);

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
  newData.newProduct = computeNewProductStatus(newData.date);

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
