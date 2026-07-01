const API_URL = "http://localhost:8081/api";

// EMPLOYEE APIs

export const getEmployees = async () => {

  const response = await fetch(
    `${API_URL}/employees`
  );

  if (!response.ok) {
    throw new Error(
      "Failed to fetch employees"
    );
  }

  return response.json();

};

export const addEmployee = async (
  employee: any
) => {

  const response = await fetch(
    `${API_URL}/employees`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        employee
      ),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to add employee"
    );
  }

  return response.json();

};

export const updateEmployee = async (
  id: number,
  employee: any
) => {

  const response = await fetch(
    `${API_URL}/employees/${id}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(
        employee
      ),
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to update employee"
    );
  }

  return response.json();

};

export const deleteEmployee = async (
  id: number
) => {

  const response = await fetch(
    `${API_URL}/employees/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error(
      await response.text()
    );
  }

  return response.text();

};